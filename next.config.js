/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "cdn.play14.org",
				port: "",
				pathname: "/strapi-uploads/assets/**",
			},
			{
				protocol: "https",
				hostname: "play14-cdn.azureedge.net",
				port: "",
				pathname: "/strapi-uploads/assets/**",
			},
			{
				protocol: "http",
				hostname: "localhost",
				port: "1337",
				pathname: "/uploads/**",
			},
		],
	},
}

module.exports = nextConfig
