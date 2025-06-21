import React from 'react';
import './Features.css';

import summaryPic from '../assets/pic.jpeg';
import strengthPic from '../assets/pic1.jpg';
import assetsPic from '../assets/pic2.jpg';
import expertisePic from '../assets/pic3.jpg';
import commitmentPic from '../assets/pic4.jpg';
import missionBg from '../assets/background.jpeg';
import microNutrientsPic from '../assets/micronutrients.png';
import granulesPic from '../assets/granules.png';
import insecticidesPic from '../assets/insecticides.png';
import fungicidesPic from '../assets/fungicides.png';
import herbicidesPic from '../assets/herbicides.png';
import employeeIcon from '../assets/employee.png';
import dealIcon from '../assets/deal.png';

const Features = () => {
  return (
    <main className="features-main">
      {/* Summary Section */}
      <section className="summary-section">
        <div className="summary-content">
          <div className="summary-box">
            <div className="summary-icon">
              <img src={employeeIcon} alt="Employee icon" style={{ width: '50px', height: '50px' }} />
            </div>
            <h3>800+</h3>
            <p>Field Team</p>
          </div>
          <div className="summary-box">
            <div className="summary-icon">
              <img src={dealIcon} alt="Deal icon" style={{ width: '50px', height: '50px' }} />
            </div>
            <h3>1000+</h3>
            <p>Business Partners</p>
          </div>
          <div className="summary-image-container">
            <img src={summaryPic} alt="Field work" />
          </div>
        </div>
      </section>

      {/* Our Strength Section */}
      <section className="feature-section">
        <div className="feature-content">
          <div className="feature-image">
            <img src={strengthPic} alt="Rozan and Nooran products" />
          </div>
          <div className="feature-text">
            <h2 className="feature-title-green">Our Strength</h2>
            <h3>Comprehensive Agrochemical Solutions for Every Crop</h3>
            <p>At Welcare Chemical Corporation, we offer a diverse and trusted range of agrochemical solutions tailored to the needs of Pakistani farmers. Our research-based products protect crops at every stage—from weeds and pests to environmental stress—ensuring healthy growth and better yields. With one of the widest product portfolios in the industry, we're committed to advancing sustainable agriculture and securing safe, affordable food for all.</p>
            <button className="feature-button-orange">Know More</button>
          </div>
        </div>
      </section>

      {/* Our Assets Section */}
      <section className="feature-section-alt">
        <div className="feature-content reverse">
          <div className="feature-image">
            <img src={assetsPic} alt="Care Up product" />
          </div>
          <div className="feature-text">
            <h2 className="feature-title-orange">Our Assets</h2>
            <h3>Trusted Brands, Proven Performance</h3>
            <p>At Welcare Chemical Corporation, our product range includes proven agrochemicals and micronutrients trusted by farmers across Pakistan. Backed by years of field success, our brands deliver reliable protection and healthier plants. Through ongoing research and innovation, we continue to expand our portfolio—offering smarter, more effective solutions to meet modern agricultural needs.</p>
            <button className="feature-button-green">Our Products</button>
          </div>
        </div>
      </section>
      
      {/* Our Expertise Section */}
      <section className="feature-section">
        <div className="feature-content">
          <div className="feature-image">
            <img src={expertisePic} alt="Care Push products" />
          </div>
          <div className="feature-text">
            <h2 className="feature-title-green">Our Expertise</h2>
            <h3>Excellence in Manufacturing & Formulations</h3>
            <p>At Welcare Chemical Corporation, we specialize in the formulation and manufacturing of high-quality agrochemicals including pesticides, herbicides, insecticides, and fungicides. Our products are developed under expert supervision using advanced techniques like EC, SC, WP, WG, and OD formulations, ensuring consistent performance and reliability for farmers across Pakistan.</p>
            <button className="feature-button-orange">Know More</button>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="feature-section-alt">
        <div className="feature-content reverse">
          <div className="feature-image">
            <img src={commitmentPic} alt="Bunjara product" />
          </div>
          <div className="feature-text">
            <h2 className="feature-title-orange">Our Commitment</h2>
            <h3>Strict Quality Control Standards</h3>
            <p>At Welcare, we maintain rigorous quality assurance practices to ensure product consistency and customer satisfaction. Our processes are aligned with ISO standards, and we continuously monitor performance, feedback, and production to drive ongoing improvement across all operations.</p>
            <button className="feature-button-green">Contact Us</button>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="mission-section" style={{ backgroundImage: `url(${missionBg})` }}>
        <div className="mission-overlay">
          <h2 className="feature-title-green">Our Mission</h2>
          <h3>Empowering Farmers. Enhancing Lives.</h3>
          <p>At Welcare Chemical Corporation, our dedicated technical field team works hand-in-hand with farmers to improve per-acre productivity and maximize their growth. We are committed to delivering innovative agricultural solutions that increase yield, add to the overall income and well-being of our farming community.</p>
          <button className="feature-button-orange">About Us</button>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="products-section">
        <h2 className="products-title">Our Products</h2>
        <div className="products-grid">
          {/* Large Card */}
          <div className="product-card large-card">
            <div className="product-image-container pink-bg">
              <img src={microNutrientsPic} alt="Micro Nutrients" />
            </div>
            <div className="product-label">Micro Nutrients</div>
          </div>
          {/* Small Cards Grid */}
          <div className="products-subgrid">
            <div className="product-card">
              <div className="product-image-container red-bg">
                <img src={granulesPic} alt="Granules" />
              </div>
              <div className="product-label">Granules</div>
            </div>
            <div className="product-card">
              <div className="product-image-container dark-blue-bg">
                <img src={fungicidesPic} alt="Fungicides" />
              </div>
              <div className="product-label">Fungicides</div>
            </div>
            <div className="product-card">
              <div className="product-image-container purple-bg">
                <img src={insecticidesPic} alt="Insecticides" />
              </div>
              <div className="product-label">Insecticides</div>
            </div>
            <div className="product-card">
              <div className="product-image-container light-blue-bg">
                <img src={herbicidesPic} alt="Herbicides" />
              </div>
              <div className="product-label">Herbicides</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Features; 