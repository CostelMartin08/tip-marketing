/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['media.istockphoto.com', 'images.pexels.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tipmarketing.ro',
        port: '',
        pathname: '/images/**',
      }
    ],
  },
  typescript: {

    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!

    ignoreBuildErrors: false,
  },
  serverRuntimeConfig: {

    myHostname: ['164.90.167.98', '[2a03:b0c0:3:d0::1be0:1001]', 'https://tipmarketing.ro'],
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
              key: 'Access-Control-Allow-Origin',
              value: 'https://tipmarketing.ro',
          }
      ],
      },
    ];
  },
};
export default nextConfig;
