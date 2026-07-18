import { profile } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div><p className="footer-name">Enda Zhao</p><p className="footer-note">PhD Student in Computer Science · Purdue University</p></div>
        <div className="footer-links">
          <a href={profile.links.github}>GitHub ↗</a>
          <a href={profile.links.acl}>ACL Anthology ↗</a>
          <a href={profile.links.purdue}>Purdue CS ↗</a>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
