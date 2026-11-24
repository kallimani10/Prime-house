import { Routes, Route, Navigate } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'

export default function App() {
  return (
    // reducedMotion="user" honours the OS "reduce motion" setting for all Framer animations
    <MotionConfig reducedMotion="user">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          {/* Unknown URLs fall back to the home page (the site has exactly four pages). */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </MotionConfig>
  )
}
