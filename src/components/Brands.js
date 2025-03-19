import React from 'react';
import { brandLogos } from '../assets/images';
import '../styles/Home.css';

const Brands = () => {
  const brands = [
    {
      id: 1,
      name: 'Audi',
      logo: brandLogos.audi
    },
    {
      id: 2,
      name: 'Mercedes',
      logo: brandLogos.mercedes
    },
    {
      id: 3,
      name: 'BMW',
      logo: brandLogos.bmw
    },
    {
      id: 4,
      name: 'Tesla',
      logo: brandLogos.tesla
    }
  ];

  return (
    <section className="brand-section">
      <div className="container">
        <h3 className="text-center mb-5">Our Luxury Brands</h3>
        <div className="row justify-content-center align-items-center">
          {brands.map(brand => (
            <div key={brand.id} className="col-lg-3 col-md-3 col-6 text-center mb-4">
              <img 
                src={brand.logo} 
                alt={`${brand.name} Logo`} 
                className="brand-logo"
              />
            </div>
          ))}
        </div>
        <div className="text-center">
          <a href="/vehicles" className="see-store-btn">
            See The Store
          </a>
        </div>
      </div>
    </section>
  );
};

export default Brands; 