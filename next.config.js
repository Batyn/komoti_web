/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'images.unsplash.com', 'source.unsplash.com', 'picsum.photos'], // Добавляем домен picsum.photos
  },
}

module.exports = nextConfig 