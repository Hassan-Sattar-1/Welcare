import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';

const getNavLinkClass = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link');

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo-container">
          <img src={logo} alt="Welcare Chemical Corporation Logo" className="logo" />
        </Link>

        {/* Desktop Navigation Wrapper */}
        <div className="desktop-nav-container">
          <nav className="nav-links desktop">
            <NavLink to="/" className={getNavLinkClass} end>Home</NavLink>
            <NavLink to="/products" className={getNavLinkClass}>Products</NavLink>
            <NavLink to="/crops" className={getNavLinkClass}>Crops</NavLink>
            <NavLink to="/quality-control" className={getNavLinkClass}>Quality Control</NavLink>
            <NavLink to="/contact-us" className={getNavLinkClass}>Contact Us</NavLink>
          </nav>
          <Link to="/coming-soon" className="store-button desktop">Online Store</Link>
        </div>

        {/* Mobile-only container */}
        <div className={`mobile-menu-container ${menuOpen ? 'active' : ''}`}>
          <nav className="nav-links">
            <NavLink to="/" className={getNavLinkClass} end onClick={() => setMenuOpen(false)}>Home</NavLink>
            <NavLink to="/products" className={getNavLinkClass} onClick={() => setMenuOpen(false)}>Products</NavLink>
            <NavLink to="/crops" className={getNavLinkClass} onClick={() => setMenuOpen(false)}>Crops</NavLink>
            <NavLink to="/quality-control" className={getNavLinkClass} onClick={() => setMenuOpen(false)}>Quality Control</NavLink>
            <NavLink to="/contact-us" className={getNavLinkClass} onClick={() => setMenuOpen(false)}>Contact Us</NavLink>
          </nav>
          <Link to="/coming-soon" className="store-button mobile" onClick={() => setMenuOpen(false)}>Online Store</Link>
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
