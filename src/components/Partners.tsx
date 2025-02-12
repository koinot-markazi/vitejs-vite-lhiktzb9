import React from 'react';
import { useTranslation } from 'react-i18next';

const Partners = () => {
  const { t } = useTranslation();
  
  const partners = [
    {
      name: 'Turkish Airlines',
      logo: 'https://images.unsplash.com/photo-1464692805480-a69dfaafdb0d',
    },
    {
      name: 'Hyatt Hotels',
      logo: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
    },
    {
      name: 'Uzbekistan Airways',
      logo: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05',
    },
    {
      name: 'Hilton Hotels',
      logo: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-display font-bold text-center text-gray-900 mb-12">
          {t('partners.title')}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;