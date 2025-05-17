import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://assessment-backend:8080/api/:path*', // internal Docker network hostname
      },
    ];
  },
};

export default nextConfig;
