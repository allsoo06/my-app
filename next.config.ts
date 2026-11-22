import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            // 이 사이트를 iframe 으로 띄워도 되는 주소 (포트폴리오 배포 주소 + 로컬 테스트용)
            value:
              "frame-ancestors 'self' https://portfolio-my-app-69b2.vercel.app http://localhost:3000",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
