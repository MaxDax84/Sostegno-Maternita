import Link from "next/link";
import Layout from "../../components/Layout";
import { teamMembers } from "../../data/team";

const lastName = (m) => m.name.split(" ").pop();
const sortedTeam = [...teamMembers].sort((a, b) => lastName(a).localeCompare(lastName(b), "it"));

export default function Team() {
  return (
    <Layout
      title="Il Team"
      description="Conosci le professioniste di Portale Maternità: psicologa perinatale specializzata in gravidanza, parto, depressione post-partum, PMA, aborto e morte fetale; educatrice per la prima infanzia specializzata in ambientamento asilo nido."
      keywords="psicologa perinatale Milano, educatrice prima infanzia Como, gravidanza, parto, depressione post partum, PMA, aborto, morte fetale, ambientamento asilo nido, supporto maternità"
      canonicalPath="/team"
    >
      <div className="page-header">
        <div className="container">
          <span className="page-header-label">Chi siamo</span>
          <h1>Il nostro Team</h1>
          <p>
            Professioniste di diversa formazione e specialità, accomunate
            dalla passione per la maternità e dal desiderio di fare la
            differenza nella vita delle coppie che si avvicinano alla genitorialità.
          </p>
        </div>
      </div>

      <section className="section team-section">
        <div className="container">
          <div className="team-grid">
            {sortedTeam.map((member) => (
              <Link href={`/team/${member.slug}`} key={member.id} className="team-card-link">
                <div className="team-card">
                  <div
                    className="team-card-header"
                    style={{
                      background: member.photo
                        ? undefined
                        : `linear-gradient(135deg, ${member.bgColor}, ${member.color})`,
                    }}
                  >
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="team-photo"
                      />
                    ) : (
                      <div
                        className="team-avatar"
                        style={{ background: member.bgColor }}
                      >
                        {member.avatar}
                      </div>
                    )}
                  </div>
                  <div className="team-card-body">
                    <div className="team-name">{member.name}</div>
                    <div className="team-role">{member.role}</div>
                    <div className="team-city">
                      📍{" "}
                      <span className="team-city-short">{member.city}</span>
                      <span className="team-city-full">{member.address || member.city}</span>
                      {" "}· {member.experience}
                    </div>
                    <p className="team-bio">{member.bio}</p>
                    <div className="team-tags">
                      {member.specialties.slice(0, 3).map((s) => (
                        <span className="team-tag" key={s}>
                          {s}
                        </span>
                      ))}
                    </div>
                    <div className="team-modes">{member.modes.join(" · ")}</div>
                    <div className="team-card-cta">Scopri il profilo →</div>
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
