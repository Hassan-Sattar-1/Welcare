import React from 'react';
import './MicroNutrients.css';
import bgImg from '../assets/background1.jpeg';
import glyphosate from '../assets/glyphosate.png';
import blue_bell from '../assets/blue_bell.png';
import washer from '../assets/washer.png';

const products = [
  { name: 'Glyphosate', img: glyphosate },
  { name: 'Blue Bell', img: blue_bell },
  { name: 'Washer', img: washer },
];

const Herbicides = () => (
  <main className="micronutrients-page">
    <section className="micronutrients-hero-section" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="micronutrients-hero-overlay micronutrients-hero-overlay-left">
        <h1 className="page-title">Herbicides</h1>
        <p className="page-breadcrumb">Home/Products/Herbicides</p>
      </div>
    </section>
    <section className="micronutrients-products-section">
      <div className="micronutrients-products-grid">
        {products.map((product, idx) => (
          <div className="micronutrients-product-card" key={idx}>
            <div className="micronutrients-product-image">
              <img src={product.img} alt={product.name} />
            </div>
            <button className="micronutrients-product-btn">{product.name}</button>
          </div>
        ))}
      </div>
    </section>
  </main>
);

export default Herbicides; 