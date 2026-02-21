# AntarangAI Web

Landing website for AntarangAI, focused on communicating the product vision, trust surface, and conversion CTAs for Indian founders.

## Vision

- Explain AntarangAI's India-first startup intelligence.
- Guide visitors through mission, features, workflow, and demo.
- Route high-intent actions into contact/support flows.
- Keep legal and trust pages discoverable and consistent.

## Architecture

- Framework: React + TypeScript + Vite
- Routing: `react-router-dom`
- UI: Tailwind CSS + Framer Motion + Lucide icons
- Entry points:
  - App shell and routes: `/Users/rakeshreddy/antarangai/src/App.tsx`
  - Landing sections: `/Users/rakeshreddy/antarangai/src/components/`
  - Legal/content pages: `/Users/rakeshreddy/antarangai/src/pages/`

## Scripts

- `npm run dev`: local development server
- `npm run lint`: ESLint checks
- `npm run type-check`: TypeScript project checks
- `npm run validate:quality`: CTA wiring and Tailwind class hardening checks
- `npm run build`: type-check + production build
- `npm run validate`: end-to-end quality harness (`lint` + `type-check` + `validate:quality` + build)
- `npm run preview`: preview production build

## Quality Guardrails

- No dead CTA placeholders like `href="#"`.
- No dynamic Tailwind interpolation like `bg-${tone}-...` in source files.
- Primary CTA routes must point to actionable destinations (`/contact` and `#demo`).
- Demo section must expose `id="demo"` for in-page navigation.
