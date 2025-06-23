import React from 'react';
import './MicroNutrients.css';
import bgImg from '../assets/background1.jpeg';
import banjara from '../assets/banjara.png';
import careFlow from '../assets/care_flow.png';
import careMax from '../assets/care_max.png';
import carePush from '../assets/care_push.png';
import careUp from '../assets/care_up.png';
import noran from '../assets/noran.png';
import richer from '../assets/richer.png';
import sop from '../assets/sop.png';
import wellzar from '../assets/wellzar.png';

const products = [
  { name: 'Care Push', img: carePush },
  { name: 'Banjara', img: banjara },
  { name: 'Care Up', img: careUp },
  { name: 'Care Flow', img: careFlow },
  { name: 'Welkos SOP', img: sop },
  { name: 'Nooran', img: noran },
  { name: 'Welzar', img: wellzar },
  { name: 'Care Max', img: careMax },
  { name: 'Richer', img: richer },
];

console.log(products);

const MicroNutrients = () => (
  <main className="micronutrients-page">
    <section className="micronutrients-hero-section" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="micronutrients-hero-overlay micronutrients-hero-overlay-left">
        <h1 className="page-title">Micro Nutrients</h1>
        <p className="page-breadcrumb">Home/Products/Micro Nutrients</p>
      </div>
    </section>
    <section className="micronutrients-products-section">
      <div className="micronutrients-products-grid">
        {products.map((product, idx) => (
          <div className="micronutrients-product-card" key={idx}>
            <div className="micronutrients-product-image">
              <img src={product.img} alt={product.name.replace('\n', ' ')} />
            </div>
            <button className="micronutrients-product-btn">
              {product.name.split('\n').map((line, i) => (
                <span key={i}>{line}{i !== product.name.split('\n').length - 1 && <br />}</span>
              ))}
            </button>
          </div>
        ))}
      </div>
    </section>
  </main>
);

export default MicroNutrients; 