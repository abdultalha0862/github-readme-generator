import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ReadmePreview } from '@/components/ReadmePreview'
import { ReadmeData } from '@/components/ReadmeGenerator'

// Mock data for testing
const mockReadmeData: ReadmeData = {
  name: 'John Doe',
  title: 'Full Stack Developer',
  bio: 'I enjoy coding and building amazing applications',
  currentWork: 'Building awesome projects',
  currentWorkLink: 'https://github.com/johndoe/project',
  lookingToCollaborate: 'Open source projects',
  collaborateLink: 'https://github.com/johndoe',
  askMeAbout: 'React and TypeScript',
  currentlyLearning: 'Machine Learning',
  askAbout: 'Web development',
  funFact: 'I can code for 12 hours straight',
  blogPlatform: 'https://johndoe.dev',
  resumeLink: 'https://johndoe.dev/resume',
  pronouns: 'he/him',
  email: 'john@johndoe.dev',
  githubUsername: 'johndoe',
  skills: ['React', 'TypeScript', 'Node.js', 'Python'],
  socialLinks: [
    { platform: 'GitHub', username: 'johndoe' },
    { platform: 'LinkedIn', username: 'john-doe' }
  ],
  projects: [
    {
      name: 'Awesome Project',
      description: 'A really cool project',
      link: 'https://github.com/johndoe/awesome',
      technologies: ['React', 'TypeScript']
    }
  ],
  showGithubStats: true,
  showTopLanguages: true,
  showStreakStats: true,
  showGithubTrophies: false,
  showVisitorCount: false
}

describe('ReadmePreview', () => {
  it('renders user name and title correctly', () => {
    render(<ReadmePreview data={mockReadmeData} />)
    
    expect(screen.getByText('Hi 👋, I\'m John Doe')).toBeInTheDocument()
    expect(screen.getByText('Full Stack Developer')).toBeInTheDocument()
  })

  it('renders bio section correctly', () => {
    render(<ReadmePreview data={mockReadmeData} />)
    
    expect(screen.getByText('📖 Bio:')).toBeInTheDocument()
    expect(screen.getByText('I enjoy coding and building amazing applications')).toBeInTheDocument()
  })

  it('renders about me section with current work', () => {
    render(<ReadmePreview data={mockReadmeData} />)
    
    expect(screen.getByText('🚀 About me:')).toBeInTheDocument()
    expect(screen.getByText(/Building awesome projects/)).toBeInTheDocument()
  })

  it('renders skills section with icons', () => {
    render(<ReadmePreview data={mockReadmeData} />)
    
    expect(screen.getByText('🛠️ Languages and Tools:')).toBeInTheDocument()
    
    // Check if skill icons are rendered
    const skillImages = screen.getAllByRole('img')
    expect(skillImages.length).toBeGreaterThan(0)
  })

  it('renders projects section correctly', () => {
    render(<ReadmePreview data={mockReadmeData} />)
    
    expect(screen.getByText('💼 Featured Projects:')).toBeInTheDocument()
    expect(screen.getByText('Awesome Project')).toBeInTheDocument()
    expect(screen.getByText('A really cool project')).toBeInTheDocument()
  })

  it('renders GitHub statistics section', () => {
    render(<ReadmePreview data={mockReadmeData} />)
    
    expect(screen.getByText('📊 GitHub Statistics:')).toBeInTheDocument()
  })

  it('renders social links when provided', () => {
    render(<ReadmePreview data={mockReadmeData} />)
    
    expect(screen.getByText('🌐 Connect with me:')).toBeInTheDocument()
    
    // Check for social media links
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThan(0)
  })

  it('handles empty skills array gracefully', () => {
    const dataWithoutSkills = { ...mockReadmeData, skills: [] }
    render(<ReadmePreview data={dataWithoutSkills} />)
    
    // Should not show skills section when there are no skills
    expect(screen.queryByText('🛠️ Languages and Tools:')).not.toBeInTheDocument()
  })

  it('handles empty projects array gracefully', () => {
    const dataWithoutProjects = { ...mockReadmeData, projects: [] }
    render(<ReadmePreview data={dataWithoutProjects} />)
    
    // Should not show projects section when there are no projects
    expect(screen.queryByText('💼 Featured Projects:')).not.toBeInTheDocument()
  })
})
