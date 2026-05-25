import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import {
  CATEGORIES,
  getAllPostSlugs,
  getPost,
  type Category,
} from "@/lib/blog";
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import CTABlock from "@/components/blog/CTABlock";
import Callout from "@/components/blog/Callout";
import YouTubeEmbed from "@/components/blog/YouTubeEmbed";

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
        canonical: `https://bvyon-marketing.cl/blog/${category}/${slug}`,
      },
      openGraph: {
        title: seo.title,
        description: seo.description,
        type: "article",
        publishedTime: date,
        url: `https://bvyon-marketing.cl/blog/${category}/${slug}`,
        images: [{ url: coverImage, width: 1200, height: 630 }],
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

const mdxComponents = {
  Callout,
  YouTubeEmbed,
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

  const postUrl = `https://bvyon-marketing.cl/blog/${category}/${slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
    headline: post.frontmatter.title,
    description: post.frontmatter.excerpt,
    datePublished: post.frontmatter.date,
    dateModified: post.frontmatter.date,
    author: {
      "@type": "Person",
      "@id": "https://bvyon-marketing.cl/nosotros#author",
      name: "Bastian Vega Yon",
      url: "https://bvyon-marketing.cl/nosotros",
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://bvyon-marketing.cl/#business",
      name: "bvyon marketing",
      url: "https://bvyon-marketing.cl",
      logo: {
        "@type": "ImageObject",
        url: "https://bvyon-marketing.cl/og-image.png",
      },
    },
    image: `https://bvyon-marketing.cl${post.frontmatter.coverImage}`,
    url: postUrl,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
          <div className="prose prose-lg prose-slate max-w-none prose-headings:font-black prose-headings:text-primary prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-code:text-accent prose-code:bg-accent/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none">
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
