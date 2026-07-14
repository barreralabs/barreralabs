import { createBrowserRouter, Navigate } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { MainLayout } from '../components/layout/MainLayout'
import { PageLoader } from '../components/common/PageLoader'

const HomePage = lazy(() => import('../pages/HomePage'))
const AboutPage = lazy(() => import('../pages/AboutPage'))
const ResearchPage = lazy(() => import('../pages/ResearchPage'))
const ProjectsPage = lazy(() => import('../pages/ProjectsPage'))
const BlogPage = lazy(() => import('../pages/BlogPage'))
const ContactPage = lazy(() => import('../pages/ContactPage'))
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Suspense fallback={<PageLoader />}><HomePage /></Suspense> },
      { path: 'about', element: <Suspense fallback={<PageLoader />}><AboutPage /></Suspense> },
      { path: 'research', element: <Suspense fallback={<PageLoader />}><ResearchPage /></Suspense> },
      { path: 'projects', element: <Suspense fallback={<PageLoader />}><ProjectsPage /></Suspense> },
      { path: 'blog', element: <Suspense fallback={<PageLoader />}><BlogPage /></Suspense> },
      { path: 'contact', element: <Suspense fallback={<PageLoader />}><ContactPage /></Suspense> },
      { path: '404', element: <Suspense fallback={<PageLoader />}><NotFoundPage /></Suspense> },
      { path: '*', element: <Navigate to="/404" replace /> },
    ],
  },
])
