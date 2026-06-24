import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  CATEGORIES,
  CATEGORY_LABELS,
  getPostsByCategory,
  type Category,
} from "@/lib/blog";
import BlogIndexCard from "@/components/blog/BlogIndexCard";

interface Props {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return CATEGORIES.map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  if (!CATEGORIES.includes(category as Category)) return {};
  const label = CATEGORY_LABELS[category as Category];
  return {
    title: `${label} — Blog`,
    description: `Artículos y guías sobre ${label.toLowerCase()} en marketing digital para PYMEs y emprendimientos en Chile. Consejos prácticos y casos reales.`,
    alternates: { canonical: `/blog/${category}` },
    openGraph: {
      title: `${label} — Blog | bvyon marketing`,
      description: `Artículos sobre ${label.toLowerCase()} en marketing digital para PYMEs y emprendimientos en Chile.`,
      url: `/blog/${category}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image" as const,
      title: `${label} — Blog | bvyon marketing`,
      description: `Artículos sobre ${label.toLowerCase()} en marketing digital para PYMEs y emprendimientos en Chile.`,
    },
  };
}

const kicker: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: "2px",
  textTransform: "uppercase",
  color: "#FF6B2B",
  marginBottom: 14,
};

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  if (!CATEGORIES.includes(category as Category)) notFound();

  const cat = category as Category;
  const posts = getPostsByCategory(cat);
  const label = CATEGORY_LABELS[cat];

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
          <Link
            href="/blog"
            className="bv-link"
            style={{ fontSize: 14, marginBottom: 18, display: "inline-block" }}
          >
            ← Blog
          </Link>
          <span style={kicker}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#FF6B2B", display: "inline-block" }} />
            Categoría
          </span>
          <h1
            style={{
              fontFamily: "var(--font-heading, Montserrat, sans-serif)",
              fontWeight: 900,
              fontSize: "clamp(36px, 6vw, 60px)",
              letterSpacing: "-1.5px",
              lineHeight: 1.05,
              margin: "0 0 12px",
            }}
          >
            {label}
          </h1>
          <p style={{ fontSize: 18, color: "#aab2c5", margin: "0 0 32px" }}>
            {posts.length} {posts.length === 1 ? "artículo" : "artículos"} publicados
          </p>

          {/* Category filter */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            <Link href="/blog" className="bv-filter">
              Todos
            </Link>
            {CATEGORIES.map((c) => (
              <Link
                key={c}
                href={`/blog/${c}`}
                className={`bv-filter${c === cat ? " bv-filter-active" : ""}`}
              >
                {CATEGORY_LABELS[c]}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ POSTS ============ */}
      <section style={{ padding: "0 0 clamp(64px, 9vw, 110px)" }}>
        <div className="bv-container">
          {posts.length === 0 ? (
            <div style={{ textAlign: "center", padding: "64px 0" }}>
              <p style={{ color: "#aab2c5", marginBottom: 16 }}>No hay posts en esta categoría aún.</p>
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
