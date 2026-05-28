import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import "../styles/globals.css";

// Durata di ciascuna fase (copertura e rivelazione)
const FADE = 240;

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const overlay = useRef(null);
  const revealTimer = useRef(null);

  useEffect(() => {
    const el = overlay.current;
    if (!el) return;

    // 1. Copre la pagina attuale con l'overlay
    const cover = () => {
      clearTimeout(revealTimer.current);
      el.style.opacity = "1";
      el.style.pointerEvents = "all";
    };

    // 2. Aspetta che l'overlay sia completamente opaco (FADE ms),
    //    poi scrolla in cima e rivela la nuova pagina
    const reveal = () => {
      revealTimer.current = setTimeout(() => {
        window.scrollTo(0, 0);
        el.style.opacity = "0";
        el.style.pointerEvents = "none";
      }, FADE);
    };

    router.events.on("routeChangeStart", cover);
    router.events.on("routeChangeComplete", reveal);
    router.events.on("routeChangeError", reveal);

    return () => {
      clearTimeout(revealTimer.current);
      router.events.off("routeChangeStart", cover);
      router.events.off("routeChangeComplete", reveal);
      router.events.off("routeChangeError", reveal);
    };
  }, [router.events]);

  return (
    <>
      {/* Overlay che copre la pagina durante il cambio route */}
      <div
        ref={overlay}
        style={{
          position: "fixed",
          inset: 0,
          background: "#F6F2EC",
          zIndex: 9999,
          opacity: 0,
          pointerEvents: "none",
          transition: `opacity ${FADE}ms ease`,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
