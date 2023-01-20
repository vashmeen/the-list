/** @type {import('next').NextConfig} */

const UnoCSS = require("@unocss/webpack").default;

const nextConfig = {
  swcMinify: true,
  // reactStrictMode: true,
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
  webpack(config) {
    config.cache = false;
    config.plugins.push(
      UnoCSS() // <--
    );
    return config;
  },
}

module.exports = nextConfig
