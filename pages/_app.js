import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import "../styles/globals.css";

const DURATION = 320;

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const el = useRef(null);
  const timer = useRef(null);

  useEffect(() => {
    const node = el.current;
    if (!node) return;

    const fadeOut = () => {
      clearTimeout(timer.current);
      node.style.opacity = "0";
      node.style.transform = "translateY(8px)";
    };

    const fadeIn = () => {
      // aspetta che il fade-out sia completato, poi scrolla in cima e riappare
      timer.current = setTimeout(() => {
        window.scrollTo(0, 0);
        node.style.opacity = "1";
        node.style.transform = "translateY(0)";
      }, DURATION);
    };

    router.events.on("routeChangeStart", fadeOut);
    router.events.on("routeChangeComplete", fadeIn);
    router.events.on("routeChangeError", fadeIn);

    return () => {
      clearTimeout(timer.current);
      router.events.off("routeChangeStart", fadeOut);
      router.events.off("routeChangeComplete", fadeIn);
      router.events.off("routeChangeError", fadeIn);
    };
  }, [router.events]);

  return (
    <div
      ref={el}
      style={{
        opacity: 1,
        transform: "translateY(0)",
        transition: `opacity ${DURATION}ms ease, transform ${DURATION}ms ease`,
      }}
    >
      <Component {...pageProps} />
    </div>
  );
}
