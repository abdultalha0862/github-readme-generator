# Test Documentation

## Overview
This project includes comprehensive testing to ensure reliability and maintainability.

## Test Types

### 1. Unit Tests
Tests individual components and utilities in isolation.

**Files:**
- `src/components/__tests__/ReadmePreview.test.tsx`
- `src/utils/__tests__/exportUtils.test.ts`
- `src/components/readme-sections/__tests__/SkillsSection.test.tsx`

**Run:**
```bash
npm test
```

### 2. Integration Tests
Tests component interactions and user workflows.

**Files:**
- `src/components/__tests__/ReadmeGenerator.integration.test.tsx`

**Run:**
```bash
npm test -- ReadmeGenerator.integration
```

### 3. Test Coverage
Generate detailed coverage reports.

**Run:**
```bash
npm run test:coverage
```

## Test Scripts

| Command | Description |
|---------|-------------|
| `npm test` | Run all tests in watch mode |
| `npm run test:run` | Run all tests once |
| `npm run test:ui` | Run tests with UI interface |
| `npm run test:coverage` | Run tests with coverage report |
| `npm run test:watch` | Run tests in watch mode |

## Testing Strategy

### Components Tested
- ✅ ReadmePreview - Core preview functionality
- ✅ SkillsSection - Skill selection and management
- ✅ ReadmeGenerator - Main application integration
- ✅ Export utilities - All export formats

### Key Test Scenarios
- Form data updates and persistence
- Live preview synchronization
- Export functionality (Markdown, HTML, PDF, Plain Text)
- Skill selection and categorization
- Error handling and edge cases
- Empty state handling
- Large data set performance

### Test Data
All tests use realistic mock data that matches the actual application structure.

## CI/CD Integration
Tests can be integrated into GitHub Actions or other CI/CD pipelines:

```yaml
- name: Run Tests
  run: npm run test:run

- name: Generate Coverage
  run: npm run test:coverage
```

## Future Enhancements
- Visual regression testing with Playwright
- Performance testing
- Accessibility testing
- Cross-browser testing
