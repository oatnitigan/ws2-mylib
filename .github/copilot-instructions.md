# GitHub Copilot Instructions

## Project Overview
This is a book library management application built with React, TypeScript, and Vite. The application uses Shadcn UI components and TailwindCSS for styling.

## Code Style Guidelines

### TypeScript
- Use TypeScript strictly with proper type definitions
- Avoid using `any` type
- Use interfaces for object types in `src/types`
- Use type annotations for function parameters and return types

### React Components
- Use functional components with TypeScript
- Use proper props interface definitions
- Follow the existing component structure in `src/components`
- Use Shadcn UI components from `components/ui` where applicable

### State Management
- Use React hooks for state management
- Follow the pattern in `src/hooks` for custom hooks
- Maintain consistent state management patterns

### File Structure
- Place new components in `src/components`
- Place new types in `src/types`
- Place utility functions in `src/lib`
- Place custom hooks in `src/hooks`
- Place pages in `src/pages`

### Naming Conventions
- Use PascalCase for component files and names
- Use camelCase for variables, functions, and instances
- Use kebab-case for CSS class names
- Prefix interface names with 'I' (e.g., IBook)

### Component Guidelines
- Each component should have a single responsibility
- Keep components small and focused
- Use composition over inheritance
- Implement proper error handling
- Add appropriate loading states

### CSS/Styling
- Use TailwindCSS classes
- Follow the existing styling patterns
- Use the defined color scheme and design system
- Utilize Shadcn UI component styles

### Error Handling
- Implement proper error boundaries
- Use try-catch blocks where appropriate
- Display user-friendly error messages
- Log errors appropriately

### Testing
- Write unit tests for new components
- Test edge cases and error scenarios
- Follow existing test patterns
- Ensure proper type coverage

### Performance
- Optimize component renders
- Use React.memo where appropriate
- Implement proper loading states
- Consider code splitting for larger features

### Documentation
- Add JSDoc comments for functions and components
- Document complex logic
- Keep README updated with new features
- Document any new environment variables

### Git Commits
- Write clear, concise commit messages
- Follow conventional commits format
- Reference issue numbers when applicable
- Keep commits focused and atomic

## Features to Consider
When implementing new features, consider:
- Book management (CRUD operations)
- Search and filtering
- Book lending workflow
- User management
- PDF handling
- Image optimization
- Data persistence
- Error handling
- Loading states
- User feedback

## Security Considerations
- Validate user input
- Sanitize data
- Implement proper authentication
- Handle sensitive data appropriately
- Follow security best practices

## Accessibility
- Use semantic HTML
- Implement ARIA attributes
- Ensure keyboard navigation
- Maintain proper contrast ratios
- Support screen readers

## Remember
- Keep code DRY (Don't Repeat Yourself)
- Write maintainable and readable code
- Follow existing patterns and conventions
- Consider edge cases
- Implement proper error handling
- Optimize for performance
- Make components reusable
- Document your code
