// Runs after `vite build`. Gives every route its own HTML file with the right
// <title>, description and share tags, so crawlers and link previews (WhatsApp,
// Facebook) that do not run JavaScript still see the correct page details.
// It also writes 404.html and sitemap.xml. Page details live in src/data/seo-routes.json.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const SITE = 'https://www.libertychurchuk.com';
const routes = JSON.parse(readFileSync(join(root, 'src/data/seo-routes.json'), 'utf8'));
const base = readFileSync(join(dist, 'index.html'), 'utf8');

const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function setTitle(html, title) {
  const re = /<title>[^<]*<\/title>/;
  if (!re.test(html)) throw new Error('prerender: <title> not found in dist/index.html');
  return html.replace(re, () => `<title>${esc(title)}</title>`);
}

function setMeta(html, attr, key, value) {
  const re = new RegExp(`(<meta\\s+${attr}="${key}"\\s+content=")[^"]*(")`);
  if (!re.test(html)) throw new Error(`prerender: <meta ${attr}="${key}"> not found in dist/index.html`);
  return html.replace(re, (_, a, b) => a + esc(value) + b);
}

function addToHead(html, tag) {
  if (!html.includes('</head>')) throw new Error('prerender: </head> not found');
  return html.replace('</head>', () => `    ${tag}\n  </head>`);
}

function render({ path, title, description, noindex }) {
  const url = path === '/' ? `${SITE}/` : `${SITE}${path}`;
  let html = setTitle(base, title);
  html = setMeta(html, 'name', 'title', title);
  html = setMeta(html, 'name', 'description', description);
  html = setMeta(html, 'property', 'og:url', url);
  html = setMeta(html, 'property', 'og:title', title);
  html = setMeta(html, 'property', 'og:description', description);
  html = setMeta(html, 'name', 'twitter:title', title);
  html = setMeta(html, 'name', 'twitter:description', description);
  html = noindex
    ? addToHead(html, '<meta name="robots" content="noindex, follow" />')
    : addToHead(html, `<link rel="canonical" href="${url}" />`);
  return html;
}

// One HTML file per route: /youth -> dist/youth/index.html
for (const route of routes) {
  const html = render(route);
  const file = route.path === '/' ? join(dist, 'index.html') : join(dist, route.path, 'index.html');
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
}

// Served by CloudFront with a real 404 status for unknown URLs.
writeFileSync(
  join(dist, '404.html'),
  render({
    path: '/404',
    title: 'Page Not Found | Liberty Church',
    description: 'The page you are looking for could not be found.',
    noindex: true,
  }),
);

// Sitemap generated from the same list, so it can never drift out of date.
const urls = routes
  .filter((r) => r.sitemap !== false)
  .map(
    (r) =>
      `  <url>\n    <loc>${SITE}${r.path === '/' ? '/' : r.path}</loc>\n    <priority>${(r.priority ?? 0.8).toFixed(1)}</priority>\n  </url>`,
  )
  .join('\n');
writeFileSync(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);

console.log(`prerender: ${routes.length} pages, 404.html and sitemap.xml written`);
