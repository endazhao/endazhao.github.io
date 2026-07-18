import type { Metadata } from "next";
import { BlogCard } from "@/components/blog-card";
import { PageHero } from "@/components/page-hero";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = { title: "Notes", description: "Research notes and academic writing by Enda Zhao." };

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <>
      <PageHero index="02 / Notes" title="Ideas in progress" description="Essays, paper reflections, and working notes on reasoning systems and the practice of research." />
      <div className="shell page-content"><div className="blog-grid">{posts.map((post) => <BlogCard key={post.slug} post={post} />)}</div></div>
    </>
  );
}
