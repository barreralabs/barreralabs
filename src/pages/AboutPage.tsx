import { motion } from 'framer-motion'
import { Section } from '../components/ui/Section'
import { team, testimonials } from '../constants/site'

export default function AboutPage() {
  return (
    <div className="pb-20">
      <Section className="py-20">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">Nosotros</p>
        <h1 className="mt-6 max-w-3xl text-4xl font-semibold text-white sm:text-5xl">Una organización dedicada a convertir investigación en impacto real.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">BarreraLabs combina ciencia, ingeniería y diseño para crear productos que amplifican la productividad y exploran nuevas fronteras tecnológicas.</p>
      </Section>

      <Section className="py-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            { title: 'Historia', text: 'Nacimos para cerrar la brecha entre laboratorio y producto.' },
            { title: 'Misión', text: 'Construir tecnologías útiles, seguras y de alto valor para el futuro.' },
            { title: 'Visión', text: 'Ser un referente en innovación aplicada a escala global.' },
            { title: 'Valores', text: 'Rigor, claridad, colaboración y responsabilidad técnica.' },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">Metodología</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Investigación experimental con ejecución orientada a producto.</h2>
            <p className="mt-4 text-base leading-8 text-slate-400">Trabajamos con una estructura que mezcla exploración, diseño, validación y despliegue para reducir riesgos y acelerar resultados.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8">
            <div className="space-y-4">
              {['Descubrimiento', 'Prototipado', 'Validación', 'Escalado'].map((step, idx) => (
                <div key={step} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/15 text-sm font-semibold text-cyan-300">0{idx + 1}</div>
                  <div>
                    <p className="font-medium text-white">{step}</p>
                    <p className="text-sm text-slate-400">Iteramos con foco en impacto y calidad.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-20">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">Equipo</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Talento multidisciplinario con obsesión por resolver problemas reales.</h2>
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {team.map((member) => (
            <motion.div key={member.id} whileHover={{ y: -4 }} className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/15 text-sm font-semibold text-cyan-300">{member.initials}</div>
              <h3 className="mt-4 text-xl font-semibold text-white">{member.name}</h3>
              <p className="mt-2 text-sm text-cyan-400">{member.role}</p>
              <p className="mt-4 text-sm leading-7 text-slate-400">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="py-20">
        <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">Testimonios</p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {testimonials.map((item) => (
              <blockquote key={item.id} className="rounded-2xl border border-white/10 bg-slate-950/70 p-6">
                <p className="text-lg leading-8 text-slate-300">“{item.quote}”</p>
                <footer className="mt-4 text-sm text-slate-500">{item.author} · {item.role}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}
