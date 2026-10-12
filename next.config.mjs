/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Slovak is the default language and stays at "/"; the other languages live at /en and /cs.
  async rewrites() {
    return [{ source: '/', destination: '/sk' }]
  },
  async redirects() {
    return [{ source: '/cz', destination: '/cs', permanent: false }]
  },
}

export default nextConfig
