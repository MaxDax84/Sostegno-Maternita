import { useState } from "react";
import { useRouter } from "next/router";
import { ui } from "../data/i18n";

// Bandierine SVG (le emoji bandiera non si vedono su Windows)
const flags = {
  "39": (
    <svg viewBox="0 0 3 2" width="18" height="12" aria-label="Italia" style={{ flexShrink: 0, borderRadius: 2 }}>
      <rect width="1" height="2" fill="#009246" />
      <rect x="1" width="1" height="2" fill="#fff" />
      <rect x="2" width="1" height="2" fill="#ce2b37" />
    </svg>
  ),
  "41": (
    <svg viewBox="0 0 32 32" width="14" height="14" aria-label="Svizzera" style={{ flexShrink: 0, borderRadius: 2 }}>
      <rect width="32" height="32" fill="#d52b1e" />
      <rect x="13" y="6" width="6" height="20" fill="#fff" />
      <rect x="6" y="13" width="20" height="6" fill="#fff" />
    </svg>
  ),
};

const formatNumber = (n) =>
  n.startsWith("41")
    ? `+41 ${n.slice(2, 4)} ${n.slice(4, 7)} ${n.slice(7, 9)} ${n.slice(9)}`
    : `+${n.slice(0, 2)} ${n.slice(2, 5)} ${n.slice(5, 8)} ${n.slice(8, 10)} ${n.slice(10)}`;

export default function WhatsAppReveal({ number, btnClass }) {
  if (Array.isArray(number)) {
    return number.map((n) => (
      <WhatsAppButton key={n} number={n} btnClass={btnClass} showFlag />
    ));
  }
  return <WhatsAppButton number={number} btnClass={btnClass} />;
}

function WhatsAppButton({ number, btnClass, showFlag }) {
  const [revealed, setRevealed] = useState(false);
  const { locale } = useRouter();
  const t = (ui[locale] || ui.it).contact;
  if (!number) return null;

  const display = formatNumber(number);
  const flag = showFlag ? flags[number.slice(0, 2)] : null;

  if (revealed) {
    return (
      <a
        href={`https://wa.me/${number}`}
        target="_blank"
        rel="noopener noreferrer"
        className={btnClass}
      >
        {flag || "💬"} {t.whatsappLabel}: {display}
      </a>
    );
  }

  return (
    <button onClick={() => setRevealed(true)} className={btnClass}>
      {flag || "💬"} {t.whatsappOnly}
    </button>
  );
}
