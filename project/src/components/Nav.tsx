import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { motion, AnimatePresence } from 'framer-motion'
import { scrollToTop } from '../lib/scroll'

const links = [
  { label: 'Work', index: '01', href: '#work' },
  { label: 'Studio', index: '02', href: '#studio' },
  { label: 'Services', index: '03', href: '#services' },
  { label: 'Contact', index: '04', href: '#contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const scrollTo = (href: string) => {
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }, 500)
  }

  const go = (href: string) => {
    setOpen(false)
    if (pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
      }, 900)
    } else {
      scrollTo(href)
    }
  }

  const goHome = (e: React.MouseEvent) => {
    e.preventDefault()
    if (pathname !== '/') {
      navigate('/')
    } else {
      scrollToTop(false)
    }
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[200] mix-blend-difference">
        <div className="flex items-center justify-between px-6 md:px-10 py-6">
          <a
            href="/"
            data-cursor
            onClick={goHome}
            className="font-display font-semibold text-xl tracking-tight text-white"
          >
            NOIR<span className="text-[10px] align-super">®</span>
          </a>
          <div className="flex items-center gap-8">
            <span className="hidden md:block text-[11px] tracking-[0.25em] uppercase text-white/60">
              Paris — Tokyo — NYC
            </span>
            <button
              data-cursor
              onClick={() => setOpen(!open)}
              className="flex flex-col items-end gap-[6px] w-10"
              aria-label="Menu"
            >
              <motion.span
                className="block h-[2px] bg-white"
                animate={{ width: open ? 32 : 40, rotate: open ? 45 : 0, y: open ? 4 : 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block h-[2px] bg-white"
                animate={{ width: open ? 32 : 24, rotate: open ? -45 : 0, y: open ? -4 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[150] bg-[#d7ff3f]"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="h-full flex flex-col justify-center px-6 md:px-10">
              {links.map((link, i) => (
                <div key={link.label} className="overflow-hidden border-b border-[#0e0e0e]/15">
                  <motion.button
                    data-cursor
                    onClick={() => go(link.href)}
                    className="group flex items-baseline gap-4 md:gap-8 py-3 md:py-4 w-full text-left"
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '110%', transition: { duration: 0.4, delay: 0 } }}
                    transition={{ duration: 0.7, delay: 0.15 + i * 0.07, ease: [0.76, 0, 0.24, 1] }}
                  >
                    <span className="text-xs md:text-sm font-medium text-[#0e0e0e]/50 tabular-nums">
                      {link.index}
                    </span>
                    <span className="font-display font-medium text-[13vw] md:text-[7.5vw] leading-[0.95] text-[#0e0e0e] transition-transform duration-500 group-hover:translate-x-4 md:group-hover:translate-x-8">
                      {link.label}
                    </span>
                  </motion.button>
                </div>
              ))}
              <motion.div
                className="mt-10 flex flex-wrap gap-x-10 gap-y-3 text-[11px] tracking-[0.2em] uppercase text-[#0e0e0e]/60"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.5 }}
              >
                <span>hello@noir.studio</span>
                <span>Instagram</span>
                <span>Behance</span>
                <span>LinkedIn</span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
