import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: "/nextjs-github-actions",
  assetPrefix: "/nextjs-github-actions/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
