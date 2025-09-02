import { useEffect, useMemo, useState } from 'react'
import { api } from '@/services/api'
import MediaCarousel from '@/components/MediaCarousel'
import { FolderOpen, Tag, ArrowRight, Clock } from 'lucide-react'

type Project = { id: number; title: string }
type Media = { type: 'image' | 'video'; src: string; alt?: string; title?: string }
type ProjectCard = {
  id: number
  title: string
  summary: string
  tags: string[]
  media: Media[]
  updatedAgo: string
}

export default function Projects() {
  const [raw, setRaw] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api
      .get<Project[]>('/posts?_limit=6')
      .then((r) => setRaw(r.data))
      .finally(() => setLoading(false))
  }, [])

  // En un caso real vendrían del backend; aquí los generamos “bonitos”.
  const items: ProjectCard[] = useMemo(
    () =>
      raw.map((p, idx) => {
        const seed = p.id ?? idx + 1
        const images: Media[] = [
          { type: 'image', src: `https://picsum.photos/seed/${seed}-a/960/540`, alt: p.title },
          { type: 'image', src: `https://picsum.photos/seed/${seed}-b/960/540`, alt: p.title },
        ]
        const maybeVideo: Media[] =
          seed % 3 === 0
            ? [
                {
                  type: 'video',
                  src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
                  title: `${p.title} - demo`,
                },
              ]
            : []

        return {
          id: p.id,
          title: p.title,
          summary: `Descripción breve del proyecto #${p.id}. Ideal para demos y concursos.`,
          tags:
            seed % 2 === 0
              ? ['Web', 'UI', 'Data']
              : seed % 3 === 0
              ? ['IoT', 'Dashboard']
              : ['Mobile', 'PWA'],
          media: [...images, ...maybeVideo],
          updatedAgo: seed % 2 === 0 ? 'hace 2 días' : 'hace 5 días',
        }
      }),
    [raw]
  )

  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
          <span className="inline-flex items-center gap-2">
            <FolderOpen className="size-6 text-brand" />
            Proyectos destacados
          </span>
        </h2>
        <a
          href="#"
          className="text-sm font-medium text-brand hover:underline inline-flex items-center gap-1"
        >
          Ver todos <ArrowRight className="size-4" />
        </a>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="card animate-pulse space-y-3">
                <div className="h-40 bg-neutral-200 dark:bg-neutral-800 rounded-xl" />
                <div className="h-5 bg-neutral-200 dark:bg-neutral-800 rounded w-3/4" />
                <div className="h-3 bg-neutral-200 dark:bg-neutral-800 rounded w-1/2" />
                <div className="flex gap-2">
                  <div className="h-7 w-16 bg-neutral-200 dark:bg-neutral-800 rounded" />
                  <div className="h-7 w-20 bg-neutral-200 dark:bg-neutral-800 rounded" />
                </div>
                <div className="h-9 bg-neutral-200 dark:bg-neutral-800 rounded w-24 mt-2" />
              </div>
            ))
          : items.length > 0
          ? items.map((p) => (
              <article
                key={p.id}
                className="card group transition hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Carrusel media */}
                <MediaCarousel items={p.media} />

                {/* Meta */}
                <div className="mt-4 space-y-2">
                  <h3 className="font-semibold text-lg group-hover:text-brand transition line-clamp-2">
                    {p.title}
                  </h3>
                  <p className="text-sm opacity-70 line-clamp-2">{p.summary}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-xl border border-neutral-200/60 dark:border-neutral-800"
                      >
                        <Tag className="size-3.5 opacity-70" />
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Footer card */}
                  <div className="flex items-center justify-between pt-3">
                    <span className="text-xs opacity-60 inline-flex items-center gap-1">
                      <Clock className="size-3.5" />
                      {p.updatedAgo}
                    </span>
                    <button className="btn btn-primary inline-flex items-center gap-2">
                      Detalles <ArrowRight className="size-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))
          : // Vacío
            (
              <div className="col-span-full flex flex-col items-center justify-center py-16 opacity-70">
                <FolderOpen className="size-10 mb-3" />
                <p>No hay proyectos aún.</p>
              </div>
            )}
      </div>
    </section>
  )
}
