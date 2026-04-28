import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This is still good to have
  serverExternalPackages: ["uploadthing", "@uploadthing/react"],
  
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
      },
    ],
  },
};

export default nextConfig;

module.exports = {
  images: {
    domains: ['res.cloudinary.com'],
  },
}