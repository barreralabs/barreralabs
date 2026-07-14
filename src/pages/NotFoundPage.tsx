import { Link } from 'react-router-dom'
import { Section } from '../components/ui/Section'

export default function NotFoundPage() {
  return (
    <Section className="flex min-h-[70vh] flex-col items-center justify-center text-center py-20">
      <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">404</p>
      <h1 className="mt-6 text-4xl font-semibold text-white sm:text-5xl">No encontramos esa página.</h1>
      <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">La ruta solicitada no está disponible o ha cambiado. Puedes volver al inicio y continuar explorando BarreraLabs.</p>
      <div className="mt-8">
        <Link to="/" className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-base font-medium text-white transition hover:bg-blue-500">
          Volver al inicio
        </Link>
      </div>
    </Section>
  )
}
