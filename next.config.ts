import type { NextConfig } from "next";

// GitHub Pages: set BASE_PATH to your repo name (e.g. "quantpype") when building for deployment.
// Leave unset for local dev and for user/org site (username.github.io).
const basePath = process.env.BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: basePath ? basePath.startsWith("/") ? basePath : `/${basePath}` : "",
  assetPrefix: basePath ? (basePath.startsWith("/") ? basePath : `/${basePath}`) + "/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
