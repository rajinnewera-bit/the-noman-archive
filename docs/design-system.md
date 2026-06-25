# Design System

## Purpose

This document defines the visual and interaction direction for The Noman Archive at a system level. Its role is to keep future implementation aligned with the product vision: a premium, cinematic, archive-like experience that feels controlled and immersive rather than generic.

The design system is not a decorative layer added after engineering. It is part of the archive's core product behavior.

## Experience Position

The archive should look and behave like a classified digital system with narrative intent. The aesthetic should communicate seriousness, mystery, and curation. It must avoid the visual signatures of:

- WordPress-style publishing themes
- Conventional author websites
- Generic corporate dashboards
- Overwrought “dark mode” interfaces with low legibility

The desired qualities are:

- Cinematic
- Mysterious
- Minimalist
- Premium
- Elegant
- Dark
- Immersive

## Visual Language

The visual system should be built around restraint and contrast. Surfaces, typography, spacing, and transitions should create the sensation of quiet control. The product should feel authored at every layer, with no obvious traces of starter-template design language.

Recommended direction:

- Dark, low-noise surfaces with carefully managed highlights
- Strong typographic hierarchy with editorial confidence
- Sparse, meaningful use of accent color
- Borders, separators, and panels that imply classification and containment
- Motion used for reveal, transition, and orientation rather than ornament

## Core Design Principles

- Atmosphere through precision: mood should come from typography, pacing, framing, and motion rather than visual excess.
- Minimalism with intent: reduced interfaces should still feel rich and considered.
- Editorial clarity: long-form content and archive metadata must remain easy to read.
- Discovery by structure: hidden or layered content should feel intentional, not arbitrary.
- Premium restraint: every element should earn its place.
- Technical excellence: accessibility, responsiveness, and performance are part of the aesthetic standard.

## Color Strategy

The archive should default to a dark visual environment, but darkness alone is not the identity. The palette should feel archival and cinematic rather than neon, game-like, or overly monochrome.

Guidance:

- Use a deep near-black or charcoal foundation rather than pure black everywhere.
- Introduce warm or muted secondary tones that suggest paper, metal, dust, or classified material.
- Reserve brighter accents for meaningful interactive cues, active states, and rare emphasis.
- Maintain sufficient contrast for readability in all content states.

Current implementation note:

- Base tokens live in `styles/tokens.css`.
- Those tokens should evolve into semantic system tokens as the visual language is refined.

## Typography

Typography should carry a significant portion of the archive's personality. The interface must feel literary and controlled, but never theatrical to the point of harming clarity.

Current technical baseline:

- Geist Sans for interface text
- Geist Mono for structured, classified, or system-adjacent text

Future typographic direction should define:

- Display treatment for major headings and archive section titles
- Reading rhythm for long-form narrative content
- Metadata presentation for dossiers, entries, and timeline records
- Clear distinctions between narrative text, archival labels, and system UI

Typography should help separate modes of reading:

- Narrative immersion
- Metadata scanning
- Navigation and command cues

## Layout and Spacing

Layouts should feel spacious, deliberate, and controlled. The archive should never collapse into a crowded content grid or a blog-like stack of cards without strong structural framing.

Layout guidance:

- Prefer strong containment and compositional balance over loose visual flow.
- Use width intentionally for both reading views and archival browsing views.
- Preserve a mobile-first layout strategy from the beginning.
- Make density adjustable by context: chapters, dossiers, and timelines should not all use the same spatial logic.

## Motion and Transition Design

Motion is a major part of the experience, but it should be elegant and disciplined. The goal is not constant animation; the goal is controlled pacing.

Motion should primarily support:

- Scene changes between archive sections
- Reveal and conceal of sensitive or hidden information
- Orientation during navigation
- Tone-setting moments that reinforce the classified archive metaphor

Motion should avoid:

- Decorative movement without meaning
- Delays that hurt responsiveness
- Excessive effects that conflict with accessibility or performance

All motion must respect reduced-motion preferences.

## Component Philosophy

Components should be designed as archive primitives, not generic UI kit parts with a dark skin applied afterward.

Expected component families include:

- Structural primitives such as buttons, fields, dividers, tabs, badges, and overlays
- Archive-specific compositions such as dossiers, entry headers, evidence panels, timeline markers, and disclosure surfaces
- Navigation patterns for layered discovery, hidden routes, and cross-referenced material

Component design rules:

- Default to semantic HTML and robust keyboard support
- Avoid visual styles that resemble off-the-shelf admin components
- Keep states and affordances clear even when the interface is visually restrained
- Reuse primitives consistently to maintain tone

## Accessibility Standards

Accessibility is not a tradeoff against immersion. It is part of the quality bar.

Non-negotiable requirements:

- Keyboard navigability across all interactive flows
- High legibility for long-form and metadata-heavy content
- Adequate color contrast in all themes and states
- Meaningful focus states that fit the brand language
- Support for reduced motion
- Mobile usability without loss of clarity or hierarchy
- Screen-reader-friendly structure and semantics

## Performance Standards

The archive should feel fast, stable, and intentional. Performance is a design property because pacing, reveal, and immersion break down when the interface feels heavy or inconsistent.

Performance expectations:

- Fast route transitions
- Controlled asset loading
- Measured use of animation, media, and audio
- Careful handling of large content sets and search experiences

If a visual idea compromises responsiveness materially, the implementation should be reconsidered.

## SEO and Discoverability

The product should remain indexable and structurally sound for search engines without sacrificing its atmosphere. Metadata, structured content, and route architecture should support discoverability while preserving the product's controlled tone.

SEO should be treated as part of product architecture, especially for:

- Chapter entries
- Character dossiers
- Timeline records
- Archive collections

## Implementation Guidance

When feature work begins:

- Start with tokens, typography, and layout primitives before decorative detail.
- Validate desktop and mobile behavior together, not sequentially.
- Prototype interactions that support narrative pacing before scaling component count.
- Test accessibility and performance continuously rather than as a final pass.

The design system should evolve with the product, but its baseline obligation is clear: every interface decision must reinforce the feeling that the visitor is moving through a curated, high-stakes archive.
