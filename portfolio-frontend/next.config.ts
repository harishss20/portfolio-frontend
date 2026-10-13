import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  sassOptions: {
    loadPaths: ["./src/app"],
    additionalData: `
      @use "theme/color-variables" as *;
      @use "theme/constant-variables" as *;
    `,
  },
};

export default nextConfig;