import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow the IDE browser-preview proxy (served from 127.0.0.1) to load
  // Next.js dev/HMR resources so client hydration completes in the preview.
  // Dev-only: this has no effect on production builds.
  allowedDevOrigins: ["127.0.0.1", "localhost"],
};

export default nextConfig;
