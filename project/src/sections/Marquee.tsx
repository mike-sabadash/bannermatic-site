export default function Marquee({
  items,
  dark = false,
  slow = false,
}: {
  items: string[]
  dark?: boolean
  slow?: boolean
}) {
  const row = (
    <div className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          <span
            className={`font-display font-medium text-[11vw] md:text-[7vw] leading-none px-6 md:px-10 whitespace-nowrap ${
              dark ? 'text-[#0e0e0e]' : 'text-[#eae7e0]'
            } ${i % 2 === 1 ? 'text-stroke' : ''}`}
          >
            {item}
          </span>
          <span className={`text-2xl md:text-4xl ${dark ? 'text-[#0e0e0e]/40' : 'text-[#d7ff3f]'}`}>✦</span>
        </span>
      ))}
    </div>
  )

  return (
    <div
      className={`relative overflow-hidden py-8 md:py-12 border-y ${
        dark ? 'bg-[#d7ff3f] border-[#0e0e0e]/10' : 'border-white/10'
      }`}
    >
      <div className={`flex w-max ${slow ? 'animate-marquee-slow' : 'animate-marquee'}`}>
        {row}
        {row}
      </div>
    </div>
  )
}
