export const Marquee = () => {
  const items = [
    'React', '✦', 'TypeScript', '✦', 'Node.js', '✦',
    'Next.js', '✦', 'MongoDB', '✦', 'Framer Motion', '✦',
    'Docker', '✦', 'AWS', '✦', 'PostgreSQL', '✦',
    'React', '✦', 'TypeScript', '✦', 'Node.js', '✦',
    'Next.js', '✦', 'MongoDB', '✦', 'Framer Motion', '✦',
    'Docker', '✦', 'AWS', '✦', 'PostgreSQL', '✦',
  ]

  return (
    <div className="w-full overflow-hidden border-y border-white/[0.06] py-4 bg-[#0f0f0f]">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span
            key={i}
            className={`px-4 text-xs font-medium tracking-widest uppercase whitespace-nowrap ${
              item === '✦' ? 'text-white/20' : 'text-white/40'
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
