import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { teamMembers } from "../data/team";

// Group by category, alphabetically sorted within each group and by category name
const lastName = (m) => m.name.split(" ").pop();
const groupedTeam = Object.entries(
  [...teamMembers]
    .sort((a, b) => lastName(a).localeCompare(lastName(b), "it"))
    .reduce((acc, m) => {
      const cat = m.category || "Altro";
      (acc[cat] = acc[cat] || []).push(m);
      return acc;
    }, {})
).sort(([a], [b]) => a.localeCompare(b, "it"));

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [teamOpen, setTeamOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => { setOpen(false); setTeamOpen(false); };
    router.events.on("routeChangeStart", handleRouteChange);
    return () => router.events.off("routeChangeStart", handleRouteChange);
  }, [router.events]);

  return (
    <>
      <nav className="navbar">
        <div className="container navbar-inner">
          <Link href="/" className="navbar-logo">
            Sostegno Maternità
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
                {groupedTeam.map(([category, members]) => (
                  <div key={category}>
                    <div className="navbar-dropdown-divider" />
                    <div className="navbar-dropdown-category">{category}</div>
                    {members.map((m) => (
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
            className={`navbar-hamburger${open ? " is-open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label={open ? "Chiudi menu" : "Apri menu"}
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Backdrop */}
      {open && <div className="mobile-menu-backdrop" onClick={() => setOpen(false)} />}

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
            {groupedTeam.map(([category, members]) => (
              <div key={category}>
                <div className="mobile-menu-submenu-category">{category}</div>
                {members.map((m) => (
                  <Link
                    key={m.slug}
                    href={`/team/${m.slug}`}
                    onClick={() => { setOpen(false); setTeamOpen(false); }}
                  >
                    {m.name}
                  </Link>
                ))}
              </div>
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
