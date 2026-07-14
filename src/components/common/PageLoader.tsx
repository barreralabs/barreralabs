import { motion } from 'framer-motion'

export function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center gap-3 rounded-full border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-slate-300"
      >
        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-cyan-400" />
        Cargando experiencia BarreraLabs...
      </motion.div>
    </div>
  )
}
