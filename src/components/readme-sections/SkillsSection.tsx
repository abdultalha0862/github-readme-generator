import { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { X } from 'lucide-react';
import { ReadmeData } from '../ReadmeGenerator';

interface SkillsSectionProps {
  data: ReadmeData;
  onChange: (data: ReadmeData) => void;
}

const skillCategories = {
  programming: ['javascript', 'typescript', 'python', 'java', 'csharp', 'cpp', 'c', 'go', 'rust', 'php', 'ruby', 'swift', 'kotlin', 'r', 'sql'],
  frontend: ['react', 'vue', 'angular', 'svelte', 'html5', 'css3', 'sass', 'tailwindcss', 'bootstrap', 'nextjs', 'nuxtjs'],
  backend: ['nodejs', 'express', 'nestjs', 'django', 'flask', 'spring', 'dotnet', 'rails', 'laravel', 'fastapi'],
  mobile: ['reactnative', 'flutter', 'ionic', 'xamarin', 'swift', 'kotlin', 'dart'],
  databases: ['mongodb', 'postgresql', 'mysql', 'redis', 'sqlite', 'firebase', 'supabase', 'prisma'],
  devops: [
    'docker', 'kubernetes', 'aws', 'gcp', 'azure', 'jenkins', 'githubactions', 'terraform', 'ansible',
    'circleci', 'travisci', 'githubcodespaces', 'argocd', 'flux', 'helm', 'prometheus', 'grafana',
    'elasticsearch', 'logstash', 'kibana', 'splunk', 'datadog', 'chef', 'puppet', 'saltstack',
    'vagrant', 'sonarqube', 'newrelic', 'sentry'
  ],
  testing: ['jest', 'cypress', 'selenium', 'mocha', 'jasmine', 'pytest', 'junit'],
  aiml: ['tensorflow', 'pytorch', 'opencv', 'pandas', 'numpy', 'scikit_learn', 'keras', 'huggingface'],
  design: ['figma', 'sketch', 'adobexd', 'photoshop', 'illustrator', 'canva'],
  version: ['git', 'github', 'gitlab', 'bitbucket', 'subversion']
};

export const SkillsSection = ({ data, onChange }: SkillsSectionProps) => {
  const [activeCategory, setActiveCategory] = useState('programming');

  // Helper function to convert skill names to title case
  const toTitleCase = (skill: string): string => {
    const titleCaseMappings: { [key: string]: string } = {
      'javascript': 'JavaScript',
      'typescript': 'TypeScript',
      'python': 'Python',
      'java': 'Java',
      'csharp': 'C#',
      'cpp': 'C++',
      'c': 'C',
      'go': 'Go',
      'rust': 'Rust',
      'php': 'PHP',
      'ruby': 'Ruby',
      'swift': 'Swift',
      'kotlin': 'Kotlin',
      'r': 'R',
      'sql': 'SQL',
      'react': 'React',
      'vue': 'Vue.js',
      'angular': 'Angular',
      'svelte': 'Svelte',
      'html5': 'HTML5',
      'css3': 'CSS3',
      'sass': 'Sass',
      'tailwindcss': 'Tailwind CSS',
      'bootstrap': 'Bootstrap',
      'nextjs': 'Next.js',
      'nuxtjs': 'Nuxt.js',
      'nodejs': 'Node.js',
      'express': 'Express',
      'nestjs': 'NestJS',
      'django': 'Django',
      'flask': 'Flask',
      'spring': 'Spring',
      'dotnet': '.NET',
      'rails': 'Rails',
      'laravel': 'Laravel',
      'fastapi': 'FastAPI',
      'reactnative': 'React Native',
      'flutter': 'Flutter',
      'ionic': 'Ionic',
      'xamarin': 'Xamarin',
      'dart': 'Dart',
      'mongodb': 'MongoDB',
      'postgresql': 'PostgreSQL',
      'mysql': 'MySQL',
      'redis': 'Redis',
      'sqlite': 'SQLite',
      'firebase': 'Firebase',
      'supabase': 'Supabase',
      'prisma': 'Prisma',
      'docker': 'Docker',
      'kubernetes': 'Kubernetes',
      'aws': 'AWS',
      'gcp': 'Google Cloud',
      'azure': 'Azure',
      'jenkins': 'Jenkins',
      'githubactions': 'GitHub Actions',
      'terraform': 'Terraform',
      'ansible': 'Ansible',
      'circleci': 'CircleCI',
      'travisci': 'Travis CI',
      'githubcodespaces': 'GitHub Codespaces',
      'argocd': 'ArgoCD',
      'flux': 'Flux',
      'helm': 'Helm',
      'prometheus': 'Prometheus',
      'grafana': 'Grafana',
      'elasticsearch': 'Elasticsearch',
      'logstash': 'Logstash',
      'kibana': 'Kibana',
      'splunk': 'Splunk',
      'datadog': 'Datadog',
      'chef': 'Chef',
      'puppet': 'Puppet',
      'saltstack': 'SaltStack',
      'vagrant': 'Vagrant',
      'sonarqube': 'SonarQube',
      'newrelic': 'New Relic',
      'sentry': 'Sentry',
      'jest': 'Jest',
      'cypress': 'Cypress',
      'selenium': 'Selenium',
      'mocha': 'Mocha',
      'jasmine': 'Jasmine',
      'pytest': 'PyTest',
      'junit': 'JUnit',
      'tensorflow': 'TensorFlow',
      'pytorch': 'PyTorch',
      'opencv': 'OpenCV',
      'pandas': 'Pandas',
      'numpy': 'NumPy',
      'scikit_learn': 'Scikit-Learn',
      'keras': 'Keras',
      'huggingface': 'Hugging Face',
      'figma': 'Figma',
      'sketch': 'Sketch',
      'adobexd': 'Adobe XD',
      'photoshop': 'Photoshop',
      'illustrator': 'Illustrator',
      'canva': 'Canva',
      'git': 'Git',
      'github': 'GitHub',
      'gitlab': 'GitLab',
      'bitbucket': 'Bitbucket',
      'subversion': 'Subversion'
    };

    return titleCaseMappings[skill] || skill.charAt(0).toUpperCase() + skill.slice(1);
  };

  const addSkill = (skill: string) => {
    if (skill && !data.skills.includes(skill.toLowerCase())) {
      onChange({
        ...data,
        skills: [...data.skills, skill.toLowerCase()]
      });
    }
  };

  const removeSkill = (skillToRemove: string) => {
    onChange({
      ...data,
      skills: data.skills.filter(skill => skill !== skillToRemove)
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <Label className="text-base font-medium">Your Skills</Label>
        <p className="text-sm text-muted-foreground mb-4">
          Add your technical skills organized by category. Icons will be automatically fetched from devicons.
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {data.skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="gap-1">
              {toTitleCase(skill)}
              <button
                onClick={() => removeSkill(skill)}
                className="ml-1 hover:bg-destructive/20 rounded-full p-0.5"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
      </div>

      <div>
        <Label className="text-base font-medium">Skill Categories</Label>
        <p className="text-sm text-muted-foreground mb-4">
          Browse and add skills by category. Click on a skill to add or remove it.
        </p>
        
        <Tabs value={activeCategory} onValueChange={setActiveCategory}>
          <TabsList className="grid w-full grid-cols-5 mb-4">
            <TabsTrigger value="programming">Programming</TabsTrigger>
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="mobile">Mobile</TabsTrigger>
            <TabsTrigger value="databases">Databases</TabsTrigger>
          </TabsList>
          <TabsList className="grid w-full grid-cols-5 mb-4">
            <TabsTrigger value="devops">DevOps</TabsTrigger>
            <TabsTrigger value="testing">Testing</TabsTrigger>
            <TabsTrigger value="aiml">AI/ML</TabsTrigger>
            <TabsTrigger value="design">Design</TabsTrigger>
            <TabsTrigger value="version">Version</TabsTrigger>
          </TabsList>

          {Object.entries(skillCategories).map(([category, skills]) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {skills.map((skill) => (
                  <Button
                    key={skill}
                    variant={data.skills.includes(skill) ? "default" : "outline"}
                    size="sm"
                    onClick={() => 
                      data.skills.includes(skill) 
                        ? removeSkill(skill) 
                        : addSkill(skill)
                    }
                    className="justify-start text-sm"
                  >
                    {toTitleCase(skill)}
                  </Button>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};
