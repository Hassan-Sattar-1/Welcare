import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ComingSoon.css';
import bgImg from '../assets/background4.jpg';

const ComingSoon = () => {
  const navigate = useNavigate();
  return (
    <div className="coming-soon-page" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="coming-soon-overlay">
        <h1 className="coming-soon-title">COMING SOON</h1>
        <button className="coming-soon-btn" onClick={() => navigate('/')}>RETURN TO HOME</button>
      </div>
    </div>
  );
};

export default ComingSoon; 