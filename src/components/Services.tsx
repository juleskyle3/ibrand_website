'use client';

import { Code, Palette, BarChart3, Smartphone, Zap, Users } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Professional graphic design services for all your branding needs and marketing materials.',
    },
    {
      icon: Code,
      title: 'Signage Fabrication',
      description: '3D and 2D signages, outdoor signs, backlit signages, and custom lettering solutions.',
    },
    {
      icon: Smartphone,
      title: 'Corporate Branding',
      description: 'Complete corporate identity and branding solutions for your organization.',
    },
    {
      icon: BarChart3,
      title: 'Interior Design',
      description: 'Professional interior branding and office design for corporate spaces.',
    },
    {
      icon: Zap,
      title: 'Printing & Production',
      description: 'High-quality printing with regular print, rubber print, puff ink, and heat transfer options.',
    },
    {
      icon: Users,
      title: 'Advertising',
      description: 'Comprehensive advertising and marketing solutions to promote your brand effectively.',
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive creative solutions for your branding and marketing needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 border border-gray-200 rounded-xl hover:border-red-600 hover:shadow-xl transition-all duration-300 bg-white hover:bg-gradient-to-br hover:from-red-50 hover:to-white transform hover:-translate-y-1"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-200 rounded-lg flex items-center justify-center mb-4 group-hover:from-red-600 group-hover:to-red-800 transition-all duration-300 shadow-sm group-hover:shadow-md">
                  <Icon className="text-red-600 group-hover:text-white transition-colors" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">{service.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
