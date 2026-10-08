import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/app")],
    additionalData: `
      @use "theme/color-variables" as *;
      @use "theme/constant-variables" as *;
    `,
  },
};

export default nextConfig;