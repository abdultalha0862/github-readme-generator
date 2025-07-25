import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ReadmeData } from '../ReadmeGenerator';
import { ExternalLink } from 'lucide-react';

interface WorkSectionProps {
  data: ReadmeData;
  onChange: (data: ReadmeData) => void;
}

export const WorkSection = ({ data, onChange }: WorkSectionProps) => {
  const updateField = (field: keyof ReadmeData, value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="currentWork">🔭 Currently working on</Label>
          <Input
            id="currentWork"
            value={data.currentWork}
            onChange={(e) => updateField('currentWork', e.target.value)}
            placeholder="Project name"
          />
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <Label htmlFor="currentWorkLink">Project link (optional)</Label>
            {data.currentWorkLink && (
              <a 
                href={data.currentWorkLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
          <Input
            id="currentWorkLink"
            value={data.currentWorkLink || ''}
            onChange={(e) => updateField('currentWorkLink', e.target.value)}
            placeholder="https://github.com/username/project"
          />
        </div>

        <div>
          <Label htmlFor="lookingToCollaborate">👯 Looking to collaborate on</Label>
          <Input
            id="lookingToCollaborate"
            value={data.lookingToCollaborate}
            onChange={(e) => updateField('lookingToCollaborate', e.target.value)}
            placeholder="Project name"
          />
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <Label htmlFor="collaborateLink">Project link (optional)</Label>
            {data.collaborateLink && (
              <a 
                href={data.collaborateLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
          <Input
            id="collaborateLink"
            value={data.collaborateLink || ''}
            onChange={(e) => updateField('collaborateLink', e.target.value)}
            placeholder="https://github.com/username/project"
          />
        </div>

        <div>
          <Label htmlFor="askMeAbout">🤝 Looking for help with</Label>
          <Input
            id="askMeAbout"
            value={data.askMeAbout}
            onChange={(e) => updateField('askMeAbout', e.target.value)}
            placeholder="What do you need help with?"
          />
        </div>

        <div>
          <Label htmlFor="currentlyLearning">🌱 Currently learning</Label>
          <Input
            id="currentlyLearning"
            value={data.currentlyLearning || ''}
            onChange={(e) => updateField('currentlyLearning', e.target.value)}
            placeholder="What are you learning right now?"
          />
        </div>

        <div>
          <Label htmlFor="askAbout">💬 Ask me about</Label>
          <Input
            id="askAbout"
            value={data.askAbout || ''}
            onChange={(e) => updateField('askAbout', e.target.value)}
            placeholder="Add a topic"
          />
        </div>

        <div>
          <Label htmlFor="funFact">⚡ Fun fact</Label>
          <Input
            id="funFact"
            value={data.funFact}
            onChange={(e) => updateField('funFact', e.target.value)}
            placeholder="Share something interesting about yourself!"
          />
        </div>

        <div>
          <Label htmlFor="blogPlatform">📝 I write articles on</Label>
          <Input
            id="blogPlatform"
            value={data.blogPlatform || ''}
            onChange={(e) => updateField('blogPlatform', e.target.value)}
            placeholder="https://your-blog-platform.com"
          />
        </div>

        <div>
          <Label htmlFor="resumeLink">📄 My resume link</Label>
          <Input
            id="resumeLink"
            value={data.resumeLink || ''}
            onChange={(e) => updateField('resumeLink', e.target.value)}
            placeholder="https://your-resume-link.com"
          />
        </div>
      </div>
    </div>
  );
};
