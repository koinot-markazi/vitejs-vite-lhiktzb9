import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Clock, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const PopularTours = () => {
  const { t } = useTranslation();

  const tours = [
    {
      id: 1,
      title: 'Ancient Silk Road Adventure',
      image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7',
      specs: {
        duration: '7 Days',
        groupSize: '12 People',
        rating: '4.9'
      },
      price: '$1,299'
    },
    {
      id: 2,
      title: 'Samarkand Heritage Tour',
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523',
      specs: {
        duration: '4 Days',
        groupSize: '8 People',
        rating: '4.8'
      },
      price: '$899'
    },
    {
      id: 3,
      title: 'Desert Safari Experience',
      image: 'https://images.unsplash.com/photo-1452022582947-b521d8779ab6',
      specs: {
        duration: '3 Days',
        groupSize: '6 People',
        rating: '4.7'
      },
      price: '$649'
    },
    {
      id: 4,
      title: 'Mountain Trek Adventure',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
      specs: {
        duration: '5 Days',
        groupSize: '10 People',
        rating: '4.9'
      },
      price: '$999'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-[#FF5733] flex items-center justify-center">
                <span className="text-white text-xs font-medium">★</span>
              </div>
              <span className="text-[#FF5733] font-medium uppercase tracking-wider">
                FEATURED TOURS
              </span>
            </div>
            <h2 className="text-4xl font-light">EXPLORE ADVENTURES</h2>
          </div>
          <Link
            to="/tours"
            className="hidden md:inline-flex items-center gap-2 text-black hover:text-gray-700 transition-colors group"
          >
            View All Tours
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Tours Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {tours.map((tour) => (
            <Link to={`/tours/${tour.id}`} key={tour.id} className="group space-y-6">
              <div className="aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-600">{tour.specs.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-600">{tour.specs.groupSize}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-400" />
                      <span className="text-gray-600">{tour.specs.rating}</span>
                    </div>
                  </div>
                  <span className="text-lg font-semibold text-[#FF5733]">{tour.price}</span>
                </div>
                <h3 className="text-2xl font-light group-hover:text-[#FF5733] transition-colors">
                  {tour.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 text-center md:hidden">
          <Link
            to="/tours"
            className="inline-flex items-center gap-2 text-black hover:text-gray-700 transition-colors group"
          >
            View All Tours
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularTours;