import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router'
import Lenis from 'lenis'
import Home from './pages/Home'
import ProjectPage from './pages/ProjectPage'
import Cursor from './components/Cursor'
import Nav from './components/Nav'
import { setLenis, scrollToTop } from './lib/scroll'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    scrollToTop(true)
  }, [pathname])
  return null
}

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 1 })
    setLenis(lenis)
    let raf: number
    const loop = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
      setLenis(null)
    }
  }, [])

  return (
    <>
      <Cursor />
      <Nav />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:slug" element={<ProjectPage />} />
        <Route path="*" element={<ProjectPage />} />
      </Routes>
    </>
  )
}
