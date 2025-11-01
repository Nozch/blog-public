import { globby } from 'globby'
import fs from 'fs/promises'
import matter from 'gray-matter'

const files = await globby('content/posts/*.{md,mdx}')
let ok = true
for (const f of files) {
  const raw = await fs.readFile(f, 'utf8')
  const fm = matter(raw).data
  const need = ['title','date','slug','tags']
  const miss = need.filter(k => fm[k] == null)
  if (fm.publish !== true) miss.push('publish:true')
  if (miss.length) { console.error(`[NG] ${f}: ${miss.join(', ')}`); ok = false }
}
if (!ok) process.exit(1)
console.log('frontmatter OK')
