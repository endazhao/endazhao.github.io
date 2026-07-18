import Link from "next/link";
import type { Post } from "@/lib/posts";

export function BlogCard({ post }: { post: Post }) {
  return (
    <Link className="blog-card" href={`/blog/${post.slug}`}>
      <div className="blog-meta"><time dateTime={post.date}>{post.displayDate}</time><span>{post.readingTime}</span></div>
      <h3>{post.title}</h3>
      <p>{post.summary}</p>
      <span className="blog-card-link">Read note <span aria-hidden="true">→</span></span>
    </Link>
  );
}
