import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { PublicationList } from "@/components/publication-list";
import { publications } from "@/content/publications";

export const metadata: Metadata = { title: "Publications", description: "Publications and research output by Enda Zhao." };

export default function PublicationsPage() {
  return (
    <>
      <PageHero index="01 / Publications" title="Selected research" description="Work on language model reasoning, inference-time search, and machine-learning applications." />
      <div className="shell page-content">
        <p className="filter-note">Names in bold indicate the site author. * Equal contribution where noted by the publication.</p>
        <PublicationList publications={publications} />
      </div>
    </>
  );
}
