'use client';

import { useEffect, useRef, useState } from 'react';

export default function Statistics() {
  const [counts, setCounts] = useState({ years: 0, projects: 0, clients: 0, satisfaction: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const targets = { years: 10, projects: 500, clients: 200, satisfaction: 98 };
    const duration = 2000;
    const start = Date.now();

    const animate = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);

      setCounts({
        years: Math.floor(targets.years * progress),
        projects: Math.floor(targets.projects * progress),
        clients: Math.floor(targets.clients * progress),
        satisfaction: Math.floor(targets.satisfaction * progress),
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [isVisible]);

  const stats = [
    { value: counts.years, label: 'Years of Experience', suffix: '+' },
    { value: counts.projects, label: 'Projects Delivered', suffix: '+' },
    { value: counts.clients, label: 'Happy Clients', suffix: '+' },
    { value: counts.satisfaction, label: 'Satisfaction Rate', suffix: '%' },
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-600 to-red-800 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">By The Numbers</h2>
          <p className="text-lg text-red-100">Our track record speaks for itself</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="text-5xl sm:text-6xl font-bold mb-2 animate-pulse-ring">
                {stat.value}{stat.suffix}
              </p>
              <p className="text-red-100 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
