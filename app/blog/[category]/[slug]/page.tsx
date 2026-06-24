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
    <div
      className="overflow-x-auto my-6 rounded-xl"
      style={{ border: "1px solid rgba(255,255,255,.08)" }}
    >
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

      <div style={{ paddingTop: 110, paddingBottom: 90, position: "relative", overflow: "hidden" }}>
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: -140,
            right: -120,
            width: 460,
            height: 460,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,107,43,.12), transparent 70%)",
            filter: "blur(20px)",
          }}
        />
        <div
          className="px-4 sm:px-6 lg:px-8"
          style={{ maxWidth: 768, margin: "0 auto", position: "relative", zIndex: 2 }}
        >
          {/* Breadcrumb */}
          <nav
            className="mb-8 flex items-center gap-2 text-sm"
            style={{ color: "#6b7488", flexWrap: "wrap" }}
          >
            <Link href="/blog" className="bv-link">Blog</Link>
            <span>/</span>
            <Link href={`/blog/${category}`} className="bv-link capitalize">
              {category}
            </Link>
            <span>/</span>
            <span style={{ color: "#aab2c5", fontWeight: 500 }} className="truncate max-w-xs">
              {post.frontmatter.title}
            </span>
          </nav>

          <BlogPostHeader post={post} />

          {/* MDX content */}
          <div className="bv-prose prose prose-lg prose-invert max-w-none prose-headings:font-black prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-code:text-accent prose-code:before:content-none prose-code:after:content-none">
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
          <div style={{ marginTop: 32, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,.08)" }}>
            <Link
              href="/blog"
              className="bv-link"
              style={{ fontSize: 14, fontWeight: 600 }}
            >
              ← Volver al blog
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .bv-prose {
          --tw-prose-body: #cdd3e0;
          --tw-prose-headings: #ffffff;
          --tw-prose-lead: #aab2c5;
          --tw-prose-links: #FF6B2B;
          --tw-prose-bold: #ffffff;
          --tw-prose-counters: #aab2c5;
          --tw-prose-bullets: #6b7488;
          --tw-prose-hr: rgba(255,255,255,.1);
          --tw-prose-quotes: #e6e9f2;
          --tw-prose-quote-borders: #FF6B2B;
          --tw-prose-captions: #6b7488;
          --tw-prose-code: #FF6B2B;
          --tw-prose-pre-code: #e6e9f2;
          --tw-prose-pre-bg: #04060f;
          --tw-prose-th-borders: rgba(255,255,255,.12);
          --tw-prose-td-borders: rgba(255,255,255,.08);
        }
        .bv-prose :where(code):not(:where([class~="not-prose"] *)) {
          background: rgba(255,107,43,.1);
          padding: .15em .4em;
          border-radius: 6px;
          font-weight: 600;
        }
        .bv-prose :where(pre):not(:where([class~="not-prose"] *)) {
          border: 1px solid rgba(255,255,255,.08);
        }
        .bv-prose :where(pre code):not(:where([class~="not-prose"] *)) {
          background: transparent;
          padding: 0;
          font-weight: 400;
        }
        .bv-prose :where(blockquote):not(:where([class~="not-prose"] *)) {
          background: rgba(255,255,255,.03);
          border-radius: 0 12px 12px 0;
          padding: 4px 20px;
          font-style: normal;
        }
        .bv-prose :where(a):not(:where([class~="not-prose"] *)) {
          font-weight: 600;
          text-decoration-color: rgba(255,107,43,.5);
        }
        .bv-prose :where(th):not(:where([class~="not-prose"] *)) {
          background: rgba(255,107,43,.1);
          color: #fff;
        }
        .bv-prose :where(table):not(:where([class~="not-prose"] *)) {
          margin: 0;
        }
        .bv-prose :where(h1, h2, h3, h4):not(:where([class~="not-prose"] *)) {
          font-family: var(--font-heading, Montserrat, sans-serif);
          letter-spacing: -0.5px;
          scroll-margin-top: 96px;
        }
      `}</style>
    </>
  );
}
