import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => (
  <section className="hero">
    <div className="hero-content">
      <img src="/blackhorse-project/logo.jpg" alt="Trucks on Highway" className="hero-logo" />
      <div className="hero-text">
        <h1>Black Horse</h1>
        <h2>Logistics Group</h2>
      </div>
    </div>
  </section>
);

export default HeroSection;
