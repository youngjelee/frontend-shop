import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  publicRuntimeConfig: {
    API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  // 기타 설정 옵션들...
};

export default nextConfig;
