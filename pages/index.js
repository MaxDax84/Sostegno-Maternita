import Link from "next/link";
import Layout from "../components/Layout";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "name": "Portale Maternità",
  "url": process.env.SITE_URL,
  "description":
    "Team di professioniste specializzate in supporto psicologico perinatale: gravidanza, parto, depressione post-partum, infertilità, PMA, aborto, morte fetale, ambientamento asilo nido.",
  "areaServed": { "@type": "Country", "name": "Italy" },
  "availableLanguage": "Italian",
};

export default function Home() {
  return (
    <Layout
      canonicalPath="/"
      keywords="gravidanza, parto, depressione post partum, infertilità, PMA, aborto, morte fetale, lutto perinatale, psicologia perinatale, ambientamento asilo nido, educazione prima infanzia, supporto maternità Milano, psicologa gravidanza"
      jsonLd={jsonLd}
    >
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg-circle" />
        <div className="hero-bg-circle" />
        <div className="container">
          <div className="hero-content">
            <span className="hero-tag">Professioniste della Maternità</span>
            <h1 className="hero-title">
              Sostegno alla Maternità
            </h1>
            <p className="hero-subtitle">Fisiologica e Patologica</p>
            <p className="hero-desc">
              Un team di professionisti e professioniste di diversa formazione accomunate
              dall'interesse e dalla competenza per la maternità in tutte le sue
              forme. Al tuo fianco, in ogni momento del percorso.
            </p>
            <div className="hero-actions">
              <Link href="/team" className="btn btn-white">
                Conosci il Team
              </Link>
              <Link href="/blog" className="btn btn-white-outline">
                Leggi il Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHI SIAMO ── */}
      <section className="section chi-siamo" id="chi-siamo">
        <div className="container">
          <div>
            <span className="section-label">Chi Siamo</span>
            <h2 className="section-title">
              Una comunità di professioniste<br />per ogni maternità
            </h2>
            <div className="chi-siamo-text">
              <p>
                Siamo un gruppo di professioniste di diversa formazione e
                specialità — psicologhe perinatali, ostetriche, fisioterapiste,
                consulenti per l'allattamento, nutrizioniste — accomunate
                dall'interesse profondo per la maternità in tutte le sue
                dimensioni.
              </p>
              <p>
                Ci siamo incontrate lavorando in questo campo e abbiamo
                deciso di costruire qualcosa insieme: un punto di riferimento
                integrato per le donne che vivono la gravidanza, il parto e il
                post-partum, sia quando tutto va bene, sia quando qualcosa è
                più difficile del previsto.
              </p>
              <p>
                La nostra visione è semplice: ogni madre merita supporto
                professionale, umano e privo di giudizio. Nessuna deve
                affrontare questo percorso da sola.
              </p>
            </div>
            <Link href="/team" className="btn btn-primary" style={{ marginTop: 8 }}>
              Conosci le professioniste →
            </Link>
          </div>
        </div>
      </section>

      {/* ── COSA FACCIAMO ── */}
      <section className="section cosa-facciamo" id="cosa-facciamo">
        <div className="container">
          <div className="features-intro">
            <span className="section-label">Cosa Facciamo</span>
            <h2 className="section-title">
              Supporto su misura,<br />ovunque tu sia
            </h2>
            <p className="section-desc">
              Lavoriamo in diverse città d'Italia, sia in presenza che online,
              sia con gruppi che individualmente. Ogni percorso è costruito
              intorno a te.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🗺️</div>
              <div className="feature-title">In tutta Italia</div>
              <p className="feature-desc">
                Le nostre professioniste operano a Milano, Roma, Torino,
                Bologna e altre città. Trova chi è vicina a te.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💻</div>
              <div className="feature-title">Online</div>
              <p className="feature-desc">
                Tutte le nostre consulenze sono disponibili anche in
                modalità online — senza barriere geografiche, nei tuoi
                tempi.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👤</div>
              <div className="feature-title">Percorsi individuali</div>
              <p className="feature-desc">
                Colloqui, consulenze e follow-up personalizzati con la
                professionista più adatta alle tue esigenze specifiche.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <div className="feature-title">Gruppi di supporto</div>
              <p className="feature-desc">
                Gruppi tematici per neomamme, mamme in attesa, donne
                che attraversano una maternità difficile. Condividere
                aiuta.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏥</div>
              <div className="feature-title">Gravidanza patologica</div>
              <p className="feature-desc">
                Sostegno specializzato per gravidanze ad alto rischio,
                lutti perinatali, infertilità e percorsi di PMA.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌿</div>
              <div className="feature-title">Approccio integrato</div>
              <p className="feature-desc">
                Psicologia, ostetricia, fisioterapia, allattamento,
                nutrizione, medicina integrata: professioniste diverse che lavorano in
                sinergia per te.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section cta-strip">
        <div className="container">
          <h2>Non devi affrontarlo da sola</h2>
          <p>
            Qualunque sia il tuo momento — prima, durante o dopo la gravidanza —
            c'è una professionista pronta ad ascoltarti.
          </p>
          <div className="cta-actions">
            <Link href="/team" className="btn btn-white">
              Trova la tua professionista
            </Link>
            <Link href="/blog" className="btn btn-white-outline">
              Leggi i nostri articoli
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
