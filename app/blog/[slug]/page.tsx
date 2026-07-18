import Link from "next/link";
import { notFound } from "next/navigation";
import { marked } from "marked";
import { getAllPosts, getPost } from "@/lib/posts";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const html = await marked.parse(post.content);

  return (
    <article className="article-shell">
      <header className="article-header">
        <div className="blog-meta"><time dateTime={post.date}>{post.displayDate}</time><span>{post.readingTime}</span></div>
        <h1>{post.title}</h1>
        <p className="article-deck">{post.summary}</p>
      </header>
      <div className="article-content" dangerouslySetInnerHTML={{ __html: html }} />
      <Link className="back-link" href="/blog">← Back to all notes</Link>
    </article>
  );
}
