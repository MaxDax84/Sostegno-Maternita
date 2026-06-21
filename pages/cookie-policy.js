import Layout from "../components/Layout";
import Link from "next/link";

export default function CookiePolicy() {
  return (
    <Layout
      title="Cookie Policy"
      description="Informativa sull'uso dei cookie sul sito www.marcellamarcone.it, ai sensi del Provvedimento del Garante Privacy e del GDPR."
      canonicalPath="/cookie-policy"
    >
      <div className="page-header page-header-short">
        <div className="container">
          <span className="page-header-label">Documenti legali</span>
          <h1>Cookie Policy</h1>
        </div>
      </div>

      <section className="section">
        <div className="container legal-content">

          <p className="legal-update">Ultimo aggiornamento: giugno 2025</p>

          <p>
            La presente Cookie Policy descrive come il sito <strong>www.marcellamarcone.it</strong>,
            gestito dalla Dott.ssa Marcella Marcone, utilizza i cookie e tecnologie analoghe,
            ai sensi del D.Lgs. 196/2003, del Provvedimento del Garante dell'8 maggio 2014
            e del Regolamento UE 2016/679 (GDPR).
          </p>

          <h2>Cosa sono i cookie</h2>
          <p>
            I cookie sono piccoli file di testo che i siti web visitati dall'utente inviano
            al suo dispositivo (computer, tablet, smartphone), dove vengono memorizzati e
            ritrasmessi al sito alla visita successiva.
          </p>

          <h2>Cookie utilizzati da questo sito</h2>

          <h3>Cookie tecnici (strettamente necessari)</h3>
          <p>
            Il sito utilizza cookie tecnici indispensabili al corretto funzionamento delle
            pagine. Questi cookie non raccolgono informazioni per finalità di marketing e
            non richiedono consenso.
          </p>
          <div className="legal-table-wrap">
            <table className="legal-table">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Finalità</th>
                  <th>Durata</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>cookie_consent</code></td>
                  <td>Memorizza la preferenza sul banner informativo cookie</td>
                  <td>1 anno</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Cookie di terze parti</h3>
          <p>
            Il sito utilizza <strong>Google Fonts</strong> (Google LLC, USA) per caricare
            i caratteri tipografici. Durante il caricamento delle pagine, il browser
            dell'utente può effettuare richieste ai server di Google, trasmettendo
            l'indirizzo IP. Google Fonts non imposta cookie di profilazione. Per
            maggiori informazioni: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy di Google</a>.
          </p>

          <h3>Cookie analitici e di profilazione</h3>
          <p>
            Il sito <strong>non utilizza attualmente</strong> cookie analitici (es. Google Analytics)
            né cookie di profilazione o marketing. Qualora in futuro venissero introdotti,
            la presente Policy verrà aggiornata e sarà richiesto il consenso dell'utente.
          </p>

          <h2>Come gestire i cookie</h2>
          <p>
            Puoi disabilitare i cookie attraverso le impostazioni del tuo browser.
            Tieni presente che disabilitare i cookie tecnici potrebbe compromettere
            il corretto funzionamento del sito.
          </p>
          <ul>
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Apple Safari</a></li>
            <li><a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
          </ul>

          <h2>Modifiche alla Cookie Policy</h2>
          <p>
            Il titolare si riserva il diritto di modificare la presente Cookie Policy
            in qualsiasi momento. Le modifiche entrano in vigore dalla data di pubblicazione
            sul sito.
          </p>

          <h2>Contatti</h2>
          <p>
            Per qualsiasi domanda relativa ai cookie scrivi a:{" "}
            <a href="mailto:mmarcone@me.com">mmarcone@me.com</a>
          </p>
          <p>
            Per informazioni più ampie sul trattamento dei dati personali consulta la{" "}
            <Link href="/privacy-policy">Privacy Policy</Link>.
          </p>

        </div>
      </section>
    </Layout>
  );
}
