import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Home.css';

const Navbar = () => {
  const location = useLocation();

  const handleServiceClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleSignInClick = () => {
    const modal = document.getElementById('signInModal');
    
    // Create backdrop if it doesn't exist
    if (!document.querySelector('.modal-backdrop')) {
      const backdrop = document.createElement('div');
      backdrop.classList.add('modal-backdrop', 'fade', 'show');
      document.body.appendChild(backdrop);
    }
    
    // Show modal
    modal.classList.add('show');
    modal.style.display = 'block';
    document.body.classList.add('modal-open');
  };

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === path && !location.hash;
    }
    return location.pathname === path;
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <div className="hertz-logo">
            <span className="hertz-text">HERTZ</span>
            <div className="hertz-yellow-bar"></div>
          </div>
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/') ? 'active' : ''}`} 
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${location.hash === '#services' ? 'active' : ''}`}
                to="/" 
                onClick={handleServiceClick}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/cars') ? 'active' : ''}`}
                to="/cars"
              >
                Cars
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item ms-lg-4">
              <button className="btn btn-yellow" onClick={handleSignInClick}>
                <i className="fas fa-user"></i>
                Sign In
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 