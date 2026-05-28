import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const links = [
    { href: "/", label: "Home" },
    { href: "/team", label: "Il Team" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="container navbar-inner">
          <Link href="/" className="navbar-logo">
            Portale Maternità
          </Link>

          <div className="navbar-links">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={router.pathname === l.href ? "active" : ""}
              >
                {l.label}
              </Link>
            ))}
            <Link href="mailto:info@marcella.it" className="navbar-cta">
              Contattaci
            </Link>
          </div>

          <button
            className="navbar-hamburger"
            onClick={() => setOpen(!open)}
            aria-label="Apri menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${open ? " open" : ""}`}>
        {links.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </Link>
        ))}
        <Link href="mailto:info@marcella.it" onClick={() => setOpen(false)}>
          Contattaci
        </Link>
      </div>
    </>
  );
}
