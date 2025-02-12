import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: 'Ac porttitor gravida non commodo etiam ornare. Eget feugiat sed ullamcorper vestibulum non pellentesque nisl mattis. Odio turpis donec praesent tellus amet viverra nec mattis amet. Urna ut sit sed molestie enim. Facilisis luctus pulvinar ut fermentum neque consequat. Molestie porttitor.',
    author: 'Courtney Henry',
    location: 'Florida, US',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
  },
  {
    id: 2,
    content: 'Vestibulum nec pellentesque nisl mattis odio turpis donec praesent tellus amet viverra. Facilisis luctus pulvinar ut fermentum neque consequat. Molestie porttitor ac gravida non commodo etiam ornare.',
    author: 'Robert Fox',
    location: 'New York, US',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-[#FF5733] flex items-center justify-center">
                <span className="text-white text-xs">★</span>
              </div>
              <span className="text-[#FF5733] uppercase tracking-wider text-sm">
                TESTIMONIALS
              </span>
            </div>
            <h2 className="text-4xl font-light">CUSTOMERS REVIEWS</h2>
          </div>
          <a
            href="#"
            className="hidden md:inline-flex items-center gap-2 hover:text-[#FF5733] transition-colors group"
          >
            View All Reviews
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Testimonial Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image */}
          <div className="relative aspect-square lg:aspect-auto">
            <img
              src={testimonials[currentIndex].image}
              alt="Interior"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Review */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-gray-600 text-lg leading-relaxed mb-12">
                {testimonials[currentIndex].content}
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-medium text-lg">
                    {testimonials[currentIndex].author}
                  </h3>
                  <p className="text-gray-500">
                    {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-[#FF5733] w-8'
                        : 'bg-gray-300'
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div>
              <div className="flex gap-4">
                <button
                  onClick={handlePrevious}
                  className="p-2 rounded-full border border-gray-200 hover:border-[#FF5733] hover:text-[#FF5733] transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-full border border-gray-200 hover:border-[#FF5733] hover:text-[#FF5733] transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View All Link */}
        <div className="mt-8 text-center md:hidden">
          <a
            href="#"
            className="inline-flex items-center gap-2 hover:text-[#FF5733] transition-colors group"
          >
            View All Reviews
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;