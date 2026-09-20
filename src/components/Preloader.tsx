import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    let raf: number
    const start = performance.now()
    const duration = 1800
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(Math.round(eased * 100))
      if (p < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setTimeout(() => {
          setGone(true)
          setTimeout(onDone, 750)
        }, 250)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [onDone])

  return (
    <AnimatePresence>
      {!gone && (
        <motion.div
          className="fixed inset-0 z-[10000] bg-[#0e0e0e] flex flex-col justify-between p-6 md:p-10"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex justify-between text-[11px] tracking-[0.25em] uppercase text-[#8a877f]">
            <span>Noir Studio</span>
            <span>Portfolio © 2026</span>
          </div>
          <div className="flex items-end justify-between">
            <motion.p
              className="text-[11px] tracking-[0.25em] uppercase text-[#8a877f] mb-4"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.4, repeat: Infinity }}
            >
              Loading experience
            </motion.p>
            <span className="font-display font-medium text-[22vw] md:text-[16vw] leading-[0.8] text-[#eae7e0] tabular-nums">
              {count}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
