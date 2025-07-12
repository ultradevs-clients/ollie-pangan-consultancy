/** @type {import('next').NextConfig} */
const nextConfig = {  images: {
    domains: ["i.postimg.cc", "i.ibb.co", "static.vecteezy.com", "nice-idea-4c38d981a8.strapiapp.comhttps", "nice-idea-4c38d981a8.media.strapiapp.com"],
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
