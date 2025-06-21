import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <img src={logo} alt="Welcare Chemical Corporation Logo" className="logo" />
        </div>

        {/* Desktop Navigation Wrapper */}
        <div className="desktop-nav-container">
          <nav className="nav-links desktop">
            <a href="#home" className="nav-link active">Home</a>
            <a href="#products" className="nav-link">Products</a>
            <a href="#crops" className="nav-link">Crops</a>
            <a href="#quality" className="nav-link">Quality Control</a>
            <a href="#contact" className="nav-link">Contact Us</a>
          </nav>
          <button className="store-button desktop">Online Store</button>
        </div>

        {/* Mobile-only container */}
        <div className={`mobile-menu-container ${menuOpen ? 'active' : ''}`}>
          <nav className="nav-links">
            <a href="#home" className="nav-link active">Home</a>
            <a href="#products" className="nav-link">Products</a>
            <a href="#crops" className="nav-link">Crops</a>
            <a href="#quality" className="nav-link">Quality Control</a>
            <a href="#contact" className="nav-link">Contact Us</a>
          </nav>
          <button className="store-button mobile">Online Store</button>
        </div>

        <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
