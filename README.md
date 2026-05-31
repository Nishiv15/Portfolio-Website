# Portfolio Website

A responsive software developer portfolio built with React, Vite, TypeScript, Tailwind CSS, and shadcn-style UI components.

## Features

- Modern responsive portfolio layout
- Dark mode enabled by default
- Navbar with mobile menu and theme toggle
- Profile summary, education, skills, projects, and contact sections
- GitHub, LinkedIn, live project, and email links
- Portfolio content managed from `frontend/src/lib/portfolio.ts`

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn-style reusable components
- Lucide React icons

## Project Structure

```text
frontend/
  src/
    components/
      ui/
      ContactSection.tsx
      EducationSection.tsx
      Header.tsx
      HeroSection.tsx
      ProjectsSection.tsx
      SummarySection.tsx
    lib/
      portfolio.ts
      utils.ts
    App.tsx
    main.tsx
    styles.css
```