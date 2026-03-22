# Liberty Church Website - Vite + React

This project has been converted from Next.js to Vite + React.

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Key Changes from Next.js

- **Routing**: Now uses React Router instead of Next.js file-based routing
- **Images**: Using standard `<img>` tags instead of Next.js `<Image>` component
- **Links**: Using React Router's `<Link>` instead of Next.js `Link`
- **Fonts**: Loaded via Google Fonts in `index.html` instead of Next.js font optimization
- **Build Tool**: Vite instead of Next.js/Webpack

## Project Structure

```
├── src/
│   ├── pages/          # Page components
│   ├── App.tsx         # Main app with routes
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── components/         # Reusable components
├── public/            # Static assets
├── index.html         # HTML template
└── vite.config.ts     # Vite configuration
```

## Technologies

- React 18
- TypeScript
- Vite
- React Router
- Tailwind CSS
- Framer Motion
- Radix UI
- Lucide Icons
