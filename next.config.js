/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.REPOSITORY_NAME,
  images: {
    unoptimized: true,
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.pdf$/i,
      type: "asset/source",
    });

    return config;
  },
};

module.exports = nextConfig;
