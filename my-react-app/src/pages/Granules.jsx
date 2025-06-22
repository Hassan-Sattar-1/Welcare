import React from 'react';
import './MicroNutrients.css';
import bgImg from '../assets/background1.jpeg';
import monomehypo from '../assets/monomehypo.png';

const products = [
  { name: 'Monomehypo', img: monomehypo },
];

const Granules = () => (
  <main className="micronutrients-page">
    <section className="micronutrients-hero-section" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="micronutrients-hero-overlay micronutrients-hero-overlay-left">
        <h1 className="page-title">Granules</h1>
        <p className="page-breadcrumb">Home/Products/Granules</p>
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

export default Granules; 