import type { Publication } from "@/content/publications";

export function PublicationList({ publications }: { publications: Publication[] }) {
  return (
    <div className="publication-list">
      {publications.map((publication) => (
        <article className="publication-item" key={publication.title}>
          <div className="publication-year">{publication.year}</div>
          <div>
            <p className="publication-venue">{publication.venue}</p>
            <h3>{publication.title}</h3>
            <p className="publication-authors">
              {publication.authors.map((author, index) => (
                <span key={author}>{index > 0 ? ", " : ""}{author === "Enda Zhao" ? <strong>{author}</strong> : author}</span>
              ))}
              {publication.note ? <> · {publication.note}</> : null}
            </p>
          </div>
          <div className="publication-links" aria-label={`Links for ${publication.title}`}>
            {publication.links.map((link) => <a key={link.label} href={link.href}>{link.label}</a>)}
          </div>
        </article>
      ))}
    </div>
  );
}
