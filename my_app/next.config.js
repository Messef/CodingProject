/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
      typedRoutes: true,
    },
    compiler: {
      styledComponents: true,
    },
  }
  module.exports = nextConfig;