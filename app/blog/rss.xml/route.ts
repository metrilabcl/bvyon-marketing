import { Feed } from "feed";
import { getAllPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/site-url";

const BASE_URL = SITE_URL;

export function GET() {
  const posts = getAllPosts();

  const feed = new Feed({
    title: "Blog — bvyon marketing",
    description:
      "Guías, tendencias y casos de éxito de marketing digital para empresas B2B.",
    id: `${BASE_URL}/blog`,
    link: `${BASE_URL}/blog`,
    language: "es",
    feedLinks: { rss2: `${BASE_URL}/blog/rss.xml` },
    author: {
      name: "Bastian Vega Yon",
      email: "metrilabcl@gmail.com",
      link: BASE_URL,
    },
    copyright: `© ${new Date().getFullYear()} bvyon marketing`,
  });

  for (const post of posts) {
    feed.addItem({
      title: post.frontmatter.title,
      id: `${BASE_URL}/blog/${post.category}/${post.slug}`,
      link: `${BASE_URL}/blog/${post.category}/${post.slug}`,
      description: post.frontmatter.excerpt,
      date: new Date(post.frontmatter.date + "T12:00:00"),
      image: `${BASE_URL}${post.frontmatter.coverImage}`,
      category: [{ name: post.category }],
    });
  }

  return new Response(feed.rss2(), {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
