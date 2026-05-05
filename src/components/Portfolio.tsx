'use client';

export default function Portfolio() {
  const projects = [
    {
      title: 'Liquid Telecom Branding',
      category: 'BK Arena',
      description: '3D Signage & Interior Branding',
      icon: '🏢',
    },
    {
      title: 'Nootri Shop',
      category: 'Retail',
      description: 'Corporate Branding & Signage',
      icon: '🛍️',
    },
    {
      title: 'SP Station',
      category: 'Automotive',
      description: 'Exterior & Interior Branding',
      icon: '⛽',
    },
    {
      title: 'SOFARU Hardware',
      category: '3D Signage',
      description: '3D Backlit Signages',
      icon: '🔨',
    },
    {
      title: 'IDH Office',
      category: 'Corporate',
      description: 'Office Branding Solutions',
      icon: '🏛️',
    },
    {
      title: 'DERIV Branding',
      category: 'Graphics',
      description: '2D Lettering & Design',
      icon: '✏️',
    },
    {
      title: 'EJC 2D Letters',
      category: 'Signage',
      description: 'Custom 2D Lettering',
      icon: '🅰️',
    },
    {
      title: 'Huye Stadium',
      category: 'Sports',
      description: 'Large Scale Branding',
      icon: '🏟️',
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">Portfolio</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcase of our finest projects and client success stories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-red-50 to-red-100 p-6 hover:shadow-xl transition-all duration-300 border border-red-200 hover:border-red-600 cursor-pointer transform hover:-translate-y-2"
              style={{animationDelay: `${index * 50}ms`}}
            >
              {/* Background animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <p className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">{project.icon}</p>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 group-hover:text-red-100 transition-colors mb-2">{project.category}</p>
                <p className="text-sm text-gray-700 group-hover:text-white transition-colors">{project.description}</p>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-red-600 to-red-800 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
