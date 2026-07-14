import { ArrowUpRight, Mail, MessageCircleMore, Send } from 'lucide-react'
import { Link } from 'react-router-dom'
import { navigation } from '../../constants/site'
import { Section } from '../ui/Section'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/95">
      <Section className="py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr_0.7fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">BarreraLabs</p>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
              Investigamos, diseñamos y construimos tecnología para empresas que buscan transformar su operación con inteligencia artificial y automatización.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-100">Navegación</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-100">Contacto</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2"><Mail size={16} /> hello@barreralabs.dev</li>
              <li className="flex items-center gap-2"><MessageCircleMore size={16} /> github.com/barreralabs</li>
              <li className="flex items-center gap-2"><Send size={16} /> linkedin.com/company/barreralabs</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 BarreraLabs. Todos los derechos reservados.</p>
          <a href="#top" className="inline-flex items-center gap-2 text-slate-300 hover:text-white">
            Volver arriba <ArrowUpRight size={16} />
          </a>
        </div>
      </Section>
    </footer>
  )
}
