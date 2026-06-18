import { useState } from "react";

export default function WhatsAppReveal({ number, btnClass }) {
  const [revealed, setRevealed] = useState(false);
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
        💬 WhatsApp: {display}
      </a>
    );
  }

  return (
    <button onClick={() => setRevealed(true)} className={btnClass}>
      💬 Solo WhatsApp
    </button>
  );
}
