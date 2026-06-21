import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookie_consent")) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie_consent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-banner-inner">
        <p className="cookie-banner-text">
          Questo sito utilizza cookie tecnici necessari al suo funzionamento.
          Non utilizziamo cookie di profilazione o marketing.{" "}
          <Link href="/cookie-policy" className="cookie-banner-link">
            Maggiori informazioni
          </Link>
        </p>
        <button className="cookie-banner-btn" onClick={accept}>
          Ho capito
        </button>
      </div>
    </div>
  );
}
