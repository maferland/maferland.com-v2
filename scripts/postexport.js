const fs = require('fs');

// ROBOTS.txt
const robotsTxt = `User-agent: *
Sitemap: https://maferland.com/sitemap.xml
Disallow:`;

fs.writeFileSync('out/robots.txt', robotsTxt);
console.log('robots.txt saved!');

// SITEMAP.XML
const paths = ['', '/about', '/blog'];

paths.push(
  ...fs.readdirSync('site/blog/').map((file) => {
    const rawfile = fs.readFileSync(`site/blog/${file}`);
    const post = JSON.parse(rawfile);
    return `/blog/${post.slug}`;
  }),
);

let xmlPaths = '';

paths
  .map(
    (path) => `
  <url>
    <loc>https://maferland.com${path}</loc>
  </url>`,
  )
  .forEach((xmlPath) => {
    xmlPaths += xmlPath;
  });

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${xmlPaths}
</urlset>`;

fs.writeFile('out/sitemap.xml', sitemapXml, () => {
  console.log('sitemap.xml saved!');
});

// copy `_redirects` etc.
fs.copyFile('_redirects', 'out/', () => {
  console.log('_redirects copied!');
});
