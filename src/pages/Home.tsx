import { Link } from 'react-router-dom'
import {
  Rocket, Sparkles, Play, Github, ShieldCheck, LayoutGrid, LineChart, Video, Zap
} from 'lucide-react'
import placeholder from '@/assets/placeholder.svg'

const features = [
  { icon: LayoutGrid, title: 'Base sólida', desc: 'Estructura escalable para crecer sin dolor.' },
  { icon: ShieldCheck, title: 'Buenas prácticas', desc: 'ESLint, Prettier, TS y tests listos.' },
  { icon: LineChart, title: 'Datos y gráficas', desc: 'Hooks y Recharts para métricas.' },
  { icon: Video, title: 'Contenido dinámico', desc: 'Embeds de video y carruseles.' },
]

export default function Home() {
  return (
    <section className="relative overflow-hidden">
      {/* --- Fondo decorativo (gradiente + blur) --- */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-brand/30 to-sky-400/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-[26rem] w-[26rem] rounded-full bg-gradient-to-tr from-fuchsia-400/20 to-brand/20 blur-3xl" />
      </div>

      {/* --- Hero --- */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6 animate-fadeUp">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-white/60 dark:bg-neutral-900/60 px-3 py-1 text-sm backdrop-blur">
            <Sparkles className="size-4 text-brand" />
            <b>Starter Pro</b> — lista para concursos
          </span>

          <h1 className="text-[clamp(1.9rem,4vw,3.2rem)] font-extrabold leading-tight">
            Eleva tu demo con una <span className="text-brand">plantilla elegante</span> y dinámica
          </h1>

          <p className="text-[clamp(1rem,2vw,1.2rem)] opacity-80">
            React + Vite + TypeScript + Tailwind, con componentes dinámicos,
            tema oscuro, animaciones sutiles y rutas listas para presentar.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="btn bg-brand text-white border-brand hover:shadow-lg hover:shadow-brand/20 active:translate-y-px"
            >
              <Rocket className="size-4" /> Ver proyectos
            </Link>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="btn hover:bg-black/5 dark:hover:bg-white/10"
              aria-label="Repositorio"
            >
              <Github className="size-4" /> Repo
            </a>
            <a
              href="https://vitejs.dev/guide/"
              target="_blank"
              rel="noreferrer"
              className="btn hover:bg-black/5 dark:hover:bg-white/10"
            >
              <Play className="size-4" /> Docs Vite
            </a>
          </div>

          {/* Mini command bar (solo estilo) */}
          <div className="rounded-2xl border border-neutral-200/60 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur p-2 flex items-center gap-2 w-full max-w-lg">
            <Zap className="size-4 opacity-60" />
            <input
              className="w-full bg-transparent outline-none text-sm"
              placeholder="Escribe un comando… (ej. generar landing, agregar carrusel)"
              aria-label="Command bar"
            />
            <kbd className="text-xs opacity-60 border px-2 py-0.5 rounded">⌘K</kbd>
          </div>
        </div>

        {/* Visual derecha */}
        <div className="relative animate-fadeUp">
          <div className="card overflow-hidden">
            <img
              src={placeholder}
              alt="Vista previa"
              className="w-full h-64 md:h-80 object-cover rounded-xl"
            />
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl border border-neutral-200/60 dark:border-neutral-800 p-3">
                <div className="text-xs opacity-60">Stack</div>
                <div className="font-semibold">React • Vite • TS</div>
              </div>
              <div className="rounded-xl border border-neutral-200/60 dark:border-neutral-800 p-3">
                <div className="text-xs opacity-60">UI</div>
                <div className="font-semibold">Tailwind • Dark/Light</div>
              </div>
              <div className="rounded-xl border border-neutral-200/60 dark:border-neutral-800 p-3">
                <div className="text-xs opacity-60">Estado</div>
                <div className="font-semibold">Zustand</div>
              </div>
              <div className="rounded-xl border border-neutral-200/60 dark:border-neutral-800 p-3">
                <div className="text-xs opacity-60">Calidad</div>
                <div className="font-semibold">ESLint • Prettier • Tests</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Feature list --- */}
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map(({ icon: Icon, title, desc }) => (
          <article key={title} className="card hover:shadow-lg hover:shadow-brand/10 transition">
            <div className="flex items-start gap-3">
              <span className="inline-flex p-2 rounded-xl bg-brand/10 text-brand border border-brand/20">
                <Icon className="size-5" />
              </span>
              <div>
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm opacity-70">{desc}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* --- Franja de “confían en” + KPIs --- */}
      <div className="mt-10 grid lg:grid-cols-2 gap-6 items-stretch">
        <div className="card flex items-center justify-between gap-6">
          <div className="opacity-70 text-sm">Confiable para</div>
          <div className="flex flex-wrap items-center gap-4 opacity-80">
            <img src={placeholder} alt="Logo A" className="h-6 w-auto" />
            <img src={placeholder} alt="Logo B" className="h-6 w-auto" />
            <img src={placeholder} alt="Logo C" className="h-6 w-auto" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {['+1.2k usuarios', '96% satisfacción', '45s TTM'].map((t) => (
            <div key={t} className="card text-center">
              <div className="text-xl font-extrabold">{t.split(' ')[0]}</div>
              <div className="text-xs opacity-70">{t.split(' ').slice(1).join(' ')}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
