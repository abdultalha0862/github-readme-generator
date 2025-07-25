# 🌟 GitHub README Generator

<div align="center">

![GitHub README Generator](https://img.shields.io/badge/GitHub-README%20Generator-blue?style=for-the-badge&logo=github)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.4.1-646CFF?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.11-06B6D4?style=for-the-badge&logo=tailwindcss)

**Create beautiful GitHub profile READMEs with live preview and export functionality**

[🚀 Live Demo](#) | [📖 Documentation](#features) | [🐛 Report Bug](https://github.com/abdultalha0862/github-readme-generator/issues) | [💡 Request Feature](https://github.com/abdultalha0862/github-readme-generator/issues)

</div>

## ✨ Features

### 🎨 **Visual Editor**
- **Live Preview**: Real-time preview of your README as you edit
- **Tabbed Interface**: Organized sections for easy navigation
- **Auto-save**: Automatic local storage persistence every 3 seconds
- **Reset Function**: Clear all data with a single click
- **Responsive Design**: Works seamlessly on desktop and mobile

### 📝 **Content Sections**
- **Profile Information**: Name, title, bio, and personal details
- **Work & Learning**: Current projects, collaborations, and learning goals
- **Social Links**: Connect all your social media profiles with auto-generated icons
- **Skills & Technologies**: Categorized skill selection with 200+ technologies
- **GitHub Statistics**: Stats cards, streak stats, top languages, trophies, and visitor count
- **Featured Projects**: Showcase your best work with links and technologies

### 📊 **Skill Categories**
- **Programming Languages** (JavaScript, Python, Java, etc.)
- **Frontend** (React, Vue, Angular, etc.)
- **Backend** (Node.js, Django, Spring, etc.)
- **Mobile** (React Native, Flutter, Swift, etc.)
- **Databases** (MongoDB, PostgreSQL, MySQL, etc.)
- **DevOps** (Docker, Kubernetes, AWS, etc.)
- **Testing** (Jest, Cypress, Selenium, etc.)
- **AI/ML** (TensorFlow, PyTorch, scikit-learn, etc.)
- **Design** (Figma, Photoshop, Sketch, etc.)
- **Version Control** (Git, GitHub, GitLab, etc.)

### 📤 **Export Options**
- **Markdown (.md)**: Ready-to-use README.md file
- **HTML**: Styled HTML version with custom CSS
- **PDF**: Professional PDF document
- **Plain Text**: Clean text format
- **Copy to Clipboard**: Quick copy functionality

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abdultalha0862/github-readme-generator.git
   cd github-readme-generator
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to start using the generator.

## 🛠️ Tech Stack

### **Frontend**
- **React 18.3.1** - Modern React with hooks and concurrent features
- **TypeScript 5.5.3** - Type-safe development
- **Vite 5.4.1** - Lightning-fast build tool and dev server
- **TailwindCSS 3.4.11** - Utility-first CSS framework

### **UI Components**
- **Radix UI** - Accessible, unstyled UI primitives
- **shadcn/ui** - Beautiful, customizable components
- **Lucide React** - Clean, consistent icons
- **React Hook Form** - Efficient form management

### **State Management & Utils**
- **React Query** - Server state management
- **LocalStorage API** - Client-side data persistence
- **jsPDF** - PDF generation
- **Class Variance Authority** - Type-safe styling

### **Development Tools**
- **ESLint** - Code linting and quality
- **Vitest** - Fast unit testing framework
- **Testing Library** - React component testing
- **PostCSS & Autoprefixer** - CSS processing

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                    # Reusable UI components
│   ├── readme-sections/       # README form sections
│   │   ├── ProfileSection.tsx
│   │   ├── WorkSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── ProjectsSection.tsx
│   ├── ReadmeGenerator.tsx    # Main application component
│   ├── ReadmePreview.tsx      # Live preview component
│   └── ExportMenu.tsx         # Export functionality
├── utils/
│   └── exportUtils.ts         # Export logic and utilities
├── hooks/                     # Custom React hooks
├── lib/                       # Utility functions
└── pages/                     # Application pages
```

## 🧪 Testing

The project includes comprehensive testing with:

- **Unit Tests**: Component and utility function testing
- **Integration Tests**: Full application workflow testing
- **Export Testing**: All export formats validation

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests with UI
npm run test:ui

# Run tests once
npm run test:run
```

## 📦 Build & Deployment

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🎯 Usage Guide

### 1. **Basic Setup**
- Fill in your name, title, and bio in the "Basic" tab
- Add your GitHub username for stats integration

### 2. **Work Information**
- Add current work, collaboration interests, and learning goals
- Include links to relevant projects or organizations

### 3. **Social Connections**
- Add your social media profiles
- Icons are automatically generated for popular platforms

### 4. **Skills Selection**
- Browse skills by category (Programming, Frontend, Backend, etc.)
- Click to add/remove skills with visual feedback
- Skills are organized and displayed with official technology icons

### 5. **GitHub Statistics**
- Enable/disable various GitHub stats widgets
- Preview how stats will appear in your README

### 6. **Featured Projects**
- Add your best projects with descriptions
- Include technology stacks and project links

### 7. **Export & Use**
- Copy markdown directly to clipboard
- Download in multiple formats (MD, HTML, PDF, TXT)
- Paste into your GitHub profile README

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [devicons](https://devicons.github.io/devicon/) - Technology icons
- [GitHub README Stats](https://github.com/anuraghazra/github-readme-stats) - GitHub statistics
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Radix UI](https://www.radix-ui.com/) - Accessible primitives

## 🔗 Links

- **Repository**: [github.com/abdultalha0862/github-readme-generator](https://github.com/abdultalha0862/github-readme-generator)
- **Issues**: [Report bugs or request features](https://github.com/abdultalha0862/github-readme-generator/issues)
- **Discussions**: [Join the community](https://github.com/abdultalha0862/github-readme-generator/discussions)

---

<div align="center">

**Made with ❤️ by [Abdul Talha](https://github.com/abdultalha0862)**

⭐ Star this repo if you found it helpful!

</div>
