// src/App.tsx
import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import Projects from '@/pages/Projects'
import About from '@/pages/About'
import Navbar from '@/components/Navbar'  // usamos el Navbar responsive

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main id="content" className="container flex-1 py-8 md:py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <footer className="border-t border-neutral-200/60 dark:border-neutral-800 py-6 mt-10">
        <div className="container text-sm opacity-70">
          Hecho con React + Vite + Tailwind + TS
        </div>
      </footer>
    </div>
  )
}
