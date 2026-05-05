'use client';

import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-red-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 bg-red-500/20 text-red-300 rounded-full text-sm font-medium border border-red-500/30 flex items-center gap-2 w-fit">
                <Sparkles size={16} />
                Welcome to iBrand Creative Ltd
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight">
              Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">Brand</span> Today
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              We are Rwanda's premier creative agency specializing in advertising, graphic design, signage fabrication, interior design, corporate branding, and printing production.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#contact" className="bg-gradient-to-r from-red-600 to-red-800 text-white px-8 py-3 rounded-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2 font-medium group">
                Get Started
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#about" className="border border-gray-500 text-white px-8 py-3 rounded-lg hover:border-red-600 hover:text-red-400 hover:bg-red-600/10 transition-all font-medium">
                Learn More
              </a>
            </div>
          </div>

          {/* Visual - Logo */}
          <div className="relative h-96 md:h-full min-h-96 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-2xl opacity-30 blur-3xl animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-red-600 to-red-800 rounded-2xl h-80 w-80 flex flex-col items-center justify-center text-white shadow-2xl transform hover:scale-105 transition-transform duration-500 animate-float">
              <div className="text-8xl font-bold mb-4 animate-bounce-slow">i</div>
              <p className="text-2xl font-bold text-center">BRAND CREATIVE LTD</p>
              <p className="text-sm text-red-100 mt-2">Premium Creative Solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
