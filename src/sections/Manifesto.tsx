import { useRef } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'

const TEXT =
  'We believe attention is earned, never bought. Every pixel, every frame, every line of code is an argument for why someone should stay. We build for the curious — the ones who scroll slowly and remember what they felt.'

function Word({
  word,
  progress,
  range,
}: {
  word: string
  progress: MotionValue<number>
  range: [number, number]
}) {
  const opacity = useTransform(progress, range, [0.12, 1])
  const color = useTransform(progress, range, ['#3a3a3a', '#eae7e0'])
  return (
    <motion.span style={{ opacity, color }} className="inline-block mr-[0.28em]">
      {word}
    </motion.span>
  )
}

export default function Manifesto() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.45'] })
  const words = TEXT.split(' ')

  return (
    <section id="studio" ref={ref} className="px-6 md:px-10 py-28 md:py-44">
      <div className="flex items-start gap-4 mb-12 md:mb-16">
        <span className="text-[11px] tracking-[0.25em] uppercase text-[#8a877f] mt-2">
          01 — Manifesto
        </span>
      </div>
      <p className="font-display font-medium text-[7.2vw] md:text-[4.2vw] leading-[1.12] max-w-6xl">
        {words.map((word, i) => (
          <Word
            key={i}
            word={word}
            progress={scrollYProgress}
            range={[i / words.length, (i + 1) / words.length]}
          />
        ))}
      </p>
      <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
        {[
          ['10+', 'Years of practice'],
          ['140', 'Projects shipped'],
          ['32', 'Industry awards'],
          ['12', 'Humans, zero egos'],
        ].map(([num, label]) => (
          <div key={label} className="bg-[#0e0e0e] py-10 md:py-14 px-6">
            <div className="font-display font-medium text-5xl md:text-6xl text-[#d7ff3f]">{num}</div>
            <div className="mt-3 text-[11px] tracking-[0.2em] uppercase text-[#8a877f]">{label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
