import type { NextConfig } from "next";

// Build estático para GitHub Pages: NEXT_STATIC_EXPORT=1 npm run build
const isExport = process.env.NEXT_STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  ...(isExport && { output: "export" as const }),
  ...(isExport && { basePath: "/prestige-detail" }),
  ...(isExport && { env: { NEXT_PUBLIC_BASE_PATH: "/prestige-detail" } }),
  images: isExport
    ? { unoptimized: true }
    : {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "images.unsplash.com",
          },
          {
            protocol: "https",
            hostname: "upload.wikimedia.org",
          },
          {
            protocol: "https",
            hostname: "thumb.wikimedia.org",
          },
        ],
      },
};

export default nextConfig;