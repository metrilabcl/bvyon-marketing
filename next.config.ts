import type { NextConfig } from "next";

const securityHeaders = [
  // Prevents MIME-type sniffing attacks
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Prevents clickjacking — only allow framing from same origin
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Controls referrer information sent with requests
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Enforce HTTPS for 2 years, including subdomains
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  // Restrict browser features to minimum needed
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  // Content Security Policy
  // Note: 'unsafe-inline' is required for Next.js App Router inline hydration scripts.
  // Upgrade path: add nonce-based CSP via middleware when ready (residual risk documented in MET-88).
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self'",
      // YouTube embeds used in blog posts (YouTubeEmbed component)
      "frame-src https://www.youtube.com https://www.youtube-nocookie.com",
      "connect-src 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    remotePatterns: [],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      // Legacy city-specific and tutorial category URLs — redirect to blog root
      { source: "/blog/iquique/:path*", destination: "/blog", permanent: true },
      { source: "/blog/norte-chile/:path*", destination: "/blog", permanent: true },
      { source: "/blog/guias/:path*", destination: "/blog", permanent: true },
      { source: "/blog/herramientas/:path*", destination: "/blog", permanent: true },
      // casos category retired (MET-152) — all old caso URLs redirect to blog root
      { source: "/blog/casos/:path*", destination: "/blog", permanent: true },
    ];
  },
};

export default nextConfig;
