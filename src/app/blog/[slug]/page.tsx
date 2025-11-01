import { postsMeta, postsMap } from '../mdx-index'
import { notFound } from 'next/navigation'

export const dynamic = 'force-static'
export const revalidate = 60

export function generateStaticParams() {
  return postsMeta.map(p => ({ slug: p.slug }))
}

export default async function Page({ params }: { params: { slug: string } }) {
  const modLoader = (postsMap as any)[params.slug]
  if (!modLoader) return notFound()
  const Mdx = (await modLoader()).default
  const meta = postsMeta.find(p => p.slug === params.slug)!

  return (
    <main>
      <h1>{meta.title}</h1>
      <Mdx />
    </main>
  )
}
