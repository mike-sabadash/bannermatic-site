import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const services = [
  {
    n: '01',
    title: 'Brand Identity',
    desc: 'Strategy-led identity systems built to survive every touchpoint — from a favicon to a forty-foot billboard. Naming, visual language, guidelines, and the courage to be distinct.',
    tags: ['Strategy', 'Naming', 'Visual Identity', 'Guidelines', 'Tone of Voice'],
  },
  {
    n: '02',
    title: 'Digital Design',
    desc: 'Websites and products designed around human behavior, not best practices. We prototype early, test obsessively, and ship interfaces people actually enjoy using.',
    tags: ['Web Design', 'UX / UI', 'Design Systems', 'Prototyping', 'Accessibility'],
  },
  {
    n: '03',
    title: 'Creative Development',
    desc: 'Award-grade front-end engineering. WebGL, shaders, physics-based motion and buttery performance — the technical craft that makes the impossible feel effortless.',
    tags: ['React / Next.js', 'WebGL / Three.js', 'Motion', 'CMS', 'E-Commerce'],
  },
  {
    n: '04',
    title: 'Motion & Content',
    desc: 'Stories told at 24, 30 and 60 frames per second. From brand films to micro-interactions, we choreograph movement that gives brands a pulse.',
    tags: ['Art Direction', '3D / CGI', 'Brand Film', 'Social Content', 'Sound Design'],
  },
]

export default function Services() {
  const [open, setOpen] = useState<number | null>(1)

  return (
    <section id="services" className="px-6 md:px-10 py-24 md:py-36">
      <div className="flex items-baseline justify-between mb-14 md:mb-20">
        <span className="text-[11px] tracking-[0.25em] uppercase text-[#8a877f]">03 — Services</span>
        <span className="text-[11px] tracking-[0.25em] uppercase text-[#8a877f]">What we do</span>
      </div>

      <h2 className="font-display font-medium text-[11vw] md:text-[6.5vw] leading-[0.95] mb-16 md:mb-24">
        Full-stack <span className="text-stroke">creative</span>
        <br />
        capability<span className="text-[#d7ff3f]">.</span>
      </h2>

      <div>
        {services.map((s, i) => {
          const isOpen = open === i
          return (
            <div key={s.n} className="border-t border-white/10 last:border-b">
              <button
                data-cursor
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between py-7 md:py-9 text-left group"
              >
                <div className="flex items-baseline gap-6 md:gap-12">
                  <span className={`text-sm tabular-nums transition-colors duration-300 ${isOpen ? 'text-[#d7ff3f]' : 'text-[#8a877f]'}`}>
                    {s.n}
                  </span>
                  <span className={`font-display font-medium text-3xl md:text-5xl transition-all duration-500 ${isOpen ? 'translate-x-2 md:translate-x-4 text-[#d7ff3f]' : 'group-hover:translate-x-2 md:group-hover:translate-x-4'}`}>
                    {s.title}
                  </span>
                </div>
                <motion.span
                  className={`shrink-0 w-11 h-11 md:w-14 md:h-14 rounded-full border flex items-center justify-center text-xl transition-colors duration-500 ${isOpen ? 'bg-[#d7ff3f] border-[#d7ff3f] text-[#0e0e0e]' : 'border-white/15'}`}
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-10 md:pb-12 md:pl-[4.5rem] lg:pl-[7.5rem] max-w-3xl">
                      <p className="text-[#8a877f] leading-relaxed text-base md:text-lg">{s.desc}</p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {s.tags.map((t) => (
                          <span
                            key={t}
                            className="text-[11px] tracking-[0.12em] uppercase border border-white/15 rounded-full px-4 py-2 text-[#eae7e0]/80"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </section>
  )
}
