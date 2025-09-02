import { useRef, useState } from 'react'
import { Play, Image as ImageIcon } from 'lucide-react'

type Media = { type: 'image' | 'video'; src: string; alt?: string; title?: string }

export default function MediaCarousel({ items }: { items: Media[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)

  const scrollTo = (i: number) => {
    const el = ref.current
    if (!el) return
    const clamped = Math.max(0, Math.min(i, items.length - 1))
    setIndex(clamped)
    const w = el.clientWidth
    el.scrollTo({ left: clamped * w, behavior: 'smooth' })
  }

  const onScroll = () => {
    const el = ref.current
    if (!el) return
    const i = Math.round(el.scrollLeft / el.clientWidth)
    if (i !== index) setIndex(i)
  }

  return (
    <div className="relative">
      <div
        ref={ref}
        onScroll={onScroll}
        className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth rounded-xl border border-neutral-200/60 dark:border-neutral-800"
      >
        {items.map((m, i) => (
          <div key={i} className="min-w-full snap-center">
            {m.type === 'image' ? (
              <div className="relative">
                <img
                  src={m.src}
                  alt={m.alt ?? `slide-${i + 1}`}
                  className="w-full h-48 md:h-56 object-cover"
                />
                <div className="absolute top-2 left-2 text-xs inline-flex items-center gap-1 px-2 py-1 rounded bg-black/50 text-white">
                  <ImageIcon className="size-3.5" /> Imagen
                </div>
              </div>
            ) : (
              <div className="relative w-full pt-[56.25%] bg-black">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={m.src}
                  title={m.title ?? `video-${i}`}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
                <div className="absolute top-2 left-2 text-xs inline-flex items-center gap-1 px-2 py-1 rounded bg-black/60 text-white">
                  <Play className="size-3.5" /> Video
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Controles */}
      {items.length > 1 && (
        <div className="absolute bottom-2 left-0 right-0 flex items-center justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Ir al slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${i === index ? 'w-6 bg-brand' : 'w-2 bg-white/70 dark:bg-neutral-700'}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
