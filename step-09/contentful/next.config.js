/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    CONTENTFUL_SPACE_ID: "wzah69rk6gx3",
    CONTENTFUL_DELIVERY_KEY: "8jyBhzb0kXuubtl_2LB7opHkAIFcGSADhbOInP7JoAs",
  },
  images: {
    domains: ["images.ctfassets.net"],
  },
};

module.exports = nextConfig;
