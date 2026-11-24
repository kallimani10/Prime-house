import { useCallback, useRef, useState } from 'react'
import { MoveHorizontal } from 'lucide-react'
import { img } from '../../data/images'

/**
 * Before/after image comparison. Drag, click, or use arrow keys.
 * When `illustrative` is true the "before" photo gets a dulled visual
 * treatment and the card is labelled as an illustrative example.
 */
export default function CompareSlider({ before, after, title, illustrative }) {
  const [pos, setPos] = useState(50)
  const ref = useRef(null)
  const dragging = useRef(false)

  const update = useCallback((clientX) => {
    const r = ref.current.getBoundingClientRect()
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)))
  }, [])

  const onKey = (e) => {
    if (e.key === 'ArrowLeft') setPos((p) => Math.max(0, p - 5))
    if (e.key === 'ArrowRight') setPos((p) => Math.min(100, p + 5))
  }

  return (
    <div
      ref={ref}
      className="relative aspect-[4/3] touch-pan-y select-none overflow-hidden rounded-[1.5rem] bg-navy shadow-card"
      onPointerDown={(e) => { dragging.current = true; e.currentTarget.setPointerCapture(e.pointerId); update(e.clientX) }}
      onPointerMove={(e) => dragging.current && update(e.clientX)}
      onPointerUp={() => { dragging.current = false }}
      onPointerCancel={() => { dragging.current = false }}
    >
      <img src={img(after, 1100)} alt={`${title} — after`} loading="lazy" draggable="false" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img
          src={img(before, 1100)}
          alt={`${title} — before`}
          loading="lazy"
          draggable="false"
          className="absolute inset-0 h-full w-full object-cover"
          style={illustrative ? { filter: 'grayscale(.85) sepia(.35) brightness(.72) contrast(.85) blur(.4px)' } : undefined}
        />
      </div>

      <span className="absolute left-4 top-4 rounded-full bg-navy-950/70 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white backdrop-blur">Before</span>
      <span className="absolute right-4 top-4 rounded-full bg-gold-400 px-3 py-1 text-xs font-bold uppercase tracking-widest text-navy">After</span>

      <div className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_20px_rgba(0,0,0,.4)]" style={{ left: `${pos}%` }}>
        <button
          type="button"
          role="slider"
          aria-label={`${title} comparison slider`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          onKeyDown={onKey}
          className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize place-items-center rounded-full bg-white text-navy shadow-xl ring-4 ring-white/30 transition-transform hover:scale-110"
        >
          <MoveHorizontal className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
