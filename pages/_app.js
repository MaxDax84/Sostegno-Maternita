import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const wrapperRef = useRef(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const fadeOut = () => {
      el.style.opacity = "0";
      el.style.transform = "translateY(6px)";
    };

    const fadeIn = () => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    };

    router.events.on("routeChangeStart", fadeOut);
    router.events.on("routeChangeComplete", fadeIn);
    router.events.on("routeChangeError", fadeIn);

    return () => {
      router.events.off("routeChangeStart", fadeOut);
      router.events.off("routeChangeComplete", fadeIn);
      router.events.off("routeChangeError", fadeIn);
    };
  }, [router]);

  return (
    <div
      ref={wrapperRef}
      style={{
        opacity: 1,
        transform: "translateY(0)",
        transition: "opacity 0.35s ease, transform 0.35s ease",
      }}
    >
      <Component {...pageProps} />
    </div>
  );
}
