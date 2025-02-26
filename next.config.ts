import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/api/(.*)",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            // value: "https://www.intermarche.com/, https://intermarche-cart-scrapper.vercel.app/, localhost:3000",
            value: "https://www.intermarche.com/",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,POST,PUT,DELETE,OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
          {
            key: 'Access-Control-Allow-Credentials',
            value: 'true',
          },
        ],
      }
    ]
  },
};

export default nextConfig;
