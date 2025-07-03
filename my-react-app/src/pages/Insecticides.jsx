import React, { useState } from 'react';
import './MicroNutrients.css';
import bgImg from '../assets/background1.jpeg';
import ceedo from '../assets/ceedo.png';
import fipronil from '../assets/fipronil.png';
import lufenuron from '../assets/lufenuron.png';
import mavin from '../assets/mavin.png';
import mightel from '../assets/mightel.png';
import rim_jim from '../assets/rim_jim.png';
import schenchlor from '../assets/schenchlor.png';
import supervisor from '../assets/supervisor.png';
import dino from '../assets/dino.png';
import lalkar from '../assets/lalkar.png';
import sudao from '../assets/sudao.png';
import smatra from '../assets/smatra.png';
import Modal from '../components/Modal';
import fipronilImg from '../assets/fipronil.png';

const products = [
  {
    name: 'Ceedo', img: ceedo
  },
  {
    name: 'Fipronil', img: fipronilImg,
    description: 'Fipronil is a broad-spectrum insecticide that protects crops by targeting a wide range of pests through contact and stomach action.',
    features: [
      'Active Ingredient: Fipronil 5% SC',
      'Controls stem borers, leaf folders, termites, rootworms, thrips, etc.',
      'Quick knockdown, long residual effect',
      'Suitable for rice, sugarcane, maize, vegetables',
      'Foliar spray or seed treatment'
    ],
    crops: 'Rice, sugarcane, maize, vegetables',
    usage: '50–100 ml per acre. Dilute in 150–200 liters of water. Apply at early pest stage.',
    packaging: '100ml, 250ml, 500ml, 1L',
    safety: 'Store cool & dry, keep away from children, wear protective gear.',
    tagline: 'Welcare — Science Behind Farms'
  },
  { name: 'Lufenuron', img: lufenuron },
  { name: 'Mavin', img: mavin },
  { name: 'Mightel', img: mightel },
  { name: 'Rim Jim', img: rim_jim },
  { name: 'Schenchlor', img: schenchlor },
  { name: 'Supervisor', img: supervisor },
  { name: 'Dino', img: dino },
  { name: 'Lalkar', img: lalkar },
  { name: 'Sudao', img: sudao },
  { name: 'Smatra', img: smatra },
];

const Insecticides = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  return (
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
            <div className="micronutrients-product-card" key={idx} onClick={() => handleCardClick(product)} style={{ cursor: 'pointer' }}>
              <div className="micronutrients-product-image">
                <img src={product.img} alt={product.name} />
              </div>
              <button className="micronutrients-product-btn">{product.name}</button>
            </div>
          ))}
        </div>
      </section>
      <Modal isOpen={modalOpen} onClose={handleCloseModal} product={selectedProduct} />
    </main>
  );
};

export default Insecticides; 