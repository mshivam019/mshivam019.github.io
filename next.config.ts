import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    unoptimized: true,
  },
  experimental: {
    mdxRs: { mdxType: "gfm" },
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
