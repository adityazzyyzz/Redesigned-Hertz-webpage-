import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedCars from './components/FeaturedCars';
import Brands from './components/Brands';
import Features from './components/Features';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Services from './components/Services';
import Cars from './components/Cars';
import About from './components/About';
import CarDetails from './components/CarDetails';
import SignInModal from './components/SignInModal';
import Payment from './components/Payment';
import './styles/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Features />
      <FeaturedCars />
      <Services />
      <Brands />
      <Newsletter />
    </>
  );
};

function App() {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/about" element={<About />} />
          <Route path="/car/:id" element={<CarDetails />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
        <SignInModal />
      </div>
    </Router>
  );
}

export default App;
