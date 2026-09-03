export const About = () => {
  return (
    <section id="about" className="py-24 md:py-40 px-8 w-full max-w-5xl mx-auto">
      {/* 3 Columns matching reference: Icon + 4 horizontal lines */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
        
        {/* Column 1: Star */}
        <div className="flex flex-col items-center">
          <div className="mb-12 text-[#2d3238] transform scale-150">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <div className="w-full max-w-[160px] space-y-5">
            <div className="thin-line bg-[#2d3238]"></div>
            <div className="thin-line bg-[#2d3238]"></div>
            <div className="thin-line bg-[#2d3238]"></div>
            <div className="thin-line bg-[#2d3238] w-[80%] mx-auto"></div>
          </div>
        </div>

        {/* Column 2: Pin */}
        <div className="flex flex-col items-center">
          <div className="mb-12 text-[#2d3238] transform scale-150">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <div className="w-full max-w-[160px] space-y-5">
            <div className="thin-line bg-[#2d3238]"></div>
            <div className="thin-line bg-[#2d3238]"></div>
            <div className="thin-line bg-[#2d3238]"></div>
            <div className="thin-line bg-[#2d3238] w-[80%] mx-auto"></div>
          </div>
        </div>

        {/* Column 3: Document */}
        <div className="flex flex-col items-center">
          <div className="mb-12 text-[#2d3238] transform scale-150">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
            </svg>
          </div>
          <div className="w-full max-w-[160px] space-y-5">
            <div className="thin-line bg-[#2d3238]"></div>
            <div className="thin-line bg-[#2d3238]"></div>
            <div className="thin-line bg-[#2d3238]"></div>
            <div className="thin-line bg-[#2d3238] w-[80%] mx-auto"></div>
          </div>
        </div>

      </div>
    </section>
  )
}
