import Link from "next/link";

const links = [
  { href: "/#research", label: "Research" },
  { href: "/publications", label: "Publications" },
  { href: "/blog", label: "Notes" },
  { href: "/cv", label: "CV" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="wordmark" href="/" aria-label="Enda Zhao, home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="wordmark-icon" src="/favicon.svg" alt="" width="28" height="28" />
          <span>Enda Zhao</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
          <a className="nav-cta" href="mailto:zhao1462@purdue.edu">Email ↗</a>
        </nav>
        <details className="mobile-menu">
          <summary>Menu</summary>
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
            <a href="mailto:zhao1462@purdue.edu">Email ↗</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
