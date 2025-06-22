import React from 'react';
import './AboutUs.css';
import bgImg from '../assets/background2.jpeg';
import aboutImg from '../assets/pic.jpeg';

const aboutText = `Welcome to Welcare Chemical Corporation, a trusted partner in agricultural innovation. We are committed to empowering farmers with the tools, knowledge, and support they need to grow healthy, high-yielding, and sustainable crops.

Founded on the core values of integrity, innovation, and service excellence, Welcare Chemical Corporation delivers high-quality agro-input solutions that are both effective and environmentally responsible. Our personalized approach has been crafted to meet the needs of every grower, big or small, ensuring that each client receives tailored support and guidance for their unique requirements.

As a leading supplier serving the backbone of our nation, we are proud to work alongside Pakistan's farming families and play our part in uplifting their lives. We believe that sustainable agriculture is the foundation of a thriving society, and we strive to make a positive impact on food security, rural prosperity, and the environment.

On behalf of the entire team at Welcare Chemical Corporation, we are honored to be your partner in progress. Thank you for choosing us as a dedicated and forward-looking Pakistani company, committed to advancing sustainable agriculture, crop protection, and sustainable development sectors.`;

const visionPoints = [
  'Provide reliable and high-quality crop solutions at optimum prices to commercial growers.',
  'Protect growers from the threats and challenges of crop production.',
  'Build a dynamic and diversified business group focused on long-term sustainability.',
  'Excel in serving customers and stakeholders with exceptional products and services.',
  'Operate in industries and markets that support community, societal, and national economic growth.'
];

const missionPoints = [
  'Create continuous value for customers and consumers.',
  'Deliver the highest level of products and services through centers of excellence.',
  'Provide innovative, high-tech solutions for crop protection.',
  'Strive proactively to constantly support satisfaction and regulatory compliance.',
  'Support economic development through improved crop output and farming efficiency.'
];

const AboutUs = () => (
  <main className="aboutus-page">
    <section className="aboutus-hero-section" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="aboutus-content-wrapper">
        <div className="aboutus-content-left">
          <h1 className="page-title">ABOUT US</h1>
          <p className="page-breadcrumb">Home/About Us</p>
          <div className="aboutus-paragraph">
            {aboutText.split('\n').map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </div>
        <div className="aboutus-content-right">
          <div className="aboutus-image-frame">
            <img src={aboutImg} alt="About Us" />
          </div>
        </div>
      </div>
    </section>
    <section className="aboutus-mission-vision-section">
      <div className="aboutus-mission-vision-wrapper">
        <div className="aboutus-vision">
          <h2 className="aboutus-vision-title">Vision</h2>
          <ul>
            {visionPoints.map((point, idx) => (
              <li key={idx}><span className="leaf">&#10003;</span> {point}</li>
            ))}
          </ul>
        </div>
        <div className="aboutus-mission">
          <h2 className="aboutus-mission-title">Mission</h2>
          <ul>
            {missionPoints.map((point, idx) => (
              <li key={idx}><span className="leaf">&#10003;</span> {point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  </main>
);

export default AboutUs; 