import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  transpilePackages: ['three'],
  allowedDevOrigins: ['10.174.136.230'],
};

export default nextConfig;
