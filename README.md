# The Noman Archive

The Noman Archive is a production-grade web platform for an immersive digital experience built around the psychological thriller novel *Noman*. It is not intended to function as a conventional author site, blog, or promotional microsite. The product vision is closer to a classified archive: controlled, cinematic, mysterious, and precise.

This repository currently contains the technical and documentation foundation only. No public-facing pages, feature components, or sample content have been implemented yet by design.

## Product Positioning

The archive should feel like entry into a restricted system rather than arrival at a marketing website. Its job is to translate the tone of *Noman* into an interactive digital environment that supports discovery, tension, and narrative depth without sacrificing clarity, performance, or accessibility.

The product should avoid patterns commonly associated with:

- Traditional author websites
- Generic content-management themes
- WordPress-style blogs
- Overdecorated “story” sites that trade usability for novelty

The intended experience is:

- Cinematic
- Mysterious
- Minimalist
- Premium
- Elegant
- Dark
- Immersive

## Repository Scope

Included in the current foundation:

- Next.js 16 application shell with App Router
- TypeScript and Tailwind CSS setup
- Shared styling tokens and global styles
- Production-oriented folder structure
- Core product documentation for vision, design, and roadmap

Explicitly out of scope at this stage:

- Route pages
- Dummy components
- Sample chapters or archive entries
- Temporary filler copy
- Feature-specific business logic

## Technology Stack

- Next.js 16
- React 19
- TypeScript 5
- Tailwind CSS 4
- ESLint with Next.js core web vitals rules

## Architectural Direction

The codebase is being prepared for long-term evolution into an immersive narrative platform with structured content and layered discovery. The foundation anticipates future work in:

- Interactive chapters
- Character dossiers
- Timeline views
- Hidden pages and secret archive entries
- Animated transitions
- Optional ambient audio
- Searchable archive content
- Collectibles and easter eggs
- Mobile-first responsive design
- Excellent accessibility
- Excellent performance
- SEO

These capabilities are not implemented yet, but the structure is intended to support them without a major reorganization later.

## Project Structure

```text
.
|-- app/
|   |-- globals.css
|   `-- layout.tsx
|-- components/
|-- content/
|   |-- chapters/
|   |-- characters/
|   `-- world/
|-- docs/
|   |-- design-system.md
|   |-- roadmap.md
|   `-- vision.md
|-- lib/
|-- public/
|-- styles/
|   `-- tokens.css
|-- .gitignore
|-- eslint.config.mjs
|-- next-env.d.ts
|-- next.config.ts
|-- package-lock.json
|-- package.json
|-- postcss.config.mjs
|-- README.md
`-- tsconfig.json
```

## Directory Responsibilities

- `app/`: App Router foundation, root layout, and global style entrypoint.
- `components/`: Future reusable UI primitives and composed interface building blocks.
- `lib/`: Shared application logic, utilities, content helpers, and future server-side modules.
- `public/`: Static assets such as icons, imagery, maps, downloadable files, and future social metadata assets.
- `content/`: Structured narrative and reference content owned by the archive.
- `content/chapters/`: Chapter source material and related chapter-level metadata.
- `content/characters/`: Character dossiers, reference records, and relationship metadata.
- `content/world/`: Worldbuilding records such as locations, timelines, classifications, and lore.
- `docs/`: Product, design, and planning documentation.
- `styles/`: Cross-cutting style layers and design tokens.

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

The application does not currently expose finished routes. At this stage, the repository is meant to establish standards, structure, and documentation before product implementation begins.

## Available Scripts

- `npm run dev`: Start the local Next.js development server with Turbopack.
- `npm run build`: Create a production build.
- `npm run start`: Run the production server from the built output.
- `npm run lint`: Run ESLint across the repository.
- `npm run typecheck`: Run TypeScript in no-emit mode.

## Documentation Index

- [Vision](./docs/vision.md)
- [Design System](./docs/design-system.md)
- [Roadmap](./docs/roadmap.md)

## Engineering Principles

- Establish product clarity before interface sprawl.
- Keep content structure independent from presentation decisions.
- Build for long-term maintainability, not short-term demos.
- Favor atmosphere and restraint over visual noise.
- Treat accessibility and performance as core product qualities, not polish tasks.
- Preserve enough architectural flexibility to support hidden content, discovery mechanics, and progressive expansion.

## Status

Current status: foundation complete, implementation not yet started.

The next stage should define content architecture, information architecture, and the first real user journeys before any route-level UI is built.
