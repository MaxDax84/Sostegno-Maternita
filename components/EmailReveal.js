import { useState } from "react";
import { useRouter } from "next/router";
import { ui } from "../data/i18n";

export default function EmailReveal({ email, btnClass }) {
  const [revealed, setRevealed] = useState(false);
  const { locale } = useRouter();
  const t = (ui[locale] || ui.it).contact;
  if (!email) return null;

  if (revealed) {
    return (
      <a href={`mailto:${email}`} className={btnClass}>
        ✉ {email}
      </a>
    );
  }

  return (
    <button onClick={() => setRevealed(true)} className={btnClass}>
      {t.showEmail}
    </button>
  );
}
