import jsPDF from 'jspdf';
import { ReadmeData } from '@/components/ReadmeGenerator';

// Get skill icon URL with custom mappings for special skills
const getSkillIconUrl = (skill: string): string => {
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
    // DevOps additions - exact same as ReadmePreview.tsx
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
  
  return `https://raw.githubusercontent.com/devicons/devicon/master/icons/${skill}/${skill}-original.svg`;
};

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

// Skill categories for organization - same as ReadmePreview.tsx
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

// Organize skills by category - only include categorized skills
const organizeSkillsByCategory = (skills: string[]) => {
  const organizedSkills: { [key: string]: string[] } = {};
  
  // Initialize categories
  Object.keys(skillCategories).forEach(category => {
    organizedSkills[category] = [];
  });
  
  // Categorize user's skills - only include skills that fit in a category
  skills.forEach(skill => {
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

export const generateMarkdown = (data: ReadmeData): string => {
  const { 
    name, title, bio, currentWork, currentWorkLink, lookingToCollaborate, collaborateLink,
    askMeAbout, currentlyLearning, askAbout, funFact, blogPlatform, resumeLink, pronouns, 
    email, githubUsername, skills, socialLinks, projects, showGithubStats, showTopLanguages, 
    showStreakStats, showGithubTrophies, showVisitorCount 
  } = data;

  let markdown = `<h1 align="center">Hi 👋, I'm ${name.trim()}</h1>\n\n`;
  
  if (title) markdown += `<h3 align="center">${title.trim()}</h3>\n\n`;
  
  // Bio section
  if (bio) {
    markdown += `## 📖 Bio:\n\n`;
    markdown += `${bio.trim()}\n\n`;
  }
  
  // About me section
  const hasAboutMeContent = currentWork || lookingToCollaborate || askMeAbout || currentlyLearning || 
                           askAbout || funFact || blogPlatform || resumeLink || pronouns || email;
  
  if (hasAboutMeContent) {
    markdown += `## 🚀 About me:\n\n`;
  }
  
  // Work activities
  if (currentWork) {
    markdown += `🔭 I'm currently working on **${currentWork.trim()}**`;
    if (currentWorkLink) markdown += ` - [Link](${ensureValidUrl(currentWorkLink)})`;
    markdown += `\n\n`;
  }
  if (lookingToCollaborate) {
    markdown += `👯 I'm looking to collaborate on **${lookingToCollaborate.trim()}**`;
    if (collaborateLink) markdown += ` - [Link](${ensureValidUrl(collaborateLink)})`;
    markdown += `\n\n`;
  }
  if (askMeAbout) markdown += `🤝 I'm looking for help with **${askMeAbout.trim()}**\n\n`;
  if (currentlyLearning) markdown += `🌱 I'm currently learning **${currentlyLearning.trim()}**\n\n`;
  if (askAbout) markdown += `💬 Ask me about **${askAbout.trim()}**\n\n`;
  if (funFact) markdown += `⚡ Fun fact: **${funFact.trim()}**\n\n`;
  if (blogPlatform) markdown += `📝 I write articles on [My Blog](${ensureValidUrl(blogPlatform)})\n\n`;
  if (resumeLink) markdown += `📄 My resume: [View Resume](${ensureValidUrl(resumeLink)})\n\n`;
  if (pronouns) markdown += `😄 Pronouns: **${pronouns.trim()}**\n\n`;
  if (email) markdown += `📫 How to reach me: [${email.trim()}](mailto:${email.trim()})\n\n`;

  // Social links - Fixed to use HTML img tags with proper sizing
  if (socialLinks.length > 0) {
    markdown += `## 🌐 Connect with me:\n`;
    socialLinks.forEach(link => {
      const platformIcon = getPlatformIcon(link.platform);
      markdown += `<a href="https://${getPlatformUrl(link.platform, link.username)}" target="_blank"><img src="${platformIcon}" alt="${link.platform}" width="40" height="40" /></a> `;
    });
    markdown += `\n\n`;
  }

  // Skills - organized by categories
  if (skills.length > 0) {
    const organizedSkills = organizeSkillsByCategory(skills);
    
    if (Object.keys(organizedSkills).length > 0) {
      markdown += `## 🛠️ Languages and Tools:\n\n`;
      
      Object.entries(organizedSkills).forEach(([category, categorySkills]) => {
        const categoryName = categoryNames[category as keyof typeof categoryNames];
        markdown += `### ${categoryName}\n`;
        categorySkills.forEach(skill => {
          const iconUrl = getSkillIconUrl(skill);
          markdown += `<img src="${iconUrl}" alt="${toTitleCase(skill)}" width="40" height="40"/> `;
        });
        markdown += `\n\n`;
      });
    }
  }

  // GitHub Stats
  if (showGithubStats || showTopLanguages || showStreakStats || showGithubTrophies || showVisitorCount) {
    markdown += `## 📊 GitHub Statistics:\n\n`;
    
    if (showGithubStats) {
      markdown += `![${name}'s GitHub stats](https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=dark)\n\n`;
    }
    
    if (showTopLanguages) {
      markdown += `![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=dark)\n\n`;
    }
    
    if (showStreakStats) {
      markdown += `![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=dark)\n\n`;
    }

    if (showGithubTrophies) {
      markdown += `![GitHub Trophies](https://github-profile-trophy.vercel.app/?username=${githubUsername}&theme=darkhub)\n\n`;
    }

    if (showVisitorCount) {
      markdown += `![Visitor Count](https://visitor-badge.laobi.icu/badge?page_id=${githubUsername}.${githubUsername})\n\n`;
    }
  }

  // Projects
  if (projects.length > 0) {
    markdown += `## 💼 Featured Projects:\n\n`;
    projects.forEach(project => {
      markdown += `### [${project.name}](${ensureValidUrl(project.link)})\n`;
      markdown += `${project.description}\n`;
      if (project.technologies.length > 0) {
        markdown += `**Technologies:** ${project.technologies.join(', ')}\n`;
      }
      markdown += `\n`;
    });
  }

  return markdown;
};

export const generateHTML = (data: ReadmeData): string => {
  const markdown = generateMarkdown(data);
  
  // Convert markdown to HTML (basic conversion)
  let html = markdown
    .replace(/^# (.*$)/gm, '<h1>$1</h1>')
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>')
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" />')
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br>');

  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.name} - GitHub Profile</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background: #f8f9fa;
        }
        h1, h2, h3 { color: #2d3748; }
        h1 { border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; }
        a { color: #3182ce; text-decoration: none; }
        a:hover { text-decoration: underline; }
        img { max-width: 100%; height: auto; }
        p { margin-bottom: 16px; }
    </style>
</head>
<body>
    <div>${html}</div>
</body>
</html>`;
};

export const generatePlainText = (data: ReadmeData): string => {
  const markdown = generateMarkdown(data);
  
  // Convert markdown to plain text
  return markdown
    .replace(/^#{1,6} /gm, '')
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1 ($2)')
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '[Image: $1]')
    .replace(/<[^>]*>/g, '');
};

export const generatePDF = (data: ReadmeData): void => {
  const doc = new jsPDF();
  const plainText = generatePlainText(data);
  
  // Set font
  doc.setFont('helvetica');
  
  // Title
  doc.setFontSize(20);
  doc.text(`Hi 👋, I'm ${data.name}`, 20, 30);
  
  // Content
  doc.setFontSize(12);
  const lines = doc.splitTextToSize(plainText, 170);
  let yPosition = 50;
  
  lines.forEach((line: string) => {
    if (yPosition > 280) {
      doc.addPage();
      yPosition = 20;
    }
    doc.text(line, 20, yPosition);
    yPosition += 7;
  });
  
  // Save
  doc.save(`${data.name}-README.pdf`);
};

const getPlatformIcon = (platform: string) => {
  const icons: Record<string, string> = {
    github: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg',
    twitter: 'https://about.twitter.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png',
    linkedin: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg',
    instagram: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg',
    youtube: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/youtube.svg',
    facebook: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg',
    stackoverflow: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/stack-overflow.svg',
    medium: 'https://raw.githubusercontent.com/Medium/medium-logos/master/03_Symbol/01_Black/PNG/CMYK/Medium-Symbol-Black-CMYK%401x.png',
    devto: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/devto.svg',
    hashnode: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1611902473383/CDyAuTy75.png',
    bluesky: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Bluesky_Logo.svg',
    mastodon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Mastodon_Logotype_%28Simple%29.svg/1200px-Mastodon_Logotype_%28Simple%29.svg.png',
    quora: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/1200px-Quora_logo_2015.svg.png',
    reddit: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/reddit.svg',
    behance: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/behance.svg',
    pinterest: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/pinterest.svg',
    discord: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/discord.svg',
    codepen: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/codepen.svg',
    twitch: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitch.svg',
    tiktok: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/tiktok.svg',
    leetcode: 'https://cdn.iconscout.com/icon/free/png-512/leetcode-3521542-2944960.png'
  };
  return icons[platform] || 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/generic.svg';
};

const getPlatformUrl = (platform: string, username: string) => {
  const urls: Record<string, string> = {
    github: `github.com/${username}`,
    twitter: `twitter.com/${username}`,
    linkedin: `www.linkedin.com/in/${username}`,
    instagram: `instagram.com/${username}`,
    youtube: `youtube.com/@${username}`,
    facebook: `facebook.com/${username}`,
    stackoverflow: `stackoverflow.com/users/${username}`,
    medium: `medium.com/@${username}`,
    devto: `dev.to/${username}`,
    hashnode: `hashnode.com/@${username}`,
    bluesky: `bsky.app/profile/${username.replace(/^@+/, '')}`,
    mastodon: `mastodon.social/@${username}`,
    reddit: `reddit.com/user/${username}`,
    quora: `www.quora.com/profile/${username}`,
    behance: `behance.net/${username}`,
    pinterest: `pinterest.com/${username}`,
    codepen: `codepen.io/${username}`,
    twitch: `twitch.tv/${username}`,
    tiktok: `tiktok.com/@${username}`,
    discord: `discord.gg/${username}`,
    leetcode: `leetcode.com/${username}`
  };
  return urls[platform] || `${platform}.com/${username}`;
};

// Ensure URL has proper protocol
const ensureValidUrl = (url: string) => {
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  return `https://${url}`;
};
