'use client';

import { Lightbulb, Pencil, Hammer, CheckCircle } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      icon: Lightbulb,
      title: 'Discovery & Brief',
      description: 'We understand your vision, goals, and brand identity through detailed consultation.',
      number: '01',
    },
    {
      icon: Pencil,
      title: 'Design & Concept',
      description: 'Creative concepts are developed, refined, and presented for your approval.',
      number: '02',
    },
    {
      icon: Hammer,
      title: 'Fabrication & Production',
      description: 'Expert craftsmanship brings designs to life with premium materials and techniques.',
      number: '03',
    },
    {
      icon: CheckCircle,
      title: 'Delivery & Support',
      description: 'Professional installation and ongoing support to ensure lasting impact.',
      number: '04',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Creative <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">Process</span>
          </h2>
          <p className="text-lg text-gray-600">Streamlined workflow for exceptional results</p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute top-1/4 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-red-700 to-red-800 transform translate-y-12"></div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative group animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Card */}
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-red-600 transform hover:-translate-y-2">
                    {/* Number Badge */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-lg flex items-center justify-center mb-6 group-hover:from-red-600 group-hover:to-red-800 transition-all duration-300">
                      <Icon className="text-red-600 group-hover:text-white transition-colors" size={32} />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>

                    {/* Arrow */}
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute -right-10 top-1/3 text-red-600 text-2xl">→</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
