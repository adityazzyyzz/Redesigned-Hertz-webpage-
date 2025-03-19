import React, { useState } from 'react';
import '../styles/Home.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
  };

  return (
    <>
      <section className="driver-section">
        <div className="container">
          <div className="driver-content">
            <h2>Become A Driver</h2>
            <p>Your Time, Your Goals, You're The Boss.</p>
            <p className="mb-4">Subscribe And Join Us</p>
            <form onSubmit={handleSubmit} className="driver-form">
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="EMAIL"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn btn-primary">
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      
      <section className="newsletter-yellow">
        <div className="container">
          <h3 className="text-center">Subscribe To Our Newsletters</h3>
          <div className="newsletter-form-yellow">
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                placeholder="EMAIL"
              />
              <button type="submit" className="btn btn-navy">
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Newsletter; 