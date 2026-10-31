import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // The agency services are gone; old links land on the product.
  async redirects() {
    return [
      { source: "/services", destination: "/", permanent: true },
      { source: "/services/:slug", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
