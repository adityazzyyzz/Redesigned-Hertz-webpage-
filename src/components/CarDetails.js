import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const CarDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { car, bookingDetails } = location.state || {};

  const handleBookNow = () => {
    // Ensure car has proper price format
    const carWithPrice = {
      ...car,
      price: car?.price || '15000',
      specs: {
        ...(car?.specs || {}),
        fuel: car?.specs?.fuel || 'Petrol',
        transmission: car?.specs?.transmission || 'Automatic',
        seats: car?.specs?.seats || 4,
        luggage: car?.specs?.luggage || 2
      }
    };
    
    // Navigate to payment page with car and booking details
    navigate('/payment', {
      state: {
        car: carWithPrice,
        bookingDetails
      }
    });
  };

  return (
    <div className="car-details-page">
      <div className="car-details-hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="car-details-image-container">
                <img src={car?.image} alt={car?.name} className="car-details-main-image" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="car-details-info">
                <h1 className="car-details-title">{car?.name}</h1>
                <div className="car-details-price">
                  <span className="price-amount">₹{car?.price}</span>
                  <span className="price-period">/day</span>
                </div>

                <div className="car-description">
                  <p>Experience luxury and performance in perfect harmony with the {car?.name}. 
                  This premium vehicle combines elegant design with cutting-edge technology, 
                  offering an unmatched driving experience for both business and leisure.</p>
                </div>

                <div className="car-details-specs">
                  <div className="spec-item">
                    <i className="fas fa-calendar-alt"></i>
                    <div className="spec-text">
                      <span className="spec-label">Year</span>
                      <span className="spec-value">{car?.year}</span>
                    </div>
                  </div>
                  <div className="spec-item">
                    <i className="fas fa-tachometer-alt"></i>
                    <div className="spec-text">
                      <span className="spec-label">Top Speed</span>
                      <span className="spec-value">250 km/h</span>
                    </div>
                  </div>
                  <div className="spec-item">
                    <i className="fas fa-gas-pump"></i>
                    <div className="spec-text">
                      <span className="spec-label">Fuel Type</span>
                      <span className="spec-value">{car?.specs?.fuel || 'Petrol'}</span>
                    </div>
                  </div>
                </div>

                <div className="additional-specs">
                  <div className="spec-row">
                    <div className="spec-detail">
                      <i className="fas fa-cog"></i>
                      <div className="spec-text">
                        <span className="spec-label">Transmission</span>
                        <span className="spec-value">{car?.specs?.transmission}</span>
                      </div>
                    </div>
                    <div className="spec-detail">
                      <i className="fas fa-users"></i>
                      <div className="spec-text">
                        <span className="spec-label">Seating</span>
                        <span className="spec-value">{car?.specs?.seats} Adults</span>
                      </div>
                    </div>
                  </div>
                  <div className="spec-row">
                    <div className="spec-detail">
                      <i className="fas fa-suitcase"></i>
                      <div className="spec-text">
                        <span className="spec-label">Luggage</span>
                        <span className="spec-value">{car?.specs?.luggage} Bags</span>
                      </div>
                    </div>
                    <div className="spec-detail">
                      <i className="fas fa-road"></i>
                      <div className="spec-text">
                        <span className="spec-label">Mileage</span>
                        <span className="spec-value">Unlimited</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Booking Details Summary */}
                {bookingDetails && (
                  <div className="booking-summary">
                    <h3>Booking Details</h3>
                    <div className="booking-info">
                      <p><strong>Pickup Location:</strong> {bookingDetails.location}</p>
                      <p><strong>From:</strong> {new Date(bookingDetails.pickupDate).toLocaleString()}</p>
                      <p><strong>Until:</strong> {new Date(bookingDetails.returnDate).toLocaleString()}</p>
                    </div>
                  </div>
                )}

                <button className="btn btn-yellow btn-lg w-100 mt-4" onClick={handleBookNow}>
                  Confirm Booking
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Car Features Section */}
      <section className="car-features-section">
        <div className="container">
          <h2 className="section-title">Car Features</h2>
          <div className="yellow-line mb-4"></div>
          <div className="row">
            <div className="col-md-4">
              <div className="feature-item">
                <i className="fas fa-wifi"></i>
                <h4>WiFi</h4>
                <p>Stay connected with built-in WiFi hotspot</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-item">
                <i className="fas fa-snowflake"></i>
                <h4>Climate Control</h4>
                <p>Dual-zone automatic climate control</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-item">
                <i className="fas fa-map-marked-alt"></i>
                <h4>Navigation</h4>
                <p>Advanced GPS navigation system</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-item">
                <i className="fas fa-bluetooth"></i>
                <h4>Bluetooth</h4>
                <p>Wireless connectivity for your devices</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-item">
                <i className="fas fa-music"></i>
                <h4>Premium Audio</h4>
                <p>High-end surround sound system</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-item">
                <i className="fas fa-parking"></i>
                <h4>Park Assist</h4>
                <p>360° parking sensors with camera</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarDetails; 