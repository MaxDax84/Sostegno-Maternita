import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children, title, description }) {
  const siteTitle = title
    ? `${title} | Marcella — Sostegno alla Maternità`
    : "Marcella — Sostegno alla Maternità Fisiologica e Patologica";

  const siteDesc =
    description ||
    "Un team di professioniste specializzate nel sostegno alla maternità fisiologica e patologica. Psicologhe perinatali, ostetriche, fisioterapiste e consulenti in tutta Italia, in presenza e online.";

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDesc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDesc} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
