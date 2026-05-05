'use client';

export default function About() {
  const stats = [
    { label: 'Years in Business', value: '10+', icon: '🎯' },
    { label: 'Projects Completed', value: '500+', icon: '✨' },
    { label: 'Happy Clients', value: '200+', icon: '👥' },
    { label: 'Team Members', value: '50+', icon: '👨‍💼' },
  ];

  const services = [
    'Advertising & Marketing',
    'Graphic Design',
    'Signage Fabrication',
    'Interior Design',
    'Corporate Branding',
    'Printing & Production',
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">iBrand</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            iBrand Creative Ltd is Rwanda's leading creative agency, dedicated to delivering innovative branding and design solutions that elevate your business.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-red-200 animate-scale-in group" style={{animationDelay: `${index * 100}ms`}}>
              <p className="text-3xl mb-2 group-hover:scale-125 transition-transform">{stat.icon}</p>
              <p className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800 mb-2">
                {stat.value}
              </p>
              <p className="text-gray-600 font-medium text-sm sm:text-base">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl h-96 flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow duration-300 group">
            <div className="text-center text-white space-y-4">
              <p className="text-6xl group-hover:scale-110 transition-transform duration-300">🎨</p>
              <p className="text-2xl font-bold">Creative Excellence</p>
              <p className="text-red-100">Innovative solutions for your brand</p>
            </div>
          </div>
          <div className="space-y-6 animate-slide-in-right">
            <h3 className="text-3xl font-bold text-gray-900">Our Services</h3>
            <ul className="space-y-4">
              {services.map((item, index) => (
                <li key={index} className="flex items-start gap-3 group hover:translate-x-2 transition-transform">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-red-600 to-red-800 flex items-center justify-center flex-shrink-0 mt-1 shadow-sm group-hover:shadow-lg transition-shadow">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600">Transforming brands with premium creative solutions since established.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
