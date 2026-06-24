import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, CATEGORIES, CATEGORY_LABELS } from "@/lib/blog";
import BlogIndexCard from "@/components/blog/BlogIndexCard";

export const metadata: Metadata = {
  title: { absolute: "Blog | Marketing Digital — bvyon marketing" },
  description:
    "Noticias y tendencias de marketing digital e IA comentadas por Bastian Vega Yon. Qué está pasando y qué significa para tu negocio.",
  alternates: {
    canonical: "/blog",
    types: { "application/rss+xml": "/blog/rss.xml" },
  },
  openGraph: {
    title: "Blog | Marketing Digital — bvyon marketing",
    description:
      "Noticias de marketing digital e IA comentadas por Bastian Vega Yon.",
    url: "/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Marketing Digital — bvyon marketing",
    description: "Guías, tendencias y casos de éxito de marketing digital.",
  },
};

const kicker: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: "2px",
  textTransform: "uppercase",
  color: "#FF6B2B",
  marginBottom: 18,
};

interface Props {
  searchParams: Promise<{ tag?: string }>;
}

export default async function BlogPage({ searchParams }: Props) {
  const { tag } = await searchParams;
  const allPosts = getAllPosts();
  const posts = tag
    ? allPosts.filter((p) => p.frontmatter.tags?.includes(tag))
    : allPosts;

  const allTags = [...new Set(allPosts.flatMap((p) => p.frontmatter.tags ?? []))].sort();

  return (
    <>
      {/* ============ HERO ============ */}
      <section style={{ position: "relative", overflow: "hidden", paddingTop: 110 }}>
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: -120,
            left: -80,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,107,43,.16), transparent 70%)",
            filter: "blur(20px)",
            animation: "bvBlob 18s ease-in-out infinite",
          }}
        />
        <div className="bv-container" style={{ position: "relative", zIndex: 2, paddingBottom: 56 }}>
          <span style={kicker}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#FF6B2B", display: "inline-block" }} />
            Blog
          </span>
          <h1
            style={{
              fontFamily: "var(--font-heading, Montserrat, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(36px, 6vw, 60px)",
              letterSpacing: "-1.5px",
              lineHeight: 1.05,
              margin: "0 0 18px",
              maxWidth: 820,
            }}
          >
            Marketing Digital para Empresas de{" "}
            <span style={{ color: "#FF6B2B" }}>Chile</span>
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "#aab2c5", maxWidth: 600, margin: "0 0 32px" }}>
            Noticias recientes de marketing digital e IA, comentadas para que sepas qué cambia y cómo afecta a tu negocio.
          </p>

          {/* Category filter */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            <Link href="/blog" className="bv-filter bv-filter-active">
              Todos
            </Link>
            {CATEGORIES.map((cat) => (
              <Link key={cat} href={`/blog/${cat}`} className="bv-filter">
                {CATEGORY_LABELS[cat]}
              </Link>
            ))}
          </div>

          {/* Tag filter */}
          {allTags.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 12 }}>
              {allTags.map((t) => (
                <Link
                  key={t}
                  href={tag === t ? "/blog" : `/blog?tag=${encodeURIComponent(t)}`}
                  className={`bv-filter bv-filter-sm${tag === t ? " bv-filter-active" : ""}`}
                >
                  #{t}
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ============ POSTS ============ */}
      <section style={{ padding: "0 0 clamp(64px, 9vw, 110px)" }}>
        <div className="bv-container">
          {tag && (
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 28 }}>
              <span style={{ fontSize: 14, color: "#aab2c5" }}>Filtrando por tag:</span>
              <span style={{ fontSize: 14, fontWeight: 700, color: "#FF6B2B" }}>#{tag}</span>
              <Link href="/blog" className="bv-link" style={{ fontSize: 12, marginLeft: 4, textDecoration: "underline" }}>
                Limpiar filtro
              </Link>
            </div>
          )}
          {posts.length === 0 ? (
            <div style={{ textAlign: "center", padding: "64px 0" }}>
              <p style={{ color: "#aab2c5", marginBottom: 16 }}>
                No hay posts con el tag <strong style={{ color: "#fff" }}>#{tag}</strong>.
              </p>
              <Link href="/blog" className="bv-link" style={{ color: "#FF6B2B", fontWeight: 600 }}>
                Ver todos los posts
              </Link>
            </div>
          ) : (
            <div className="bv-blog-grid">
              {posts.map((post) => (
                <BlogIndexCard key={`${post.category}/${post.slug}`} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>

      <style>{`
        .bv-blog-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
        .bv-filter {
          display: inline-flex; align-items: center;
          padding: 8px 16px; border-radius: 999px;
          font-size: 14px; font-weight: 600; text-decoration: none;
          color: #fff; background: rgba(255,255,255,.05);
          border: 1px solid rgba(255,255,255,.1);
          transition: background .2s, border-color .2s, color .2s;
        }
        .bv-filter:hover { background: rgba(255,255,255,.1); border-color: rgba(255,255,255,.22); }
        .bv-filter-sm { padding: 5px 11px; font-size: 12px; }
        .bv-filter-active {
          background: #FF6B2B; color: #060912; border-color: #FF6B2B;
        }
        .bv-filter-active:hover { background: #ff7d45; border-color: #ff7d45; }
        .bv-card-img { transition: transform .35s ease; }
        .bv-card:hover .bv-card-img { transform: scale(1.05); }
        .bv-card-title { transition: color .2s; }
        .bv-card:hover .bv-card-title { color: #FF6B2B; }
        .bv-tag:hover { color: #fff; border-color: rgba(255,107,43,.4); }
        .bv-cat-pill:hover { background: rgba(255,107,43,.2); }
        .bv-readmore:hover { text-decoration: underline; }
        @media (max-width: 980px) {
          .bv-blog-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 560px) {
          .bv-blog-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
