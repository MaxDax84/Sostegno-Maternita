import { useState } from "react";

export default function EmailReveal({ email, btnClass }) {
  const [revealed, setRevealed] = useState(false);
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
      Mostra contatto
    </button>
  );
}
