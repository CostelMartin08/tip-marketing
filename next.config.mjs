/** @type {import('next').NextConfig} */

const nextConfig = {
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'tipmarketing.ro',
            port: '',
            pathname: '/images/**',
          },
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
    
        myHostname: ['164.90.167.98', 'https://tipmarketing.ro'],
      },
      async headers() {
        return [
          {
            source: '/api/:path*',
            headers: [
              {
                key: 'Access-Control-Allow-Origin',
                value: 'https://tipmarketing.ro',
              },
    
            ],
          },
        ];
      },
    };
    export default nextConfig;
    