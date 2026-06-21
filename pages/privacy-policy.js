import Layout from "../components/Layout";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <Layout
      title="Privacy Policy"
      description="Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR) per il sito www.marcellamarcone.it."
      canonicalPath="/privacy-policy"
    >
      <div className="page-header page-header-short">
        <div className="container">
          <span className="page-header-label">Documenti legali</span>
          <h1>Privacy Policy</h1>
        </div>
      </div>

      <section className="section">
        <div className="container legal-content">

          <p className="legal-update">Ultimo aggiornamento: giugno 2025</p>

          <p>
            La presente informativa è resa ai sensi dell'art. 13 del Regolamento UE 2016/679
            (GDPR) agli utenti che visitano il sito <strong>www.marcellamarcone.it</strong>.
          </p>

          <h2>1. Titolare del trattamento</h2>
          <p>
            <strong>Dott.ssa Marcella Marcone</strong><br />
            Via Sansovino 3 – Milano<br />
            Email: <a href="mailto:mmarcone@me.com">mmarcone@me.com</a>
          </p>

          <h2>2. Dati raccolti e finalità</h2>

          <h3>Dati di navigazione</h3>
          <p>
            I sistemi informatici e le procedure software preposte al funzionamento del sito
            acquisiscono, nel corso del loro normale esercizio, alcuni dati la cui trasmissione
            è implicita nell'uso dei protocolli di comunicazione Internet (indirizzo IP,
            tipo di browser, sistema operativo, pagine visitate, data e ora della visita).
            Questi dati sono utilizzati esclusivamente per finalità statistiche anonime e per
            verificare il corretto funzionamento del sito. Non sono conservati oltre il tempo
            strettamente necessario.
          </p>

          <h3>Dati forniti volontariamente</h3>
          <p>
            Quando ci contatti tramite email o WhatsApp, i dati personali che fornisci
            (nome, indirizzo email, numero di telefono, contenuto del messaggio) vengono
            trattati esclusivamente per rispondere alla tua richiesta e, se necessario,
            per fornirti il servizio richiesto.
          </p>

          <h2>3. Base giuridica del trattamento</h2>
          <ul>
            <li><strong>Dati di navigazione:</strong> legittimo interesse del titolare (art. 6, par. 1, lett. f) GDPR) alla sicurezza e al corretto funzionamento del sito.</li>
            <li><strong>Richieste di contatto:</strong> esecuzione di misure precontrattuali o contrattuali (art. 6, par. 1, lett. b) GDPR) oppure consenso dell'interessato.</li>
          </ul>

          <h2>4. Conservazione dei dati</h2>
          <p>
            I dati di navigazione vengono conservati per il tempo strettamente necessario
            alla loro elaborazione. I dati forniti volontariamente tramite contatto diretto
            sono conservati per il tempo necessario a gestire la richiesta e, in seguito,
            per il periodo previsto dagli obblighi di legge.
          </p>

          <h2>5. Destinatari dei dati</h2>
          <p>
            I dati non sono ceduti a terzi né diffusi. Possono essere comunicati a soggetti
            che forniscono servizi tecnici necessari al funzionamento del sito (hosting,
            infrastruttura cloud), designati come responsabili del trattamento ai sensi
            dell'art. 28 GDPR. Il sito è ospitato su <strong>Vercel Inc.</strong>
            (USA), che aderisce a standard di adeguatezza approvati dalla Commissione Europea.
          </p>

          <h2>6. Font di terze parti</h2>
          <p>
            Il sito utilizza Google Fonts, un servizio di Google LLC (USA), che carica
            file tipografici dai server di Google. In questo processo l'indirizzo IP
            dell'utente può essere trasmesso a Google. Per maggiori informazioni:
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"> Privacy Policy di Google</a>.
          </p>

          <h2>7. Diritti dell'interessato</h2>
          <p>Ai sensi degli artt. 15–22 GDPR, hai il diritto di:</p>
          <ul>
            <li>Accedere ai tuoi dati personali</li>
            <li>Richiederne la rettifica o la cancellazione</li>
            <li>Opporti al trattamento o richiederne la limitazione</li>
            <li>Richiedere la portabilità dei dati</li>
            <li>Revocare il consenso in qualsiasi momento, senza pregiudicare la liceità del trattamento precedente</li>
            <li>Proporre reclamo all'autorità di controllo (Garante per la Protezione dei Dati Personali – <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">www.garanteprivacy.it</a>)</li>
          </ul>
          <p>
            Per esercitare i tuoi diritti scrivi a: <a href="mailto:mmarcone@me.com">mmarcone@me.com</a>
          </p>

          <h2>8. Cookie</h2>
          <p>
            Per informazioni dettagliate sull'uso dei cookie consulta la nostra{" "}
            <Link href="/cookie-policy">Cookie Policy</Link>.
          </p>

        </div>
      </section>
    </Layout>
  );
}
