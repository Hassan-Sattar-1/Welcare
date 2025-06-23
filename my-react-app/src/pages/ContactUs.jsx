import React from 'react';
import './ContactUs.css';
import bgImg from '../assets/background5.jpg';
import officeIcon from '../assets/office.png';
import mailIcon from '../assets/mail.png';
import phoneIcon from '../assets/phone.png';

const cityAddresses = [
  { city: 'Sahiwal', address: '66-A Officers Colony, Farid Town, Sahiwal', phone: '+92 3099282204' },
  { city: 'Sahiwal', address: '66-A Officers Colony, Farid Town, Sahiwal', phone: '+92 3099282204' },
  { city: 'Sahiwal', address: '66-A Officers Colony, Farid Town, Sahiwal', phone: '+92 3099282204' },
  { city: 'Sahiwal', address: '66-A Officers Colony, Farid Town, Sahiwal', phone: '+92 3099282204' },
  { city: 'Sahiwal', address: '66-A Officers Colony, Farid Town, Sahiwal', phone: '+92 3099282204' },
  { city: 'Sahiwal', address: '66-A Officers Colony, Farid Town, Sahiwal', phone: '+92 3099282204' },
  { city: 'Sahiwal', address: '66-A Officers Colony, Farid Town, Sahiwal', phone: '+92 3099282204' },
  { city: 'Sahiwal', address: '66-A Officers Colony, Farid Town, Sahiwal', phone: '+92 3099282204' },
  { city: 'Sahiwal', address: '66-A Officers Colony, Farid Town, Sahiwal', phone: '+92 3099282204' },
];

const ContactUs = () => (
  <main className="contactus-page">
    <section className="contactus-split-section">
      {/* Left Olive Section */}
      <div className="contactus-left-full">
        <div className="contact-hero-overlay-left">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-breadcrumb">Home/Contact Us</p>
        </div>
        <div className="address-grid address-grid-3x3">
          {cityAddresses.map((item, idx) => (
            <div className="address-card" key={idx}>
              <div className="city-name">{item.city}</div>
              <div className="address-info">{item.address}</div>
              <div className="address-phone">{item.phone}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Right Background Section */}
      <div className="contactus-right-full" style={{ backgroundImage: `url(${bgImg})` }}>
        <div className="info-boxes info-boxes-centered">
          <div className="info-box info-box-same-size">
            <img src={officeIcon} alt="Office" className="info-icon" />
            <div>
              <div className="info-title">Office Address</div>
              <div className="info-detail">66-A Officers Colony, Farid Town, Sahiwal</div>
            </div>
          </div>
          <div className="info-box info-box-same-size">
            <img src={mailIcon} alt="Email" className="info-icon" />
            <div>
              <div className="info-title">Email Address</div>
              <div className="info-detail">Welcarelink@yahoo.com</div>
            </div>
          </div>
          <div className="info-box info-box-same-size">
            <img src={phoneIcon} alt="Contact" className="info-icon" />
            <div>
              <div className="info-title">Office Contact</div>
              <div className="info-detail">0300-9695404</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="contactus-map-section">
      <iframe
        title="Welcare Chemicals Corporation Map"
        src="https://www.google.com/maps?q=Welcare+chemicals+Corporation,+Sahiwal,+Pakistan&output=embed"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  </main>
);

export default ContactUs; 