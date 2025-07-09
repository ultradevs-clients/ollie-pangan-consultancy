/** @type {import('next').NextConfig} */
const nextConfig = {  images: {
    domains: ["i.postimg.cc", "i.ibb.co"],
	remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
    ],
  },};

export default nextConfig;
