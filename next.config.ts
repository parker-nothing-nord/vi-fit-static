import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: '.next',
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  // Optional: Add trailing slashes for better static hosting compatibility
  trailingSlash: true,
};

export default nextConfig;

