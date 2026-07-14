import { useMemo, useState } from 'react'
import { Section } from '../components/ui/Section'
import { projectItems } from '../services/api/mockData'

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All')

  const categories = useMemo(() => ['All', ...new Set(projectItems.map((item) => item.category))], [])
  const filteredProjects = useMemo(() => {
    if (filter === 'All') return projectItems
    return projectItems.filter((item) => item.category === filter)
  }, [filter])

  return (
    <div className="pb-20">
      <Section className="py-20">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">Proyectos</p>
        <h1 className="mt-6 max-w-3xl text-4xl font-semibold text-white sm:text-5xl">Trabajos con enfoque en automatización, IA y software escalable.</h1>
      </Section>

      <Section className="mb-10 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button key={category} type="button" onClick={() => setFilter(category)} className={`rounded-full px-4 py-2 text-sm ${filter === category ? 'bg-cyan-500 text-slate-950' : 'border border-white/10 bg-slate-900/70 text-slate-300'}`}>
            {category}
          </button>
        ))}
      </Section>

      <Section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <article key={project.id} className="rounded-3xl border border-white/10 bg-slate-900/70 p-8">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-xl font-semibold text-white">{project.name}</h2>
              <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">{project.status}</span>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-400">{project.description}</p>
            <div className="mt-6 text-sm text-slate-400">
              <p><span className="font-semibold text-slate-200">Categoría:</span> {project.category}</p>
              <p className="mt-2"><span className="font-semibold text-slate-200">Duración:</span> {project.duration}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => <span key={tech} className="rounded-full border border-white/10 bg-slate-800 px-3 py-1 text-xs text-slate-300">{tech}</span>)}
            </div>
          </article>
        ))}
      </Section>
    </div>
  )
}
