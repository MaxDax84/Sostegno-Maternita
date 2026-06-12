/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SITE_URL: process.env.SITE_URL || "https://marcella-temporarysite.vercel.app",
  },
}

module.exports = nextConfig
