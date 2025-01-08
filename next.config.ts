import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/api/cart",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "https://www.intermarche.com/, https://intermarche-cart-scrapper.vercel.app/, localhost:3000",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type",
          },
        ],
      }
    ]
  },
};

export default nextConfig;
