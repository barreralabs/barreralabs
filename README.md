# BarreraLabs

BarreraLabs es un sitio web SPA profesional para una empresa de investigación, desarrollo tecnológico, IA, automatización y software.

## Stack
- React 19
- TypeScript
- Vite
- React Router
- TanStack Query
- Zustand
- Tailwind CSS
- Framer Motion
- React Hook Form + Zod

## Estructura
- src/app: router, providers y error boundaries
- src/components: UI, layout y common components
- src/features: módulos de negocio
- src/pages: páginas principales del sitio
- src/store: Zustand stores
- src/services/api: servicios y datos mock listos para API futura
- src/types, src/utils, src/constants: tipado y utilidades compartidas

## Scripts
- npm install
- npm run dev
- npm run build
- npm run preview

## Notas
- El proyecto está preparado para conectar APIs futuras sin cambiar la arquitectura general.
- El estado global gestiona tema, idioma y menú móvil.
- El formulario de contacto simula envío y deja la validación lista para conectar un backend.
