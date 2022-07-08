/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['loremflickr.com', 'cloudflare-ipfs.com', 'images.unsplash.com'],
  }
}

module.exports = nextConfig
