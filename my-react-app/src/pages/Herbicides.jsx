import React from 'react';
import './MicroNutrients.css';
import bgImg from '../assets/background1.jpeg';
import glyphosate from '../assets/glyphosate.png';
import washer from '../assets/washer.png';
import bermuda from '../assets/bermuda.png';
import full_control from '../assets/full_control.png';
import gangwei from '../assets/gangwei.png';
import miaoyou from '../assets/miaoyou.png';
import recall from '../assets/recall.png';
import sanga from '../assets/sanga.png';
import walter_super from '../assets/walter_super.png';
import welosate from '../assets/welosate.png';
import winsta from '../assets/winsta.png';

const products = [
  { name: 'Glyphosate', img: glyphosate },
  { name: 'Washer', img: washer },
  { name: 'Bermuda', img: bermuda },
  { name: 'Full Control', img: full_control },
  { name: 'Gangwei', img: gangwei },
  { name: 'Miaoyou', img: miaoyou },
  { name: 'Recall', img: recall },
  { name: 'Sanga', img: sanga },
  { name: 'Welosate', img: welosate },
  { name: 'Walter Super', img: walter_super },
  { name: 'Winsta', img: winsta },
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