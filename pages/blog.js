import Link from "next/link";
import Layout from "../components/Layout";
import { posts } from "../data/posts";

export default function Blog() {
  return (
    <Layout
      title="Blog"
      description="Articoli su gravidanza, parto, depressione post-partum, aborto, morte fetale, PMA, infertilità, ambientamento asilo nido, ciuccio, pannolino e educazione 0-3 anni. Scritti da professioniste specializzate."
      keywords="gravidanza, parto, depressione post partum, aborto, morte fetale, PMA, infertilità, ambientamento, asilo nido, ciuccio, pannolino, regole, educazione prima infanzia, psicologia perinatale"
      canonicalPath="/blog"
    >
      <div className="page-header">
        <div className="container">
          <span className="page-header-label">Risorse</span>
          <h1>Blog</h1>
          <p>
            Articoli scritti dalle nostre professioniste per informare,
            supportare e accompagnare ogni mamma e ogni papà nel proprio
            percorso di genitorialità.
          </p>
        </div>
      </div>

      <section className="section blog-section">
        <div className="container">
          <div className="blog-grid">
            {posts.map((post) => (
              <Link
                href={`/blog/${post.slug}`}
                className="blog-card"
                key={post.id}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <div
                  className="blog-card-image"
                  style={{ background: `linear-gradient(135deg, ${post.bgColor}cc, ${post.bgColor})` }}
                >
                  <span className="blog-card-category">{post.category}</span>
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-title">{post.title}</div>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <div className="blog-card-footer">
                    <span className="blog-card-meta">
                      {post.readTime}
                    </span>
                    <span className="blog-read-more">
                      Leggi →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
