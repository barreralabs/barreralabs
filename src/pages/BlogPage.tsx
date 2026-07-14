import { useMemo, useState } from 'react'
import { Section } from '../components/ui/Section'
import { articleItems } from '../services/api/mockData'

export default function BlogPage() {
  const [page, setPage] = useState(1)
  const perPage = 2
  const totalPages = Math.ceil(articleItems.length / perPage)
  const visibleArticles = useMemo(() => articleItems.slice((page - 1) * perPage, page * perPage), [page])

  return (
    <div className="pb-20">
      <Section className="py-20">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">Blog</p>
        <h1 className="mt-6 max-w-3xl text-4xl font-semibold text-white sm:text-5xl">Artículos y reflexiones sobre tecnología, IA y ejecución.</h1>
      </Section>

      <Section className="grid gap-6 md:grid-cols-2">
        {visibleArticles.map((article) => (
          <article key={article.id} className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70">
            <img src={article.image} alt={article.title} className="h-48 w-full object-cover" />
            <div className="p-8">
              <p className="text-sm text-cyan-400">{article.category}</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">{article.title}</h2>
              <p className="mt-4 text-sm leading-7 text-slate-400">{article.excerpt}</p>
              <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
                <span>{article.author}</span>
                <span>{article.date}</span>
              </div>
            </div>
          </article>
        ))}
      </Section>

      <Section className="mt-10 flex items-center justify-center gap-3">
        {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((item) => (
          <button key={item} type="button" onClick={() => setPage(item)} className={`h-10 w-10 rounded-full text-sm ${page === item ? 'bg-cyan-500 text-slate-950' : 'border border-white/10 bg-slate-900/70 text-slate-300'}`}>
            {item}
          </button>
        ))}
      </Section>
    </div>
  )
}
