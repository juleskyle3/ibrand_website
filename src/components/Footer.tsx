'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="animate-fade-in">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-red-400 to-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">i</span>
              </div>
              <span className="font-bold text-lg">iBrand Creative</span>
            </div>
            <p className="text-gray-400 text-sm">Premium creative solutions for your brand transformation.</p>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{animationDelay: '100ms'}}>
            <h4 className="font-semibold mb-4 text-red-400">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-red-400 transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="hover:text-red-400 transition-colors duration-300">About</a></li>
              <li><a href="#services" className="hover:text-red-400 transition-colors duration-300">Services</a></li>
              <li><a href="#portfolio" className="hover:text-red-400 transition-colors duration-300">Portfolio</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fade-in" style={{animationDelay: '200ms'}}>
            <h4 className="font-semibold mb-4 text-red-400">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-red-400 transition-colors duration-300">Graphic Design</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors duration-300">Signage Fabrication</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors duration-300">Corporate Branding</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors duration-300">Printing & Production</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-fade-in" style={{animationDelay: '300ms'}}>
            <h4 className="font-semibold mb-4 text-red-400">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Email: Violakoojo@gmail.com</li>
              <li>Phone: +250 784 586 266</li>
              <li>Address: Adarwa House</li>
              <li>1st Floor, Kigali, Rwanda</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">&copy; 2024 iBrand Creative Ltd. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300 text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300 text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300 text-sm">Website</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
