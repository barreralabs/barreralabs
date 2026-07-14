import { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-slate-950 p-8 text-center text-slate-100">
          <div className="max-w-md rounded-3xl border border-white/10 bg-slate-900/80 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">Oops</p>
            <h1 className="mt-4 text-3xl font-semibold">Algo salió mal</h1>
            <p className="mt-4 text-sm leading-7 text-slate-400">La experiencia de BarreraLabs no pudo cargarse por completo. Intenta volver a cargar la página.</p>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
