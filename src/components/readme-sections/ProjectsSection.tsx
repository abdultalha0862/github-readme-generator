import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus, X, ExternalLink, Github } from 'lucide-react';
import { ReadmeData } from '../ReadmeGenerator';

interface ProjectsSectionProps {
  data: ReadmeData;
  onChange: (data: ReadmeData) => void;
}

export const ProjectsSection = ({ data, onChange }: ProjectsSectionProps) => {
  const [isAddingProject, setIsAddingProject] = useState(false);
  const [newProject, setNewProject] = useState({
    name: '',
    description: '',
    link: '',
    technologies: [] as string[]
  });
  const [newTech, setNewTech] = useState('');

  const addProject = () => {
    if (newProject.name && newProject.description) {
      onChange({
        ...data,
        projects: [...data.projects, newProject]
      });
      
      setNewProject({
        name: '',
        description: '',
        link: '',
        technologies: []
      });
      setIsAddingProject(false);
    }
  };

  const removeProject = (index: number) => {
    onChange({
      ...data,
      projects: data.projects.filter((_, i) => i !== index)
    });
  };

  const addTechnology = () => {
    if (newTech && !newProject.technologies.includes(newTech)) {
      setNewProject({
        ...newProject,
        technologies: [...newProject.technologies, newTech]
      });
      setNewTech('');
    }
  };

  const removeTechnology = (tech: string) => {
    setNewProject({
      ...newProject,
      technologies: newProject.technologies.filter(t => t !== tech)
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Label className="text-base font-medium">Featured Projects</Label>
          <p className="text-sm text-muted-foreground">
            Showcase your best work and projects
          </p>
        </div>
        <Button 
          onClick={() => setIsAddingProject(true)} 
          size="sm" 
          className="gap-1"
          disabled={isAddingProject}
        >
          <Plus className="h-4 w-4" />
          Add Project
        </Button>
      </div>

      {/* Existing projects */}
      <div className="space-y-4">
        {data.projects.map((project, index) => (
          <Card key={index} className="p-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-medium">{project.name}</h3>
                  {project.link && (
                    <a 
                      href={project.link.startsWith('http') ? project.link : `https://${project.link}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
                
                <p className="text-sm text-muted-foreground mb-3">
                  {project.description}
                </p>
                
                {project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map(tech => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeProject(index)}
                className="text-destructive hover:text-destructive"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Add new project form */}
      {isAddingProject && (
        <Card className="p-4">
          <h3 className="font-medium mb-4">Add New Project</h3>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="projectName">Project Name</Label>
              <Input
                id="projectName"
                value={newProject.name}
                onChange={(e) => setNewProject({...newProject, name: e.target.value})}
                placeholder="My Awesome Project"
              />
            </div>

            <div>
              <Label htmlFor="projectDescription">Description</Label>
              <Textarea
                id="projectDescription"
                value={newProject.description}
                onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                placeholder="Brief description of what this project does..."
                rows={3}
              />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <Label htmlFor="projectLink">Project Link (Optional)</Label>
                {newProject.link && (
                  <a 
                    href={newProject.link.startsWith('http') ? newProject.link : `https://${newProject.link}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
              <Input
                id="projectLink"
                value={newProject.link}
                onChange={(e) => setNewProject({...newProject, link: e.target.value})}
                placeholder="https://github.com/username/project"
              />
            </div>

            <div>
              <Label>Technologies Used</Label>
              <div className="flex flex-wrap gap-2 mb-2">
                {newProject.technologies.map(tech => (
                  <Badge key={tech} variant="secondary" className="gap-1">
                    {tech}
                    <button onClick={() => removeTechnology(tech)}>
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-2">
                <Input
                  value={newTech}
                  onChange={(e) => setNewTech(e.target.value)}
                  placeholder="Add technology"
                  onKeyPress={(e) => e.key === 'Enter' && addTechnology()}
                />
                <Button onClick={addTechnology} size="sm" disabled={!newTech}>
                  Add
                </Button>
              </div>
            </div>

            <div className="flex gap-2 pt-4">
              <Button onClick={addProject} disabled={!newProject.name || !newProject.description}>
                Add Project
              </Button>
              <Button 
                variant="outline" 
                onClick={() => {
                  setIsAddingProject(false);
                  setNewProject({ name: '', description: '', link: '', technologies: [] });
                  setNewTech('');
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};
