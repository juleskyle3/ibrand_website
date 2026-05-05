'use client';

import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Liquid Telecom Rwanda',
      role: 'Brand Manager',
      content: 'iBrand transformed our BK Arena space with stunning 3D signage and branding. Their attention to detail and professional execution exceeded our expectations.',
      rating: 5,
      emoji: '🏢',
    },
    {
      name: 'SOFARU Hardware',
      role: 'Operations Director',
      content: 'The 3D backlit signages on our entrance are absolutely stunning. Customers have remarked how impressive our storefront looks. Highly recommend!',
      rating: 5,
      emoji: '🔨',
    },
    {
      name: 'SP Station',
      role: 'General Manager',
      content: 'Professional team delivered both exterior and interior branding beyond our vision. The quality of materials and craftsmanship is outstanding.',
      rating: 5,
      emoji: '⛽',
    },
    {
      name: 'Nootri Shop',
      role: 'Owner',
      content: 'iBrand\'s corporate branding solution gave our retail space a premium feel. Our foot traffic increased noticeably after the renovation.',
      rating: 5,
      emoji: '🛍️',
    },
    {
      name: 'IDH Office',
      role: 'Director',
      content: 'Fantastic office branding that perfectly reflects our company culture. The team was efficient, professional, and delivered on time.',
      rating: 5,
      emoji: '🏛️',
    },
    {
      name: 'Huye Stadium',
      role: 'Project Manager',
      content: 'Large-scale branding project handled flawlessly. iBrand\'s expertise in managing complex projects is impressive. Best choice for our facility.',
      rating: 5,
      emoji: '🏟️',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">Success Stories</span>
          </h2>
          <p className="text-lg text-gray-600">Trusted by leading brands across Rwanda</p>
        </div>

        <div className="relative">
          {/* Testimonial Cards */}
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4 sm:px-8"
                >
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sm:p-12 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-5xl">{testimonial.emoji}</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                        <p className="text-red-600 font-medium text-sm">{testimonial.role}</p>
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {Array(testimonial.rating).fill(0).map((_, i) => (
                        <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-gray-700 text-lg leading-relaxed italic">"{testimonial.content}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 sm:left-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-red-600 to-red-800 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute -right-4 sm:right-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-red-600 to-red-800 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-red-600 to-red-800 w-8'
                    : 'bg-gray-300 w-2'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
