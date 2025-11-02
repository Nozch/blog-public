import type { NextConfig } from "next";
import createMDX from '@next/mdx'

import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'


const withMDX = createMDX({
	options: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
	},
})

const nextConfig: NextConfig = ({
	reactCompiler: true,
	pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
	experimental: { typedRoutes: true },
})

export default withMDX(nextConfig)
