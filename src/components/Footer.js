import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>Reservation</h5>
            <ul className="footer-links">
              <li><Link to="/car-hire">Car Hire</Link></li>
              <li><Link to="/modify">Modify Or Cancel</Link></li>
              <li><Link to="/receipt">Get A Receipt</Link></li>
            </ul>
          </div>
          
          <div className="col-md-3">
            <h5>Customer Services</h5>
            <ul className="footer-links">
              <li><Link to="/help">Help / FAQS</Link></li>
              <li><Link to="/press">Press</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="col-md-3">
            <h5>Company</h5>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/career">Career</Link></li>
              <li><Link to="/report">Report & Governance</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="footer-brand">LUXURYCARS</div>
            </div>
            <div className="col-md-6">
              <div className="social-links">
                <a href="https://twitter.com/luxurycars" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://facebook.com/luxurycars" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://instagram.com/luxurycars" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 