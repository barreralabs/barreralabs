import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Section } from '../components/ui/Section'
import { Input } from '../components/ui/Input'
import { Textarea } from '../components/ui/Textarea'
import { Button } from '../components/ui/Button'

type ContactFormValues = {
  name: string
  email: string
  company: string
  subject: string
  message: string
}

const contactSchema = z.object({
  name: z.string().min(2, 'Ingresa tu nombre'),
  email: z.string().email('Correo inválido'),
  company: z.string().default(''),
  subject: z.string().min(3, 'Ingresa un asunto'),
  message: z.string().min(10, 'Escribe un mensaje con más detalle'),
})

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<ContactFormValues>({
    defaultValues: {
      name: '',
      email: '',
      company: '',
      subject: '',
      message: '',
    },
  })

  const onSubmit = async (data: ContactFormValues) => {
    const result = contactSchema.safeParse(data)

    if (!result.success) {
      for (const issue of result.error.issues) {
        const field = issue.path[0]
        if (typeof field === 'string') {
          setError(field as keyof ContactFormValues, { type: 'manual', message: issue.message })
        }
      }
      return
    }

    setSubmitted(true)
    reset()
  }

  return (
    <div className="pb-20">
      <Section className="py-20">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">Contacto</p>
        <h1 className="mt-6 max-w-3xl text-4xl font-semibold text-white sm:text-5xl">Conectemos ideas, tecnología y ejecución.</h1>
      </Section>

      <Section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8">
          <h2 className="text-2xl font-semibold text-white">Información</h2>
          <p className="mt-4 text-sm leading-7 text-slate-400">Estamos listos para colaborar en investigaciones, productos, productos de IA y soluciones escalables.</p>
          <div className="mt-8 space-y-4 text-sm text-slate-300">
            <p>hello@barreralabs.dev</p>
            <p>+34 600 123 456</p>
            <p>Madrid, España</p>
          </div>
          <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/70 p-6 text-sm text-slate-400">
            Mapa placeholder — preparada la integración futura con Google Maps o Leaflet.
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="rounded-3xl border border-white/10 bg-slate-900/70 p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-slate-300" htmlFor="name">Nombre</label>
              <Input id="name" {...register('name')} />
              {errors.name ? <p className="mt-2 text-sm text-red-400">{errors.name.message}</p> : null}
            </div>
            <div>
              <label className="mb-2 block text-sm text-slate-300" htmlFor="email">Correo</label>
              <Input id="email" type="email" {...register('email')} />
              {errors.email ? <p className="mt-2 text-sm text-red-400">{errors.email.message}</p> : null}
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-2 block text-sm text-slate-300" htmlFor="company">Empresa</label>
            <Input id="company" {...register('company')} />
          </div>
          <div className="mt-4">
            <label className="mb-2 block text-sm text-slate-300" htmlFor="subject">Asunto</label>
            <Input id="subject" {...register('subject')} />
            {errors.subject ? <p className="mt-2 text-sm text-red-400">{errors.subject.message}</p> : null}
          </div>
          <div className="mt-4">
            <label className="mb-2 block text-sm text-slate-300" htmlFor="message">Mensaje</label>
            <Textarea id="message" {...register('message')} />
            {errors.message ? <p className="mt-2 text-sm text-red-400">{errors.message.message}</p> : null}
          </div>
          <div className="mt-6 flex items-center justify-between gap-3">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Enviando...' : 'Enviar'}
            </Button>
            {submitted ? <p className="text-sm text-cyan-400">Mensaje simulado enviado.</p> : null}
          </div>
        </form>
      </Section>
    </div>
  )
}
