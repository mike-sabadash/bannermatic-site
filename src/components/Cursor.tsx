import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const [isFine, setIsFine] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [label, setLabel] = useState('')

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 400, damping: 35, mass: 0.6 })
  const springY = useSpring(y, { stiffness: 400, damping: 35, mass: 0.6 })

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    setIsFine(fine)
    if (!fine) return

    document.documentElement.classList.add('cursor-none-desktop')

    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const target = (e.target as HTMLElement).closest('[data-cursor]')
      if (target) {
        setHovering(true)
        setLabel(target.getAttribute('data-cursor') || '')
      } else {
        setHovering(false)
        setLabel('')
      }
    }
    window.addEventListener('mousemove', move)
    return () => {
      window.removeEventListener('mousemove', move)
      document.documentElement.classList.remove('cursor-none-desktop')
    }
  }, [x, y])

  if (!isFine) return null

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
      style={{ x: springX, y: springY }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full bg-white -translate-x-1/2 -translate-y-1/2"
        animate={{
          width: hovering ? (label ? 88 : 56) : 12,
          height: hovering ? (label ? 88 : 56) : 12,
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 28 }}
      >
        {label && hovering && (
          <span className="text-black text-[11px] font-medium tracking-[0.15em] uppercase select-none">
            {label}
          </span>
        )}
      </motion.div>
    </motion.div>
  )
}
