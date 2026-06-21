import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              Portale Maternità
            </div>
            <p className="footer-desc">
              Un team di professioniste specializzate nel sostegno alla maternità
              fisiologica e patologica. Perché nessuna mamma dovrebbe affrontare
              questo percorso da sola.
            </p>
          </div>

          <div className="footer-col">
            <h4>Navigazione</h4>
            <Link href="/">Home</Link>
            <Link href="/team">Il Team</Link>
            <Link href="/blog">Blog</Link>
          </div>

          <div className="footer-col">
            <h4>Contatti</h4>
            <span style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>
              Ogni professionista ha un recapito dedicato.
            </span>
            <Link href="/team" style={{ fontSize: "0.82rem", fontWeight: 600, color: "rgba(255,255,255,0.75)", marginTop: 10 }}>
              Scopri il team →
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} Portale Maternità. Tutti i diritti riservati.</span>
          <span>I contenuti del sito sono a scopo informativo e non sostituiscono il parere medico.</span>
          <span className="footer-legal-links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            {" · "}
            <Link href="/cookie-policy">Cookie Policy</Link>
          </span>
        </div>
        <div className="footer-credits">
          Sito realizzato da{" "}
          <a href="https://www.massimodassano.it" target="_blank" rel="noopener noreferrer">
            Massimo Dassano
          </a>
        </div>
      </div>
    </footer>
  );
}
