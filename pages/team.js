import Layout from "../components/Layout";
import { teamMembers } from "../data/team";

export default function Team() {
  return (
    <Layout
      title="Il Team"
      description="Conosci le professioniste di Portale Maternità: psicologhe perinatali, ostetriche, fisioterapiste, consulenti per l'allattamento e nutrizioniste specializzate nella maternità."
    >
      <div className="page-header">
        <div className="container">
          <span className="page-header-label">Chi siamo</span>
          <h1>Il nostro Team</h1>
          <p>
            Professioniste di diversa formazione e specialità, accomunate
            dalla passione per la maternità e dal desiderio di fare la
            differenza nella vita delle donne.
          </p>
        </div>
      </div>

      <section className="section team-section">
        <div className="container">
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div className="team-card" key={member.id}>
                <div
                  className="team-card-header"
                  style={{
                    background: `linear-gradient(135deg, ${member.bgColor}, ${member.color})`,
                  }}
                >
                  <div
                    className="team-avatar"
                    style={{ background: member.bgColor }}
                  >
                    {member.avatar}
                  </div>
                </div>
                <div className="team-card-body">
                  <div className="team-name">{member.name}</div>
                  <div className="team-role">{member.role}</div>
                  <div className="team-city">📍 {member.city} · {member.experience}</div>
                  <p className="team-bio">{member.bio}</p>
                  <div className="team-tags">
                    {member.specialties.map((s) => (
                      <span className="team-tag" key={s}>
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="team-modes">
                    {member.modes.join(" · ")}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-strip">
        <div className="container">
          <h2>Hai bisogno di supporto?</h2>
          <p>
            Scrivici e ti aiuteremo a trovare la professionista più adatta
            alla tua situazione e alle tue esigenze.
          </p>
          <div className="cta-actions">
            <a href="mailto:info@marcella.it" className="btn btn-white">
              Contattaci
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
