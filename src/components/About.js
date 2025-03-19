import React from 'react';
import '../styles/Home.css';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Prahar Vishwakarma',
    },
    {
      id: 2,
      name: 'Krrish Khushani',
    },
    {
      id: 3,
      name: 'Aditya Gurjar',
    }
  ];

  const stats = [
    { number: '15+', text: 'Years Experience' },
    { number: '1000+', text: 'Satisfied Customers' },
    { number: '150+', text: 'Luxury Cars' },
    { number: '24/7', text: 'Customer Support' }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="about-title">About Hertz</h1>
              <p className="about-subtitle">Driving Excellence Since 2008</p>
              <div className="yellow-line mb-4"></div>
              <p className="about-description">
                At Hertz, we believe in making every journey special. Our commitment to providing 
                exceptional service and premium vehicles has made us a leader in the luxury car 
                rental industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="row">
            {stats.map((stat, index) => (
              <div key={index} className="col-md-3 col-6">
                <div className="stat-box">
                  <h2 className="stat-number">{stat.number}</h2>
                  <p className="stat-text">{stat.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img 
                src="https://images.unsplash.com/photo-1562519819-016930ada31b?auto=format&fit=crop&q=80&w=800" 
                alt="Luxury car interior"
                className="mission-image"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="section-title">Our Mission</h2>
              <div className="yellow-line mb-4"></div>
              <p className="mission-text">
                Our mission is to provide an unparalleled luxury car rental experience, combining 
                premium vehicles with exceptional service. We strive to exceed customer expectations 
                by offering:
              </p>
              <ul className="mission-list">
                <li>Premium vehicle selection</li>
                <li>Personalized customer service</li>
                <li>Flexible rental options</li>
                <li>Nationwide coverage</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title text-center">Meet Our Team</h2>
          <div className="yellow-line mx-auto mb-5"></div>
          <div className="row justify-content-center">
            {teamMembers.map(member => (
              <div key={member.id} className="col-lg-4">
                <div className="team-member-simple">
                  <h3 className="member-name">{member.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container text-center">
          <h2 className="section-title">Get in Touch</h2>
          <div className="yellow-line mx-auto mb-4"></div>
          <p className="contact-text mb-4">
            Have questions? Our team is here to help you with any inquiries.
          </p>
          <button className="btn btn-yellow btn-lg">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default About; 