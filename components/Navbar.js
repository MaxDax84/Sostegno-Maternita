import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { teamMembers } from "../data/team";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [teamOpen, setTeamOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <nav className="navbar">
        <div className="container navbar-inner">
          <Link href="/" className="navbar-logo">
            Portale Maternità
          </Link>

          <div className="navbar-links">
            <Link href="/" className={router.pathname === "/" ? "active" : ""}>
              Home
            </Link>

            {/* Dropdown Il Team */}
            <div className="navbar-dropdown">
              <Link
                href="/team"
                className={router.pathname.startsWith("/team") ? "active navbar-dropdown-trigger" : "navbar-dropdown-trigger"}
              >
                Il Team <span className="navbar-dropdown-arrow">▾</span>
              </Link>
              <div className="navbar-dropdown-menu">
                <Link href="/team" className="navbar-dropdown-all">
                  Tutto il team
                </Link>
                <div className="navbar-dropdown-divider" />
                {teamMembers.map((m) => (
                  <Link
                    key={m.slug}
                    href={`/team/${m.slug}`}
                    className="navbar-dropdown-item"
                  >
                    <span className="navbar-dropdown-name">{m.name}</span>
                    <span className="navbar-dropdown-role">{m.role}</span>
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/blog" className={router.pathname.startsWith("/blog") ? "active" : ""}>
              Blog
            </Link>

            <Link href="mailto:mmarcone@me.com" className="navbar-cta">
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

      {/* Mobile menu */}
      <div className={`mobile-menu${open ? " open" : ""}`}>
        <Link href="/" onClick={() => setOpen(false)}>Home</Link>

        <button
          className="mobile-menu-team-toggle"
          onClick={() => setTeamOpen(!teamOpen)}
        >
          Il Team <span>{teamOpen ? "▴" : "▾"}</span>
        </button>
        {teamOpen && (
          <div className="mobile-menu-submenu">
            <Link href="/team" onClick={() => { setOpen(false); setTeamOpen(false); }}>
              Tutto il team
            </Link>
            {teamMembers.map((m) => (
              <Link
                key={m.slug}
                href={`/team/${m.slug}`}
                onClick={() => { setOpen(false); setTeamOpen(false); }}
              >
                {m.name}
              </Link>
            ))}
          </div>
        )}

        <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
        <Link href="mailto:mmarcone@me.com" onClick={() => setOpen(false)}>
          Contattaci
        </Link>
      </div>
    </>
  );
}
