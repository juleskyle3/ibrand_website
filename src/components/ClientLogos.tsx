'use client';

export default function ClientLogos() {
  const clients = [
    { name: 'Liquid Telecom', icon: '📱' },
    { name: 'SOFARU Hardware', icon: '🔨' },
    { name: 'SP Station', icon: '⛽' },
    { name: 'Nootri Shop', icon: '🛍️' },
    { name: 'IDH Office', icon: '🏛️' },
    { name: 'DERIV', icon: '💼' },
    { name: 'EJC', icon: '📝' },
    { name: 'Huye Stadium', icon: '🏟️' },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Trusted By <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">Leading Brands</span>
          </h2>
          <p className="text-lg text-gray-600">Proud partners with Rwanda's finest companies</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-8 border border-gray-200 hover:border-red-600 transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Background accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-800/0 group-hover:from-red-600/10 group-hover:to-red-800/10 transition-all duration-300"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <p className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">{client.icon}</p>
                <p className="text-center font-semibold text-gray-900 text-sm group-hover:text-red-600 transition-colors">{client.name}</p>
              </div>

              {/* Border animation on hover */}
              <div className="absolute inset-0 rounded-xl border-2 border-red-600/0 group-hover:border-red-600/50 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">and many more satisfied clients...</p>
        </div>
      </div>
    </section>
  );
}
