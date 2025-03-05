
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ['src'],
  },
  images: {
    domains: ['upload.wikimedia.org'],
  },
}

module.exports = nextConfig
