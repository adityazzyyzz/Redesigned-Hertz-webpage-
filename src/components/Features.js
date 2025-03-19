import React from 'react';
import '../styles/Home.css';

const Features = () => {
  const features = [
    {
      id: 1,
      icon: 'fas fa-calendar-alt',
      title: 'Book with flexibility',
      description: 'Easy booking process with flexible dates and locations'
    },
    {
      id: 2,
      icon: 'fas fa-shield-alt',
      title: 'Trusted and free',
      description: 'Secure booking platform with no hidden charges'
    },
    {
      id: 3,
      icon: 'fas fa-car',
      title: 'We know travel',
      description: 'Expert support available 24/7 for all your needs'
    }
  ];

  return (
    <section className="features-section">
      <div className="container">
        <h2 className="text-center mb-5">Feel the best experience with our luxury cars</h2>
        <div className="row">
          {features.map(feature => (
            <div key={feature.id} className="col-lg-4">
              <div className="feature-box">
                <i className={`feature-icon ${feature.icon}`}></i>
                <h4 className="mb-3">{feature.title}</h4>
                <p className="text-muted">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 