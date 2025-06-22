import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';

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
            <NavLink to="/" className="nav-link" activeClassName="active" exact>Home</NavLink>
            <NavLink to="/products" className="nav-link" activeClassName="active">Products</NavLink>
            <NavLink to="/crops" className="nav-link" activeClassName="active">Crops</NavLink>
            <NavLink to="/quality-control" className="nav-link" activeClassName="active">Quality Control</NavLink>
            <a href="/#contact" className="nav-link">Contact Us</a>
          </nav>
          <button className="store-button desktop">Online Store</button>
        </div>

        {/* Mobile-only container */}
        <div className={`mobile-menu-container ${menuOpen ? 'active' : ''}`}>
          <nav className="nav-links">
            <NavLink to="/" className="nav-link" activeClassName="active" exact onClick={() => setMenuOpen(false)}>Home</NavLink>
            <NavLink to="/products" className="nav-link" activeClassName="active" onClick={() => setMenuOpen(false)}>Products</NavLink>
            <NavLink to="/crops" className="nav-link" activeClassName="active" onClick={() => setMenuOpen(false)}>Crops</NavLink>
            <NavLink to="/quality-control" className="nav-link" activeClassName="active" onClick={() => setMenuOpen(false)}>Quality Control</NavLink>
            <a href="/#contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact Us</a>
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
