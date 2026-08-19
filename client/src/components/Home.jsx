// New Simplified Home.jsx Component (Only 1 image)

import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="content">
        <h3>adventure is worth it</h3>
        <p>discover new places with us, adventure awaits</p>
        <a href="#book" className="btn">discover more</a>
      </div>

      {/* Video structure ki jagah static image use karein */}
      <img src="/images/hero-bg.jpg" alt="Travel Destination" className="hero-img" />
    </section>
  );
};

export default Home;