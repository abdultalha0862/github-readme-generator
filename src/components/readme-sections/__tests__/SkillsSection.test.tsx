import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { SkillsSection } from '@/components/readme-sections/SkillsSection'
import { ReadmeData } from '@/components/ReadmeGenerator'

const mockData: ReadmeData = {
  name: 'Test User',
  title: 'Developer',
  bio: 'Test bio',
  currentWork: 'Test work',
  lookingToCollaborate: 'Test collaboration',
  askMeAbout: 'Test ask',
  funFact: 'Test fact',
  pronouns: 'they/them',
  email: 'test@example.com',
  githubUsername: 'testuser',
  skills: ['javascript', 'react', 'nodejs'],
  socialLinks: [],
  projects: [],
  showGithubStats: true,
  showTopLanguages: true,
  showStreakStats: true
}

const mockProps = {
  data: mockData,
  onChange: vi.fn()
}

describe('SkillsSection', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders skills categories', () => {
    render(<SkillsSection {...mockProps} />)
    
    expect(screen.getByText('Programming')).toBeInTheDocument()
    expect(screen.getByText('Frontend')).toBeInTheDocument()
    expect(screen.getByText('Backend')).toBeInTheDocument()
    expect(screen.getByText('Mobile')).toBeInTheDocument()
    expect(screen.getByText('Databases')).toBeInTheDocument()
    expect(screen.getByText('DevOps')).toBeInTheDocument()
  })

  it('shows selected skills as checked', () => {
    render(<SkillsSection {...mockProps} />)
    
    // Check if selected skills appear as badges in the selected skills area
    const selectedSkillsArea = screen.getByText('Your Skills').closest('div')
    expect(selectedSkillsArea).toBeInTheDocument()
    
    // Use getAllByText to handle multiple elements with the same text
    const javascriptElements = screen.getAllByText('JavaScript')
    const reactElements = screen.getAllByText('React')
    const nodeElements = screen.getAllByText('Node.js')
    
    // At least one instance of each should exist (in badges)
    expect(javascriptElements.length).toBeGreaterThan(0)
    expect(reactElements.length).toBeGreaterThan(0)
    expect(nodeElements.length).toBeGreaterThan(0)
  })

  it('calls onChange when skill is selected', async () => {
    const user = userEvent.setup()
    render(<SkillsSection {...mockProps} />)
    
    // Click on Python button to add it
    const pythonButton = screen.getByRole('button', { name: /python/i })
    await user.click(pythonButton)
    
    expect(mockProps.onChange).toHaveBeenCalledWith({
      ...mockData,
      skills: ['javascript', 'react', 'nodejs', 'python']
    })
  })

  it('calls onChange when skill is deselected', async () => {
    const user = userEvent.setup()
    render(<SkillsSection {...mockProps} />)
    
    // Find and click the remove button for React
    const reactBadge = screen.getByText('React').closest('div')
    const removeButton = reactBadge?.querySelector('button')
    expect(removeButton).toBeInTheDocument()
    
    if (removeButton) {
      await user.click(removeButton)
    }
    
    expect(mockProps.onChange).toHaveBeenCalledWith({
      ...mockData,
      skills: ['javascript', 'nodejs']
    })
  })

  it('displays skills in correct categories', () => {
    render(<SkillsSection {...mockProps} />)
    
    // Check that tab categories are rendered
    expect(screen.getByText('Programming')).toBeInTheDocument()
    expect(screen.getByText('Frontend')).toBeInTheDocument()
    expect(screen.getByText('Backend')).toBeInTheDocument()
    
    // Check that selected skills appear as badges (use getAllByText to handle duplicates)
    const javascriptElements = screen.getAllByText('JavaScript')
    const reactElements = screen.getAllByText('React')
    const nodeElements = screen.getAllByText('Node.js')
    
    expect(javascriptElements.length).toBeGreaterThan(0)
    expect(reactElements.length).toBeGreaterThan(0)
    expect(nodeElements.length).toBeGreaterThan(0)
  })

  it('renders skill category tabs', () => {
    render(<SkillsSection {...mockProps} />)
    
    // Check that tabs are rendered properly
    const programmingTab = screen.getByRole('tab', { name: /programming/i })
    const frontendTab = screen.getByRole('tab', { name: /frontend/i })
    const backendTab = screen.getByRole('tab', { name: /backend/i })
    
    expect(programmingTab).toBeInTheDocument()
    expect(frontendTab).toBeInTheDocument()
    expect(backendTab).toBeInTheDocument()
  })

  it('renders with empty skills array', () => {
    const emptyData = { ...mockData, skills: [] }
    render(<SkillsSection data={emptyData} onChange={mockProps.onChange} />)
    
    // Should still render all categories
    expect(screen.getByText('Programming')).toBeInTheDocument()
    expect(screen.getByText('Frontend')).toBeInTheDocument()
    
    // The selected skills section should be empty (no badges)
    const selectedSkillsArea = screen.getByText('Your Skills').closest('div')
    expect(selectedSkillsArea).toBeInTheDocument()
    
    // Should still have skill category buttons available for selection
    expect(screen.getByText('Programming')).toBeInTheDocument()
    expect(screen.getByText('Frontend')).toBeInTheDocument()
  })

  it('handles large number of skills', () => {
    const manySkills = [
      'javascript', 'typescript', 'python', 'java', 'csharp',
      'react', 'vue', 'angular', 'svelte',
      'nodejs', 'express', 'nestjs', 'django', 'flask',
      'docker', 'kubernetes', 'aws', 'azure',
      'mongodb', 'postgresql', 'mysql', 'redis'
    ]
    
    const dataWithManySkills = { ...mockData, skills: manySkills }
    render(<SkillsSection data={dataWithManySkills} onChange={mockProps.onChange} />)
    
    // Should render all categories without issues
    expect(screen.getByText('Programming')).toBeInTheDocument()
    expect(screen.getByText('Frontend')).toBeInTheDocument()
    expect(screen.getByText('Backend')).toBeInTheDocument()
    expect(screen.getByText('DevOps')).toBeInTheDocument()
    expect(screen.getByText('Databases')).toBeInTheDocument()
    
    // Should display multiple skill badges (use getAllByText for duplicates)
    const javascriptElements = screen.getAllByText('JavaScript')
    const typescriptElements = screen.getAllByText('TypeScript')
    const reactElements = screen.getAllByText('React')
    
    expect(javascriptElements.length).toBeGreaterThan(0)
    expect(typescriptElements.length).toBeGreaterThan(0)
    expect(reactElements.length).toBeGreaterThan(0)
  })
})
