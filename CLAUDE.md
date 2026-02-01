# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website built with React and Create React App, deployed to GitHub Pages at josephbarkie.com. This is a single-page application showcasing resume information with static content rendered from data models.

## Common Commands

```bash
# Development
npm start          # Start dev server at http://localhost:3000
yarn start         # Alternative using yarn

# Testing
npm test           # Run tests in watch mode
yarn test          # Alternative using yarn

# Building & Deployment
npm run build      # Create production build in build/
npm run deploy     # Build and deploy to GitHub Pages (gh-pages branch)
yarn run deploy    # Alternative using yarn
```

## Architecture

### Component Structure
- **App.js** - Root component handling route validation (only "/" is valid)
- **Page.js** - Main page container that composes all resume sections in order:
  - About
  - Experience
  - Education
  - Skills
  - Interests
- **Sidebar.js** - Navigation sidebar (likely contains profile info and section links)
- **NotFound.js** - 404 page shown for invalid routes

### Data Models Pattern
Content is separated from components using model files in `src/models/`:
- **Jobs.js** - Array of job experience objects with title, company, date, description[]
- **Schools.js** - Array of education objects with school, degree, date, gpa, honor
- **SocialIcons.js** - Social media links data

Components import and map over these model arrays to render content. To update resume content, modify the relevant model file, not the component.

### Styling
Uses Bootstrap CSS classes (container-fluid, flex utilities, etc.) with custom CSS in `src/static/css/styles.css`. The design is responsive with mobile-specific date range classes.

### Deployment
- GitHub Pages deployment configured via `gh-pages` package
- GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically deploys when changes are pushed to main branch
  - Only triggers on content changes: `src/`, `public/`, `package.json`, `package-lock.json`, `yarn.lock`
  - Documentation changes (CLAUDE.md, README.md) do NOT trigger deployment
- Manual deployment: Run `npm run deploy` to build and deploy to gh-pages branch
- CNAME file in public/ ensures custom domain (josephbarkie.com) persists after deployment
