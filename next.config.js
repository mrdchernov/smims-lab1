/** @type {import('next').NextConfig} */

const nodeExternals = require('webpack-node-externals');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: async (config) => {
    console.log(config.externals)
    if (config.externals) {
      config.externals.push(
        await nodeExternals()
      );
    } else {
      config.externals = [ await nodeExternals() ];
    }
    return config;

  }
}


module.exports = nextConfig
