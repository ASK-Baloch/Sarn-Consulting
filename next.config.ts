import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint errors during `next build`
  },
  /* config options here */
  images: {
    domains: ['cdn.sanity.io'],
  },
  typescript: {
    // WARNING: This allows production builds with type errors.
    ignoreBuildErrors: true,
  },
  output: "export",
};

export default nextConfig;
