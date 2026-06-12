import { posts } from "../data/posts";
import { teamMembers } from "../data/team";

const SITE_URL =
  process.env.SITE_URL || "https://marcella-temporarysite.vercel.app";

function generateSitemap() {
  const staticPages = [
    { path: "/", priority: "1.0", changefreq: "weekly" },
    { path: "/team", priority: "0.8", changefreq: "monthly" },
    { path: "/blog", priority: "0.9", changefreq: "weekly" },
  ];
  const teamPages = teamMembers.map((m) => ({
    path: `/team/${m.slug}`,
    priority: "0.7",
    changefreq: "monthly",
  }));
  const blogPages = posts.map((p) => ({
    path: `/blog/${p.slug}`,
    priority: "0.8",
    changefreq: "monthly",
  }));

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticPages, ...teamPages, ...blogPages]
  .map(
    (p) => `  <url>
    <loc>${SITE_URL}${p.path}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;
}

export default function Sitemap() {
  return null;
}

export async function getServerSideProps({ res }) {
  res.setHeader("Content-Type", "text/xml");
  res.write(generateSitemap());
  res.end();
  return { props: {} };
}
