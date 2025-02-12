import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[100svh]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <img
          src="https://images.unsplash.com/photo-1582719508461-905c673771fd"
          alt="Hotel Interior"
          className="w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
        />
      </div>

      {/* Social Links - Hidden on smallest screens */}
      <div className="absolute top-24 left-4 sm:left-8 z-20 hidden sm:flex flex-col gap-4 text-white/80">
        <a href="#" className="hover:text-white transition-colors text-base">Join our community</a>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition-colors p-2 -m-2">Facebook</a>
          <a href="#" className="hover:text-white transition-colors p-2 -m-2">X</a>
          <a href="#" className="hover:text-white transition-colors p-2 -m-2">Youtube</a>
          <a href="#" className="hover:text-white transition-colors p-2 -m-2">Instagram</a>
        </div>
      </div>

      {/* Feature Cards - Responsive layout */}
      <div className="absolute top-24 right-4 sm:right-8 z-20 flex flex-col gap-4 w-full max-w-[20rem] sm:max-w-[24rem]">
        <div className="bg-white rounded-2xl p-4 shadow-lg">
          <h3 className="font-semibold mb-2 text-base sm:text-lg">Exclusive Destinations</h3>
          <div className="flex items-center gap-2 mb-2">
            <div className="flex -space-x-2">
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-8 h-8 rounded-full border-2 border-white" alt="User" />
              <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=4160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-8 h-8 rounded-full border-2 border-white" alt="User" />
              <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=3023&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-8 h-8 rounded-full border-2 border-white" alt="User" />
            </div>
            <span className="text-sm text-gray-600 ml-3">50k+ travelers trust our journeys</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-lg">
          <h3 className="font-semibold mb-4 text-base sm:text-lg">Travel with Sadiya Tour</h3>
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="px-3 py-1 bg-gray-100 rounded-full min-h-[2.75rem] flex items-center">Cultural Tours</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full min-h-[2.75rem] flex items-center">Adventure</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full min-h-[2.75rem] flex items-center">Local Guides</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full min-h-[2.75rem] flex items-center">Heritage Sites</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full min-h-[2.75rem] flex items-center">Luxury Travel</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full min-h-[2.75rem] flex items-center">Food Tours</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full min-h-[2.75rem] flex items-center">Photography</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full min-h-[2.75rem] flex items-center">Local Markets</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full min-h-[2.75rem] flex items-center">Festivals</span>
          </div>
        </div>
      </div>

      {/* Main Content - Optimized for mobile */}
      <div className="relative z-20 flex flex-col justify-end min-h-[100svh] pb-16 sm:pb-32 px-4 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-base sm:text-lg text-white/80 mb-4 leading-relaxed">
            Embark on extraordinary journeys with expert guides<br className="hidden sm:block" />
            and create memories that last a lifetime.
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-light mb-8 leading-tight">
            Discover the world's most<br className="hidden sm:block" />
            enchanting destinations
          </h1>
          <button className="inline-flex items-center px-6 py-4 sm:py-3 bg-[#FF5733] text-white rounded-lg hover:bg-[#FF4520] transition-colors group min-w-[11rem] justify-center text-base sm:text-lg touch-manipulation">
            Explore Tours
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Mobile Social Links - Only visible on smallest screens */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-20 bg-black/50 backdrop-blur-sm px-4 py-3">
        <div className="flex justify-around items-center">
          <a href="#" className="text-white/80 hover:text-white transition-colors p-3">Facebook</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors p-3">X</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors p-3">Youtube</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors p-3">Instagram</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;