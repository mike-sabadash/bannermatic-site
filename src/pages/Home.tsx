import { useState } from 'react'
import Preloader from '../components/Preloader'
import Hero from '../sections/Hero'
import Marquee from '../sections/Marquee'
import Manifesto from '../sections/Manifesto'
import Works from '../sections/Works'
import Services from '../sections/Services'
import Recognition from '../sections/Recognition'
import Footer from '../sections/Footer'

export default function Home() {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="grain bg-[#0e0e0e] text-[#eae7e0] min-h-screen">
      <Preloader onDone={() => setLoaded(true)} />
      <main>
        <Hero started={loaded} />
        <Marquee items={['Brand', 'Digital', 'Motion', 'Strategy', 'Identity', 'Content', 'E-Commerce', 'Campaign']} dark />
        <Manifesto />
        <Works />
        <Marquee items={['Noir Studio', 'Est. 2016', 'Paris', 'Tokyo', 'New York', 'Independent', 'Award-Winning']} slow />
        <Services />
        <Recognition />
      </main>
      <Footer />
    </div>
  )
}
