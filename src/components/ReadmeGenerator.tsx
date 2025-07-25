import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Copy, Download, Github, Eye, Edit3, Save, RotateCcw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { ProfileSection } from './readme-sections/ProfileSection';
import { WorkSection } from './readme-sections/WorkSection';
import { SkillsSection } from './readme-sections/SkillsSection';
import { StatsSection } from './readme-sections/StatsSection';
import { ContactSection } from './readme-sections/ContactSection';
import { ProjectsSection } from './readme-sections/ProjectsSection';
import { ReadmePreview } from './ReadmePreview';
import { ExportMenu } from './ExportMenu';
import { generateMarkdown } from '@/utils/exportUtils';

export interface ReadmeData {
  name: string;
  title: string;
  bio: string;
  currentWork: string;
  currentWorkLink?: string;
  lookingToCollaborate: string;
  collaborateLink?: string;
  askMeAbout: string;
  currentlyLearning?: string;
  askAbout?: string;
  funFact: string;
  blogPlatform?: string;
  resumeLink?: string;
  pronouns: string;
  email: string;
  githubUsername: string;
  skills: string[];
  socialLinks: { platform: string; username: string }[];
  projects: { name: string; description: string; link: string; technologies: string[] }[];
  showGithubStats: boolean;
  showTopLanguages: boolean;
  showStreakStats: boolean;
  showGithubTrophies?: boolean;
  showVisitorCount?: boolean;
}

export const ReadmeGenerator = () => {
  const { toast } = useToast();
  const [activeView, setActiveView] = useState<'edit' | 'preview'>('edit');
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  
  const [readmeData, setReadmeData] = useState<ReadmeData>({
    name: '',
    title: '',
    bio: '',
    currentWork: '',
    lookingToCollaborate: '',
    askMeAbout: '',
    funFact: '',
    pronouns: '',
    email: '',
    githubUsername: '',
    skills: [],
    socialLinks: [],
    projects: [],
    showGithubStats: false,
    showTopLanguages: false,
    showStreakStats: false
  });

  // Auto-save functionality
  useEffect(() => {
    const saveData = () => {
      localStorage.setItem('readme-generator-data', JSON.stringify(readmeData));
      setLastSaved(new Date());
    };

    const interval = setInterval(saveData, 3000); // Save every 3 seconds

    return () => clearInterval(interval);
  }, [readmeData]);

  // Load saved data on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('readme-generator-data');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setReadmeData(parsedData);
        setLastSaved(new Date());
      } catch (error) {
        console.error('Failed to load saved data:', error);
      }
    }
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateMarkdown(readmeData));
    toast({
      title: "Copied to clipboard!",
      description: "README content has been copied to your clipboard.",
    });
  };

  const resetForm = () => {
    const initialData: ReadmeData = {
      name: '',
      title: '',
      bio: '',
      currentWork: '',
      lookingToCollaborate: '',
      askMeAbout: '',
      funFact: '',
      pronouns: '',
      email: '',
      githubUsername: '',
      skills: [],
      socialLinks: [],
      projects: [],
      showGithubStats: false,
      showTopLanguages: false,
      showStreakStats: false
    };
    
    setReadmeData(initialData);
    localStorage.removeItem('readme-generator-data');
    setLastSaved(null);
    
    toast({
      title: "Form Reset!",
      description: "All data has been cleared successfully.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Github className="h-8 w-8 text-github-green" />
              <div>
                <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  README Generator
                </h1>
                <p className="text-sm text-muted-foreground">
                  Create beautiful GitHub profile READMEs with live preview
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              {lastSaved && (
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Save className="h-3 w-3" />
                  <span>Last saved: {lastSaved.toLocaleTimeString()}</span>
                </div>
              )}
              <Button
                variant={activeView === 'edit' ? 'default' : 'secondary'}
                size="sm"
                onClick={() => setActiveView('edit')}
                className="gap-2"
              >
                <Edit3 className="h-4 w-4" />
                Edit
              </Button>
              <Button
                variant={activeView === 'preview' ? 'default' : 'secondary'}
                size="sm"
                onClick={() => setActiveView('preview')}
                className="gap-2"
              >
                <Eye className="h-4 w-4" />
                Preview
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-2 gap-6 h-[calc(100vh-140px)]">
          {/* Editor Panel */}
          <Card className={`p-6 overflow-hidden ${activeView === 'preview' ? 'hidden lg:block' : ''}`}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Editor</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={copyToClipboard} className="gap-2">
                  <Copy className="h-4 w-4" />
                  Copy
                </Button>
                <Button variant="outline" size="sm" onClick={resetForm} className="gap-2">
                  <RotateCcw className="h-4 w-4" />
                  Reset
                </Button>
                <ExportMenu data={readmeData} />
              </div>
            </div>

            <Tabs defaultValue="basic" className="h-full">
              <TabsList className="grid w-full grid-cols-6 mb-4">
                <TabsTrigger value="basic">Basic</TabsTrigger>
                <TabsTrigger value="work">Work</TabsTrigger>
                <TabsTrigger value="social">Social</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="stats">Stats</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
              </TabsList>

              <div className="h-[calc(100%-120px)] overflow-y-auto">
                <TabsContent value="basic" className="mt-0">
                  <ProfileSection data={readmeData} onChange={setReadmeData} />
                </TabsContent>
                
                <TabsContent value="work" className="mt-0">
                  <WorkSection data={readmeData} onChange={setReadmeData} />
                </TabsContent>
                
                <TabsContent value="social" className="mt-0">
                  <ContactSection data={readmeData} onChange={setReadmeData} />
                </TabsContent>
                
                <TabsContent value="skills" className="mt-0">
                  <SkillsSection data={readmeData} onChange={setReadmeData} />
                </TabsContent>
                
                <TabsContent value="stats" className="mt-0">
                  <StatsSection data={readmeData} onChange={setReadmeData} />
                </TabsContent>
                
                <TabsContent value="projects" className="mt-0">
                  <ProjectsSection data={readmeData} onChange={setReadmeData} />
                </TabsContent>
              </div>
            </Tabs>
          </Card>

          {/* Preview Panel */}
          <Card className={`p-6 overflow-hidden ${activeView === 'edit' ? 'hidden lg:block' : ''}`}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Live Preview</h2>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Eye className="h-4 w-4" />
                Real-time
              </div>
            </div>
            
            <div className="h-[calc(100%-80px)] overflow-y-auto">
              <ReadmePreview data={readmeData} />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
