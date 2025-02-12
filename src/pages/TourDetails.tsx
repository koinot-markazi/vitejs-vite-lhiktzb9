import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Users, Clock, Calendar, Star, DollarSign, Car, UtensilsCrossed, Languages, Coffee, Plane, Wifi, Dumbbell, Shirt as Shirt2, Hotel, School as Pool, X, Phone, User } from 'lucide-react';

const TourDetails = () => {
  const { id } = useParams();
  const [currentImage, setCurrentImage] = useState(0);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    fullName: '',
    phoneNumber: ''
  });
  
  // Mock tour data - in a real app, fetch this based on the ID
  const tour = {
    id: '1',
    title: 'Ancient Silk Road Adventure',
    description: 'Explore the historic Silk Road cities of Samarkand, Bukhara, and Khiva. Experience the rich cultural heritage and stunning Islamic architecture.',
    longDescription: `Embark on an unforgettable journey through the ancient Silk Road cities of Uzbekistan. This carefully crafted tour takes you through centuries of history, architectural marvels, and vibrant local culture.

    Our expert guides will lead you through the magnificent Registan Square, the intricate Shah-i-Zinda necropolis, and the bustling bazaars that have been trading posts for centuries.`,
    images: [
      'https://images.unsplash.com/photo-1605649487212-47bdab064df7',
      'https://images.unsplash.com/photo-1603992975066-c54a62021529',
      'https://images.unsplash.com/photo-1605754613309-bebab6c0a20b',
      'https://images.unsplash.com/photo-1601974915460-f55ea921f8ad'
    ],
    duration: '7 days',
    groupSize: '12 people max',
    price: 1299,
    rating: 4.9,
    reviews: 128,
    destination: 'Uzbekistan',
    category: 'Cultural',
    startDates: ['Jun 15, 2024', 'Jul 1, 2024', 'Aug 15, 2024'],
    included: [
      {
        title: 'Airport Pickup',
        description: 'Complimentary airport transfers on arrival and departure',
        icon: Plane
      },
      {
        title: 'Premium Hotels',
        description: 'Luxury accommodation in carefully selected hotels',
        icon: Hotel
      },
      {
        title: 'Expert Guide',
        description: 'Professional English-speaking tour guide throughout',
        icon: Languages
      },
      {
        title: 'Transportation',
        description: 'All ground transportation in comfortable vehicles',
        icon: Car
      },
      {
        title: 'Meals & Dining',
        description: 'Daily breakfast and selected traditional dinners',
        icon: UtensilsCrossed
      },
      {
        title: 'Fitness Access',
        description: 'Access to hotel fitness facilities where available',
        icon: Dumbbell
      }
    ]
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission here
    console.log('Booking submitted:', { tour, ...bookingForm });
    setShowBookingModal(false);
    setBookingForm({ fullName: '', phoneNumber: '' });
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button and Title */}
        <div className="flex items-center gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
             <button 
            onClick={() => window.history.back()}
            className="text-gray-600 hover:text-[#FF5733] transition-colors"
          >
            ← Back to Tours
          </button>
            </div>
            <h1 className="text-3xl font-light">{tour.title}</h1>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,400px] gap-8">
          {/* Left Column - Images and Description */}
          <div>
            {/* Main Image */}
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-4 bg-gray-50">
              <img
                src={tour.images[currentImage]}
                alt="Tour view"
                className="w-full h-full object-cover"
              />
              <button 
                className="absolute bottom-4 right-4 px-4 py-2 bg-white/90 rounded-lg text-sm hover:bg-white transition-colors"
                onClick={() => {/* Open gallery modal */}}
              >
                More Images
              </button>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              {tour.images.map((image, index) => (
                <button
                  key={index}
                  className={`aspect-[4/3] rounded-lg overflow-hidden ${
                    currentImage === index ? 'ring-2 ring-[#FF5733]' : ''
                  }`}
                  onClick={() => setCurrentImage(index)}
                >
                  <img
                    src={image}
                    alt={`Tour view ${index + 1}`}
                    className="w-full h-full object-cover bg-gray-50"
                  />
                </button>
              ))}
            </div>

            {/* Description */}
            <div className="prose max-w-none">
              <h2 className="text-2xl font-light mb-4">Tour Overview</h2>
              <p className="text-gray-600 mb-12">{tour.longDescription}</p>
              
              <h2 className="text-4xl font-light mb-8">Amenities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tour.included.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-medium">{item.title}</h3>
                        <Icon className="w-6 h-6 text-gray-600" />
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Booking Info */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="font-medium">{tour.rating}</span>
                  <span className="text-gray-500">({tour.reviews} reviews)</span>
                </div>
                <div className="text-2xl font-medium">
                  ${tour.price}
                </div>
              </div>
              
              {/* Tour Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-medium">{tour.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Group Size</p>
                    <p className="font-medium">{tour.groupSize}</p>
                  </div>
                </div>
              </div>

              {/* Available Dates */}
              <h3 className="text-lg font-medium mb-4">Available Dates</h3>
              <div className="space-y-3 mb-6">
                {tour.startDates.map((date, index) => (
                  <button
                    key={index}
                    className="w-full py-2 px-4 border border-gray-200 rounded-lg text-left hover:border-[#FF5733] transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span>{date}</span>
                      <span className="text-[#FF5733]">${tour.price}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Book Button */}
              <button 
                onClick={() => setShowBookingModal(true)}
                className="w-full py-3 bg-[#FF5733] text-white rounded-lg hover:bg-[#FF4520] transition-colors"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-xl max-w-lg w-full mx-4 animate-fade-in">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-light">Book Your Tour</h3>
                <button 
                  onClick={() => setShowBookingModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Tour Summary */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h4 className="font-medium mb-2">{tour.title}</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{tour.destination}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{tour.groupSize}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#FF5733] font-medium">
                    <DollarSign className="w-4 h-4" />
                    <span>${tour.price}</span>
                  </div>
                </div>
              </div>

              {/* Booking Form */}
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      value={bookingForm.fullName}
                      onChange={(e) => setBookingForm(prev => ({ ...prev, fullName: e.target.value }))}
                      required
                      className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5733] focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      value={bookingForm.phoneNumber}
                      onChange={(e) => setBookingForm(prev => ({ ...prev, phoneNumber: e.target.value }))}
                      required
                      className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5733] focus:border-transparent"
                      placeholder="+998 90 123 45 67"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#FF5733] text-white rounded-lg hover:bg-[#FF4520] transition-colors"
                >
                  Send Booking Request
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TourDetails;