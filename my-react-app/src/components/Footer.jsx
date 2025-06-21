import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-links">
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Products</a></li>
              <li><a href="#">Crops</a></li>
              <li><a href="#">Quality Control</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Other Pages</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Management</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Contact Info</h4>
            <address>
              68-A, Officers Colony, Farid Town, Sahiwal<br />
              +92 320-0676404<br />
              welcarewcc@yahoo.com
            </address>
          </div>
        </div>
        <hr className="footer-divider" />
        <div className="footer-bottom">
          <img src={logo} alt="Welcare Chemical Corporation Logo" className="footer-logo" />
          <p className="copyright-text">Copyright © 2025. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 