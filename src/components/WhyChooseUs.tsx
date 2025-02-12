import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const WhyChooseUs = () => {
  const services = [
    {
      id: '01',
      title: 'Expert Local Guides',
      description: 'Our certified local guides bring destinations to life with their deep knowledge, insider access, and passionate storytelling, ensuring authentic cultural experiences.',
    },
    {
      id: '02',
      title: 'Curated Experiences',
      description: 'From hidden gems to iconic landmarks, we craft unique itineraries that blend must-see attractions with off-the-beaten-path adventures.',
    },
    {
      id: '03',
      title: 'Guaranteed Departures',
      description: 'Travel with confidence knowing your tour is guaranteed to depart regardless of group size. We never cancel trips due to low enrollment.',
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left side - Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1528127269322-539801943592"
              alt="Tour Guide explaining historical site"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right side - Content */}
          <div className="space-y-12">
            <h2 className="text-4xl font-light">WHY TRAVEL WITH US</h2>

            <div className="space-y-12">
              {services.map((service) => (
                <div key={service.id} className="group">
                  <div className="flex items-start gap-8 pb-8 border-b border-gray-200">
                    <span className="text-lg text-gray-400">{service.id}</span>
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-light">{service.title}</h3>
                        <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;