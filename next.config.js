/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true, // Required for static export
  },
  experimental: {
    serverActions: true,
  },
  // GitHub Pages configuration
  output: 'export', // Static export for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/ai-agents-blog' : '', // Repository name as base path
  trailingSlash: true, // Required for GitHub Pages
  // Configuração para gerar arquivos na pasta /docs
  distDir: 'docs',
}

module.exports = nextConfig