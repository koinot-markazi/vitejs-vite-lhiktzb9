import React from 'react';
import { Building2 } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-8 items-center">
          {/* Left Image */}
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1530789253388-582c481c54b0"
              alt="Ancient city view"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Center Content */}
          <div className="text-center max-w-2xl mx-auto">
            <div className="flex justify-center mb-8">
              <Building2 className="w-12 h-12" />
            </div>
            <h2 className="text-4xl font-light mb-6 max-w-xl mx-auto">
              DISCOVER THE WORLD'S MOST ENCHANTING DESTINATIONS WITH OUR EXPERT GUIDES.
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              From ancient Silk Road cities to pristine mountain landscapes, our curated tours offer unforgettable experiences. Join our community of passionate travelers and explore the world's most remarkable destinations.
            </p>
            <button className="inline-flex items-center px-6 py-3 bg-[#FF5733] text-white rounded-full hover:bg-[#FF4520] transition-colors">
              Start Your Journey
              <div className="flex -space-x-2 ml-2">
                <img
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6"
                  alt="Happy traveler"
                  className="w-6 h-6 rounded-full border-2 border-white"
                />
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb"
                  alt="Happy traveler"
                  className="w-6 h-6 rounded-full border-2 border-white"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                  alt="Happy traveler"
                  className="w-6 h-6 rounded-full border-2 border-white"
                />
              </div>
            </button>
          </div>

          {/* Right Image */}
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1488085061387-422e29b40080"
              alt="Travel destination"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;