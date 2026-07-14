import { Section } from '../components/ui/Section'
import { researchItems } from '../services/api/mockData'

export default function ResearchPage() {
  return (
    <div className="pb-20">
      <Section className="py-20">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">Investigación</p>
        <h1 className="mt-6 max-w-3xl text-4xl font-semibold text-white sm:text-5xl">Áreas de trabajo con foco en ciencia, ingeniería y aplicaciones reales.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">Mapeamos áreas de investigación con un enfoque práctico y orientado a resultados medibles.</p>
      </Section>

      <Section className="grid gap-6 md:grid-cols-2">
        {researchItems.map((item) => (
          <article key={item.id} className="rounded-3xl border border-white/10 bg-slate-900/70 p-8">
            <div className="flex items-center justify-between">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">{item.category}</p>
              <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">{item.status}</span>
            </div>
            <h2 className="mt-4 text-2xl font-semibold text-white">{item.title}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">{item.description}</p>
            <div className="mt-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">Objetivos</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-400">
                {item.objectives.map((objective) => <li key={objective}>• {objective}</li>)}
              </ul>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {item.technologies.map((tech) => <span key={tech} className="rounded-full border border-white/10 bg-slate-800 px-3 py-1 text-xs text-slate-300">{tech}</span>)}
            </div>
          </article>
        ))}
      </Section>
    </div>
  )
}
