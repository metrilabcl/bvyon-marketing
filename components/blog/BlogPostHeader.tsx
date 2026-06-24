import Link from "next/link";
import Image from "next/image";
import CategoryPill from "./CategoryPill";
import type { Post } from "@/lib/blog";

interface Props {
  post: Post;
}

export default function BlogPostHeader({ post }: Props) {
  const { frontmatter, category, readingTime } = post;

  return (
    <header style={{ marginBottom: 40 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
        <CategoryPill category={category} asLink />
        <span style={{ fontSize: 13, color: "#6b7488" }}>{readingTime}</span>
      </div>
      <h1
        style={{
          fontFamily: "var(--font-heading, Montserrat, sans-serif)",
          fontWeight: 900,
          fontSize: "clamp(30px, 5vw, 48px)",
          letterSpacing: "-1px",
          lineHeight: 1.08,
          color: "#fff",
          margin: "0 0 16px",
        }}
      >
        {frontmatter.title}
      </h1>
      <p style={{ fontSize: 18, color: "#aab2c5", lineHeight: 1.6, margin: "0 0 24px" }}>
        {frontmatter.excerpt}
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 16,
          fontSize: 14,
          color: "#aab2c5",
          paddingBottom: 24,
          borderBottom: "1px solid rgba(255,255,255,.08)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span
            style={{
              display: "grid",
              placeItems: "center",
              width: 34,
              height: 34,
              borderRadius: "50%",
              background: "#FF6B2B",
              color: "#060912",
              fontSize: 12,
              fontWeight: 800,
            }}
          >
            BV
          </span>
          <span>Bastian Vega Yon</span>
        </div>
        <time dateTime={frontmatter.date}>
          {new Date(frontmatter.date + "T12:00:00").toLocaleDateString("es-CL", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        {frontmatter.tags && frontmatter.tags.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {frontmatter.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog?tag=${encodeURIComponent(tag)}`}
                className="bv-tag"
                style={{
                  fontSize: 11,
                  padding: "4px 10px",
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
      </div>
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16 / 9",
          borderRadius: 18,
          overflow: "hidden",
          marginTop: 24,
          border: "1px solid rgba(255,255,255,.08)",
        }}
      >
        <Image
          src={frontmatter.coverImage}
          alt={frontmatter.title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>
    </header>
  );
}
