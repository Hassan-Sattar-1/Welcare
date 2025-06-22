import React from 'react';
import './QualityControl.css';
import bgImg from '../assets/sugarcane.jpg';
import controlImg from '../assets/control.jpeg';

const points = [
  'Welcare Chemical Corporation ensures stringent analytical quality control of all agrochemical products.',
  'Our commitment to safe, effective, and compliant use of crop protection products begins with robust laboratory testing.',
  'We have established well-equipped, modern laboratories designed to handle the supervision of a wide range of pesticide formulations.',
  'Operated by trained, qualified, and experienced staff, our labs use internationally recognized methods to analyze multiple active ingredients with precision and reliability.',
  'This quality control infrastructure plays a vital role in supporting regulatory compliance, farmer safety, and agricultural productivity.'
];

const QualityControl = () => (
  <main className="quality-page">
    <section className="quality-hero-section" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="quality-content-wrapper">
        <div className="quality-content-left">
          <h1 className="quality-title">Quality Control</h1>
          <p className="quality-breadcrumb">Home/Quality Control</p>
          <ul className="quality-list">
            {points.map((point, idx) => (
              <li key={idx}><span className="leaf">&#127810;</span> {point}</li>
            ))}
          </ul>
        </div>
        <div className="quality-content-right">
          <div className="quality-image-frame">
            <img src={controlImg} alt="Quality Control Microscope" />
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default QualityControl; 