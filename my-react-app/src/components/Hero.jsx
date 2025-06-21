import React, { useState, useEffect } from 'react';
import './Hero.css';

// Assume images are in the assets folder
import home1 from '../assets/home1.jpg';
import home2 from '../assets/home2.jpg';
import home3 from '../assets/home3.jpg';
import home4 from '../assets/home4.jpg';

const slides = [home1, home2, home3, home4];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(slideInterval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  };


  return (
    <section className="hero-section">
      {/* Slideshow */}
      <div className="slideshow-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide})` }}
          ></div>
        ))}
         <button className="prev" onClick={prevSlide}>&#10094;</button>
         <button className="next" onClick={nextSlide}>&#10095;</button>
      </div>

      {/* Welcome Section */}
      <div className="welcome-container">
        <div className="welcome-content">
          <div className="welcome-left">
            <h2>Welcome to <br /> <span className="green-text">Welcare Chemical</span><br /> <span className="green-text">Corporation</span></h2>
            <p className="subtitle">Committed to Delivering Excellence in Every Drop, Every Field, Every Season.</p>
            <button className="about-us-button">About Us</button>
          </div>
          <div className="welcome-right">
            <p><strong>Welcare Chemical Corporation</strong> is a leading name in Pakistan's agrochemical sector, dedicated to provide high-quality fertilizers and crop protection products. We focus on sustainable agriculture by sourcing innovative solutions from around the world and tailoring them to local needs. Every product in our portfolio is carefully evaluated to meet strict environmental and regulatory standards, ensuring both effectiveness and responsibility. At <strong>Welcare</strong>, we are committed to support farmers with reliable suggestions for better yields and a more sustainable future.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 