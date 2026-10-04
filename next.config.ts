import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	reactCompiler: true,

	async redirects() {
		return [
			{
				source: '/download',
				destination: 'https://github.com/katelyynn/bleh/raw/uwu/fm/bleh.user.js',
				permanent: false // planning on changing url above ^
			}
		]
	}
};

export default nextConfig;
