import React from 'react';
import './MicroNutrients.css';
import bgImg from '../assets/background1.jpeg';
import kachalo from '../assets/kachalo.png';
import pucheng_star from '../assets/pucheng_star.png';
import pyrazole from '../assets/pyrazole.png';
import sulphur from '../assets/sulphur.png';

const products = [
  { name: 'Kachalo', img: kachalo },
  { name: 'Pucheng Star', img: pucheng_star },
  { name: 'Pyrazole', img: pyrazole },
  { name: 'Sulphur', img: sulphur },
];

const Fungicides = () => (
  <main className="micronutrients-page">
    <section className="micronutrients-hero-section" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="micronutrients-hero-overlay micronutrients-hero-overlay-left">
        <h1 className="page-title">Fungicides</h1>
        <p className="page-breadcrumb">Home/Products/Fungicides</p>
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

export default Fungicides; 