import React, { createContext, useContext, useState } from 'react';

interface TourContextType {
  selectedDestination: string | null;
  setSelectedDestination: (destination: string | null) => void;
}

const TourContext = createContext<TourContextType | undefined>(undefined);

export const TourProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null);

  return (
    <TourContext.Provider value={{ selectedDestination, setSelectedDestination }}>
      {children}
    </TourContext.Provider>
  );
};

export const useTourContext = () => {
  const context = useContext(TourContext);
  if (context === undefined) {
    throw new Error('useTourContext must be used within a TourProvider');
  }
  return context;
};