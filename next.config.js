/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "res.cloudinary.com",
      "images.unsplash.com",
      "images.microcms-assets.io",
      "kskmyblog.com",
      // `${process.env.SERVICE_DOMAIN}.com`,
    ],
  },
};

module.exports = nextConfig;
