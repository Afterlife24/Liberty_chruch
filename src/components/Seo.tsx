import { Helmet } from 'react-helmet-async';
import routes from '../data/seo-routes.json';

interface SeoProps {
  /** Route path, e.g. "/youth". Title and description come from src/data/seo-routes.json. */
  path: string;
  title?: string;
  description?: string;
  image?: string;
  noindex?: boolean;
}

const SITE = 'https://www.libertychurchuk.com';
const DEFAULT_IMAGE = `${SITE}/images/Liberty Website-Hero Banner.jpg`;

export default function Seo({ path, title, description, image = DEFAULT_IMAGE, noindex }: SeoProps) {
  const entry = routes.find((r) => r.path === path);
  const pageTitle = title ?? entry?.title ?? 'Liberty Church | Newport & Risca, Wales';
  const pageDescription = description ?? entry?.description ?? '';
  const hidden = noindex ?? (entry as { noindex?: boolean } | undefined)?.noindex ?? false;
  const url = path === '/' ? `${SITE}/` : `${SITE}${path}`;
  // Image paths contain spaces, so they must be URL-encoded for social previews.
  const imageUrl = encodeURI(image);

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={pageDescription} />
      {hidden ? <meta name="robots" content="noindex, follow" /> : <link rel="canonical" href={url} />}

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
}
