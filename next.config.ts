import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keeps heavy packages out of the client bundle
  serverExternalPackages: ["uploadthing", "@uploadthing/react"],
  
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  // This helps Webpack handle the ESM/CJS mismatch in UploadThing
  webpack: (config) => {
    config.externals.push({
      "utf-8-validate": "commonjs utf-8-validate",
      bufferutil: "commonjs bufferutil",
    });
    return config;
  },
};

export default nextConfig;