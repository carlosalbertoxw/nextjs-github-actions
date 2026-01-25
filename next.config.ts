/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  basePath: '/nextjs-github-actions', 
  assetPrefix: '/nextjs-github-actions/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig