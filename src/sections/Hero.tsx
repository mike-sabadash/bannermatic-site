import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const line1 = 'DIGITAL'
const line2 = 'EXPERIENCES'

function Letters({ text, delay, started }: { text: string; delay: number; started: boolean }) {
  return (
    <span className="inline-block overflow-hidden pb-[0.06em] -mb-[0.06em]">
      {text.split('').map((ch, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ y: '115%', rotate: 6 }}
          animate={started ? { y: 0, rotate: 0 } : {}}
          transition={{ duration: 0.9, delay: delay + i * 0.035, ease: [0.22, 1, 0.36, 1] }}
        >
          {ch}
        </motion.span>
      ))}
    </span>
  )
}

export default function Hero({ started }: { started: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 220])
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0])

  return (
    <section id="top" ref={ref} className="relative min-h-screen flex flex-col justify-end px-6 md:px-10 pb-8 pt-32 overflow-hidden">
      {/* ambient glow */}
      <div className="absolute top-[-30%] right-[-15%] w-[60vw] h-[60vw] rounded-full bg-[#d7ff3f] opacity-[0.045] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#4f5bff] opacity-[0.05] blur-[120px] pointer-events-none" />

      <motion.div style={{ y, opacity }} className="relative">
        <div className="flex justify-between items-end mb-6 md:mb-10">
          <motion.p
            className="max-w-[240px] text-[13px] leading-relaxed text-[#8a877f]"
            initial={{ opacity: 0, y: 20 }}
            animate={started ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            An independent design agency crafting brands, websites and products
            that refuse to be ignored.
          </motion.p>
          <motion.div
            className="hidden md:block relative w-28 h-28"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={started ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
              <defs>
                <path id="circ" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
              </defs>
              <text className="fill-[#8a877f] text-[9.5px] tracking-[0.22em] uppercase">
                <textPath href="#circ">
                  Scroll to explore — Scroll to explore —
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#eae7e0" strokeWidth="1.5">
                <path d="M12 4v16m0 0l-6-6m6 6l6-6" />
              </svg>
            </div>
          </motion.div>
        </div>

        <h1 className="font-display font-medium leading-[0.85] tracking-[-0.02em] select-none">
          <span className="block text-[15.5vw] md:text-[13vw]">
            <Letters text={line1} delay={0.15} started={started} />
          </span>
          <span className="block text-[15.5vw] md:text-[13vw] text-stroke">
            <Letters text={line2} delay={0.45} started={started} />
          </span>
        </h1>

        <motion.div
          className="mt-8 md:mt-12 flex flex-wrap justify-between gap-4 border-t border-white/10 pt-5 text-[11px] tracking-[0.25em] uppercase text-[#8a877f]"
          initial={{ opacity: 0 }}
          animate={started ? { opacity: 1 } : {}}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          <span>Est. 2016</span>
          <span className="hidden sm:inline">Brand / Digital / Motion</span>
          <span>Available for Q3 2026</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
