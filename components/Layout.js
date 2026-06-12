import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const SITE_URL = process.env.SITE_URL || "";

export default function Layout({ children, title, description, keywords, canonicalPath, jsonLd }) {
  const siteTitle = title
    ? `${title} | Portale Maternità`
    : "Portale Maternità — Sostegno alla Maternità Fisiologica e Patologica";

  const siteDesc =
    description ||
    "Team di professioniste specializzate in gravidanza, parto, depressione post-partum, infertilità, PMA, aborto, morte fetale e psicologia perinatale. Supporto in presenza a Milano e online.";

  const canonical = canonicalPath ? `${SITE_URL}${canonicalPath}` : null;

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDesc} />
        {keywords && <meta name="keywords" content={keywords} />}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="it_IT" />
        {canonical && <meta property="og:url" content={canonical} />}
        {canonical && <link rel="canonical" href={canonical} />}
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
        {jsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        )}
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
