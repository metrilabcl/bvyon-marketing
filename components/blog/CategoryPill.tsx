import Link from "next/link";
import { CATEGORY_LABELS, type Category } from "@/lib/blog";

const pillStyle: React.CSSProperties = {
  display: "inline-block",
  fontSize: 11,
  fontWeight: 800,
  letterSpacing: "1px",
  textTransform: "uppercase",
  color: "#FF6B2B",
  background: "rgba(255,107,43,.1)",
  padding: "4px 12px",
  borderRadius: 999,
  textDecoration: "none",
  lineHeight: 1.4,
};

interface Props {
  category: Category;
  asLink?: boolean;
}

export default function CategoryPill({ category, asLink = false }: Props) {
  const label = CATEGORY_LABELS[category];

  if (asLink) {
    return (
      <Link href={`/blog/${category}`} className="bv-cat-pill" style={pillStyle}>
        {label}
      </Link>
    );
  }

  return <span style={pillStyle}>{label}</span>;
}
