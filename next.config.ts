import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Site 100 % statique : généré dans /out et servi tel quel par Netlify
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
}

export default nextConfig
