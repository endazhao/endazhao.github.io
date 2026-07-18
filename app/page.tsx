import Link from "next/link";
import { BlogCard } from "@/components/blog-card";
import { PublicationList } from "@/components/publication-list";
import { profile, researchThemes } from "@/content/site";
import { publications } from "@/content/publications";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts().slice(0, 2);

  return (
    <>
      <section className="hero shell">
        <div className="hero-copy reveal">
          <p className="eyebrow">Computer Science · Purdue University</p>
          <h1>Enda Zhao</h1>
          <p className="hero-role">PhD Student</p>
          <p className="hero-intro">{profile.shortBio}</p>
          <div className="hero-links" aria-label="Profile links">
            <Link href="/publications">Publications <span aria-hidden="true">→</span></Link>
            <Link href="/cv">Academic CV <span aria-hidden="true">→</span></Link>
            <a href={`mailto:${profile.email}`}>Email <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <aside className="portrait-card reveal reveal-delay" aria-label="Profile">
          <div className="portrait-frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={profile.avatar} alt="Enda Zhao" />
          </div>
          <div className="portrait-caption">
            <span className="status-dot" aria-hidden="true" />
            <div><strong>Purdue University</strong><span>West Lafayette, Indiana</span></div>
          </div>
        </aside>
      </section>

      <section className="section shell" id="research">
        <div className="section-heading">
          <p className="section-index">01 / Research</p>
          <h2>Building reasoning systems that stay grounded.</h2>
          <p>My work sits at the intersection of language model reasoning, inference-time computation, and reliable generation.</p>
        </div>
        <div className="theme-grid">
          {researchThemes.map((theme, index) => (
            <article className="theme-card" key={theme.title}>
              <span>0{index + 1}</span>
              <h3>{theme.title}</h3>
              <p>{theme.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-tinted">
        <div className="shell">
          <div className="section-heading section-heading-row">
            <div><p className="section-index">02 / Selected work</p><h2>Recent publications</h2></div>
            <Link className="text-link" href="/publications">All publications <span aria-hidden="true">→</span></Link>
          </div>
          <PublicationList publications={publications.slice(0, 2)} />
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading section-heading-row">
          <div><p className="section-index">03 / Notes</p><h2>Ideas in progress</h2></div>
          <Link className="text-link" href="/blog">Read all notes <span aria-hidden="true">→</span></Link>
        </div>
        <div className="blog-grid">
          {posts.map((post) => <BlogCard key={post.slug} post={post} />)}
        </div>
      </section>

      <section className="contact-band">
        <div className="shell contact-band-inner">
          <div><p className="section-index">Let’s talk</p><h2>Interested in reasoning, search, or reliable AI?</h2></div>
          <a className="button button-light" href={`mailto:${profile.email}`}>Get in touch <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </>
  );
}
