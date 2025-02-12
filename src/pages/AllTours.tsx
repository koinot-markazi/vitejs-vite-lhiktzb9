import React, { useState, useEffect } from 'react';
import { Search, SlidersHorizontal, ArrowUpDown, Star, Clock, Users, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Tour {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  groupSize: string;
  price: number;
  rating: number;
  reviews: number;
  destination: string;
  category: string;
}

const AllTours = () => {
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDestination, setSelectedDestination] = useState('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [sortBy, setSortBy] = useState('popularity');
  const [showFilters, setShowFilters] = useState(false);

  const mockTours: Tour[] = [
    {
      id: '1',
      title: 'Desert Safari Experience',
      description: 'Experience the magic of the Arabian desert with camping under the stars, dune bashing, and traditional entertainment.',
      image: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3',
      duration: '3 Days',
      groupSize: '6 People',
      price: 649,
      rating: 4.7,
      reviews: 86,
      destination: 'UAE',
      category: 'Adventure'
    },
    {
      id: '2',
      title: 'Mountain Trek Adventure',
      description: 'Explore breathtaking mountain landscapes, pristine lakes, and diverse wildlife on this unforgettable trekking expedition.',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
      duration: '5 Days',
      groupSize: '10 People',
      price: 999,
      rating: 4.9,
      reviews: 124,
      destination: 'Kazakhstan',
      category: 'Adventure'
    }
  ];

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setTours(mockTours);
      setLoading(false);
    }, 1000);
  }, []);

  const destinations = ['all', 'Uzbekistan', 'UAE', 'Turkey', 'Egypt', 'Kazakhstan'];

  const filteredTours = tours
    .filter(tour => 
      (selectedDestination === 'all' || tour.destination === selectedDestination) &&
      tour.price >= priceRange[0] && tour.price <= priceRange[1] &&
      (tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
       tour.description.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return b.reviews - a.reviews;
      }
    });

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[60vh] min-h-[400px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1530789253388-582c481c54b0"
            alt="Travel destinations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-light text-white mb-6">Discover Our Tours</h1>
            <p className="text-xl text-white/90 mb-8">
              Explore handcrafted journeys to the world's most fascinating destinations. 
              From cultural expeditions to adventure tours, find your perfect travel experience.
            </p>
          </div>
        </div>
      </div>

      <div className="sticky top-0 z-20 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search tours..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5733] focus:border-transparent"
              />
            </div>
            <div className="flex gap-4 items-center">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="inline-flex items-center px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <SlidersHorizontal className="w-5 h-5 mr-2" />
                Filters
              </button>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none pl-4 pr-10 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5733] focus:border-transparent"
                >
                  <option value="popularity">Most Popular</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
                <ArrowUpDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
            </div>
          </div>

          {showFilters && (
            <div className="mt-4 p-4 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
                  <select
                    value={selectedDestination}
                    onChange={(e) => setSelectedDestination(e.target.value)}
                    className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5733] focus:border-transparent"
                  >
                    {destinations.map((dest) => (
                      <option key={dest} value={dest}>
                        {dest === 'all' ? 'All Destinations' : dest}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                  <div className="flex gap-4 items-center">
                    <input
                      type="range"
                      min="0"
                      max="5000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full"
                    />
                    <span className="text-sm text-gray-600">Up to ${priceRange[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="animate-pulse">
                <div className="aspect-video bg-gray-200 rounded-lg mb-4" />
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-1/4" />
                  <div className="h-6 bg-gray-200 rounded w-3/4" />
                  <div className="h-4 bg-gray-200 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="mb-6 text-gray-600">
              Showing {filteredTours.length} tours
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredTours.map((tour) => (
                <Link 
                  to={`/tours/${tour.id}`}
                  key={tour.id} 
                  className="group"
                >
                  <div className="bg-white rounded-xl overflow-hidden">
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={tour.image}
                        alt={tour.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-6 mb-4">
                        <div className="flex items-center gap-2">
                          <Clock className="w-5 h-5 text-gray-400" />
                          <span className="text-gray-600">{tour.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-5 h-5 text-gray-400" />
                          <span className="text-gray-600">{tour.groupSize}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-5 h-5 text-yellow-400" />
                          <span className="text-gray-600">{tour.rating}</span>
                        </div>
                      </div>

                      <h3 className="text-2xl font-light mb-2 group-hover:text-[#FF5733] transition-colors">
                        {tour.title}
                      </h3>

                      <div className="text-[#FF5733] text-xl font-medium">
                        ${tour.price}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AllTours;