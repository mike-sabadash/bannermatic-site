import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { motion, useMotionValue, useSpring, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { projects } from '../data/projects'

export function ProjectArt({ art, className }: { art: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className ?? ''}`} style={{ background: art }}>
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.18) 3px, rgba(0,0,0,0.18) 4px)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
    </div>
  )
}

export default function Works() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState<number | null>(null)

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 180, damping: 24, mass: 0.5 })
  const sy = useSpring(my, { stiffness: 180, damping: 24, mass: 0.5 })

  const onMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    mx.set(e.clientX - rect.left)
    my.set(e.clientY - rect.top)
  }

  const headerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: headerRef, offset: ['start end', 'end start'] })
  const hx = useTransform(scrollYProgress, [0, 1], ['4%', '-14%'])

  return (
    <section id="work" className="py-24 md:py-36">
      <div ref={headerRef} className="overflow-hidden mb-14 md:mb-20">
        <motion.h2
          style={{ x: hx }}
          className="font-display font-medium text-[16vw] md:text-[11vw] leading-none whitespace-nowrap text-stroke select-none"
        >
          Selected Works — Selected Works
        </motion.h2>
      </div>

      <div className="px-6 md:px-10 flex items-baseline justify-between mb-6">
        <span className="text-[11px] tracking-[0.25em] uppercase text-[#8a877f]">02 — Work</span>
        <span className="text-[11px] tracking-[0.25em] uppercase text-[#8a877f]">2024 — 2026</span>
      </div>

      <div
        ref={containerRef}
        className="relative"
        onMouseMove={onMove}
        onMouseLeave={() => setActive(null)}
      >
        {/* floating preview (desktop) */}
        <AnimatePresence>
          {active !== null && (
            <motion.div
              className="hidden md:block absolute z-20 w-[26vw] h-[17vw] pointer-events-none"
              style={{ left: sx, top: sy, x: '-50%', y: '-50%' }}
              initial={{ scale: 0.55, opacity: 0, rotate: -4 }}
              animate={{ scale: 1, opacity: 1, rotate: 2 }}
              exit={{ scale: 0.55, opacity: 0, rotate: 4 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectArt art={projects[active].art} className="w-full h-full rounded-md" />
            </motion.div>
          )}
        </AnimatePresence>

        {projects.map((p, i) => (
          <Link
            key={p.slug}
            to={`/work/${p.slug}`}
            data-cursor="View"
            onMouseEnter={() => setActive(i)}
            className="group block border-t border-white/10 last:border-b px-6 md:px-10"
          >
            {/* mobile art */}
            <div className="md:hidden pt-6">
              <ProjectArt art={p.art} className="w-full h-44 rounded-md" />
            </div>
            <div className="relative flex items-center justify-between py-7 md:py-10">
              <div className="flex items-baseline gap-5 md:gap-10">
                <span className="text-xs text-[#8a877f] tabular-nums">0{i + 1}</span>
                <h3 className="font-display font-medium text-3xl md:text-6xl leading-none transition-all duration-500 md:group-hover:translate-x-6 md:group-hover:text-[#d7ff3f]">
                  {p.title}
                </h3>
              </div>
              <div className="flex items-center gap-6 md:gap-14 shrink-0">
                <span className="hidden lg:block text-[12px] tracking-[0.15em] uppercase text-[#8a877f]">
                  {p.category}
                </span>
                <span className="text-[12px] text-[#8a877f] tabular-nums">{p.year}</span>
                <span className="hidden md:flex w-10 h-10 rounded-full border border-white/15 items-center justify-center transition-all duration-500 group-hover:bg-[#d7ff3f] group-hover:border-[#d7ff3f]">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="stroke-[#eae7e0] group-hover:stroke-[#0e0e0e] transition-colors duration-500"
                    strokeWidth="1.5"
                  >
                    <path d="M7 17L17 7M17 7H8M17 7v9" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="px-6 md:px-10 mt-12 flex justify-center">
        <span className="text-[11px] tracking-[0.25em] uppercase text-[#8a877f]">
          Five of 140 — more on request
        </span>
      </div>
    </section>
  )
}
