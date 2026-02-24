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
- `npm run test`: route/widget regression suite (Vitest + Testing Library)
- `npm run test:watch`: watch mode for local test development
- `npm run validate:quality`: CTA wiring and Tailwind class hardening checks
- `npm run build`: type-check + production build
- `npm run validate`: end-to-end quality harness (`lint` + `type-check` + `test` + `validate:quality` + build)
- `npm run preview`: preview production build

## Contact Form Delivery

- Set `VITE_CONTACT_FORM_ENDPOINT` to enable direct API delivery from `/contact`.
- If `VITE_CONTACT_FORM_ENDPOINT` is not set, the form falls back to opening a pre-filled `mailto:` draft so user input is not silently discarded.

## Quality Guardrails

- No dead CTA placeholders like `href="#"`.
- No dynamic Tailwind interpolation like `bg-${tone}-...` in source files.
- Primary CTA routes must point to actionable destinations (`/contact` and `#demo`).
- Demo section must expose `id="demo"` for in-page navigation.
# AntarangAI Marketing Site

AntarangAI is a React + TypeScript + Vite marketing site for an India-first AI startup intelligence product.

## Stack
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router

## Local Development
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start dev server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```
4. Lint:
   ```bash
   npm run lint
   ```

## Routes
- `/` landing page
- `/about`
- `/blog`
- `/blog/:slug`
- `/investors`
- `/contact`
- `/support`
- `/legal`
- `/privacy`
- `/terms`
- `/cookies`

## Structure
- `src/components` shared sections and visuals
- `src/pages` route-level pages
- `public/assets` static images and branding assets

## Deployment Notes
- SPA fallback is configured for Netlify and Vercel:
  - `netlify.toml`
  - `public/_redirects`
  - `vercel.json`
- `public/404.html` stores intended path and redirects to `/` for static hosts that do not support SPA deep-link routing.

## Current Quality Baseline
- CTA buttons are wired to real destinations (contact/demo/blog).
- Tailwind class usage avoids dynamic color interpolation in page components.
- ESLint is configured with TypeScript + React Hooks + React Refresh rules.
