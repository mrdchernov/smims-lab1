/** @type {import('next').NextConfig} */

// const nodeExternals = require('webpack-node-externals');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    // if (config.externals) {
    //   config.externals.push(nodeExternals());
    // } else {
    //   config.externals = [ nodeExternals() ];
    // }
    return config;

  }
}


module.exports = nextConfig
