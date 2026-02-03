# AGENTS.md - Development Guidelines for Darckmaker Web

This document contains essential information for AI agents working on this Next.js portfolio website.

## Project Overview

- **Framework**: Next.js 16 with React 18
- **UI Library**: Chakra UI 2.8 with custom theme
- **Animations**: Framer Motion 10
- **Language**: JavaScript (ES6+) - No TypeScript
- **Content**: MDX for blog posts, gray-matter for frontmatter parsing
- **Styling**: Chakra UI components + theme system

## Development Commands

### Core Commands

```bash
# Start development server (accessible on all interfaces)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code (ESLint with Next.js config)
npm run lint

# Format code (Prettier)
npm run prettier
```

### Running Tests

This project currently has no test suite configured. To add tests:

1. Install testing framework (Jest, Vitest, etc.)
2. Add test scripts to package.json
3. Create test files with `.test.js` or `.spec.js` suffix

## Code Style Guidelines

### 1. Formatting (Prettier Configuration)

- **Quotes**: Single quotes (`'`)
- **Semicolons**: None (avoid)
- **Arrow Parens**: Avoid parentheses when possible
- **Trailing Commas**: None
- **Tab Width**: 2 spaces
- **End of Line**: LF
- **Bracket Spacing**: True

### 2. Import Organization

```javascript
// External libraries (React, Chakra UI, etc.)
import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import { motion } from 'framer-motion'

// Internal components (relative imports)
import Layout from '../components/layouts/main'
import Section from '../components/section'

// Utilities and lib functions
import { getAllPosts } from '../lib/posts'
```

### 3. File Naming Conventions

- **Components**: PascalCase (e.g., `PostCard.js`, `ThemeToggleButton.js`)
- **Utilities/Lib**: camelCase (e.g., `posts.js`, `constants.js`)
- **Pages**: Next.js conventions (index.js, [slug].js, etc.)
- **Directories**: kebab-case for feature folders (e.g., `layouts/main.js`)

### 4. Component Structure

#### Component Header Comments

````javascript
/**
 * ============================================================================
 * COMPONENT NAME - BRIEF DESCRIPTION
 * ============================================================================
 *
 * Detailed explanation of the component's purpose, usage patterns, and
 * any important implementation details.
 *
 * USAGE EXAMPLES:
 * ```jsx
 * <Component prop="value">
 *   Children
 * </Component>
 * ```
 */
````

#### Component Pattern

```javascript
// Imports first
import { Box, Heading } from '@chakra-ui/react'
import { motion } from 'framer-motion'

// Styled components (if any)
const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => shouldForwardProp(prop) || prop === 'transition'
})

// Component definition with JSDoc
const Component = ({ children, delay = 0 }) => (
  <StyledDiv
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay }}
  >
    {children}
  </StyledDiv>
)

export default Component
```

### 5. Props and Destructuring

- Use destructuring for props: `const { children, delay = 0 } = props`
- Provide default values for optional props
- Use JSDoc comments for prop documentation

### 6. State and Event Handlers

- Use `useState` and `useEffect` hooks as needed
- Prefix unused variables with underscore: `_unusedVar`
- Event handlers should be named with `handle` prefix: `handleClick`, `handleSubmit`

### 7. Error Handling

- Use nullish coalescing for safe defaults: `data.title ?? 'Default'`
- Provide fallback values for potentially undefined data
- Use try-catch blocks for async operations that might fail

### 8. Chakra UI Integration

- Import Chakra components individually: `import { Box, Heading } from '@chakra-ui/react'`
- Use theme-aware colors with `mode()` helper for dark/light mode
- Custom theme colors available: `grassTeal: '#88ccca'`
- Responsive props: Use array syntax `[base, md, lg]`

### 9. Framer Motion Integration

- Use `chakra(motion.div)` pattern for styled motion components
- Configure `shouldForwardProp` to allow Framer Motion props
- Common animation pattern: `initial={{ y: 10, opacity: 0 }}` → `animate={{ y: 0, opacity: 1 }}`

### 10. File Organization

```
components/
├── layouts/          # Layout components (main, article)
├── pets/            # Animated pet components
├── icons/           # Custom SVG icons
├── chakra.js        # Chakra provider wrapper
├── navbar.js        # Navigation component
└── section.js       # Animated section wrapper

lib/
├── theme.js         # Chakra UI theme configuration
├── posts.js         # Blog post utilities
└── constants.js     # Global constants

pages/
├── _app.js          # Next.js app wrapper
├── _document.js     # HTML document structure
├── index.js         # Home page
├── works.js         # Works listing
├── posts/           # Blog pages
└── works/           # Individual work pages
```

## SSR Considerations

### Theme Persistence

- All pages using SSR must export `getServerSideProps` from `components/chakra.js`
- This ensures proper theme (dark/light mode) persistence between server and client
- Export pattern: `export { getServerSideProps } from '../components/chakra'`

### Server-Side Props Pattern

```javascript
export { getServerSideProps } from '../components/chakra'
// OR custom implementation
export async function getServerSideProps({ req }) {
  return {
    props: {
      cookies: req.headers.cookie ?? ''
    }
  }
}
```

## Blog Post Structure

Posts are MDX files in `data/posts/` with YAML frontmatter:

```mdx
---
title: 'Post Title'
description: 'Brief description'
createdAt: '2024-01-15'
updatedAt: '2024-01-20'
tags: ['tag1', 'tag2']
heroImage: '/images/posts/image.jpg'
---

Content in Markdown format...
```

## Color Scheme

- **Light Mode**: Background `#f0e7db` (beige)
- **Dark Mode**: Background `#202023` (dark gray)
- **Accent**: `#88ccca` (grass teal)
- **Links**: `#3d7aed` (light) / `#ff63c3` (dark)

## ESLint Rules

- No unused variables (unless prefixed with `_`)
- React displayName rule disabled
- Extends Next.js ESLint configuration

## Development Workflow

1. **Before coding**: Run `npm run dev` to start development server
2. **While coding**: Use `npm run prettier` to format files
3. **Before committing**: Run `npm run lint` to check for issues
4. **Before deployment**: Run `npm run build` to ensure production build succeeds

## Important Notes

- No TypeScript - use JavaScript with JSDoc comments
- All components should support both light and dark themes
- Use semantic HTML5 elements when possible
- Images should be optimized using Next.js Image component
- Analytics are configured through Vercel Analytics
- Scroll restoration is manual to work with page transitions
