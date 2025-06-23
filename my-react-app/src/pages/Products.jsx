import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';
import microNutrientsPic from '../assets/micronutrients.png';
import granulesPic from '../assets/granules.png';
import insecticidesPic from '../assets/insecticides.png';
import fungicidesPic from '../assets/fungicides.png';
import herbicidesPic from '../assets/herbicides.png';
import productHeroBg from '../assets/maize.jpg';

const Products = () => {
  return (
    <main className="products-page">
      <section className="product-hero-section" style={{ backgroundImage: `url(${productHeroBg})` }}>
        <div className="product-hero-overlay product-hero-overlay-left">
          <h1 className="page-title">Products</h1>
          <p className="page-breadcrumb">Home/Products</p>
        </div>
      </section>
      {/* Our Products Section */}
      <section className="products-section">
        <h2 className="products-title">Our Products</h2>
        <div className="products-grid">
          {/* Large Card */}
          <div className="product-card-wrapper">
            <Link to="/micro-nutrients">
              <div className="product-card large-card">
                <div className="product-image-container">
                  <img src={microNutrientsPic} alt="Micro Nutrients" />
                </div>
                <div className="product-label">Micro Nutrients</div>
              </div>
            </Link>
          </div>
          {/* Small Cards Grid */}
          <div className="products-subgrid">
            <div className="product-card-wrapper">
              <Link to="/granules">
                <div className="product-card">
                  <div className="product-image-container">
                    <img src={granulesPic} alt="Granules" />
                  </div>
                  <div className="product-label">Granules</div>
                </div>
              </Link>
            </div>
            <div className="product-card-wrapper">
              <Link to="/fungicides">
                <div className="product-card">
                  <div className="product-image-container">
                    <img src={fungicidesPic} alt="Fungicides" />
                  </div>
                  <div className="product-label">Fungicides</div>
                </div>
              </Link>
            </div>
            <div className="product-card-wrapper">
              <Link to="/insecticides">
                <div className="product-card">
                  <div className="product-image-container">
                    <img src={insecticidesPic} alt="Insecticides" />
                  </div>
                  <div className="product-label">Insecticides</div>
                </div>
              </Link>
            </div>
            <div className="product-card-wrapper">
              <Link to="/herbicides">
                <div className="product-card">
                  <div className="product-image-container">
                    <img src={herbicidesPic} alt="Herbicides" />
                  </div>
                  <div className="product-label">Herbicides</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products; 