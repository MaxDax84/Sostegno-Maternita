import { useState } from "react";
import { useRouter } from "next/router";
import { ui } from "../data/i18n";

export default function WhatsAppReveal({ number, btnClass }) {
  const [revealed, setRevealed] = useState(false);
  const { locale } = useRouter();
  const t = (ui[locale] || ui.it).contact;
  if (!number) return null;

  const display = `+${number.slice(0, 2)} ${number.slice(2, 5)} ${number.slice(5, 8)} ${number.slice(8, 10)} ${number.slice(10)}`;

  if (revealed) {
    return (
      <a
        href={`https://wa.me/${number}`}
        target="_blank"
        rel="noopener noreferrer"
        className={btnClass}
      >
        💬 {t.whatsappLabel}: {display}
      </a>
    );
  }

  return (
    <button onClick={() => setRevealed(true)} className={btnClass}>
      💬 {t.whatsappOnly}
    </button>
  );
}
