import Link from "next/link";
import { CATEGORY_LABELS, type Category } from "@/lib/blog";

const colors: Record<Category, string> = {
  tendencias: "bg-purple-100 text-purple-800",
  casos: "bg-green-100 text-green-800",
};

interface Props {
  category: Category;
  asLink?: boolean;
}

export default function CategoryPill({ category, asLink = false }: Props) {
  const label = CATEGORY_LABELS[category];
  const className = `inline-block px-3 py-0.5 rounded-full text-xs font-semibold ${colors[category]}`;

  if (asLink) {
    return (
      <Link href={`/blog/${category}`} className={`${className} hover:opacity-80 transition-opacity`}>
        {label}
      </Link>
    );
  }

  return <span className={className}>{label}</span>;
}
