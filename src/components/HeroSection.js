import React, { useState } from 'react';
import '../styles/Home.css';

const HeroSection = () => {
  const [bookingData, setBookingData] = useState({
    location: '',
    startDateTime: '',
    endDateTime: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle booking submission here
    console.log('Booking data:', bookingData);
  };

  return (
    <div className="hero-section">
      <div className="container">
        <div className="row align-items-center" style={{ height: '600px' }}>
          <div className="col-lg-6">
            <div className="hero-content">
              <h1 className="display-4 fw-bold mb-4">Book Your Dream Car Now!</h1>
              <p className="lead mb-4">Safe, Reliable and Comfortable</p>
              <button className="btn btn-yellow btn-lg">Learn More</button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="booking-form">
              <h3 className="mb-4">Book Your Dream Car Now!</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Pickup Location</label>
                  <input
                    type="text"
                    className="form-control"
                    name="location"
                    value={bookingData.location}
                    onChange={handleInputChange}
                    placeholder="Enter pickup location"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">From (Date & Time)</label>
                  <input
                    type="datetime-local"
                    className="form-control"
                    name="startDateTime"
                    value={bookingData.startDateTime}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Until (Date & Time)</label>
                  <input
                    type="datetime-local"
                    className="form-control"
                    name="endDateTime"
                    value={bookingData.endDateTime}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <button 
                  type="button" 
                  className="btn btn-yellow w-100"
                  onClick={() => window.location.href = '/cars'}
                >
                  Book
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 