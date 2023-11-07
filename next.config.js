/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "next-js-dashboard-tut.vercel.app",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
