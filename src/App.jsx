import React from 'react';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import '../src/styles/App.css';

const App = () => (
  <div className="App">
    <HeroSection />
    <div className="content">
      <AboutUs />
      <Services />
    </div>
  </div>
);

export default App;
