import type { NextConfig } from "next";
import { networkInterfaces } from "node:os";

// Collect this machine's LAN IPv4 addresses so the dev server accepts
// cross-origin dev/HMR requests from phones/other devices on the network.
// (Wildcards below already cover common private ranges; this is a belt-and-
// suspenders fallback in case the host IP falls outside them.)
function getLocalIPv4s(): string[] {
  const ips: string[] = [];
  for (const iface of Object.values(networkInterfaces())) {
    for (const net of iface ?? []) {
      if (net.family === "IPv4" && !net.internal) {
        ips.push(net.address);
      }
    }
  }
  return ips;
}

const nextConfig: NextConfig = {
  // Allow the IDE browser-preview proxy (served from 127.0.0.1) and devices on
  // the local network (e.g. a phone hitting the LAN IP) to load Next.js dev/HMR
  // resources so client hydration completes. `allowedDevOrigins` matches each
  // dot-separated segment, so `*` works per IPv4 octet.
  // Dev-only: this has no effect on production builds.
  allowedDevOrigins: [
    "127.0.0.1",
    "localhost",
    "*.local",
    "192.168.*.*",
    "10.*.*.*",
    "172.16.*.*",
    ...getLocalIPv4s(),
  ],
};

export default nextConfig;
