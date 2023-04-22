/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "./base.scss";`,
  },
  env: {
    MONGODB_URL: process.env.MONGODB_URL,
    MONGODB_URI:process.env.MONGODB_URI,
    MONGODB_DB:process.env.MONGODB_DB,
    CLOUDINARY_URL:process.env.CLOUDINARY_URL
  },
  // fontLoaders: [ 
  //   { loader: "@next/font/google", options: { subsets: ["latin"] } },
  // ],
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      fallback: {
        "fs": false,
        "path": false,
        "os": false,
      }
    }
    return config
  },
  
};
module.exports = nextConfig
