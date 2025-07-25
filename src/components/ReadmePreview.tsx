import { Card } from '@/components/ui/card';
import { ReadmeData } from './ReadmeGenerator';

interface ReadmePreviewProps {
  data: ReadmeData;
}

export const ReadmePreview = ({ data }: ReadmePreviewProps) => {
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

  // Skill categories for organization
  const skillCategories = {
    programming: ['javascript', 'typescript', 'python', 'java', 'csharp', 'cpp', 'c', 'go', 'rust', 'php', 'ruby', 'swift', 'kotlin', 'r', 'sql'],
    frontend: ['react', 'vue', 'angular', 'svelte', 'html5', 'css3', 'sass', 'tailwindcss', 'bootstrap', 'nextjs', 'nuxtjs'],
    backend: ['nodejs', 'express', 'nestjs', 'django', 'flask', 'spring', 'dotnet', 'rails', 'laravel', 'fastapi'],
    mobile: ['reactnative', 'react-native', 'flutter', 'ionic', 'xamarin', 'swift', 'kotlin', 'dart'],
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

  const categoryNames = {
    programming: 'Programming Languages',
    frontend: 'Frontend',
    backend: 'Backend',
    mobile: 'Mobile',
    databases: 'Databases',
    devops: 'DevOps',
    testing: 'Testing',
    aiml: 'AI/ML',
    design: 'Design',
    version: 'Version Control'
  };

  // Get social media URL based on platform and username
  const getSocialUrl = (platform: string, username: string) => {
    const urls: { [key: string]: string } = {
      github: `https://github.com/${username}`,
      linkedin: `https://www.linkedin.com/in/${username.replace(/^\/+|\/+$/g, '')}`, // Remove leading/trailing slashes
      twitter: `https://twitter.com/${username}`,
      instagram: `https://instagram.com/${username}`,
      youtube: `https://youtube.com/@${username}`,
      facebook: `https://facebook.com/${username}`,
      stackoverflow: `https://stackoverflow.com/users/${username}`, // Keep as is since it expects user ID
      medium: `https://medium.com/@${username}`,
      devto: `https://dev.to/${username}`,
      hashnode: `https://hashnode.com/@${username.replace('@', '')}`, // Support Hashnode's standard username format
      bluesky: `https://bsky.app/profile/${username.replace(/^@+/, '')}`,
      mastodon: `https://mastodon.social/@${username}`,
      reddit: `https://reddit.com/user/${username}`,
      quora: `https://www.quora.com/profile/${username}`,
      behance: `https://behance.net/${username}`,
      pinterest: `https://pinterest.com/${username}`,
      codepen: `https://codepen.io/${username}`,
      twitch: `https://twitch.tv/${username}`,
      tiktok: `https://tiktok.com/@${username}`,
      discord: `https://discord.gg/${username}`,
      leetcode: `https://leetcode.com/${username}`,
    };
    return urls[platform] || '#';
  };

  // Get icon URL for social platform
  const getSocialIconUrl = (platform: string) => {
    // Special cases for platforms to use their official logos
    if (platform === 'hashnode') {
      return 'https://cdn.hashnode.com/res/hashnode/image/upload/v1611902473383/CDyAuTy75.png';
    }
    if (platform === 'medium') {
      return 'https://raw.githubusercontent.com/Medium/medium-logos/master/03_Symbol/01_Black/PNG/CMYK/Medium-Symbol-Black-CMYK%401x.png';
    }
    if (platform === 'twitter') {
      return 'https://about.twitter.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png';
    }
    if (platform === 'bluesky') {
      return 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Bluesky_Logo.svg';
    }
    if (platform === 'mastodon') {
      return 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Mastodon_Logotype_%28Simple%29.svg/1200px-Mastodon_Logotype_%28Simple%29.svg.png';
    }
    if (platform === 'quora') {
      return 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/1200px-Quora_logo_2015.svg.png';
    }
    if (platform === 'discord') {
      return 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/discord.svg';
    }
    if (platform === 'leetcode') {
      return 'https://cdn.iconscout.com/icon/free/png-512/leetcode-3521542-2944960.png';
    }
    
    const baseUrl = 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/';
    const iconMap: { [key: string]: string } = {
      github: 'github.svg',
      linkedin: 'linked-in-alt.svg',
      twitter: 'twitter.svg',
      instagram: 'instagram.svg',
      youtube: 'youtube.svg',
      facebook: 'facebook.svg',
      stackoverflow: 'stack-overflow.svg',
      medium: 'medium.svg',
      devto: 'devto.svg',
      hashnode: 'hashnode.svg', // Official Hashnode logo
      bluesky: 'bluesky.svg',
      mastodon: 'mastodon.svg',
      reddit: 'reddit.svg',
      quora: 'quora.svg',
      behance: 'behance.svg',
      pinterest: 'pinterest.svg',
      codepen: 'codepen.svg',
      twitch: 'twitch.svg',
      tiktok: 'tiktok.svg',
      discord: 'discord.svg',
      leetcode: 'leetcode.svg',
    };
    return baseUrl + (iconMap[platform] || 'github.svg');
  };

  // Get skill icon URL with proper mappings for problematic technologies
  const getSkillIconUrl = (skill: string) => {
    const skillMappings: { [key: string]: string } = {
      'vue': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg',
      'django': 'https://cdn.worldvectorlogo.com/logos/django.svg',
      'dotnet': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original.svg',
      'rails': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg',
      'aws': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
      'gcp': 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg',
      'jest': 'https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg',
      'cypress': 'https://raw.githubusercontent.com/simple-icons/simple-icons/6e46ec1fc23b60c8fd0d2f2ff46db82e16dbd75f/icons/cypress.svg',
      'scikit_learn': 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg',
      'huggingface': 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg',
      'illustrator': 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg',
      'adobexd': 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg',
      'cpp': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg',
      'c++': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg',
      'reactnative': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
      'react-native': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
      'r': 'https://www.r-project.org/logo/Rlogo.svg',
      'sql': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      // DevOps additions
      'circleci': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/circleci/circleci-plain.svg',
      'travisci': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/travis/travis-plain.svg',
      'githubcodespaces': 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
      'argocd': 'https://argo-cd.readthedocs.io/en/stable/assets/logo.png',
      'flux': 'https://www.vectorlogo.zone/logos/fluxcdio/fluxcdio-icon.svg',
      'helm': 'https://www.vectorlogo.zone/logos/helmsh/helmsh-icon.svg',
      'prometheus': 'https://www.vectorlogo.zone/logos/prometheusio/prometheusio-icon.svg',
      'grafana': 'https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg',
      'elasticsearch': 'https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg',
      'logstash': 'https://www.vectorlogo.zone/logos/elasticco_logstash/elasticco_logstash-icon.svg',
      'kibana': 'https://www.vectorlogo.zone/logos/elasticco_kibana/elasticco_kibana-icon.svg',
      'splunk': 'https://www.vectorlogo.zone/logos/splunk/splunk-icon.svg',
      'datadog': 'https://www.vectorlogo.zone/logos/datadoghq/datadoghq-icon.svg',
      'chef': 'https://www.vectorlogo.zone/logos/chefio/chefio-icon.svg',
      'puppet': 'https://www.vectorlogo.zone/logos/puppet/puppet-icon.svg',
      'saltstack': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/saltproject.svg',
      'vagrant': 'https://www.vectorlogo.zone/logos/vagrantup/vagrantup-icon.svg',
      'sonarqube': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/sonarqube.svg',
      'newrelic': 'https://www.vectorlogo.zone/logos/newrelic/newrelic-icon.svg',
      'sentry': 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/sentry.svg',
    };

    if (skillMappings[skill]) {
      return skillMappings[skill];
    }
    // Try devicon fallback
    const deviconUrl = `https://raw.githubusercontent.com/devicons/devicon/master/icons/${skill}/${skill}-original.svg`;
    // Use a default icon if devicon fails to load (handled by onError in <img> tag)
    return deviconUrl;
    // If you want to use a local default icon, you can do:
    // return deviconUrl || '/default-skill-icon.svg';
  };

  // Organize skills by category - only include categorized skills
  const organizeSkillsByCategory = () => {
    const organizedSkills: { [key: string]: string[] } = {};
    
    // Initialize categories
    Object.keys(skillCategories).forEach(category => {
      organizedSkills[category] = [];
    });
    
    // Categorize user's skills - only include skills that fit in a category
    data.skills.forEach(skill => {
      Object.entries(skillCategories).forEach(([category, categorySkills]) => {
        if (categorySkills.includes(skill)) {
          organizedSkills[category].push(skill);
        }
      });
    });
    
    // Remove empty categories
    Object.keys(organizedSkills).forEach(category => {
      if (organizedSkills[category].length === 0) {
        delete organizedSkills[category];
      }
    });
    
    return organizedSkills;
  };

  const organizedSkills = organizeSkillsByCategory();

  // Check if there's any meaningful data to display
  const hasAnyData = data.name || data.title || data.bio || data.currentWork || 
                     data.lookingToCollaborate || data.askMeAbout || data.currentlyLearning || 
                     data.askAbout || data.funFact || data.blogPlatform || data.resumeLink || 
                     data.pronouns || data.email || data.githubUsername || 
                     data.skills.length > 0 || data.socialLinks.length > 0 || 
                     data.projects.length > 0;

  // Show blank state if no data is present
  if (!hasAnyData) {
    return (
      <div className="space-y-6">
        <Card className="p-8 bg-gradient-to-br from-card to-card/50 border border-border/50">
          <div className="text-center space-y-6">
            <div className="text-6xl">📝</div>
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-muted-foreground">
                Your README Preview
              </h2>
              <p className="text-muted-foreground">
                Start filling out the form to see your README come to life!
              </p>
            </div>
            <div className="border-2 border-dashed border-border rounded-lg p-8">
              <p className="text-sm text-muted-foreground">
                This preview will update in real-time as you enter your information
              </p>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  // Ensure URL has proper protocol
  const ensureValidUrl = (url: string) => {
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    return `https://${url}`;
  };

  return (
    <div className="space-y-6">
      <Card className="p-8 bg-gradient-to-br from-card to-card/50 border border-border/50">
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">
              Hi 👋, I'm {data.name || 'Your Name'}
            </h1>
            {data.title && (
              <h2 className="text-xl text-muted-foreground font-medium">
                {data.title}
              </h2>
            )}
          </div>

          {/* Bio Section */}
          {data.bio && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">📖 Bio:</h3>
              <p className="text-muted-foreground">
                {data.bio}
              </p>
            </div>
          )}

          {/* About Me Section */}
          {(data.currentWork || data.lookingToCollaborate || data.askMeAbout || 
            data.currentlyLearning || data.askAbout || data.funFact || 
            data.blogPlatform || data.resumeLink || data.pronouns || data.email) && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">🚀 About me:</h3>
              <div className="space-y-3 text-left">
                {data.currentWork && (
              <div className="flex items-start gap-2">
                <span>🔭</span>
                <span>I'm currently working on <strong>{data.currentWork}</strong>
                  {data.currentWorkLink && (
                    <span> - <a href={ensureValidUrl(data.currentWorkLink)} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Link</a></span>
                  )}
                </span>
              </div>
            )}
            {data.lookingToCollaborate && (
              <div className="flex items-start gap-2">
                <span>👯</span>
                <span>I'm looking to collaborate on <strong>{data.lookingToCollaborate}</strong>
                  {data.collaborateLink && (
                    <span> - <a href={ensureValidUrl(data.collaborateLink)} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Link</a></span>
                  )}
                </span>
              </div>
            )}
            {data.askMeAbout && (
              <div className="flex items-start gap-2">
                <span>🤝</span>
                <span>I'm looking for help with <strong>{data.askMeAbout.trim()}</strong></span>
              </div>
            )}
            {data.currentlyLearning && (
              <div className="flex items-start gap-2">
                <span>🌱</span>
                <span>I'm currently learning <strong>{data.currentlyLearning.trim()}</strong></span>
              </div>
            )}
            {data.askAbout && (
              <div className="flex items-start gap-2">
                <span>💬</span>
                <span>Ask me about <strong>{data.askAbout.trim()}</strong></span>
              </div>
            )}
            {data.funFact && (
              <div className="flex items-start gap-2">
                <span>⚡</span>
                <span>Fun fact: <strong>{data.funFact.trim()}</strong></span>
              </div>
            )}
            {data.blogPlatform && (
              <div className="flex items-start gap-2">
                <span>📝</span>
                <span>I write articles on <a href={ensureValidUrl(data.blogPlatform)} className="text-primary hover:underline font-medium" target="_blank" rel="noopener noreferrer">{data.blogPlatform}</a></span>
              </div>
            )}
            {data.resumeLink && (
              <div className="flex items-start gap-2">
                <span>📄</span>
                <span>My resume: <a href={ensureValidUrl(data.resumeLink)} className="text-primary hover:underline font-medium" target="_blank" rel="noopener noreferrer">{data.resumeLink}</a></span>
              </div>
            )}
            {data.pronouns && (
              <div className="flex items-start gap-2">
                <span>😄</span>
                <span>Pronouns: <strong>{data.pronouns}</strong></span>
              </div>
            )}
            {data.email && (
              <div className="flex items-start gap-2">
                <span>📫</span>
                <span>How to reach me: <a href={`mailto:${data.email}`} className="text-primary hover:underline font-medium">{data.email}</a></span>
              </div>
            )}
          </div>
        </div>
      )}

          {/* Connect with me */}
          {data.socialLinks && data.socialLinks.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">🌐 Connect with me:</h3>
              <div className="flex gap-3 flex-wrap">
                {data.socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={getSocialUrl(link.platform, link.username)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform cursor-pointer"
                  >
                    <img 
                      src={getSocialIconUrl(link.platform)}
                      alt={link.platform} 
                      width="32" 
                      height="32"
                      style={link.platform === 'twitter' ? { filter: 'contrast(1.2)' } : {}}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (link.platform === 'twitter') {
                          target.src = 'https://about.twitter.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png';
                        } else if (link.platform === 'bluesky') {
                          target.src = 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Bluesky_Logo.svg';
                        } else if (link.platform === 'quora') {
                          target.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/1200px-Quora_logo_2015.svg.png';
                        } else if (link.platform === 'discord') {
                          target.src = 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/discord.svg';
                        } else if (link.platform === 'leetcode') {
                          target.src = 'https://cdn.iconscout.com/icon/free/png-512/leetcode-3521542-2944960.png';
                        } else {
                          target.src = 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg';
                        }
                      }}
                    />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Languages and Tools - Now organized by categories */}
          {data.skills.length > 0 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">🛠️ Languages and Tools:</h3>
              
              {Object.entries(organizedSkills).map(([category, skills]) => (
                <div key={category} className="space-y-3">
                  <h4 className="text-lg font-medium text-muted-foreground">
                    {categoryNames[category as keyof typeof categoryNames]}
                  </h4>
                  <div className="flex gap-3 flex-wrap">
                    {skills.map((skill, index) => (
                      <img 
                        key={index}
                        src={getSkillIconUrl(skill)} 
                        alt={toTitleCase(skill)} 
                        width="40" 
                        height="40" 
                        className="hover:scale-110 transition-transform" 
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          // Fallback to a colored placeholder
                          target.src = `https://via.placeholder.com/40x40/3b82f6/fff?text=${skill.charAt(0).toUpperCase()}`;
                        }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Featured Projects */}
          {data.projects && data.projects.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">💼 Featured Projects:</h3>
              <div className="space-y-4">
                {data.projects.map((project, index) => (
                  <div key={index} className="border border-border rounded-lg p-4">
                    <h4 className="text-lg font-medium mb-2">
                      <a href={ensureValidUrl(project.link)} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        {project.name}
                      </a>
                    </h4>
                    <p className="text-muted-foreground mb-2">{project.description}</p>
                    {project.technologies.length > 0 && (
                      <div className="flex gap-2 flex-wrap">
                        <span className="text-sm font-medium">Technologies:</span>
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="text-sm bg-muted px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* GitHub Statistics */}
          {data.githubUsername && (data.showGithubStats || data.showTopLanguages || data.showStreakStats || data.showGithubTrophies || data.showVisitorCount) && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">📊 GitHub Statistics:</h3>
              
              <div className="grid gap-6">
                {data.showGithubStats && (
                  <div className="flex justify-center">
                    <img 
                      src={`https://github-readme-stats.vercel.app/api?username=${data.githubUsername}&show_icons=true&theme=light`}
                      alt={`${data.name || 'User'}'s GitHub stats`}
                      className="rounded-lg"
                    />
                  </div>
                )}
                
                {data.showTopLanguages && (
                  <div className="flex justify-center">
                    <img 
                      src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${data.githubUsername}&layout=compact&theme=light`}
                      alt="Top Languages"
                      className="rounded-lg"
                    />
                  </div>
                )}
                
                {data.showStreakStats && (
                  <div className="flex justify-center">
                    <img 
                      src={`https://github-readme-streak-stats.herokuapp.com/?user=${data.githubUsername}&theme=light`}
                      alt="GitHub Streak"
                      className="rounded-lg"
                    />
                  </div>
                )}

                {data.showGithubTrophies && (
                  <div className="flex justify-center">
                    <img 
                      src={`https://github-profile-trophy.vercel.app/?username=${data.githubUsername}&theme=flat`}
                      alt="GitHub Trophies"
                      className="rounded-lg"
                    />
                  </div>
                )}

                {data.showVisitorCount && (
                  <div className="flex justify-center">
                    <img 
                      src={`https://visitor-badge.laobi.icu/badge?page_id=${data.githubUsername}.${data.githubUsername}`}
                      alt="Visitor Count"
                      className="rounded-lg"
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </Card>
      
      <div className="text-xs text-muted-foreground p-3 bg-muted/30 rounded border border-border/30">
        <p className="mb-2">
          <strong>💡 Preview Note:</strong> This preview shows your README layout with:
        </p>
        <ul className="space-y-1 ml-4">
          <li>• Real-time data from your editor inputs</li>
          <li>• Dynamic social media icons based on your profiles</li>
          <li>• Technology skill icons organized by categories</li>
          <li>• GitHub statistics based on your settings</li>
        </ul>
      </div>
    </div>
  );
};
