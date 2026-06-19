import Link from "next/link";
import Layout from "../../components/Layout";
import EmailReveal from "../../components/EmailReveal";
import WhatsAppReveal from "../../components/WhatsAppReveal";
import { teamMembers } from "../../data/team";
import { posts } from "../../data/posts";

export async function getStaticPaths() {
  return {
    paths: teamMembers.map((m) => ({ params: { slug: m.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const member = teamMembers.find((m) => m.slug === params.slug) ?? null;
  const memberPosts = posts.filter((p) => p.authorSlug === params.slug);
  return { props: { member, memberPosts } };
}

export default function TeamMember({ member, memberPosts }) {
  if (!member) return null;

  return (
    <Layout
      title={member.name}
      description={`${member.name} – ${member.role}. ${member.specialties.join(", ")}. ${member.modes.join(", ")}.`}
      keywords={member.specialties.join(", ").toLowerCase() + ", " + member.city.toLowerCase()}
      canonicalPath={`/team/${member.slug}`}
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Person",
        "name": member.name,
        "jobTitle": member.role,
        "description": member.bio,
        "worksFor": { "@type": "Organization", "name": "Portale Maternità" },
      }}
    >
      <div className="page-header page-header-short">
        <div className="container">
          <Link href="/team" className="article-back">
            ← Il Team
          </Link>
        </div>
      </div>

      <div className="member-wrapper">
        <div className="container">
          <div className="member-layout">
            {/* Sidebar */}
            <aside className="member-sidebar">
              <div className="member-photo-card">
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="member-photo-full"
                  />
                ) : (
                  <div
                    className="member-avatar-lg"
                    style={{
                      background: `linear-gradient(135deg, ${member.bgColor}, ${member.color})`,
                    }}
                  >
                    {member.avatar}
                  </div>
                )}
                <div className="member-photo-info">
                  <div className="member-photo-name">{member.name}</div>
                  <div className="member-photo-role">{member.role}</div>
                  <div className="member-photo-city">
                    📍 {member.address || member.city} · {member.experience}
                  </div>
                </div>
              </div>

              <div className="sidebar-card">
                <h3>Modalità di consulenza</h3>
                {member.modes.map((m) => (
                  <div key={m} className="member-mode-item">
                    ✓ {m}
                  </div>
                ))}
              </div>

              {member.publications && (
                <div className="sidebar-card">
                  <h3>Pubblicazioni</h3>
                  {member.publications.map((p) => (
                    <div key={p} className="member-pub-item">
                      📖 {p}
                    </div>
                  ))}
                </div>
              )}

              <EmailReveal email={member.contact} btnClass="btn btn-primary member-cta-btn" />
              <WhatsAppReveal number={member.whatsapp} btnClass="btn btn-whatsapp member-cta-btn" />
              {member.instagram && (
                <a
                  href={`https://instagram.com/${member.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-instagram member-cta-btn"
                >
                  📷 @{member.instagram}
                </a>
              )}
            </aside>

            {/* Main content */}
            <main className="member-main">
              <div className="member-section">
                <h2>Profilo Professionale</h2>
                <p>{member.bio}</p>
              </div>

              <div className="member-section">
                <h2>Aree di specializzazione</h2>
                <div className="member-specialties">
                  {member.specialties.map((s) => (
                    <div key={s} className="member-specialty-item">
                      <span className="member-specialty-dot" />
                      {s}
                    </div>
                  ))}
                </div>
              </div>

              {member.education && (
                <div className="member-section">
                  <h2>Formazione e Abilitazioni</h2>
                  <ul className="member-edu-list">
                    {member.education.map((e) => (
                      <li key={e}>{e}</li>
                    ))}
                  </ul>
                </div>
              )}

              {memberPosts.length > 0 && (
                <div className="member-section">
                  <h2>Articoli</h2>
                  <div className="member-articles">
                    {memberPosts.map((p) => (
                      <Link key={p.slug} href={`/blog/${p.slug}`} className="member-article-item">
                        <span className="member-article-category">{p.category}</span>
                        <span className="member-article-title">{p.title}</span>
                        <span className="member-article-read">{p.readTime} →</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>

      <section className="section cta-strip">
        <div className="container">
          <h2>Vuoi prenotare una consulenza?</h2>
          <p>
            Contattaci e ti metteremo in contatto con {member.name.split(" ")[1]} per
            valutare insieme il percorso più adatto a te.
          </p>
          <div className="cta-actions">
            <EmailReveal email={member.contact} btnClass="btn btn-white" />
            <WhatsAppReveal number={member.whatsapp} btnClass="btn btn-white" />
            <Link href="/team" className="btn btn-white-outline">
              Vedi tutto il team
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
