import { describe, it, expect, vi } from 'vitest'
import { generateMarkdown, generateHTML, generatePlainText } from '@/utils/exportUtils'
import { ReadmeData } from '@/components/ReadmeGenerator'

// Mock jsPDF since we can't test PDF generation in Node environment
vi.mock('jspdf', () => ({
  default: vi.fn().mockImplementation(() => ({
    text: vi.fn(),
    save: vi.fn(),
    setFontSize: vi.fn(),
    setFont: vi.fn(),
    addPage: vi.fn(),
    internal: {
      pageSize: {
        getWidth: () => 210,
        getHeight: () => 297
      }
    }
  }))
}))

const mockReadmeData: ReadmeData = {
  name: 'Test User',
  title: 'Software Developer',
  bio: 'I love coding',
  currentWork: 'Building apps',
  currentWorkLink: 'https://example.com',
  lookingToCollaborate: 'Open source',
  collaborateLink: 'https://github.com',
  askMeAbout: 'JavaScript',
  currentlyLearning: 'React',
  askAbout: 'Web dev',
  funFact: 'I love coffee',
  blogPlatform: 'https://blog.example.com',
  resumeLink: 'https://resume.example.com',
  pronouns: 'they/them',
  email: 'test@example.com',
  githubUsername: 'testuser',
  skills: ['javascript', 'react', 'nodejs'],
  socialLinks: [
    { platform: 'GitHub', username: 'testuser' },
    { platform: 'LinkedIn', username: 'test-user' }
  ],
  projects: [
    {
      name: 'Test Project',
      description: 'A test project',
      link: 'https://github.com/testuser/project',
      technologies: ['React', 'TypeScript']
    }
  ],
  showGithubStats: true,
  showTopLanguages: true,
  showStreakStats: true,
  showGithubTrophies: false,
  showVisitorCount: false
}

describe('Export Utils', () => {
  describe('generateMarkdown', () => {
    it('generates correct markdown structure', () => {
      const markdown = generateMarkdown(mockReadmeData)
      
      expect(markdown).toContain('<h1 align="center">Hi 👋, I\'m Test User</h1>')
      expect(markdown).toContain('<h3 align="center">Software Developer</h3>')
      expect(markdown).toContain('## 📖 Bio:')
      expect(markdown).toContain('I love coding')
    })

    it('includes skills section with icons', () => {
      const markdown = generateMarkdown(mockReadmeData)
      
      expect(markdown).toContain('## 🛠️ Languages and Tools:')
      expect(markdown).toContain('### Programming Languages')
      expect(markdown).toContain('JavaScript')
      expect(markdown).toContain('<img src=')
    })

    it('includes projects section', () => {
      const markdown = generateMarkdown(mockReadmeData)
      
      expect(markdown).toContain('## 💼 Featured Projects:')
      expect(markdown).toContain('### [Test Project]')
      expect(markdown).toContain('A test project')
      expect(markdown).toContain('**Technologies:** React, TypeScript')
    })

    it('includes GitHub stats when enabled', () => {
      const markdown = generateMarkdown(mockReadmeData)
      
      expect(markdown).toContain('## 📊 GitHub Statistics:')
      expect(markdown).toContain('![Test User\'s GitHub stats]')
      expect(markdown).toContain('username=testuser')
    })

    it('excludes GitHub stats when disabled', () => {
      const dataWithoutStats = { ...mockReadmeData, showGithubStats: false }
      const markdown = generateMarkdown(dataWithoutStats)
      
      expect(markdown).not.toContain('![Test User\'s GitHub stats]')
    })
  })

  describe('generateHTML', () => {
    it('generates valid HTML structure', () => {
      const html = generateHTML(mockReadmeData)
      
      expect(html).toContain('<!DOCTYPE html>')
      expect(html).toContain('<html lang="en">')
      expect(html).toContain('<head>')
      expect(html).toContain('<body>')
      expect(html).toContain('</html>')
    })

    it('includes CSS styles', () => {
      const html = generateHTML(mockReadmeData)
      
      expect(html).toContain('<style>')
      expect(html).toContain('font-family:')
      expect(html).toContain('margin:')
    })

    it('includes all content sections', () => {
      const html = generateHTML(mockReadmeData)
      
      expect(html).toContain('Hi 👋, I\'m Test User')
      expect(html).toContain('📖 Bio:')
      expect(html).toContain('🛠️ Languages and Tools:')
      expect(html).toContain('💼 Featured Projects:')
    })
  })

  describe('generatePlainText', () => {
    it('generates clean plain text', () => {
      const text = generatePlainText(mockReadmeData)
      
      expect(text).toContain('Hi 👋, I\'m Test User')
      expect(text).toContain('Software Developer')
      expect(text).toContain('Bio:')
      expect(text).toContain('I love coding')
    })

    it('includes all major sections', () => {
      const text = generatePlainText(mockReadmeData)
      
      expect(text).toContain('About me:')
      expect(text).toContain('Languages and Tools:')
      expect(text).toContain('Featured Projects:')
      expect(text).toContain('GitHub Statistics:')
    })

    it('formats projects correctly', () => {
      const text = generatePlainText(mockReadmeData)
      
      expect(text).toContain('Test Project')
      expect(text).toContain('A test project')
      expect(text).toContain('Technologies: React, TypeScript')
    })

    it('removes HTML tags and special characters', () => {
      const text = generatePlainText(mockReadmeData)
      
      expect(text).not.toContain('<')
      expect(text).not.toContain('>')
      expect(text).not.toContain('![')
    })
  })

  describe('Skill Processing', () => {
    it('handles special skill name mappings', () => {
      const dataWithSpecialSkills = {
        ...mockReadmeData,
        skills: ['vue', 'django', 'cpp', 'react-native']
      }
      
      const markdown = generateMarkdown(dataWithSpecialSkills)
      
      expect(markdown).toContain('Vue.js')
      expect(markdown).toContain('Django')
      expect(markdown).toContain('C++')
      expect(markdown).toContain('React-native')
    })

    it('organizes skills by category', () => {
      const dataWithMixedSkills = {
        ...mockReadmeData,
        skills: ['javascript', 'react', 'nodejs', 'python', 'docker']
      }
      
      const markdown = generateMarkdown(dataWithMixedSkills)
      
      expect(markdown).toContain('### Programming Languages')
      expect(markdown).toContain('### Frontend')
      expect(markdown).toContain('### Backend')
      expect(markdown).toContain('### DevOps')
    })
  })
})
