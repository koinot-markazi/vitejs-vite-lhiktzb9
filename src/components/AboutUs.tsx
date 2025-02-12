import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const AboutUs = () => {
  const stats = [
    {
      value: '41k+',
      label: 'HAPPY TRAVELERS',
      description: 'Satisfied adventurers who have explored the world with us since 2009',
      image: 'https://images.unsplash.com/photo-1522199710521-72d69614c702'
    },
    {
      value: '15+',
      label: 'YEARS OF EXCELLENCE',
      description: 'Award-winning tour operator with international recognition for exceptional service',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e'
    },
    {
      value: '120+',
      label: 'DESTINATIONS',
      description: 'Curated collection of unique destinations across 45 countries worldwide',
      image: 'https://images.unsplash.com/photo-1488085061387-422e29b40080'
    }
  ];

  return (
    <section className="bg-black text-white py-24" id="#about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-20">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-[#FF5733] flex items-center justify-center">
                <span className="text-white text-xs">★</span>
              </div>
              <span className="text-[#FF5733] uppercase tracking-wider text-sm">
                OUR ACHIEVEMENTS
              </span>
            </div>
            <h2 className="text-4xl font-light">MILESTONES & SUCCESS</h2>
          </div>
          <button className="hidden md:inline-flex items-center gap-2 px-6 py-3 bg-[#FF5733] text-white rounded-lg hover:bg-[#FF4520] transition-colors group">
            Contact us
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center border-t border-white/10 pt-16">
              <div className="space-y-4">
                <span className="text-gray-400">{stat.label}</span>
                <p className="text-gray-400 max-w-sm">
                  {stat.description}
                </p>
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src={stat.image}
                  alt={stat.label}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-7xl md:text-8xl font-light">
                {stat.value}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile CTA Button */}
        <div className="mt-16 text-center md:hidden">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF5733] text-white rounded-lg hover:bg-[#FF4520] transition-colors group">
            Contact us
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;