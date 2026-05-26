import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { z } from "zod";

const CONTENT_DIR = path.join(process.cwd(), "content/blog");

export const CATEGORIES = ["tendencias"] as const;
export type Category = (typeof CATEGORIES)[number];

export const CATEGORY_LABELS: Record<Category, string> = {
  tendencias: "Tendencias",
};

const FrontmatterSchema = z.object({
  title: z.string().min(1),
  date: z
    .union([z.string(), z.date()])
    .transform((v) => {
      if (v instanceof Date) return v.toISOString().split("T")[0];
      return v;
    })
    .refine((v) => /^\d{4}-\d{2}-\d{2}$/.test(v), "date must be YYYY-MM-DD"),
  category: z.enum(CATEGORIES),
  excerpt: z.string().max(160),
  coverImage: z.string().startsWith("/"),
  seo: z.object({
    title: z.string().max(60),
    description: z.string().max(160),
  }),
  /** Internal geo-targeting for SEO (schema.org, keyword meta). Never rendered in UI. */
  targetCity: z.string().optional(),
  /** Internal geo-targeting for SEO (schema.org, keyword meta). Never rendered in UI. */
  targetRegion: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

export type Frontmatter = z.infer<typeof FrontmatterSchema>;

export interface Post {
  slug: string;
  category: Category;
  frontmatter: Frontmatter;
  readingTime: string;
  content: string;
}

export interface PostMeta {
  slug: string;
  category: Category;
  frontmatter: Frontmatter;
  readingTime: string;
}

function parsePost(filePath: string, category: Category, slug: string): Post {
  const source = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(source);

  const result = FrontmatterSchema.safeParse(data);
  if (!result.success) {
    throw new Error(
      `Invalid frontmatter in ${filePath}:\n${result.error.issues
        .map((i) => `  ${i.path.join(".")}: ${i.message}`)
        .join("\n")}`
    );
  }

  const rt = readingTime(content);

  return {
    slug,
    category,
    frontmatter: result.data,
    readingTime: `${Math.ceil(rt.minutes)} min de lectura`,
    content,
  };
}

export function getAllPosts(): PostMeta[] {
  const posts: PostMeta[] = [];

  for (const category of CATEGORIES) {
    const dir = path.join(CONTENT_DIR, category);
    if (!fs.existsSync(dir)) continue;

    const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
    for (const file of files) {
      const slug = file.replace(/\.mdx$/, "");
      const filePath = path.join(dir, file);
      const { readingTime, frontmatter } = parsePost(filePath, category as Category, slug);
      posts.push({ slug, category: category as Category, readingTime, frontmatter });
    }
  }

  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  );
}

export function getPostsByCategory(category: Category): PostMeta[] {
  return getAllPosts().filter((p) => p.category === category);
}

export function getPost(category: Category, slug: string): Post {
  const filePath = path.join(CONTENT_DIR, category, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Post not found: ${category}/${slug}`);
  }
  return parsePost(filePath, category, slug);
}

export function getAllPostSlugs(): { category: Category; slug: string }[] {
  const slugs: { category: Category; slug: string }[] = [];
  for (const category of CATEGORIES) {
    const dir = path.join(CONTENT_DIR, category);
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
    for (const file of files) {
      slugs.push({ category: category as Category, slug: file.replace(/\.mdx$/, "") });
    }
  }
  return slugs;
}
