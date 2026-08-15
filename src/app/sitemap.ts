import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nkacademy.com';

  const routes = ['', '/about', '/contact', '/results', '/demo', '/resources'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const programs = ['ssc', 'cbse', 'icse', 'science', 'commerce', 'neet', 'jee', 'sanskrit'].map((program) => ({
    url: `${baseUrl}/programs/${program}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...routes, ...programs];
}
