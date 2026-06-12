import Link from "next/link";
import Layout from "../../components/Layout";
import { posts } from "../../data/posts";

export async function getStaticPaths() {
  return {
    paths: posts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = posts.find((p) => p.slug === params.slug) || null;
  const related = posts.filter((p) => p.slug !== params.slug).slice(0, 3);
  return { props: { post, related } };
}

function renderBlock(block, i) {
  switch (block.type) {
    case "h2":
      return <h2 key={i}>{block.text}</h2>;
    case "h3":
      return <h3 key={i}>{block.text}</h3>;
    case "p":
      return <p key={i}>{block.text}</p>;
    case "ul":
      return (
        <ul key={i}>
          {block.items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ul>
      );
    case "highlight":
      return (
        <div className="highlight-box" key={i}>
          <p>{block.text}</p>
        </div>
      );
    default:
      return null;
  }
}

export default function BlogPost({ post, related }) {
  if (!post) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Person",
      "name": post.author,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Portale Maternità",
    },
    ...(post.date && { "datePublished": post.date }),
  };

  return (
    <Layout
      title={post.title}
      description={post.excerpt}
      keywords={post.keywords}
      canonicalPath={`/blog/${post.slug}`}
      jsonLd={jsonLd}
    >
      <div className="article-wrapper">
        <div className="container">
          <Link href="/blog" className="article-back">
            ← Torna al Blog
          </Link>

          <div className="article-layout">
            {/* ── MAIN CONTENT ── */}
            <article>
              <div
                className="article-banner"
                style={{
                  background: `linear-gradient(145deg, ${post.bgColor}ee, ${post.bgColor}99)`,
                }}
              >
                <span className="article-banner-category">{post.category}</span>
                <h1 className="article-banner-title">{post.title}</h1>
                <div className="article-banner-meta">
                  {post.readTime} di lettura
                </div>
              </div>

              <div className="article-body">
                {post.content.map((block, i) => renderBlock(block, i))}
              </div>

              <div
                style={{
                  marginTop: 48,
                  padding: "24px",
                  background: "var(--white)",
                  borderRadius: "var(--radius)",
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <div
                  className="sidebar-avatar"
                  style={{ background: post.authorColor, width: 52, height: 52, fontSize: "1rem" }}
                >
                  {post.authorAvatar}
                </div>
                <div>
                  {post.authorSlug ? (
                    <Link
                      href={`/team/${post.authorSlug}`}
                      style={{ fontWeight: 600, fontSize: "0.95rem", color: "var(--green)", textDecoration: "underline", textUnderlineOffset: 3 }}
                    >
                      {post.author}
                    </Link>
                  ) : (
                    <div style={{ fontWeight: 600, fontSize: "0.95rem", color: "var(--text)" }}>
                      {post.author}
                    </div>
                  )}
                  <div style={{ fontSize: "0.82rem", color: "var(--text-light)", marginTop: 2 }}>
                    {post.authorRole}
                  </div>
                  <div style={{ fontSize: "0.82rem", color: "var(--text-light)", marginTop: 2 }}>
                    {post.readTime} di lettura
                  </div>
                </div>
              </div>
            </article>

            {/* ── SIDEBAR ── */}
            <aside className="article-sidebar">
              <div className="sidebar-card">
                <h3>Altri articoli</h3>
                {related.map((p) => (
                  <Link href={`/blog/${p.slug}`} className="sidebar-post" key={p.id}>
                    <div className="sidebar-post-title">{p.title}</div>
                    <div className="sidebar-post-date">{p.readTime}</div>
                  </Link>
                ))}
              </div>

              <div className="sidebar-card">
                <h3>Hai bisogno di supporto?</h3>
                <p style={{ fontSize: "0.86rem", color: "var(--text-mid)", lineHeight: 1.7, marginBottom: 16 }}>
                  Il nostro team è pronto ad ascoltarti. Contattaci per trovare
                  la professionista più adatta a te.
                </p>
                <a
                  href="mailto:mmarcone@me.com"
                  className="btn btn-primary"
                  style={{ width: "100%", justifyContent: "center", fontSize: "0.85rem" }}
                >
                  Scrivici
                </a>
              </div>

              <div className="sidebar-card">
                <h3>Il nostro team</h3>
                <Link href="/team" style={{ display: "block", marginTop: 8 }}>
                  <div style={{ fontSize: "0.86rem", color: "var(--text-mid)", lineHeight: 1.7, marginBottom: 12 }}>
                    Psicologhe, ostetriche, fisioterapiste, consulenti e nutrizioniste
                    specializzate nella maternità.
                  </div>
                  <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--green)" }}>
                    Conosci il team →
                  </span>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </Layout>
  );
}
