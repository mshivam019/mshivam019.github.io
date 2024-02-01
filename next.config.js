/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: ['cdn.sanity.io', 'images.unsplash.com'],
  },
};

module.exports = nextConfig;
