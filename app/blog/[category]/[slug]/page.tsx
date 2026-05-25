import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import {
  CATEGORIES,
  CATEGORY_LABELS,
  getAllPostSlugs,
  getPost,
  type Category,
} from "@/lib/blog";
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import CTABlock from "@/components/blog/CTABlock";
import Callout from "@/components/blog/Callout";
import YouTubeEmbed from "@/components/blog/YouTubeEmbed";
import { SITE_URL } from "@/lib/site-url";

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

export function generateStaticParams() {
  return getAllPostSlugs();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  if (!CATEGORIES.includes(category as Category)) return {};
  try {
    const post = getPost(category as Category, slug);
    const { seo, coverImage, date } = post.frontmatter;
    return {
      title: seo.title,
      description: seo.description,
      alternates: {
        canonical: `/blog/${category}/${slug}`,
      },
      openGraph: {
        title: seo.title,
        description: seo.description,
        type: "article",
        publishedTime: date,
        url: `/blog/${category}/${slug}`,
      },
      twitter: {
        card: "summary_large_image",
        title: seo.title,
        description: seo.description,
      },
    };
  } catch {
    return {};
  }
}

function ProseTable({ children, ...props }: React.ComponentPropsWithoutRef<"table">) {
  return (
    <div className="overflow-x-auto my-6 rounded-xl border border-primary-light">
      <table {...props}>{children}</table>
    </div>
  );
}

const mdxComponents = {
  Callout,
  YouTubeEmbed,
  table: ProseTable,
};

export default async function PostPage({ params }: Props) {
  const { category, slug } = await params;
  if (!CATEGORIES.includes(category as Category)) notFound();

  let post;
  try {
    post = getPost(category as Category, slug);
  } catch {
    notFound();
  }

  const postUrl = `${SITE_URL}/blog/${category}/${slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
    headline: post.frontmatter.title,
    description: post.frontmatter.excerpt,
    datePublished: post.frontmatter.date,
    dateModified: post.frontmatter.date,
    inLanguage: "es-CL",
    articleSection: CATEGORY_LABELS[category as Category],
    author: {
      "@type": "Person",
      "@id": `${SITE_URL}/nosotros#author`,
      name: "Bastian Vega Yon",
      url: `${SITE_URL}/nosotros`,
      jobTitle: "Especialista Freelance en Marketing Digital",
      sameAs: [`${SITE_URL}/nosotros`],
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#business`,
      name: "bvyon marketing",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/og-image.png`,
      },
    },
    image: `${SITE_URL}${post.frontmatter.coverImage}`,
    url: postUrl,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: CATEGORY_LABELS[category as Category], item: `${SITE_URL}/blog/${category}` },
      { "@type": "ListItem", position: 4, name: post.frontmatter.title, item: postUrl },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="pt-24 pb-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-slate">
            <Link href="/blog" className="hover:text-primary">Blog</Link>
            <span>/</span>
            <Link href={`/blog/${category}`} className="hover:text-primary capitalize">
              {category}
            </Link>
            <span>/</span>
            <span className="text-primary font-medium truncate max-w-xs">{post.frontmatter.title}</span>
          </nav>

          <BlogPostHeader post={post} />

          {/* MDX content */}
          <div className="prose prose-lg prose-slate max-w-none prose-headings:font-black prose-headings:text-primary prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-code:text-accent prose-code:bg-accent/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-th:bg-primary prose-th:text-white prose-td:border-primary-light prose-th:border-primary/30">
            <MDXRemote
              source={post.content}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [
                    rehypeSlug,
                    [rehypeAutolinkHeadings, { behavior: "wrap" }],
                  ],
                },
              }}
            />
          </div>

          <CTABlock />

          {/* Back link */}
          <div className="mt-8 pt-8 border-t border-primary-light">
            <Link
              href="/blog"
              className="text-sm font-semibold text-slate hover:text-primary transition-colors"
            >
              ← Volver al blog
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
