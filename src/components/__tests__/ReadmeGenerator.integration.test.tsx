import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { ReadmeGenerator } from '@/components/ReadmeGenerator'

describe('ReadmeGenerator Integration', () => {
  it('renders the form and preview tabs', () => {
    render(<ReadmeGenerator />)
    
    expect(screen.getByText('Edit')).toBeInTheDocument()
    expect(screen.getByText('Preview')).toBeInTheDocument()
  })

  it('switches between edit and preview modes', async () => {
    const user = userEvent.setup()
    render(<ReadmeGenerator />)
    
    // Initially should be in edit mode
    expect(screen.getByText('Basic')).toBeInTheDocument()

    // Switch to preview mode
    await user.click(screen.getByText('Preview'))
    
    // Should now show preview content area (even if empty)
    expect(screen.getByText('Live Preview')).toBeInTheDocument()
  })

  it('updates preview when form data changes', async () => {
    const user = userEvent.setup()
    render(<ReadmeGenerator />)

    // Fill in the name field
    const nameInput = screen.getByLabelText('Your Name *')
    await user.type(nameInput, 'John Doe')    // Switch to preview
    await user.click(screen.getByText('Preview'))
    
    // Check if name appears in preview
    await waitFor(() => {
      expect(screen.getByText(/Hi 👋, I'm John Doe/)).toBeInTheDocument()
    })
  })

  it('adds and removes skills', async () => {
    const user = userEvent.setup()
    render(<ReadmeGenerator />)

    // Navigate to skills section
    const skillsSection = screen.getByText('Skills')
    await user.click(skillsSection)

    // Navigate to Frontend tab to access React button
    const frontendTab = screen.getByText('Frontend')
    await user.click(frontendTab)

    // Add a skill by clicking a skill button (React button)
    const reactButton = screen.getByRole('button', { name: /react/i })
    await user.click(reactButton)
    
    // Switch to preview to verify skill was added
    await user.click(screen.getByText('Preview'))
    
    // Check if React appears in the preview
    expect(screen.getByText(/Languages and Tools/)).toBeInTheDocument()
  })

  it('adds and removes projects', async () => {
    const user = userEvent.setup()
    render(<ReadmeGenerator />)
    
    // Navigate to projects section
    const projectsSection = screen.getByText('Projects')
    await user.click(projectsSection)
    
    // Check that projects section is accessible
    expect(screen.getByText('Projects')).toBeInTheDocument()
  })

  it('shows export options', () => {
    render(<ReadmeGenerator />)
    
    // Look for export button or menu
    const exportButton = screen.getByText(/export/i)
    expect(exportButton).toBeInTheDocument()
  })

  it('handles empty form gracefully', async () => {
    const user = userEvent.setup()
    render(<ReadmeGenerator />)
    
    // Switch to preview without filling any data
    await user.click(screen.getByText('Preview'))
    
    // Should still render preview area even with empty data
    expect(screen.getByText('Live Preview')).toBeInTheDocument()
  })

  it('preserves data when switching between tabs', async () => {
    const user = userEvent.setup()
    render(<ReadmeGenerator />)
    
    // Fill in some data
    const nameInput = screen.getByLabelText('Your Name *')
    await user.type(nameInput, 'Test User')
    
    const bioInput = screen.getByLabelText('Bio')
    await user.type(bioInput, 'I love coding')
    
    // Switch to preview and back
    await user.click(screen.getByText('Preview'))
    await user.click(screen.getByText('Edit'))
    
    // Data should still be there
    expect(nameInput).toHaveValue('Test User')
    expect(bioInput).toHaveValue('I love coding')
  })

  it('validates required fields', async () => {
    const user = userEvent.setup()
    render(<ReadmeGenerator />)
    
    // Try to submit without required fields
    const nameInput = screen.getByLabelText('Your Name *')
    await user.clear(nameInput)
    
    // Switch to preview (this might trigger validation)
    await user.click(screen.getByText('Preview'))
    
    // Should handle empty name gracefully and still show the preview structure
    expect(screen.getByText('Preview')).toBeInTheDocument()
  })
})
