import { ArrowRight, BrainCircuit, Cpu, Sparkles, ShieldCheck, Telescope } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Section } from '../components/ui/Section'
import { articles, featuredProjects, researchAreas, stats } from '../constants/site'

export default function HomePage() {
  return (
    <div className="pb-20">
      <Section className="grid gap-10 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">Investigación • IA • Software</p>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
            Investigando el futuro. Construyendo tecnología que transforma.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            En BarreraLabs desarrollamos soluciones tecnológicas, investigamos nuevas metodologías y exploramos el potencial de la inteligencia artificial para resolver problemas reales.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/about" className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-base font-medium text-white transition hover:bg-blue-500">
              Conocer más
            </Link>
            <Link to="/projects" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-900/70 px-6 py-3 text-base font-medium text-slate-100 transition hover:bg-slate-800">
              Nuestros proyectos
            </Link>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }} className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-8 shadow-2xl shadow-cyan-950/30">
          <div className="rounded-2xl border border-cyan-500/20 bg-slate-950/70 p-6">
            <div className="flex items-center justify-between text-sm text-slate-400">
              <span>Laboratorio de innovación</span>
              <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-cyan-300">Online</span>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                <BrainCircuit className="text-cyan-400" />
                <p className="mt-3 text-sm font-medium text-white">Modelos generativos</p>
                <p className="mt-2 text-sm text-slate-400">Agentes y copilotos orientados a negocio.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                <Cpu className="text-cyan-400" />
                <p className="mt-3 text-sm font-medium text-white">Arquitectura cloud</p>
                <p className="mt-2 text-sm text-slate-400">Infraestructura segura y escalable.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      <Section className="py-8">
        <div className="grid gap-6 rounded-3xl border border-white/10 bg-slate-900/70 p-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id}>
              <p className="text-3xl font-semibold text-white">{stat.value}</p>
              <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-20">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">Quiénes somos</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Ingeniería aplicada para productos de alto impacto.</h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-slate-400">
            Combinamos investigación, diseño y ejecución para crear sistemas que resuelven problemas reales con velocidad, seguridad y claridad.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { title: 'Investigación', text: 'Mapeamos hipótesis con rigor y validación continua.', icon: Telescope },
            { title: 'Diseño', text: 'Creamos productos claros, simples y con alto valor.', icon: Sparkles },
            { title: 'Desarrollo', text: 'Implementamos software robusto y preparado para escalar.', icon: ShieldCheck },
          ].map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
                <Icon className="text-cyan-400" size={22} />
                <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
              </div>
            )
          })}
        </div>
      </Section>

      <Section className="py-20">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">Áreas de investigación</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Tecnologías y disciplinas que impulsan nuestros proyectos.</h2>
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {researchAreas.map((area) => (
            <div key={area.id} className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
              <p className="text-sm text-cyan-400">{area.category}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{area.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{area.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {area.technologies.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 bg-slate-800 px-3 py-1 text-xs text-slate-300">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-20">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-slate-900 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">Proyectos destacados</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Soluciones diseñadas para operaciones críticas y experiencia de usuario.</h2>
            <p className="mt-4 text-base leading-8 text-slate-400">Explora cómo integramos IA, automatización y software para acelerar resultados medibles.</p>
            <Link to="/projects" className="mt-6 inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200">Ver todos los proyectos <ArrowRight size={16} /></Link>
          </div>
          <div className="grid gap-6">
            {featuredProjects.map((project) => (
              <div key={project.id} className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                  <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">{project.status}</span>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-400">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-slate-800 px-3 py-1 text-xs text-slate-300">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-20">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">Últimos artículos</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Perspectivas sobre IA, cloud y desarrollo tecnológico.</h2>
          </div>
          <div className="grid gap-6">
            {articles.map((article) => (
              <div key={article.id} className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
                <p className="text-sm text-cyan-400">{article.category}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{article.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{article.excerpt}</p>
                <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
                  <span>{article.author}</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-20">
        <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">CTA</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Listos para explorar nuevas fronteras tecnológicas.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-400">Hablemos sobre cómo llevar investigación y ejecución a un nivel superior.</p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg"><Link to="/contact">Contactar</Link></Button>
            <Button variant="secondary" size="lg"><Link to="/research">Explorar investigación</Link></Button>
          </div>
        </div>
      </Section>
    </div>
  )
}
