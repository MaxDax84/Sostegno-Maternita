import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              Marcella<span>.</span>
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
            <h4>Aree di competenza</h4>
            <span>Psicologia perinatale</span>
            <span>Ostetricia</span>
            <span>Fisioterapia pelvica</span>
            <span>Consulenza allattamento</span>
            <span>Nutrizione</span>
          </div>

          <div className="footer-col">
            <h4>Contatti</h4>
            <Link href="mailto:info@marcella.it">info@marcella.it</Link>
            <span style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.4)", marginTop: 8 }}>
              Lavoriamo in tutta Italia, in presenza e online.
            </span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} Marcella — Sostegno alla Maternità. Tutti i diritti riservati.</span>
          <span>I contenuti del sito sono a scopo informativo e non sostituiscono il parere medico.</span>
        </div>
      </div>
    </footer>
  );
}
