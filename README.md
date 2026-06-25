# Volta Landing Page

Marketing landing page for **Volta** — from data room to expert-reviewed Pre-IND package.

> AI drafts. Experts decide. Every claim links back to source material.

Volta is a platform that helps biotech sponsors and regulatory teams transform their data rooms into submission-ready Pre-IND briefing books. This landing page communicates Volta's value proposition, workflow, and trust model to two core audiences: **biotech sponsors** and **domain experts**.

---

## Sections

- **Hero** — Primary value proposition with key trust metrics
- **Workflow Strip** — 4-step visual overview: Data room → AI drafting → Expert review → Pre-IND package
- **Problem** — Current pain points in Pre-IND preparation
- **How It Works** — Detailed explanation of the Volta pipeline
- **Outputs** — Submission-ready deliverables overview
- **Trust Layer** — AI + human expert verification model
- **Audience Blocks** — Tailored messaging for sponsors and experts
- **Expert Network** — Domain expertise and review engagement model
- **Final CTA** — Conversion-focused closing section

---

## Design System

Inspired specifically by the product page at [datacurve.ai/products](https://datacurve.ai/products): black editorial type, neutral cream surfaces, sparse navigation, and large typographic cards.

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Neutral 50 | `#f8f6f2` | Main page background |
| Neutral 100 | `#f0ece4` | Raised sections and cards |
| Neutral 200 | `#ddd2c0` | Hairline borders and dividers |
| Neutral 500 | `#6c5e4e` | Muted labels and metadata |
| Neutral 700 | `#3b3128` | Secondary copy |
| Neutral 900 | `#1c1612` | Primary text, CTAs, dark sections |

### Typography

- **Sans (body):** Inter — approximates DataCurve's Suisse-style body type
- **Display (headlines):** Instrument Serif — approximates DataCurve's Exposure-style editorial display type
- Hero headlines: very large, black, tight line-height (`0.9`) and tight tracking
- Section headings: large editorial serif with minimal decoration
- Body text: compact, readable, closer to DataCurve's 15–18px hierarchy

### Design Principles

- **Cream + black first** — no terracotta/sage accent system
- **Large typographic cards** — product-page-inspired boxes for workflow and outputs
- **Minimal decoration** — no hero mockup, no gradients, no icon-heavy feature grid
- **Hairline structure** — neutral dividers and single-pixel borders
- **No unsupported stats** — fixed/milestone pricing is explicit, metrics are removed

---

## Tech Stack

- [Next.js](https://nextjs.org/) 16 — React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) — Type-safe development
- [Tailwind CSS v4](https://tailwindcss.com/) — Utility-first styling
- [Framer Motion](https://www.framer.com/motion/) — Animation library
- [Lucide React](https://lucide.dev/) — Icon library
- [Radix UI](https://www.radix-ui.com/) — Accessible UI primitives

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18.18 or later (LTS recommended)
- npm, yarn, or pnpm

### Installation

```bash
npm install
```

### Development

Start the local development server:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

The dev server will hot-reload as you edit files.

---

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the development server at `http://localhost:3000` |
| `npm run build` | Create an optimized production build |
| `npm run start` | Start the production server (after build) |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript type checking with `tsc --noEmit` |

---

## Project Structure

```
Volta_Landing_Page/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── layout.tsx       # Root layout (Inter + Instrument Serif fonts)
│   │   ├── page.tsx         # Landing page
│   │   └── globals.css      # Design tokens, typography, global styles
│   ├── components/
│   │   ├── layout/          # Minimal header and high-contrast footer
│   │   ├── sections/        # Page sections (Hero, How It Works, etc.)
│   │   └── ui/              # Reusable UI components (Button, Logo, Section, Reveal)
│   └── content/
│       └── site.ts          # Centralized content/configuration
├── design-board.md          # Full visual design specification
├── package.json
├── next.config.ts
├── tsconfig.json
└── README.md
```

Content is centralized in `src/content/site.ts` for easy editing of headlines, descriptions, CTAs, and navigation.

---

## Deployment

This project is configured for static export via Next.js. To build for production:

```bash
npm run build
```

The static output can be deployed to any static hosting platform (Vercel, Netlify, GitHub Pages, AWS S3, etc.).

---

## License

Private — for Volta use.
