import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
const services = [
 {n:'01',title:'Campaign Creative',desc:'We turn a brief, key visual or campaign idea into a banner concept built to scale. The system is designed from the start for multiple placements instead of treating every size as a separate design.',tags:['Creative Direction','Key Visual','Campaign System','Copy Hierarchy','Master Creative']},
 {n:'02',title:'Multi-format Adaptation',desc:'One master becomes a coherent family of display formats. Layout, typography, crops and hierarchy are adapted to each aspect ratio so the campaign stays recognizable without looking mechanically resized.',tags:['Display Ads','Responsive Layouts','Format Families','Media Plan','Creative Adaptation']},
 {n:'03',title:'Motion & HTML5',desc:'Motion is designed as part of the campaign system: entrances, transitions, loops and timing remain consistent across formats while respecting the practical constraints of digital advertising.',tags:['HTML5 Banners','Motion Design','Animation','Loops','Interactive Creative']},
 {n:'04',title:'Production & Delivery',desc:'We prepare campaign assets for real placements: dimensions, variants, naming, technical constraints and final checks. The result is an organized creative package ready to hand off to media and trafficking teams.',tags:['Production','QA','Ad Specs','Asset Delivery','Campaign Scaling']},
]
export default function Services(){
 const [open,setOpen]=useState<number|null>(0)
 return <section id="services" className="px-6 md:px-10 py-24 md:py-36">
  <div className="flex items-baseline justify-between mb-14 md:mb-20"><span className="text-[11px] tracking-[0.25em] uppercase text-[#8a877f]">03 — Services</span><span className="text-[11px] tracking-[0.25em] uppercase text-[#8a877f]">What we produce</span></div>
  <h2 className="font-display font-medium text-[11vw] md:text-[6.5vw] leading-[0.95] mb-16 md:mb-24">One idea. <span className="text-stroke">Every format</span><br/>ready to run<span className="text-[#d7ff3f]">.</span></h2>
  <div>{services.map((s,i)=>{const isOpen=open===i;return <div key={s.n} className="border-t border-white/10 last:border-b">
   <button data-cursor onClick={()=>setOpen(isOpen?null:i)} className="w-full flex items-center justify-between py-7 md:py-9 text-left group"><div className="flex items-baseline gap-6 md:gap-12"><span className={`text-sm tabular-nums transition-colors duration-300 ${isOpen?'text-[#d7ff3f]':'text-[#8a877f]'}`}>{s.n}</span><span className={`font-display font-medium text-3xl md:text-5xl transition-all duration-500 ${isOpen?'translate-x-2 md:translate-x-4 text-[#d7ff3f]':'group-hover:translate-x-2 md:group-hover:translate-x-4'}`}>{s.title}</span></div><motion.span className={`shrink-0 w-11 h-11 md:w-14 md:h-14 rounded-full border flex items-center justify-center text-xl transition-colors duration-500 ${isOpen?'bg-[#d7ff3f] border-[#d7ff3f] text-[#0e0e0e]':'border-white/15'}`} animate={{rotate:isOpen?45:0}}>+</motion.span></button>
   <AnimatePresence initial={false}>{isOpen&&<motion.div initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} transition={{duration:.5,ease:[.22,1,.36,1]}} className="overflow-hidden"><div className="pb-10 md:pb-12 md:pl-[4.5rem] lg:pl-[7.5rem] max-w-3xl"><p className="text-[#8a877f] leading-relaxed text-base md:text-lg">{s.desc}</p><div className="mt-6 flex flex-wrap gap-2">{s.tags.map(t=><span key={t} className="text-[11px] tracking-[0.12em] uppercase border border-white/15 rounded-full px-4 py-2 text-[#eae7e0]/80">{t}</span>)}</div></div></motion.div>}</AnimatePresence>
  </div>})}</div>
 </section>
}
