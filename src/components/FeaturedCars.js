import React from 'react';
import { useNavigate } from 'react-router-dom';

const FeaturedCars = () => {
  const navigate = useNavigate();
  
  const featuredCars = [
    {
      id: 1,
      name: 'Mercedes-Benz S-Class',
      price: '₹15,000/day',
      image: 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?auto=format&fit=crop&q=80',
      specs: {
        seats: '5',
        luggage: '3',
        transmission: 'Automatic'
      }
    },
    {
      id: 2,
      name: 'BMW 7 Series',
      price: '₹14,000/day',
      image: 'https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?auto=format&fit=crop&q=80',
      specs: {
        seats: '5',
        luggage: '3',
        transmission: 'Automatic'
      }
    },
    {
      id: 3,
      name: 'Audi A8',
      price: '₹13,500/day',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&q=80',
      specs: {
        seats: '5',
        luggage: '3',
        transmission: 'Automatic'
      }
    }
  ];

  const handleBookNow = () => {
    navigate('/#booking');
  };

  return (
    <section className="featured-cars" id="featured-cars">
      <div className="container">
        <h2 className="section-title text-center mb-5">Featured Cars</h2>
        <div className="row g-4">
          {featuredCars.map(car => (
            <div key={car.id} className="col-md-6 col-lg-4">
              <div className="featured-car-card">
                <div className="featured-car-image">
                  <img src={car.image} alt={car.name} />
                  <div className="featured-car-price">
                    {car.price}
                  </div>
                </div>
                <div className="featured-car-details">
                  <h3 className="featured-car-title">{car.name}</h3>
                  <div className="featured-car-specs">
                    <div className="featured-car-spec">
                      <i className="fas fa-users"></i>
                      <span>{car.specs.seats} Seats</span>
                    </div>
                    <div className="featured-car-spec">
                      <i className="fas fa-suitcase"></i>
                      <span>{car.specs.luggage} Luggage</span>
                    </div>
                    <div className="featured-car-spec">
                      <i className="fas fa-cog"></i>
                      <span>{car.specs.transmission}</span>
                    </div>
                  </div>
                  <button 
                    className="btn btn-yellow w-100"
                    onClick={handleBookNow}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars; 