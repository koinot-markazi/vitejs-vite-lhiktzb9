import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import PopularTours from './components/PopularTours';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import AllTours from './pages/AllTours';
import TourDetails from './pages/TourDetails';
import { TourProvider } from './context/TourContext';
import './i18n';

function App() {
  return (
    <Router>
      <TourProvider>
        <div className="min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <PopularTours />
                <AboutUs />
                <WhyChooseUs />
                <Testimonials />
                <CTA />
              </>
            } />
            <Route path="/tours" element={<AllTours />} />
            <Route path="/tours/:id" element={<TourDetails />} />
          </Routes>
          <Footer />
        </div>
      </TourProvider>
    </Router>
  );
}

export default App;