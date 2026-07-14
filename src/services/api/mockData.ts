import type { ArticleItem, FaqItem, ProjectItem, ResearchItem, StatItem, TeamMember, TestimonialItem } from '../../types/content'

export const researchItems: ResearchItem[] = [
  {
    id: 'ai',
    title: 'Inteligencia Artificial',
    slug: 'inteligencia-artificial',
    description: 'Desarrollamos modelos de IA orientados a decisiones confiables y automatización industrial.',
    objectives: ['Optimizar flujos de trabajo', 'Reducir tiempos de respuesta', 'Mejorar la trazabilidad'],
    status: 'Activo',
    technologies: ['PyTorch', 'OpenAI', 'LangChain'],
    category: 'AI',
  },
  {
    id: 'ml',
    title: 'Machine Learning',
    slug: 'machine-learning',
    description: 'Creamos sistemas predictivos y modelos entrenados para escenarios reales y de alto impacto.',
    objectives: ['Predicción precisa', 'Análisis multivariante', 'Monitoreo continuo'],
    status: 'En evolución',
    technologies: ['Python', 'scikit-learn', 'MLflow'],
    category: 'ML',
  },
  {
    id: 'vision',
    title: 'Computer Vision',
    slug: 'computer-vision',
    description: 'Investigamos percepción visual para inspección, análisis y automatización de procesos.',
    objectives: ['Detección visual', 'Clasificación de eventos', 'Optimización de calidad'],
    status: 'Piloto',
    technologies: ['OpenCV', 'YOLO', 'TensorRT'],
    category: 'Vision',
  },
  {
    id: 'automation',
    title: 'Automatización',
    slug: 'automatizacion',
    description: 'Integramos agentes, flujos y orquestación de tareas en entornos complejos.',
    objectives: ['Reducción de fricción', 'Estandarización', 'Escalabilidad'],
    status: 'Activo',
    technologies: ['n8n', 'Python', 'Kafka'],
    category: 'Automation',
  },
]

export const projectItems: ProjectItem[] = [
  {
    id: 'aura',
    name: 'Aura Intelligence',
    description: 'Plataforma de observabilidad basada en agentes para empresas con procesos críticos.',
    status: 'En producción',
    technologies: ['React', 'TypeScript', 'Azure'],
    category: 'IA',
    duration: '6 meses',
    summary: 'Agentes autónomos que analizan incidentes y proponen acciones.',
  },
  {
    id: 'pulse',
    name: 'Pulse Robotics',
    description: 'Sistema de automatización industrial con control predictivo y analítica en tiempo real.',
    status: 'En expansión',
    technologies: ['Python', 'Kafka', 'ROS'],
    category: 'Automatización',
    duration: '9 meses',
    summary: 'Monitoreo continuo y optimización del rendimiento operativo.',
  },
  {
    id: 'orion',
    name: 'Orion Cloud',
    description: 'Arquitectura cloud modular para despliegues seguros y multi-tenant.',
    status: 'Diseño',
    technologies: ['AWS', 'Kubernetes', 'Terraform'],
    category: 'Cloud',
    duration: '4 meses',
    summary: 'Infraestructura preparada para operaciones críticas y alta demanda.',
  },
]

export const articleItems: ArticleItem[] = [
  {
    id: 'ai-ops',
    title: 'Cómo los agentes de IA redefinen la operación tecnológica',
    excerpt: 'Analizamos el impacto de los agentes en soporte, monitoreo y continuidad del negocio.',
    category: 'IA',
    author: 'M. Barrera',
    date: '14 Jul 2026',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80',
    readTime: '6 min',
  },
  {
    id: 'cloud',
    title: 'Arquitecturas cloud resilientes para equipos de ingeniería',
    excerpt: 'Estrategias para construir sistemas escalables con foco en seguridad y observabilidad.',
    category: 'Cloud',
    author: 'A. Gómez',
    date: '08 Jul 2026',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80',
    readTime: '5 min',
  },
  {
    id: 'research',
    title: 'Investigación aplicada: del laboratorio al producto',
    excerpt: 'Un recorrido por la metodología que convierte hipótesis en soluciones operativas.',
    category: 'Research',
    author: 'D. Ortiz',
    date: '01 Jul 2026',
    image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=900&q=80',
    readTime: '7 min',
  },
]

export const teamMembers: TeamMember[] = [
  { id: '1', name: 'María Barrera', role: 'Founder & CEO', bio: 'Investigadora y líder de estrategia tecnológica.', initials: 'MB' },
  { id: '2', name: 'Daniel Ortiz', role: 'CTO', bio: 'Especialista en arquitectura scalable y sistemas distribuidos.', initials: 'DO' },
  { id: '3', name: 'Sofía Vega', role: 'Head of AI', bio: 'Experta en IA aplicada y modelos generativos.', initials: 'SV' },
]

export const stats: StatItem[] = [
  { id: 'projects', value: '42+', label: 'proyectos entregados' },
  { id: 'research', value: '18', label: 'áreas de investigación' },
  { id: 'accuracy', value: '94%', label: 'de precisión en despliegues' },
  { id: 'uptime', value: '99.98%', label: 'de disponibilidad' },
]

export const testimonials: TestimonialItem[] = [
  {
    id: 't1',
    quote: 'BarreraLabs transforma ideas complejas en productos con impacto real y ejecución impecable.',
    author: 'Lucía R.',
    role: 'Director de Operaciones',
  },
]

export const faqs: FaqItem[] = [
  { id: 'f1', question: '¿Trabajan con empresas o startups?', answer: 'Sí. Diseñamos soluciones para empresas, laboratorios y equipos de innovación.' },
  { id: 'f2', question: '¿Pueden integrar IA en procesos existentes?', answer: 'Sí. Diseñamos integración incremental y segura para sistemas ya operativos.' },
  { id: 'f3', question: '¿Qué tipo de despliegues manejan?', answer: 'Cloud, edge y arquitecturas híbridas con enfoque en seguridad y escalabilidad.' },
]
