import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import LocalizedLink from "../../components/LocalizedLink";
import Layout from "../../components/Layout";
import { teamMembers } from "../../data/team";
import { localizeMember } from "../../lib/team";
import { ui } from "../../data/i18n";

const lastName = (m) => m.name.split(" ").pop();
const normalize = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

export default function Team() {
  const { locale } = useRouter();
  const t = (ui[locale] || ui.it).team;
  const sortLocale = locale === "en" ? "en" : "it";
  const sortedTeam = teamMembers
    .map((m) => localizeMember(m, locale))
    .sort((a, b) => lastName(a).localeCompare(lastName(b), sortLocale));
  const [searchQuery, setSearchQuery] = useState("");
  const query = normalize(searchQuery.trim());
  const filteredTeam = sortedTeam.filter(
    (m) =>
      !query ||
      [m.name, m.role, m.category, ...m.specialties].some((f) => f && normalize(f).includes(query))
  );

  return (
    <Layout
      title={t.pageTitle}
      description={t.metaDesc}
      keywords="psicologa perinatale Milano, educatrice prima infanzia Como, gravidanza, parto, depressione post partum, PMA, aborto, morte fetale, ambientamento asilo nido, supporto maternità"
      canonicalPath="/team"
    >
      <div className="page-header">
        <div className="container">
          <span className="page-header-label">{t.pageLabel}</span>
          <h1>{t.pageTitle}</h1>
          <p>
            {t.pageDesc}
          </p>
        </div>
      </div>

      <section className="section team-section">
        <div className="container">
          <input
            type="search"
            className="blog-search"
            placeholder={t.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label={t.searchPlaceholder}
          />

          {filteredTeam.length === 0 && (
            <p className="blog-no-results">{t.noResults}</p>
          )}

          <div className="team-grid">
            {filteredTeam.map((member) => (
              <LocalizedLink href={`/team/${member.slug}`} key={member.id} className="team-card-link">
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
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 220px"
                        className="team-photo"
                        style={{ objectFit: "contain" }}
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
                      {member.experience && <>{" "}· {member.experience}</>}
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
                    <div className="team-card-cta">{t.cardCta}</div>
                  </div>
                </div>
              </LocalizedLink>
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
}
