import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/big-tech-personality',
  images: { unoptimized: true },
};

export default nextConfig;
