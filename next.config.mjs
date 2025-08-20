/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [
			"i.postimg.cc",
			"i.ibb.co",
			"static.vecteezy.com",
			"nice-idea-4c38d981a8.strapiapp.comhttps",
			"tranquil-horse-47bc1c95bb.media.strapiapp.com",
		],
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
				port: "1337",
				pathname: "/uploads/**",
			},
		],
	},
};

export default nextConfig;
