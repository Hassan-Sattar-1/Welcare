import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Crops from './pages/Crops';
import QualityControl from './pages/QualityControl';
import AboutUs from './pages/AboutUs';
import ScrollToTop from './ScrollToTop';
import MicroNutrients from './pages/MicroNutrients';
import Granules from './pages/Granules';
import Insecticides from './pages/Insecticides';
import Herbicides from './pages/Herbicides';
import Fungicides from './pages/Fungicides';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/crops" element={<Crops />} />
        <Route path="/quality-control" element={<QualityControl />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/micro-nutrients" element={<MicroNutrients />} />
        <Route path="/granules" element={<Granules />} />
        <Route path="/insecticides" element={<Insecticides />} />
        <Route path="/herbicides" element={<Herbicides />} />
        <Route path="/fungicides" element={<Fungicides />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
