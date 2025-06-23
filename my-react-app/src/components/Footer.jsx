import React from 'react';
import { Link } from 'react-router-dom';
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
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/crops">Crops</Link></li>
              <li><Link to="/quality-control">Quality Control</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Other Pages</h4>
            <ul>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
              <li><Link to="/coming-soon">Online Store</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Contact Info</h4>
            <address>
              66-A, Officers Colony, Farid Town, Sahiwal<br />
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