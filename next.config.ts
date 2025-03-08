import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint errors during `next build`
  },
  /* config options here */
  images: {
    domains: ['cdn.sanity.io'],
  },
};

export default nextConfig;
