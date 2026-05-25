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
    description: `Artículos y guías sobre ${label.toLowerCase()} en marketing digital para empresas del norte de Chile. Consejos prácticos y casos reales.`,
    alternates: { canonical: `https://bvyon-marketing.cl/blog/${category}` },
    openGraph: {
      title: `${label} — Blog | bvyon marketing`,
      description: `Artículos sobre ${label.toLowerCase()} en marketing digital para el norte de Chile.`,
      url: `https://bvyon-marketing.cl/blog/${category}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image" as const,
      title: `${label} — Blog | bvyon marketing`,
      description: `Artículos sobre ${label.toLowerCase()} en marketing digital para el norte de Chile.`,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  if (!CATEGORIES.includes(category as Category)) notFound();

  const cat = category as Category;
  const posts = getPostsByCategory(cat);
  const label = CATEGORY_LABELS[cat];

  return (
    <>
      <section className="pt-28 pb-12 bg-gradient-to-br from-primary to-[#152260] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="text-sm text-gray-400 hover:text-white mb-4 inline-block">
            ← Blog
          </Link>
          <h1
            className="text-4xl sm:text-5xl font-black mb-3"
            style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
          >
            {label}
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            {posts.length} {posts.length === 1 ? "artículo" : "artículos"} publicados
          </p>
          {/* Category filter */}
          <div className="flex flex-wrap gap-2">
            <Link
              href="/blog"
              className="px-4 py-1.5 rounded-full text-sm font-semibold bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              Todos
            </Link>
            {CATEGORIES.map((c) => (
              <Link
                key={c}
                href={`/blog/${c}`}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${
                  c === cat
                    ? "bg-accent text-primary"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {CATEGORY_LABELS[c]}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-slate mb-4">No hay posts en esta categoría aún.</p>
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
