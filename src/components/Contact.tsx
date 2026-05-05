'use client';

import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Contact iBrand Creative Ltd today to transform your brand
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: Phone,
              label: 'Phone',
              value: '+250 784 586 266',
              link: 'tel:+250784586266',
            },
            {
              icon: Mail,
              label: 'Email',
              value: 'ibrandcorporationltd@gmail.com',
              link: 'mailto:ibrandcorporationltd@gmail.com',
            },
            {
              icon: MapPin,
              label: 'Address',
              value: 'Adarwa House 1st Floor, Kigali, Rwanda',
              link: '#',
            },
          ].map((contact, index) => {
            const Icon = contact.icon;
            return (
              <a 
                key={index}
                href={contact.link}
                className="bg-white p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300 group border border-gray-200 hover:border-red-600 cursor-pointer transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-200 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:from-red-600 group-hover:to-red-800 transition-all">
                  <Icon className="text-red-600 group-hover:text-white transition-colors" size={24} />
                </div>
                <p className="text-gray-600 font-medium mb-2 group-hover:text-red-600 transition-colors">{contact.label}</p>
                <p className="text-gray-900 font-semibold group-hover:text-red-600 transition-colors">{contact.value}</p>
              </a>
            );
          })}
        </div>

        <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100 transition-all"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100 transition-all"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100 transition-all"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-100 transition-all resize-none"
            ></textarea>
            <button className="w-full bg-gradient-to-r from-red-600 to-red-800 text-white py-3 rounded-lg hover:shadow-lg transition-all hover:scale-105 font-medium group flex items-center justify-center gap-2">
              <span>Send Message</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
