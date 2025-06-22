import React from 'react';
import './MicroNutrients.css';
import bgImg from '../assets/background1.jpeg';
import cartap from '../assets/cartap.png';
import ceedo from '../assets/ceedo.png';
import fipronil from '../assets/fipronil.png';
import lufenuron from '../assets/lufenuron.png';
import mavin from '../assets/mavin.png';
import mightel from '../assets/mightel.png';
import rim_jim from '../assets/rim_jim.png';
import schenchlor from '../assets/schenchlor.png';
import supervisor from '../assets/supervisor.png';

const products = [
  { name: 'Cartap', img: cartap },
  { name: 'Ceedo', img: ceedo },
  { name: 'Fipronil', img: fipronil },
  { name: 'Lufenuron', img: lufenuron },
  { name: 'Mavin', img: mavin },
  { name: 'Mightel', img: mightel },
  { name: 'Rim Jim', img: rim_jim },
  { name: 'Schenchlor', img: schenchlor },
  { name: 'Supervisor', img: supervisor },
];

const Insecticides = () => (
  <main className="micronutrients-page">
    <section className="micronutrients-hero-section" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="micronutrients-hero-overlay micronutrients-hero-overlay-left">
        <h1 className="page-title">Insecticides</h1>
        <p className="page-breadcrumb">Home/Products/Insecticides</p>
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

export default Insecticides; 