import type { NextConfig } from "next";
import createMDX from '@next/mdx'


const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;

const withMDX = createMDX({
	options: {
		remarkPlugins: [require('remark-gfm')],
		rehypePlugins: [require('rehype-slug'), require('rehype-autolink-headings')],
	},
})

export default withMDX({
	pageExtentions: ['ts', 'tsx', 'md', 'mdx'],
	experimental: { typedRoutes: true },
})
