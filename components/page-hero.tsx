export function PageHero({ index, title, description }: { index: string; title: string; description: string }) {
  return (
    <section className="page-hero">
      <div className="shell">
        <div className="page-hero-copy">
          <p className="section-index">{index}</p>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
}
