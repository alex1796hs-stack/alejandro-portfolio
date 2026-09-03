export const Projects = () => {
  const projects = [
    { title: 'EasyLearn', tags: 'React, Node.js', url: '#' },
    { title: 'Portfolio Site', tags: 'Minimalist Layout', url: '#' },
    { title: 'Web App', tags: 'Firebase, Tailwind', url: '#' },
  ]

  return (
    <section id="projects" className="py-24 md:py-40 px-8 max-w-4xl mx-auto w-full">
      <div className="w-full flex flex-col items-center">
        <p className="text-[11px] font-extrabold uppercase text-[#2d3238] mb-8">Selected Projects</p>
        
        <div className="w-full max-w-2xl border-t border-text-dark/20">
          {projects.map((p, i) => (
            <div key={i} className="flex justify-between items-center py-5 border-b border-text-dark/20 group hover:bg-gray-50 transition-colors">
              <span className="font-bold text-sm uppercase text-[#2d3238]">{p.title}</span>
              <span className="text-xs uppercase text-text-muted">{p.tags}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
