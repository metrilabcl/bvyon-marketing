import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, CATEGORIES, CATEGORY_LABELS } from "@/lib/blog";
import BlogIndexCard from "@/components/blog/BlogIndexCard";

export const metadata: Metadata = {
  title: { absolute: "Blog | Marketing Digital — bvyon marketing" },
  description:
    "Guías, tendencias y casos de éxito sobre marketing digital, automatizaciones, SEO y estrategia. Por Bastian Vega Yon.",
  alternates: {
    canonical: "https://bvyon-marketing.cl/blog",
    types: { "application/rss+xml": "https://bvyon-marketing.cl/blog/rss.xml" },
  },
  openGraph: {
    title: "Blog | Marketing Digital — bvyon marketing",
    description:
      "Guías, tendencias y casos de éxito de marketing digital.",
    url: "https://bvyon-marketing.cl/blog",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Marketing Digital — bvyon marketing",
    description: "Guías, tendencias y casos de éxito de marketing digital.",
    images: ["/og-image.png"],
  },
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
      <section className="pt-28 pb-12 bg-gradient-to-br from-primary to-[#152260] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest bg-accent/20 text-accent rounded-full mb-4">
            Blog
          </span>
          <h1
            className="text-4xl sm:text-5xl font-black mb-4"
            style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
          >
            Blog: Marketing Digital para Empresas de{" "}
            <span className="text-accent">Chile</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mb-8">
            Guías prácticas, tendencias, herramientas y casos de éxito de marketing digital para empresas B2B.
          </p>
          {/* Category filter */}
          <div className="flex flex-wrap gap-2">
            <Link
              href="/blog"
              className="px-4 py-1.5 rounded-full text-sm font-semibold bg-accent text-primary"
            >
              Todos
            </Link>
            {CATEGORIES.map((cat) => (
              <Link
                key={cat}
                href={`/blog/${cat}`}
                className="px-4 py-1.5 rounded-full text-sm font-semibold bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                {CATEGORY_LABELS[cat]}
              </Link>
            ))}
          </div>
          {/* Tag filter */}
          {allTags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {allTags.map((t) => (
                <Link
                  key={t}
                  href={tag === t ? "/blog" : `/blog?tag=${encodeURIComponent(t)}`}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                    tag === t
                      ? "bg-accent text-primary"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  #{t}
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {tag && (
            <div className="flex items-center gap-2 mb-6">
              <span className="text-sm text-slate">Filtrando por tag:</span>
              <span className="text-sm font-semibold text-accent">#{tag}</span>
              <Link href="/blog" className="text-xs text-slate hover:text-accent underline ml-1">
                Limpiar filtro
              </Link>
            </div>
          )}
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-slate mb-4">No hay posts con el tag <strong>#{tag}</strong>.</p>
              <Link href="/blog" className="text-accent hover:underline font-semibold">
                Ver todos los posts
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogIndexCard key={`${post.category}/${post.slug}`} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
