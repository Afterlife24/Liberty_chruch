# Next.js to Vite + React Conversion Notes

## What Was Changed

### 1. Build System
- Removed Next.js and its dependencies
- Added Vite and @vitejs/plugin-react
- Created `vite.config.ts` for Vite configuration
- Created `index.html` as the entry point

### 2. Routing
- Replaced Next.js file-based routing with React Router
- Created `src/App.tsx` with route definitions
- Moved all pages from `app/*/page.tsx` to `src/pages/*Page.tsx`
- Updated all `next/link` imports to `react-router-dom`

### 3. Images
- Replaced Next.js `<Image>` components with standard `<img>` tags
- Images are now served directly from the `public` folder

### 4. Fonts
- Removed Next.js font optimization (`next/font/google`)
- Added Google Fonts links directly in `index.html`
- Updated CSS to use font-family variables

### 5. Metadata
- Moved metadata from `app/layout.tsx` to `index.html` meta tags

### 6. Entry Point
- Created `src/main.tsx` as the React entry point
- Removed Next.js specific files (`next.config.mjs`, `app/layout.tsx`)

### 7. Styles
- Moved `app/globals.css` to `src/index.css`
- Updated font variable references

### 8. Dependencies Updated
- Removed: `next`, `@vercel/analytics`
- Added: `vite`, `@vitejs/plugin-react`, `react-router-dom`
- Downgraded React from v19 to v18 for better compatibility

## Files to Delete (Old Next.js Files)

You can safely delete these Next.js-specific files:
- `app/` folder (all contents)
- `next.config.mjs`
- `next-env.d.ts` (if exists)
- `.next/` folder (if exists)

## How to Run

1. Delete `node_modules` and `package-lock.json`:
   ```bash
   rm -rf node_modules package-lock.json
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run development server:
   ```bash
   npm run dev
   ```

4. Open http://localhost:3000

## Known Differences

1. **No automatic image optimization** - Images are served as-is
2. **Client-side routing only** - No server-side rendering
3. **Manual route configuration** - Routes defined in `src/App.tsx`
4. **No API routes** - Would need separate backend or use Vite plugins

## Benefits of Vite

- Faster development server startup
- Instant hot module replacement (HMR)
- Simpler configuration
- Better TypeScript support out of the box
- Smaller bundle sizes
