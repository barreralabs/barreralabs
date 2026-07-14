import { Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { useAppStore } from '../../store/appStore'
import { navigation } from '../../constants/site'
import { Button } from '../ui/Button'

export function Navbar() {
  const { mobileMenuOpen, toggleMobileMenu, closeMobileMenu, theme, toggleTheme } = useAppStore()

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-lg font-semibold tracking-[0.2em] text-slate-50" onClick={closeMobileMenu}>
          BARRERALABS
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {navigation.map((item) => (
            <NavLink key={item.href} to={item.href} className={({ isActive }) => (isActive ? 'text-white' : 'hover:text-white')}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" size="sm" onClick={toggleTheme} aria-label="Cambiar tema">
            {theme === 'dark' ? 'Light' : 'Dark'}
          </Button>
          <Button size="sm">Explorar</Button>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <Button variant="ghost" size="sm" onClick={toggleTheme} aria-label="Cambiar tema">
            {theme === 'dark' ? '☀' : '☾'}
          </Button>
          <button type="button" className="rounded-full p-2 text-slate-200" onClick={toggleMobileMenu} aria-label="Abrir menú">
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {mobileMenuOpen ? (
        <div className="border-t border-white/10 bg-slate-950/95 px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3 text-sm text-slate-300">
            {navigation.map((item) => (
              <NavLink key={item.href} to={item.href} className={({ isActive }) => (isActive ? 'text-white' : 'hover:text-white')} onClick={closeMobileMenu}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  )
}
