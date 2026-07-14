import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Locale, ThemeMode } from '../types/content'

interface AppPreferences {
  reducedMotion: boolean
}

interface AppState {
  theme: ThemeMode
  language: Locale
  mobileMenuOpen: boolean
  preferences: AppPreferences
  toggleTheme: () => void
  setTheme: (theme: ThemeMode) => void
  setLanguage: (language: Locale) => void
  toggleMobileMenu: () => void
  closeMobileMenu: () => void
  setPreferences: (preferences: Partial<AppPreferences>) => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      theme: 'dark',
      language: 'en',
      mobileMenuOpen: false,
      preferences: { reducedMotion: false },
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === 'dark' ? 'light' : 'dark',
        })),
      setTheme: (theme) => set({ theme }),
      setLanguage: (language) => set({ language }),
      toggleMobileMenu: () => set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen })),
      closeMobileMenu: () => set({ mobileMenuOpen: false }),
      setPreferences: (preferences) =>
        set((state) => ({
          preferences: { ...state.preferences, ...preferences },
        })),
    }),
    {
      name: 'barreralabs-store',
      partialize: (state) => ({
        theme: state.theme,
        language: state.language,
        preferences: state.preferences,
      }),
    },
  ),
)
