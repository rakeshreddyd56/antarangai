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
