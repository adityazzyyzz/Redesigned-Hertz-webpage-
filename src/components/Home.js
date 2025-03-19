import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [bookingDetails, setBookingDetails] = useState({
    location: '',
    pickupDateTime: '',
    returnDateTime: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBooking = (e) => {
    e.preventDefault();
    navigate('/cars');
  };

  return (
    <div>
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1 className="display-4 fw-bold mb-4">Find Your Perfect Luxury Car</h1>
                <p className="lead mb-4">Experience the thrill of driving premium vehicles with our extensive collection of luxury cars.</p>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="booking-form">
                <h3 className="mb-4">Book Your Dream Car Now!</h3>
                <form onSubmit={handleBooking}>
                  <div className="mb-3">
                    <label className="form-label">Pickup Location</label>
                    <input
                      type="text"
                      className="form-control"
                      name="location"
                      value={bookingDetails.location}
                      onChange={handleInputChange}
                      placeholder="Enter pickup location"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">From (Date & Time)</label>
                    <input
                      type="datetime-local"
                      className="form-control"
                      name="pickupDateTime"
                      value={bookingDetails.pickupDateTime}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Until (Date & Time)</label>
                    <input
                      type="datetime-local"
                      className="form-control"
                      name="returnDateTime"
                      value={bookingDetails.returnDateTime}
                      onChange={handleInputChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-yellow w-100">
                    Book
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Rest of the components */}
    </div>
  );
};

export default Home; 