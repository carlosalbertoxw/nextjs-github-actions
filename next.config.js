/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Use the prefix for GitHub Pages
  basePath: '/nextjs-github-actions',
  assetPrefix: '/nextjs-github-actions/',
  // Enable static export
  trailingSlash: true,
  images: {
    unoptimized: true
  },
}

module.exports = nextConfig
