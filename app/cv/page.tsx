import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { PrintButton } from "@/components/print-button";
import { PublicationList } from "@/components/publication-list";
import { education, experience, interests } from "@/content/cv";
import { publications } from "@/content/publications";
import { profile } from "@/content/site";

export const metadata: Metadata = { title: "CV", description: "Academic curriculum vitae for Enda Zhao." };

function Entries({ items }: { items: typeof education }) {
  return items.map((item) => (
    <div className="cv-entry" key={`${item.title}-${item.institution}`}>
      <div><h3>{item.title}</h3><p><strong>{item.institution}</strong></p><p>{item.detail}</p></div>
      <time>{item.period}</time>
    </div>
  ));
}

export default function CvPage() {
  return (
    <>
      <PageHero index="03 / Curriculum Vitae" title="Academic CV" description="Education, research experience, publications, and current research interests." />
      <div className="shell page-content cv-layout">
        <aside className="cv-aside">
          <h2>{profile.name}</h2><p>{profile.role}</p><p>{profile.institution}</p><p>{profile.email}</p><PrintButton />
        </aside>
        <div>
          <section className="cv-section"><h2>Research interests</h2>{interests.map((interest) => <p key={interest}>{interest}</p>)}</section>
          <section className="cv-section"><h2>Education</h2><Entries items={education} /></section>
          <section className="cv-section"><h2>Research experience</h2><Entries items={experience} /></section>
          <section className="cv-section"><h2>Publications</h2><PublicationList publications={publications} /></section>
        </div>
      </div>
    </>
  );
}
