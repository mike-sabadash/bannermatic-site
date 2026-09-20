import { useRef } from 'react'
import { Link, useParams } from 'react-router'
import { motion, useScroll, useTransform } from 'framer-motion'
import { projects } from '../data/projects'
import { ProjectArt } from '../sections/Works'

function ParallaxArt({ art, className }: { art: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])
  return (
    <div ref={ref} className={`relative overflow-hidden ${className ?? ''}`}>
      <motion.div style={{ y }} className="absolute -top-[14%] -bottom-[14%] left-0 right-0">
        <ProjectArt art={art} className="w-full h-full" />
      </motion.div>
    </div>
  )
}

function Reveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function ProjectPage() {
  const { slug } = useParams()
  const index = projects.findIndex((p) => p.slug === slug)
  const project = projects[index]
  const next = projects[(index + 1) % projects.length]

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0e0e0e] text-[#eae7e0] flex flex-col items-center justify-center gap-6 px-6 text-center">
        <p className="text-[11px] tracking-[0.25em] uppercase text-[#8a877f]">404 — Lost in the archive</p>
        <h1 className="font-display font-medium text-5xl md:text-7xl">This project doesn't exist.</h1>
        <Link
          to="/"
          data-cursor
          className="mt-4 inline-flex items-center gap-3 border border-white/15 rounded-full px-8 py-4 text-[12px] tracking-[0.2em] uppercase transition-colors duration-500 hover:bg-[#eae7e0] hover:text-[#0e0e0e]"
        >
          ← Back to the studio
        </Link>
      </div>
    )
  }

  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(heroProgress, [0, 1], [0, 160])
  const heroOpacity = useTransform(heroProgress, [0, 0.9], [1, 0])

  return (
    <div className="grain bg-[#0e0e0e] text-[#eae7e0] min-h-screen">
      {/* ---------- HERO ---------- */}
      <section ref={heroRef} className="relative min-h-[92vh] flex flex-col justify-end px-6 md:px-10 pt-32 pb-10 overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#d7ff3f] opacity-[0.04] blur-[130px] pointer-events-none" />
        <motion.div style={{ y: heroY, opacity: heroOpacity }}>
          <motion.div
            className="flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase text-[#8a877f] mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <Link to="/" data-cursor className="hover:text-[#eae7e0] transition-colors">Work</Link>
            <span>/</span>
            <span className="text-[#eae7e0]">0{index + 1}</span>
          </motion.div>

          <h1 className="font-display font-medium leading-[0.88] tracking-[-0.02em]">
            <span className="block overflow-hidden">
              <motion.span
                className="block text-[13vw] md:text-[10vw]"
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                {project.title}
              </motion.span>
            </span>
          </h1>

          <motion.div
            className="mt-8 flex flex-wrap justify-between gap-4 border-t border-white/10 pt-5 text-[11px] tracking-[0.25em] uppercase text-[#8a877f]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span>{project.category}</span>
            <span className="hidden sm:inline">{project.client}</span>
            <span>{project.year}</span>
          </motion.div>
        </motion.div>
      </section>

      {/* ---------- HERO ART ---------- */}
      <motion.section
        className="px-6 md:px-10"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <ParallaxArt art={project.art} className="w-full h-[52vh] md:h-[78vh] rounded-md" />
      </motion.section>

      {/* ---------- OVERVIEW ---------- */}
      <section className="px-6 md:px-10 py-24 md:py-36">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-[11px] tracking-[0.25em] uppercase text-[#8a877f] mb-8">The brief</p>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="font-display font-medium text-2xl md:text-4xl leading-[1.25]">{project.intro}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 text-[#8a877f] leading-relaxed max-w-xl">{project.brief}</p>
            </Reveal>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={0.15} className="border-t border-white/10">
              {[
                ['Client', project.client],
                ['Sector', project.sector],
                ['Year', project.year],
                ['Duration', project.duration],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-6 border-b border-white/10 py-4">
                  <span className="text-[11px] tracking-[0.2em] uppercase text-[#8a877f]">{k}</span>
                  <span className="text-right">{v}</span>
                </div>
              ))}
              <div className="border-b border-white/10 py-4">
                <span className="text-[11px] tracking-[0.2em] uppercase text-[#8a877f] block mb-3">Deliverables</span>
                <div className="flex flex-wrap gap-2">
                  {project.deliverables.map((d) => (
                    <span key={d} className="text-[11px] tracking-[0.08em] uppercase border border-white/15 rounded-full px-3 py-1.5 text-[#eae7e0]/80">
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- GALLERY ---------- */}
      <section className="px-6 md:px-10 space-y-6 md:space-y-8">
        <Reveal>
          <ParallaxArt art={project.gallery[0]} className="w-full h-[50vh] md:h-[80vh] rounded-md" />
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <Reveal delay={0.05}>
            <ParallaxArt art={project.gallery[1]} className="w-full h-[36vh] md:h-[56vh] rounded-md" />
          </Reveal>
          <Reveal delay={0.12}>
            <ParallaxArt art={project.gallery[2]} className="w-full h-[36vh] md:h-[56vh] rounded-md md:mt-20" />
          </Reveal>
        </div>
      </section>

      {/* ---------- OUTCOME + QUOTE ---------- */}
      <section className="px-6 md:px-10 py-24 md:py-36">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-[11px] tracking-[0.25em] uppercase text-[#8a877f] mb-8">The outcome</p>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="text-[#8a877f] leading-relaxed">{project.outcome}</p>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.1}>
              <blockquote className="border-l-2 border-[#d7ff3f] pl-6 md:pl-10">
                <p className="font-display font-medium text-2xl md:text-4xl leading-[1.25]">“{project.quote}”</p>
                <footer className="mt-6 text-[11px] tracking-[0.2em] uppercase text-[#8a877f]">
                  — {project.quoteAuthor}, {project.client}
                </footer>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- NEXT PROJECT ---------- */}
      <Link to={`/work/${next.slug}`} data-cursor="Next" className="group relative block overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 transition-transform duration-700 ease-out scale-110 group-hover:scale-100">
          <ProjectArt art={next.art} className="w-full h-full" />
          <div className="absolute inset-0 bg-[#0e0e0e]/70 transition-colors duration-700 group-hover:bg-[#0e0e0e]/45" />
        </div>
        <div className="relative px-6 md:px-10 py-28 md:py-44 text-center">
          <p className="text-[11px] tracking-[0.25em] uppercase text-[#8a877f] group-hover:text-[#eae7e0] transition-colors duration-500">
            Next project
          </p>
          <h2 className="font-display font-medium text-[14vw] md:text-[9vw] leading-none mt-4 transition-transform duration-700 group-hover:-translate-y-2">
            {next.title}
          </h2>
          <span className="inline-block mt-6 text-[12px] tracking-[0.2em] uppercase text-[#8a877f] group-hover:text-[#d7ff3f] transition-colors duration-500">
            {next.category} — {next.year}
          </span>
        </div>
      </Link>
    </div>
  )
}
