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
			},
			{
				source: '/info',
				destination: 'https://katelyynn.github.io/bleh/fm/src/build/build.json',
				permanent: false
			},
			{
				source: '/issues',
				destination: 'https://github.com/katelyynn/bleh/issues/new/choose',
				permanent: false
			},
			{
				source: '/contributors',
				destination: 'https://github.com/katelyynn/bleh/graphs/contributors',
				permanent: false
			}
		]
	}
};

export default nextConfig;
