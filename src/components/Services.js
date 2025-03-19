import React from 'react';
import '../styles/Home.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Car Hire',
      description: 'We pride ourselves in always going the extra mile for our customers.'
    },
    {
      id: 2,
      title: 'Car Sales',
      description: 'We sale the best luxury cars across the world at a competitive price.'
    },
    {
      id: 3,
      title: 'Hire a driver',
      description: 'You want to travel and fell comfortable, our drivers are available.'
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="services-image">
              <img 
                src="https://images.unsplash.com/photo-1622037022824-0c71d511ef3c?auto=format&fit=crop&q=80" 
                alt="Mercedes Convertible" 
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="services-content">
              <h2 className="section-title">Our Services</h2>
              <div className="services-list">
                {services.map(service => (
                  <div key={service.id} className="service-item">
                    <div className="service-dot"></div>
                    <div className="service-text">
                      <h4>{service.title}</h4>
                      <p>{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-bottom">
        <h2 className="text-center">We Have Everything You Need</h2>
      </div>
    </section>
  );
};

export default Services; 