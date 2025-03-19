import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [carInfo, setCarInfo] = useState(null);
  const [bookingInfo, setBookingInfo] = useState(null);
  
  // Set default car and booking information
  useEffect(() => {
    const { car, bookingDetails } = location.state || {};
    
    // Default car info if data is missing
    const defaultCar = {
      name: 'Audi A8',
      price: '18000',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6',
      year: '2023',
      specs: {
        fuel: 'Petrol',
        transmission: 'Automatic',
        seats: 4,
        luggage: 2
      }
    };
    
    // Default booking info if data is missing
    const defaultBooking = {
      location: 'Selected location',
      pickupDate: new Date().toISOString(),
      returnDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString() // 2 days later
    };
    
    // Use provided data or defaults
    setCarInfo(car || defaultCar);
    setBookingInfo(bookingDetails || defaultBooking);
  }, [location.state]);
  
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    saveCard: false,
    upiId: ''
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPaymentDetails(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process payment logic would go here
    alert('Payment successful! Your car has been booked.');
    navigate('/');
  };

  // Calculate total price
  const calculateTotal = () => {
    if (!carInfo || !bookingInfo) return {
      basePrice: 0,
      tax: 0,
      serviceFee: 0,
      total: 0,
      diffDays: 0,
      pricePerDay: 0
    };
    
    // Extract number from price string (removing commas, currency symbol and space)
    const priceStr = carInfo.price || '18000';
    const pricePerDay = parseInt(priceStr.toString().replace(/[₹,\s]/g, '')) || 18000;
    
    // Calculate number of days
    const pickupDate = new Date(bookingInfo.pickupDate || new Date());
    const returnDate = new Date(bookingInfo.returnDate || new Date());
    const diffTime = Math.abs(returnDate - pickupDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1;
    
    // Calculate base price
    const basePrice = pricePerDay * diffDays;
    
    // Tax (18% GST)
    const tax = Math.round(basePrice * 0.18);
    
    // Service fee
    const serviceFee = 999;
    
    return {
      basePrice,
      tax,
      serviceFee,
      total: basePrice + tax + serviceFee,
      diffDays,
      pricePerDay
    };
  };

  const priceDetails = calculateTotal();

  // Force calculation on first render and whenever car info changes
  useEffect(() => {
    // Force calculation and set default values if needed
    const calcPrice = calculateTotal();
    console.log("Calculated price details:", calcPrice);
    
    // If we still have zero values, force a re-render with defaults
    if (calcPrice.basePrice === 0 && carInfo) {
      console.log("Forcing default price calculation");
      // Default Audi A8 price at ₹18,000/day for 2 days
      setCarInfo({
        ...carInfo,
        price: '18000'
      });
    }
  }, [carInfo]);

  // Default values for initial render
  const defaultCarPrice = 18000;
  const defaultDays = 2;
  const defaultBasePrice = defaultCarPrice * defaultDays;
  const defaultTax = Math.round(defaultBasePrice * 0.18);
  const defaultServiceFee = 999;
  const defaultTotal = defaultBasePrice + defaultTax + defaultServiceFee;
  
  // Use these as fallbacks
  const basePrice = priceDetails.basePrice || defaultBasePrice;
  const tax = priceDetails.tax || defaultTax;
  const serviceFee = priceDetails.serviceFee || defaultServiceFee;
  const total = priceDetails.total || defaultTotal;
  const days = priceDetails.diffDays || defaultDays;
  const rate = priceDetails.pricePerDay || defaultCarPrice;

  return (
    <div className="payment-page">
      <div className="container py-5">
        <h1 className="page-title text-center mb-5">Complete Your Payment</h1>
        
        <div className="row">
          <div className="col-lg-8">
            <div className="payment-form-container">
              <div className="payment-method-tabs mb-4">
                <div className="row">
                  <div className="col-6">
                    <div 
                      className={`payment-method-tab ${paymentMethod === 'card' ? 'active' : ''}`}
                      onClick={() => handlePaymentMethodChange('card')}
                    >
                      <i className="far fa-credit-card me-2"></i>
                      Card Payment
                    </div>
                  </div>
                  <div className="col-6">
                    <div 
                      className={`payment-method-tab ${paymentMethod === 'upi' ? 'active' : ''}`}
                      onClick={() => handlePaymentMethodChange('upi')}
                    >
                      <i className="fas fa-mobile-alt me-2"></i>
                      UPI Payment
                    </div>
                  </div>
                </div>
              </div>
              
              {paymentMethod === 'card' ? (
                <div className="card-payment-form">
                  <h3 className="mb-4">Payment Details</h3>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="cardNumber" className="form-label">Card Number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cardNumber"
                        name="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        value={paymentDetails.cardNumber}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="mb-3">
                      <label htmlFor="cardName" className="form-label">Name on Card</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cardName"
                        name="cardName"
                        placeholder="Enter your name"
                        value={paymentDetails.cardName}
                        onChange={handleInputChange}
                        required
                      />  
                    </div>
                    
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
                        <input
                          type="text"
                          className="form-control"
                          id="expiryDate"
                          name="expiryDate"
                          placeholder="MM/YY"
                          value={paymentDetails.expiryDate}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="cvv" className="form-label">CVV</label>
                        <input
                          type="text"
                          className="form-control"
                          id="cvv"
                          name="cvv"
                          placeholder="123"
                          value={paymentDetails.cvv}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-4 form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="saveCard"
                        name="saveCard"
                        checked={paymentDetails.saveCard}
                        onChange={handleInputChange}
                      />
                      <label className="form-check-label" htmlFor="saveCard">
                        Save card for future bookings
                      </label>
                    </div>
                    
                    <div className="payment-methods mb-4">
                      <div className="payment-method-icons">
                        <i className="fab fa-cc-visa me-2"></i>
                        <i className="fab fa-cc-mastercard me-2"></i>
                        <i className="fab fa-cc-amex me-2"></i>
                        <i className="fab fa-cc-discover"></i>
                      </div>
                    </div>
                    
                    <button type="submit" className="btn btn-yellow btn-lg w-100">
                      Complete Payment
                    </button>
                  </form>
                </div>
              ) : (
                <div className="upi-payment-form">
                  <h3 className="mb-4">UPI Payment</h3>
                  
                  <div className="upi-options mb-4">
                    <div className="row">
                      <div className="col-3">
                        <div className="upi-option">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/1200px-UPI-Logo-vector.svg.png" alt="UPI" className="upi-logo" />
                          <span>UPI ID</span>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="upi-option">
                          <img src="https://lh3.googleusercontent.com/gQMZKZe1Qg8KzYjlPcXTIF1O5tgGYNQWqpOR84K1oruzPtcQRvRXeI6iyVgQOdOwk5wF0PbKUMUW-aQvqh18d80=w128-h128-e365-rj-sc0x00ffffff" alt="Google Pay" className="upi-logo" />
                          <span>Google Pay</span>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="upi-option">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/2560px-Paytm_Logo_%28standalone%29.svg.png" alt="Paytm" className="upi-logo" />
                          <span>Paytm</span>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="upi-option">
                          <img src="https://play-lh.googleusercontent.com/6iyA2zVz5PyyMjK5SIxdUhrb7oh9cYVXJ93q6DZkmx07Er1o90PXYeo6mzL4VC2Gj9s" alt="PhonePe" className="upi-logo" />
                          <span>PhonePe</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="upiId" className="form-label">Enter UPI ID</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          id="upiId"
                          name="upiId"
                          placeholder="yourname@upi"
                          value={paymentDetails.upiId}
                          onChange={handleInputChange}
                          required
                        />
                        <button className="btn btn-secondary" type="button">Verify</button>
                      </div>
                      <small className="form-text text-muted">Enter your UPI ID in the format yourname@bank</small>
                    </div>
                    
                    <div className="payment-summary mb-4">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">Payment Summary</h5>
                          <div className="d-flex justify-content-between mb-2">
                            <span>Car:</span>
                            <span>{carInfo?.name}</span>
                          </div>
                          <div className="d-flex justify-content-between mb-2">
                            <span>Rate:</span>
                            <span>₹{rate?.toLocaleString()}/day</span>
                          </div>
                          <div className="d-flex justify-content-between mb-2">
                            <span>Duration:</span>
                            <span>{days} days</span>
                          </div>
                          <div className="d-flex justify-content-between fw-bold mt-2 pt-2 border-top">
                            <span>Total Amount:</span>
                            <span>₹{total?.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="upi-notice mb-4">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title"><i className="fas fa-info-circle me-2"></i>How it works</h5>
                          <p className="card-text">After clicking "Pay Now", you'll receive a payment request on your UPI app. Open your UPI app and approve the payment to complete your booking.</p>
                        </div>
                      </div>
                    </div>
                    
                    <button type="submit" className="btn btn-yellow btn-lg w-100">
                      Pay ₹{total?.toLocaleString()} Now
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
          
          <div className="col-lg-4">
            <div className="booking-summary-card">
              <h4 className="mb-4">Booking Summary</h4>
              
              <div className="car-summary">
                <div className="car-summary-image">
                  <img src={carInfo?.image} alt={carInfo?.name} />
                </div>
                <div className="car-summary-details">
                  <h5>{carInfo?.name || 'Luxury Car'}</h5>
                  <div className="booking-dates">
                    <p><i className="fas fa-calendar-alt me-2"></i> 
                      {bookingInfo?.pickupDate && new Date(bookingInfo.pickupDate).toLocaleDateString()} - 
                      {bookingInfo?.returnDate && new Date(bookingInfo.returnDate).toLocaleDateString()}
                    </p>
                    <p><i className="fas fa-map-marker-alt me-2"></i> {bookingInfo?.location || 'Selected location'}</p>
                  </div>
                </div>
              </div>
              
              <div className="price-breakdown">
                <div className="price-item">
                  <span>Base Price</span>
                  <span>₹{basePrice?.toLocaleString() || '18000'}</span>
                </div>
                <div className="price-item">
                  <span>Tax (18% GST)</span>
                  <span>₹{tax?.toLocaleString() || '3240'}</span>
                </div>
                <div className="price-item">
                  <span>Service Fee</span>
                  <span>₹{serviceFee?.toLocaleString() || '999'}</span>
                </div>
                <div className="price-total">
                  <span>Total</span>
                  <span>₹{total?.toLocaleString() || '22239'}</span>
                </div>
              </div>
              
              <div className="booking-terms mt-4">
                <p className="small text-muted">
                  By completing this booking, you agree to our <a href="/terms">Terms & Conditions</a> and <a href="/privacy">Privacy Policy</a>.
                </p>
              </div>
              
              <div className="secure-payment-info mt-4">
                <div className="d-flex align-items-center">
                  <i className="fas fa-lock me-2 text-success"></i>
                  <span className="small">Secure Payment Processing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment; 