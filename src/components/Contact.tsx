export const Contact = () => {
  return (
    <section id="contact" className="bg-[#2d3238] text-white py-24 md:py-32 px-8 w-full mt-10">
      <div className="flex flex-col items-center justify-center gap-10">
        {/* Mail Icon */}
        <a href="mailto:hello@example.com" className="hover:opacity-70 transition-opacity block outline-none border-none">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="#ffffff" className="text-white">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        </a>
        <div className="h-[2px] bg-white/20 w-48"></div>
        <p className="text-[10px] md:text-xs uppercase tracking-widest text-white/50 font-semibold mt-4">
          © {new Date().getFullYear()} ALEJANDRO CALVO
        </p>
      </div>
    </section>
  )
}
