/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // env: {
  //   OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  // },

  // Add custom webpack configuration
  webpack: (config) => {
    config.resolve.alias["@"] = require("path").resolve(__dirname, "src");
    return config;
  },
  images: {
    domains: ["images.unsplash.com"],
  },

  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
};

module.exports = nextConfig;
