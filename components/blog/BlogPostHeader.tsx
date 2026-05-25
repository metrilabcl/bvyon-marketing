import Image from "next/image";
import CategoryPill from "./CategoryPill";
import type { Post } from "@/lib/blog";

interface Props {
  post: Post;
}

export default function BlogPostHeader({ post }: Props) {
  const { frontmatter, category, readingTime } = post;

  return (
    <header className="mb-10">
      <div className="flex items-center gap-2 mb-4">
        <CategoryPill category={category} asLink />
        <span className="text-sm text-[#4A5568]">{readingTime}</span>
      </div>
      <h1
        className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0D1B4B] leading-tight mb-4"
        style={{ fontFamily: "var(--font-heading, Montserrat, sans-serif)" }}
      >
        {frontmatter.title}
      </h1>
      <p className="text-lg text-[#4A5568] leading-relaxed mb-6">{frontmatter.excerpt}</p>
      <div className="flex items-center gap-4 text-sm text-[#4A5568] pb-6 border-b border-[#E8EDF7]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#FF6B2B] flex items-center justify-center text-white text-xs font-bold">
            BV
          </div>
          <span>Bastian Vega Yon</span>
        </div>
        <time dateTime={frontmatter.date}>
          {new Date(frontmatter.date + "T12:00:00").toLocaleDateString("es-CL", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </div>
      <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden mt-6">
        <Image
          src={frontmatter.coverImage}
          alt={frontmatter.title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>
    </header>
  );
}
