import Link from "next/link";
import Image from "next/image";
import CategoryPill from "./CategoryPill";
import type { PostMeta } from "@/lib/blog";

const AUTHOR = "Bastian Vega Yon";

interface Props {
  post: PostMeta;
}

export default function BlogIndexCard({ post }: Props) {
  const { frontmatter, category, slug, readingTime } = post;
  const href = `/blog/${category}/${slug}`;

  return (
    <article className="bv-card" style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <Link
        href={href}
        aria-label={frontmatter.title}
        style={{ display: "block", position: "relative", height: 190, overflow: "hidden" }}
      >
        <Image
          src={frontmatter.coverImage}
          alt=""
          fill
          className="object-cover bv-card-img"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </Link>
      <div style={{ padding: 22, display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
          <CategoryPill category={category} asLink />
          <span style={{ fontSize: 12, color: "#6b7488" }}>{readingTime}</span>
        </div>
        <Link href={href} style={{ textDecoration: "none", color: "#fff" }}>
          <h2
            style={{ fontSize: 17, fontWeight: 800, lineHeight: 1.35, margin: "0 0 8px" }}
            className="bv-card-title"
          >
            {frontmatter.title}
          </h2>
        </Link>
        <p style={{ fontSize: 13.5, color: "#aab2c5", lineHeight: 1.55, margin: "0 0 12px" }}>
          {frontmatter.excerpt}
        </p>
        {frontmatter.tags && frontmatter.tags.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
            {frontmatter.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog?tag=${encodeURIComponent(tag)}`}
                className="bv-tag"
                style={{
                  fontSize: 11,
                  padding: "3px 9px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,.05)",
                  border: "1px solid rgba(255,255,255,.08)",
                  color: "#aab2c5",
                  textDecoration: "none",
                }}
              >
                #{tag}
              </Link>
            ))}
          </div>
        )}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "auto",
            paddingTop: 4,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <span style={{ fontSize: 12, color: "#aab2c5", fontWeight: 500 }}>{AUTHOR}</span>
            <time style={{ fontSize: 12, color: "#6b7488" }} dateTime={frontmatter.date}>
              {new Date(frontmatter.date + "T12:00:00").toLocaleDateString("es-CL", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
          <Link
            href={href}
            className="bv-readmore"
            style={{ fontSize: 12, fontWeight: 700, color: "#FF6B2B", textDecoration: "none" }}
          >
            Leer más →
          </Link>
        </div>
      </div>
    </article>
  );
}
