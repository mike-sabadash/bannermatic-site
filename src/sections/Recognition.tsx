import { motion } from 'framer-motion'

const awards = [
  ['Awwwards', 'Site of the Day', '×7'],
  ['Awwwards', 'Developer Award', '×4'],
  ['FWA', 'FWA of the Day', '×5'],
  ['CSSDA', 'Website of the Year', '×1'],
  ['D&AD', 'Wood Pencil', '×2'],
  ['The Webby Awards', 'Nominee — Design', '×3'],
]

export default function Recognition() {
  return (
    <section className="px-6 md:px-10 py-24 md:py-36">
      <div className="flex items-baseline justify-between mb-14 md:mb-20">
        <span className="text-[11px] tracking-[0.25em] uppercase text-[#8a877f]">04 — Recognition</span>
        <span className="text-[11px] tracking-[0.25em] uppercase text-[#8a877f]">Humble, bragging</span>
      </div>

      <div className="grid md:grid-cols-2 gap-16 md:gap-10">
        <div>
          <h2 className="font-display font-medium text-[10vw] md:text-[4.5vw] leading-[1.02]">
            Awards don't build brands.
            <br />
            <span className="text-[#8a877f]">But they don't hurt either.</span>
          </h2>
          <p className="mt-8 max-w-md text-[#8a877f] leading-relaxed">
            Our shelf holds metal from every major design institution — a side
            effect of doing work we genuinely care about, for clients brave
            enough to let us.
          </p>
        </div>
        <div>
          {awards.map(([org, name, count], i) => (
            <motion.div
              key={name + i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group flex items-center justify-between border-t border-white/10 last:border-b py-5 md:py-6"
              data-cursor
            >
              <div>
                <div className="font-display text-lg md:text-2xl font-medium transition-colors duration-300 group-hover:text-[#d7ff3f]">
                  {org}
                </div>
                <div className="text-[12px] text-[#8a877f] mt-1">{name}</div>
              </div>
              <span className="font-display text-lg md:text-xl text-[#8a877f] tabular-nums">{count}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
