import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/services', changefreq: 'monthly', priority: 0.8 },
  { url: '/why-us', changefreq: 'monthly', priority: 0.8 },
  { url: '/meet-the-team', changefreq: 'monthly', priority: 0.7 },
  { url: '/contact', changefreq: 'monthly', priority: 0.9 },
];

const stream = new SitemapStream({ hostname: 'https://evertrustfinancials.services' });

streamToPromise(stream).then((data) => {
  createWriteStream('./public/sitemap.xml').write(data);
});

links.forEach(link => stream.write(link));
stream.end();