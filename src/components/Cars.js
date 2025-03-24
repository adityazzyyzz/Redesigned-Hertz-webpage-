import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Home.css';

const Cars = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const bookingDetails = location.state?.bookingDetails;
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [selectedMake, setSelectedMake] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedSeats, setSelectedSeats] = useState('all');
  const [isElectric, setIsElectric] = useState(false);

  const cars = [
    {
      id: 1,
      name: 'Mercedes S-Class',
      category: 'luxury',
      price: '20000',
      make: 'Mercedes',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?auto=format&fit=crop&q=80',
      specs: {
        seats: '5',
        luggage: '3',
        transmission: 'Automatic',
        electric: false
      }
    },
    {
      id: 2,
      name: 'Audi A8',
      category: 'luxury',
      price: '18000',
      make: 'Audi',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&q=80',
      specs: {
        seats: '5',
        luggage: '3',
        transmission: 'Automatic',
        electric: false
      }
    },
    {
      id: 3,
      name: 'BMW 7 Series',
      category: 'luxury',
      price: '19000',
      make: 'BMW',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?auto=format&fit=crop&q=80',
      specs: {
        seats: '5',
        luggage: '3',
        transmission: 'Automatic',
        electric: false
      }
    },
    {
      id: 4,
      name: 'Tesla Model S',
      category: 'electric',
      price: '17000',
      make: 'Tesla',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80',
      specs: {
        seats: '5',
        luggage: '2',
        transmission: 'Automatic',
        electric: true
      }
    },
    {
      id: 5,
      name: 'Porsche Taycan',
      category: 'electric',
      price: '22000',
      make: 'Porsche',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80',
      specs: {
        seats: '4',
        luggage: '2',
        transmission: 'Automatic',
        electric: true
      }
    },
    {
      id: 6,
      name: 'Range Rover Sport',
      category: 'suv',
      price: '21000',
      make: 'Land Rover',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&q=80',
      specs: {
        seats: '7',
        luggage: '4',
        transmission: 'Automatic',
        electric: false
      }
    },
    {
      id: 7,
      name: 'BMW iX',
      category: 'electric',
      price: '20500',
      make: 'BMW',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80',
      specs: {
        seats: '5',
        luggage: '3',
        transmission: 'Automatic',
        electric: true
      }
    },
    {
      id: 8,
      name: 'Mercedes EQS',
      category: 'electric',
      price: '23000',
      make: 'Mercedes',
      year: '2023',
      image: 'https://hips.hearstapps.com/hmg-prod/images/2025-mercedes-benz-eqs-exterior-113-6616f12b6d591.jpg?crop=1.00xw:0.563xh;0,0.228xh&resize=2048:*',
      specs: {
        seats: '5',
        luggage: '3',
        transmission: 'Automatic',
        electric: true
      }
    }
  ];

  const filterOptions = {
    price: [
      { id: 'all', name: 'Daily price' },
      { id: '15000-20000', name: '₹15,000-₹20,000' },
      { id: '20000-25000', name: '₹20,000-₹25,000' }
    ],
    vehicleType: [
      { id: 'all', name: 'Vehicle type' },
      { id: 'luxury', name: 'Luxury' },
      { id: 'electric', name: 'Electric' },
      { id: 'suv', name: 'SUV' }
    ],
    make: [
      { id: 'all', name: 'Make' },
      { id: 'Mercedes', name: 'Mercedes' },
      { id: 'BMW', name: 'BMW' },
      { id: 'Audi', name: 'Audi' },
      { id: 'Tesla', name: 'Tesla' },
      { id: 'Porsche', name: 'Porsche' }
    ],
    years: [
      { id: 'all', name: 'Years' },
      { id: '2023', name: '2023' },
      { id: '2022', name: '2022' }
    ],
    seats: [
      { id: 'all', name: 'Seats' },
      { id: '4', name: '4 Seats' },
      { id: '5', name: '5 Seats' },
      { id: '7', name: '7 Seats' }
    ]
  };

  const filteredCars = cars.filter(car => {
    if (selectedCategory !== 'all' && car.category !== selectedCategory) return false;
    if (selectedMake !== 'all' && car.make !== selectedMake) return false;
    if (selectedYear !== 'all' && car.year !== selectedYear) return false;
    if (selectedSeats !== 'all' && car.specs.seats !== selectedSeats) return false;
    if (isElectric && !car.specs.electric) return false;
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      const price = Number(car.price);
      if (price < min || price > max) return false;
    }
    return true;
  });

  const handleBookNow = (car) => {
    navigate(`/car/${car.id}`, {
      state: {
        car,
        bookingDetails
      }
    });
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const FilterButton = ({ options, value, onChange, className }) => (
    <select 
      className={`filter-select ${className}`}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map(option => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );

  return (
    <>
      <section className="cars-page-section" id="cars">
        <div className="container">
          <div className="cars-header">
            <h1 className="section-title text-center mb-5">Our Premium Fleet</h1>
            <div className="filters-container mb-4">
              <div className="filters-row">
                <FilterButton 
                  options={filterOptions.price} 
                  value={priceRange}
                  onChange={setPriceRange}
                />
                <FilterButton 
                  options={filterOptions.vehicleType} 
                  value={selectedCategory}
                  onChange={setSelectedCategory}
                />
                <FilterButton 
                  options={filterOptions.make} 
                  value={selectedMake}
                  onChange={setSelectedMake}
                />
                <FilterButton 
                  options={filterOptions.years} 
                  value={selectedYear}
                  onChange={setSelectedYear}
                />
                <FilterButton 
                  options={filterOptions.seats} 
                  value={selectedSeats}
                  onChange={setSelectedSeats}
                />
                <button 
                  className={`electric-filter-btn ${isElectric ? 'active' : ''}`}
                  onClick={() => setIsElectric(!isElectric)}
                >
                  Electric
                </button>
                <button className="deliver-filter-btn">
                  Deliver to me
                </button>
                <button className="all-filters-btn">
                  <i className="fas fa-sliders-h"></i>
                  All filters
                </button>
              </div>
            </div>
          </div>
          
          <div className="row g-4">
            {filteredCars.map(car => (
              <div key={car.id} className="col-md-6 col-lg-4">
                <div className="car-card">
                  <div className="car-image-wrapper">
                    <img src={car.image} alt={car.name} className="card-img-top" />
                    <div className="car-price">
                      <span className="price-amount">{formatPrice(car.price)}</span>
                      <span className="price-period">/day</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{car.name}</h5>
                    <div className="car-specs">
                      <div className="spec-item">
                        <i className="fas fa-users"></i>
                        <span>{car.specs.seats} Seats</span>
                      </div>
                      <div className="spec-item">
                        <i className="fas fa-suitcase"></i>
                        <span>{car.specs.luggage} Luggage</span>
                      </div>
                      <div className="spec-item">
                        <i className="fas fa-cog"></i>
                        <span>{car.specs.transmission}</span>
                      </div>
                    </div>
                    <button 
                      className="btn btn-book-now mt-3"
                      onClick={() => handleBookNow(car)}
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

      <section className="driver-section">
        <div className="container">
          <div className="driver-content">
            <h2>Become a Driver</h2>
            <p className="mb-4">Join our team of professional drivers and start earning with us.</p>
            <form className="driver-form">
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Enter your email" />
                <button className="btn btn-primary" type="submit">Join Now</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="newsletter-yellow">
        <div className="container text-center">
          <h2 className="mb-3">Subscribe to Our Newsletter</h2>
          <p className="mb-4">Stay updated with our latest offers and car listings</p>
          <form className="newsletter-form-yellow">
            <div className="input-group">
              <input type="email" className="form-control" placeholder="Enter your email" />
              <button className="btn btn-navy" type="submit">Subscribe</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Cars; 