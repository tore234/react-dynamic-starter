// src/components/Navbar.tsx
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeToggle } from '@/components/ThemeToggle'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const link = ({ isActive }: { isActive: boolean }) =>
    `btn ${isActive ? 'bg-black/5 dark:bg-white/10' : ''}`

  return (
    <header className="sticky top-0 z-40 bg-white/70 dark:bg-neutral-950/70 backdrop-blur border-b border-neutral-200/60 dark:border-neutral-800">
      <nav className="container flex items-center justify-between h-14">
        <div className="flex items-center gap-2 font-bold">
          <span>⚡ Dynamic Starter</span>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-2">
          <NavLink to="/" className={link} end>Inicio</NavLink>
          <NavLink to="/projects" className={link}>Proyectos</NavLink>
          <NavLink to="/about" className={link}>Acerca</NavLink>
          <ThemeToggle />
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden btn"
          onClick={() => setOpen(v => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Abrir menú"
        >
          ☰
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden border-t border-neutral-200/60 dark:border-neutral-800 transition-[max-height] duration-300 overflow-hidden ${open ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="container py-2 flex flex-col gap-2">
          <NavLink to="/" className={link} onClick={() => setOpen(false)} end>Inicio</NavLink>
          <NavLink to="/projects" className={link} onClick={() => setOpen(false)}>Proyectos</NavLink>
          <NavLink to="/about" className={link} onClick={() => setOpen(false)}>Acerca</NavLink>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
