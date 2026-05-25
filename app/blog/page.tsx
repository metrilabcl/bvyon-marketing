import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, CATEGORIES, CATEGORY_LABELS } from "@/lib/blog";
import BlogIndexCard from "@/components/blog/BlogIndexCard";

export const metadata: Metadata = {
  title: { absolute: "Blog | Marketing Digital para el Norte de Chile — bvyon marketing" },
  description:
    "Guías, tendencias y casos de éxito sobre marketing digital, automatizaciones, SEO y estrategia para empresas del norte de Chile. Por Bastian Vega Yon.",
  alternates: {
    canonical: "https://bvyon-marketing.cl/blog",
    types: { "application/rss+xml": "https://bvyon-marketing.cl/blog/rss.xml" },
  },
  openGraph: {
    title: "Blog | Marketing Digital para el Norte de Chile — bvyon marketing",
    description:
      "Guías, tendencias y casos de éxito de marketing digital para el norte de Chile.",
    url: "https://bvyon-marketing.cl/blog",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Marketing Digital para el Norte de Chile — bvyon marketing",
    description: "Guías, tendencias y casos de éxito de marketing digital para el norte de Chile.",
    images: ["/og-image.png"],
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="pt-28 pb-12 bg-gradient-to-br from-[#0D1B4B] to-[#152260] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest bg-[#FF6B2B]/20 text-[#FF6B2B] rounded-full mb-4">
            Blog
          </span>
          <h1
            className="text-4xl sm:text-5xl font-black mb-4"
            style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
          >
            Marketing sin <span className="text-[#FF6B2B]">límites</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mb-8">
            Guías prácticas, tendencias, herramientas y casos de éxito de marketing digital para el norte de Chile.
          </p>
          {/* Category filter */}
          <div className="flex flex-wrap gap-2">
            <Link
              href="/blog"
              className="px-4 py-1.5 rounded-full text-sm font-semibold bg-[#FF6B2B] text-[#0D1B4B]"
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
        </div>
      </section>

      <section className="py-16 bg-[#F7F9FC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-center text-[#4A5568]">No hay posts publicados aún.</p>
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
