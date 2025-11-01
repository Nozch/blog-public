import { postsMeta } from './mdx-index'

export const dynamic = 'force-static'
export const revalidate = 60

export default function BlogIndex() {
  const list = [...postsMeta].sort((a, b) => b.date.localeCompare(a.date))
  return (
    <main>
      <h1>Blog</h1>
      <ul>
        {list.map(p => (
          <li key={p.slug}>
            <a href={`/blog/${p.slug}`}>{p.title}</a> <small>{p.date.slice(0,10)}</small>
          </li>
        ))}
      </ul>
    </main>
  )
}

