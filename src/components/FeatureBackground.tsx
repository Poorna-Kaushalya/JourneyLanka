import React from 'react';
import './FeatureBackground.css';

const FeatureBackground: React.FC = () => {
  return (
    <section className="feature-bg-section">
      <div className="feature-overlay"></div>
      <div className="container feature-content animate-on-scroll">
        <h2 className="feature-title">Experience the Beauty of Sri Lanka</h2>
        <p className="feature-text">
          From the golden beaches of the coast to the misty, lush green mountains of the central highlands, 
          every corner of our island holds a new adventure. Let us guide you through ancient ruins, 
          vibrant cultures, and untouched natural wonders.
        </p>
      </div>
    </section>
  );
};

export default FeatureBackground;
