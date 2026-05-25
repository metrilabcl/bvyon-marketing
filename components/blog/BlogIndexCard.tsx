import Link from "next/link";
import Image from "next/image";
import CategoryPill from "./CategoryPill";
import type { PostMeta } from "@/lib/blog";

interface Props {
  post: PostMeta;
}

export default function BlogIndexCard({ post }: Props) {
  const { frontmatter, category, slug, readingTime } = post;
  const href = `/blog/${category}/${slug}`;

  return (
    <article className="bg-white rounded-2xl border border-primary-light overflow-hidden hover:shadow-lg hover:border-accent/30 transition-all group">
      <Link href={href} className="block relative h-48 bg-primary/5">
        <Image
          src={frontmatter.coverImage}
          alt={frontmatter.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </Link>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <CategoryPill category={category} asLink />
          <span className="text-xs text-slate">{readingTime}</span>
        </div>
        <Link href={href}>
          <h2
            className="text-lg font-bold text-primary mb-2 leading-snug group-hover:text-accent transition-colors line-clamp-2"
            style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
          >
            {frontmatter.title}
          </h2>
        </Link>
        <p className="text-slate text-sm leading-relaxed mb-4 line-clamp-3">{frontmatter.excerpt}</p>
        <div className="flex items-center justify-between">
          <time className="text-xs text-slate" dateTime={frontmatter.date}>
            {new Date(frontmatter.date + "T12:00:00").toLocaleDateString("es-CL", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <Link
            href={href}
            className="text-xs font-semibold text-accent hover:underline"
          >
            Leer más →
          </Link>
        </div>
      </div>
    </article>
  );
}
