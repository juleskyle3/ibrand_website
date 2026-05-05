'use client';

import { useEffect, useState } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';

export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down
      setIsVisible(window.scrollY > 300);

      // Calculate scroll progress
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating CTA Button */}
      <a
        href="#contact"
        className="fixed bottom-8 right-8 z-40 group animate-bounce-slow"
      >
        <div className="relative">
          {/* Pulse effect */}
          <div className="absolute inset-0 bg-red-600 rounded-full blur-lg group-hover:blur-xl transition-all opacity-75 group-hover:opacity-100 animate-pulse"></div>

          {/* Button */}
          <button className="relative bg-gradient-to-r from-red-600 to-red-800 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-110 flex items-center justify-center gap-2 group/btn">
            <MessageCircle size={24} />
            <span className="hidden group-hover/btn:inline text-sm font-semibold whitespace-nowrap">Get Started</span>
          </button>
        </div>
      </a>

      {/* Back to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-8 z-40 group animate-fade-in"
        >
          <div className="relative">
            {/* Progress Ring */}
            <svg
              className="transform -rotate-90"
              width="56"
              height="56"
              viewBox="0 0 56 56"
            >
              <circle
                cx="28"
                cy="28"
                r="24"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="3"
              />
              <circle
                cx="28"
                cy="28"
                r="24"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="3"
                strokeDasharray={`${(scrollProgress / 100) * 150.79} 150.79`}
                className="transition-all duration-300"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#dc2626" />
                  <stop offset="100%" stopColor="#991b1b" />
                </linearGradient>
              </defs>
            </svg>

            {/* Icon */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-red-600 to-red-800 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 group-hover:from-red-700 group-hover:to-red-900">
              <ArrowUp size={24} className="text-white" />
            </div>
          </div>
        </button>
      )}
    </>
  );
}
