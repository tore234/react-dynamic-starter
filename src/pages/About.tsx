import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  LineChart, Line, CartesianGrid
} from 'recharts'
import {
  Github, Twitter, Linkedin, Layers, ShieldCheck, Code2, Server,
  TrendingUp, Clock, Rocket, HelpCircle
} from 'lucide-react'
import MediaCarousel from '@/components/MediaCarousel'

type Media = { type: 'image' | 'video'; src: string; alt?: string; title?: string }

export default function About() {
  // --- Datos (demo) ---
  const commits = [
    { mes: 'Ene', valor: 12 }, { mes: 'Feb', valor: 18 }, { mes: 'Mar', valor: 25 },
    { mes: 'Abr', valor: 20 }, { mes: 'May', valor: 32 },
  ]
  const contribuciones = [
    { dia: 'Lun', valor: 5 }, { dia: 'Mar', valor: 8 }, { dia: 'Mié', valor: 6 },
    { dia: 'Jue', valor: 10 }, { dia: 'Vie', valor: 7 },
  ]
  const posts: Media[] = [
    { type: 'image', src: 'https://placehold.co/800x450/twitter',  alt: 'Tweet demo',       title: 'Tweet sobre el proyecto' },
    { type: 'image', src: 'https://placehold.co/800x450/linkedin', alt: 'Post LinkedIn',    title: 'Publicación en LinkedIn' },
    { type: 'image', src: 'https://placehold.co/800x450/github',   alt: 'Stats GitHub',     title: 'Estadísticas de GitHub' },
  ]
  const pillars = [
    { icon: Layers,      title: 'Arquitectura limpia', desc: 'Estructura modular para crecer con componentes, hooks, store y servicios.' },
    { icon: ShieldCheck, title: 'Calidad integrada',   desc: 'ESLint, Prettier y Vitest incluidos para mantener estándares desde el día 1.' },
    { icon: Code2,       title: 'Stack moderno',       desc: 'React + Vite + TypeScript + Tailwind con dark mode nativo.' },
    { icon: Server,      title: 'API-ready',           desc: 'Variable `VITE_API_URL` y cliente Axios para conectar tu backend en minutos.' },
  ]
  const kpis = [
    { label: 'Proyectos lanzados', value: '24+' },
    { label: 'Satisfacción',       value: '96%' },
    { label: 'Carga inicial',      value: '< 1s' },
  ]
  const steps = [
    { title: 'Instala',    desc: 'Clona y `npm i`.',                               icon: Rocket },
    { title: 'Configura',  desc: 'Ajusta colores, branding y `.env`.',             icon: Code2 },
    { title: 'Conecta',    desc: 'Define `VITE_API_URL` y pega tus endpoints.',    icon: Server },
    { title: 'Mide',       desc: 'Activa métricas con gráficos y KPIs.',           icon: TrendingUp },
  ]
  const faqs = [
    { q: '¿Puedo usarla como PWA / App?', a: 'Sí. Añade `vite-plugin-pwa` y, si quieres empaquetado nativo, usa Capacitor/Tauri.' },
    { q: '¿Dónde personalizo el tema?',   a: 'Define `brand` en `tailwind.config.js` y usa utilidades `.btn-primary`, `text-brand`, etc.' },
    { q: '¿Cómo conecto mi API?',         a: 'Configura `VITE_API_URL` en `.env` y consume endpoints vía `services/api.ts`.' },
  ]

  return (
    <section className="space-y-16">
      {/* --- Hero / Encabezado --- */}
      <header className="text-center space-y-4 animate-fadeUp">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gradient">
          Acerca de la plantilla
        </h2>
        <p className="max-w-2xl mx-auto text-lg opacity-80">
          Una base profesional para prototipos y concursos: accesible, rápida, escalable
          y con bloques dinámicos para contar tu historia con datos.
        </p>
      </header>

      {/* --- Misión / Pilares --- */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map(({ icon: Icon, title, desc }) => (
          <article key={title} className="card card-hover h-full flex flex-col gap-3" aria-label={title}>
            <span className="inline-flex items-center justify-center p-3 rounded-xl bg-brand/10 text-brand w-fit">
              <Icon className="size-6" aria-hidden />
            </span>
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-sm opacity-70">{desc}</p>
          </article>
        ))}
      </div>

      {/* --- KPIs / confianza --- */}
      <div className="grid md:grid-cols-3 gap-4">
        {kpis.map((k) => (
          <div key={k.label} className="card text-center card-hover">
            <div className="text-2xl md:text-3xl font-extrabold">{k.value}</div>
            <div className="text-xs opacity-70">{k.label}</div>
          </div>
        ))}
      </div>

      {/* --- Gráficas --- */}
      <div className="grid lg:grid-cols-2 gap-8">
        <section className="card" aria-labelledby="chart-commits">
          <h3 id="chart-commits" className="font-semibold mb-3 flex items-center gap-2">
            <Github className="size-5 text-brand" aria-hidden /> Commits mensuales
          </h3>
          <p className="sr-only">Barras de commits por mes: actividad de ejemplo.</p>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={commits}>
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="valor" fill="#0ea5e9" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="card" aria-labelledby="chart-contrib">
          <h3 id="chart-contrib" className="font-semibold mb-3 flex items-center gap-2">
            <Twitter className="size-5 text-sky-400" aria-hidden /> Contribuciones semanales
          </h3>
          <p className="sr-only">Línea de contribuciones por día: muestra el ritmo semanal.</p>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={contribuciones}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="dia" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="valor"
                  stroke="#0ea5e9"
                  strokeWidth={3}
                  dot={{ r: 4, fill: '#0ea5e9' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>
      </div>

      {/* --- Carrusel de redes sociales --- */}
      <section aria-labelledby="ecosistema-social" className="space-y-6">
        <h3 id="ecosistema-social" className="font-semibold text-xl text-center flex items-center gap-2 justify-center">
          <Linkedin className="size-5 text-sky-600" aria-hidden /> Ecosistema social
        </h3>
        <MediaCarousel items={posts} />
      </section>

      {/* --- Timeline / Cómo funciona --- */}
      <section className="grid md:grid-cols-4 gap-4">
        {steps.map(({ title, desc, icon: Icon }) => (
          <div key={title} className="card h-full">
            <div className="flex items-center gap-2 mb-1">
              <Icon className="size-5 text-brand" aria-hidden />
              <h4 className="font-semibold">{title}</h4>
            </div>
            <p className="text-sm opacity-70">{desc}</p>
          </div>
        ))}
      </section>

      {/* --- FAQ accesible (details/summary) --- */}
      <section className="card">
        <h3 className="font-semibold mb-4 flex items-center gap-2">
          <HelpCircle className="size-5 text-brand" aria-hidden /> Preguntas frecuentes
        </h3>
        <div className="space-y-3">
          {faqs.map(({ q, a }) => (
            <details key={q} className="rounded-xl border border-neutral-200/60 dark:border-neutral-800 p-4">
              <summary className="cursor-pointer font-medium">{q}</summary>
              <p className="mt-2 text-sm opacity-80">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* --- CTA final --- */}
      <div className="text-center">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary btn-lg inline-flex items-center gap-2"
          aria-label="Abrir repositorio en GitHub"
        >
          <Github className="size-5" aria-hidden /> Ver repositorio en GitHub
        </a>
        <span className="block text-sm opacity-70 mt-2 inline-flex items-center gap-1 justify-center">
          <Clock className="size-4" aria-hidden /> Última actualización: hace 3 días
        </span>
      </div>
    </section>
  )
}
