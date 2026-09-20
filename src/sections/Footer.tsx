import { useRef } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { scrollToTop } from '../lib/scroll'

function MagneticButton() {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 })

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect()
    if (!r) return
    x.set((e.clientX - (r.left + r.width / 2)) * 0.4)
    y.set((e.clientY - (r.top + r.height / 2)) * 0.4)
  }
  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={ref}
      href="mailto:hello@noir.studio"
      data-cursor
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className="group relative inline-flex items-center justify-center w-40 h-40 md:w-56 md:h-56 rounded-full bg-[#d7ff3f] text-[#0e0e0e] shrink-0"
    >
      <span className="absolute inset-2 rounded-full border border-[#0e0e0e]/20 transition-transform duration-500 group-hover:scale-110" />
      <span className="text-center text-[12px] md:text-sm font-medium tracking-[0.18em] uppercase leading-relaxed">
        Start a<br />project
      </span>
    </motion.a>
  )
}

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] })
  const y = useTransform(scrollYProgress, [0, 1], [-120, 0])

  return (
    <footer id="contact" ref={ref} className="relative overflow-hidden bg-[#0e0e0e]">
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[70vw] h-[40vw] rounded-full bg-[#d7ff3f] opacity-[0.05] blur-[140px] pointer-events-none" />

      <motion.div style={{ y }} className="px-6 md:px-10 pt-28 md:pt-44 pb-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-14">
          <h2 className="font-display font-medium leading-[0.88] tracking-[-0.02em]">
            <span className="block text-[17vw] lg:text-[11vw]">LET'S</span>
            <span className="block text-[17vw] lg:text-[11vw] text-stroke">TALK</span>
          </h2>
          <div className="lg:pr-[6vw] lg:pt-[6vw]">
            <MagneticButton />
          </div>
        </div>

        <div className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-white/10 pt-10">
          <div>
            <div className="text-[11px] tracking-[0.25em] uppercase text-[#8a877f] mb-4">New business</div>
            <a href="mailto:hello@noir.studio" data-cursor className="block hover:text-[#d7ff3f] transition-colors">hello@noir.studio</a>
            <a href="tel:+33100000000" data-cursor className="block mt-1 hover:text-[#d7ff3f] transition-colors">+33 1 00 00 00 00</a>
          </div>
          <div>
            <div className="text-[11px] tracking-[0.25em] uppercase text-[#8a877f] mb-4">Studios</div>
            <p>Paris — Le Marais</p>
            <p className="mt-1">Tokyo — Shibuya</p>
            <p className="mt-1">NYC — SoHo</p>
          </div>
          <div>
            <div className="text-[11px] tracking-[0.25em] uppercase text-[#8a877f] mb-4">Social</div>
            {['Instagram', 'Behance', 'LinkedIn', 'X / Twitter'].map((s) => (
              <a key={s} href="#top" onClick={(e) => e.preventDefault()} data-cursor className="block mt-1 first:mt-0 hover:text-[#d7ff3f] transition-colors">
                {s}
              </a>
            ))}
          </div>
          <div>
            <div className="text-[11px] tracking-[0.25em] uppercase text-[#8a877f] mb-4">Menu</div>
            {['Work', 'Studio', 'Services', 'Contact'].map((s) => (
              <button
                key={s}
                data-cursor
                onClick={() =>
                  document.querySelector(`#${s.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' })
                }
                className="block mt-1 first:mt-0 text-left hover:text-[#d7ff3f] transition-colors"
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 text-[11px] tracking-[0.2em] uppercase text-[#8a877f] border-t border-white/10 pt-6">
          <span>© 2026 Noir Studio</span>
          <span className="hidden md:inline">Designed with obsession</span>
          <button
            data-cursor
            onClick={() => scrollToTop(false)}
            className="hover:text-[#eae7e0] transition-colors"
          >
            Back to top ↑
          </button>
        </div>
      </motion.div>
    </footer>
  )
}
