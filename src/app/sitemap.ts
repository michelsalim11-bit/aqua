import type { MetadataRoute } from 'next';

const SITE_URL = 'https://sejaacqua.com.br';

const routes = [
  { path: '/', priority: 1.0, changeFrequency: 'monthly' as const },
  { path: '/sobre', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/contato', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/calculadora', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/legal', priority: 0.5, changeFrequency: 'yearly' as const },
  { path: '/termos-de-uso', priority: 0.4, changeFrequency: 'yearly' as const },
  { path: '/politica-de-privacidade', priority: 0.4, changeFrequency: 'yearly' as const },
  { path: '/codigo-de-etica-e-conduta', priority: 0.4, changeFrequency: 'yearly' as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-05-30');
  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
