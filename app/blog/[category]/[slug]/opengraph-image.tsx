import { ImageResponse } from "next/og";
import { getPost, CATEGORY_LABELS, type Category } from "@/lib/blog";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

export default async function Image({ params }: Props) {
  const { category, slug } = await params;

  let title = "bvyon marketing";
  let categoryLabel = "";

  try {
    const post = getPost(category as Category, slug);
    title = post.frontmatter.title;
    categoryLabel = CATEGORY_LABELS[category as Category] ?? category;
  } catch {
    // fallback to generic brand image
  }

  const titleFontSize = title.length > 70 ? 42 : title.length > 50 ? 48 : 54;

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "56px 72px 56px",
          background:
            "linear-gradient(135deg, #0D1B4B 0%, #152260 55%, #0D1B4B 100%)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 5,
            background:
              "linear-gradient(90deg, #FF6B2B 0%, #e85e22 50%, #FF6B2B 100%)",
            display: "flex",
          }}
        />

        {/* Decorative diagonal lines (top-right) */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 280,
            height: 280,
            background:
              "linear-gradient(225deg, rgba(255,107,43,0.07) 0%, transparent 60%)",
            display: "flex",
          }}
        />

        {/* Category badge */}
        {categoryLabel ? (
          <div
            style={{
              display: "flex",
              marginBottom: 28,
            }}
          >
            <div
              style={{
                padding: "8px 22px",
                background: "rgba(255,107,43,0.15)",
                border: "1px solid rgba(255,107,43,0.5)",
                borderRadius: 6,
                color: "#FF6B2B",
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                display: "flex",
              }}
            >
              {categoryLabel}
            </div>
          </div>
        ) : null}

        {/* Post title */}
        <div
          style={{
            fontSize: titleFontSize,
            fontWeight: 900,
            color: "#FFFFFF",
            lineHeight: 1.2,
            maxWidth: 980,
            marginBottom: 44,
            letterSpacing: "-0.02em",
            display: "flex",
          }}
        >
          {title}
        </div>

        {/* Bottom wordmark + separator + descriptor */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: 24,
          }}
        >
          <span
            style={{
              fontSize: 30,
              fontWeight: 900,
              color: "#FFFFFF",
              letterSpacing: "-1px",
              display: "flex",
            }}
          >
            bvyon
          </span>
          <span
            style={{
              fontSize: 30,
              fontWeight: 900,
              color: "#FF6B2B",
              letterSpacing: "-1px",
              marginLeft: 6,
              display: "flex",
            }}
          >
            marketing
          </span>
          <div
            style={{
              marginLeft: 24,
              paddingLeft: 24,
              borderLeft: "1px solid rgba(255,255,255,0.2)",
              color: "rgba(255,255,255,0.55)",
              fontSize: 20,
              display: "flex",
            }}
          >
            Especialista freelance en marketing digital · Chile
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
