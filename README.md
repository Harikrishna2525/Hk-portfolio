# Hari Krishna R — AWS Infrastructure & DevOps Portfolio

A responsive engineering portfolio for **Hari Krishna R**, AWS Infrastructure & DevOps Engineer. Built with React, Vite, TypeScript, Tailwind CSS, Framer Motion and Lucide React.

The site presents three engineering projects as the main focus:

1. **Highly Available & Auto-Healing Web Infrastructure on AWS using Terraform** — Completed
2. **Secure CI/CD Pipeline with Automated Security Scanning** — Completed
3. **Kubernetes Container Orchestration with Amazon EKS and Argo CD** — In Progress

Project and skill status labels are deliberate. Completed work, work in progress and planned integrations are separated throughout the site.

## Tech stack

- React 19 + Vite 8
- TypeScript
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Framer Motion
- Lucide React
- Custom HTML/SVG architecture diagrams
- Google Fonts: Sora, Inter and JetBrains Mono

## Getting started

Requirements: Node.js 20.19+ (or 22.12+ recommended) and npm.

```bash
npm install
npm run dev
```

Vite will start the local development server, usually at `http://localhost:5173`.

### Available scripts

```bash
npm run dev        # Start the development server
npm run build      # Type-check and create a production build in dist/
npm run preview    # Preview the production build locally
npm run typecheck  # Run TypeScript without emitting files
npm run lint       # Run Oxlint
```

## Before publishing

### 1. Review the contact email

The email address is configured in one place:

```ts
// src/data/site.ts
email: 'harikrish58027@gmail.com'
```

It is used by the contact section, the copy-to-clipboard button, the mailto form and the footer email link. Update this value if it changes.

### 2. Review the supplied links

These links are already set exactly as provided:

- LinkedIn — https://www.linkedin.com/in/hari-krish-13300b27a/
- GitHub — https://github.com/Harikrishna2525
- Resume — https://drive.google.com/file/d/1K4d8MkZDP8mwvcyzUc0WBTKrtOPltsUT/view?usp=sharing

No GitHub repository URLs are invented on the site. Project cards deliberately do not link to repositories.

### 3. Keep project statuses accurate

- EKS cluster, managed node groups and the application deployment are marked **In Progress**.
- Argo CD and Kubernetes skills are marked **In Progress**.
- AWS Secrets Manager application integration is marked **Planned**. The Secrets Management section explicitly describes the target pattern rather than claiming a completed integration.
- The CI/CD project is marked **Completed**, with a scope note explaining that security scanners are configured as pipeline stages but are not all blocking deployment gates.

Update `src/data/projects.ts` and `src/data/skills.ts` when the implementation state changes.

## Project structure

```text
src/
  components/
    diagrams/
      DiagramPrimitives.tsx
      ProjectOneDiagram.tsx
      ProjectTwoDiagram.tsx
      ProjectThreeDiagram.tsx
    icons/
      BrandIcons.tsx
    About.tsx
    Contact.tsx
    Footer.tsx
    Hero.tsx
    Navbar.tsx
    ProjectCard.tsx
    Projects.tsx
    Reveal.tsx
    SecretsManagement.tsx
    SectionHeading.tsx
    Skills.tsx
    StatusBadge.tsx
  data/
    projects.ts
    site.ts
    skills.ts
  hooks/
    useActiveSection.ts
  App.tsx
  index.css
  main.tsx
  vite-env.d.ts
public/
  favicon.svg
  robots.txt
index.html
```

## Content editing

- **Personal details, links, email, hero stack** → `src/data/site.ts`
- **Skills, statuses and security tool descriptions** → `src/data/skills.ts`
- **Projects, highlights, architecture descriptions and scope notes** → `src/data/projects.ts`
- **Navigation items** → `navItems` in `src/data/site.ts`

## Design and accessibility notes

- Sticky navigation with active-section tracking, a scroll progress indicator and a full-height mobile menu.
- Smooth anchor navigation with header offset via `scroll-margin-top`.
- Reduced-motion support through Framer Motion and a global `prefers-reduced-motion` rule.
- Skip-to-content link, visible keyboard focus styles, semantic landmarks, labelled form fields and aria-labelled controls.
- Architecture diagrams include screen-reader text descriptions; decorative internals are hidden from assistive technology.
- WCAG AA contrast targets for body and caption text.
- External links open in a new tab with `rel="noopener noreferrer"`.
- SEO metadata and Person structured data are defined in `index.html`.

## Deployment

The output is a static Vite build:

```bash
npm run build
```

Deploy the generated `dist/` directory to any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages, S3 + CloudFront, etc.).

If a production domain is added, consider adding a canonical URL, an Open Graph image and a `sitemap.xml`.
