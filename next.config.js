/** @type {import('next').NextConfig} */

const nextConfig = {
  env: { BASE_URL: process.env.BASE_URL },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.BUCKET_URL,
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
