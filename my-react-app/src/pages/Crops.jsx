import React from 'react';
import './Crops.css';
import cropHeroBg from '../assets/maize.jpg';
import wheatImg from '../assets/wheat.jpg';
import riceImg from '../assets/rice.jpg';
import cottonImg from '../assets/cotton.jpg';
import sugarcaneImg from '../assets/sugarcane.jpg';
import maizeImg from '../assets/maize.jpg';
import potatoImg from '../assets/potato.jpg';

const cropsData = [
  {
    name: 'Wheat',
    description: 'Wheat is the principal staple food crop of Pakistan, dominating all other crops in terms of acreage and production. Grown primarily as a Rabi crop in Punjab, Sindh, Khyber Pakhtunkhwa (formerly NWFP), and parts of Balochistan, it plays a crucial role in food security. Despite continued government efforts, Pakistan still faces challenges in achieving self-sufficiency and imports approximately 2 million tons of wheat annually, costing the economy billions. At Welcare Chemical Corporation, we support farmers with innovative crop solutions to increase wheat productivity and reduce dependency on imports.',
    image: wheatImg,
  },
  {
    name: 'Rice',
    description: 'Rice holds immense significance for Pakistan\'s economy, contributing to export earnings, employment, and rural development. It is cultivated extensively in the fertile plains of Punjab, Sindh, and Balochistan. Pakistan is globally renowned for its Basmati rice, appreciated for its unique aroma and quality. Rice serves as both a major food and cash crop, providing livelihood to millions. Welcare supports rice growers with high-quality crop protection products to ensure healthy and high-yielding harvests.',
    image: riceImg,
  },
  {
      name: 'Cotton',
      description: 'Cotton is Pakistan\'s most important cash crop and the backbone of the textile industry. As the sixth-largest cotton producer in the world and the third-largest spinning capacity in Asia, Pakistan\'s economy heavily depends on cotton farming. Enhancing per-acre yield is vital for the 1.5 million smallholder farmers who rely on cotton for their income. Welcare provides advanced crop care solutions to protect cotton from pests and increase yield and fiber quality.',
      image: cottonImg,
  },
  {
      name: 'Sugarcane',
      description: 'Sugarcane is a vital cash crop grown for the production of sugar and related industries. Beyond its role in food processing, it also supplies raw materials to industries such as chipboard, paper, confectionery, plastics, paints, and more. Its cultivation provides significant employment and income to farming communities across Pakistan. Welcare offers targeted crop protection strategies to improve sugarcane health and increase returns for growers.',
      image: sugarcaneImg,
  },
  {
      name: 'Maize',
      description: 'Maize is the third most important cereal crop in Pakistan after wheat and rice. It is widely used as a food, feed, and industrial crop, and has earned the nickname "the other gold" due to its diverse applications. As a high-yielding crop, maize holds immense potential for food security and economic growth. At Welcare, we provide farmers with the tools and knowledge to maximize maize production and meet growing market demands.',
      image: maizeImg,
  },
  {
      name: 'Potato',
      description: 'Potato is one of the most nutritious and profitable crops in Pakistan, ranking fourth after wheat, rice, and maize. Known for its rich starch content, it also provides vitamins, minerals, and proteins, making it a near-complete food. Farmers across Pakistan have shown strong interest in certified, high-yield potato varieties, supported by Welcare\'s reliable crop protection and nutritional solutions. The potato\'s high productivity per acre makes it a key crop for food security and rural prosperity.',
      image: potatoImg,
  }
];

const Crops = () => {
  return (
    <main className="crops-page">
      <section className="crop-hero-section" style={{ backgroundImage: `url(${cropHeroBg})` }}>
        <div className="crop-hero-overlay crop-hero-overlay-left">
          <h1 className="page-title">Crops</h1>
          <p className="page-breadcrumb">Home/Crops</p>
        </div>
      </section>
      <section className="crop-list-section">
        <div className="crop-list">
          {cropsData.map((crop, index) => (
            <div className="crop-item" key={index}>
              <div className="crop-text">
                <h2>{crop.name}</h2>
                <p>{crop.description}</p>
              </div>
              <div className="crop-image">
                <img src={crop.image} alt={crop.name} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Crops; 