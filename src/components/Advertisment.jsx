import React from 'react';
import '../assets/Styles/Advertisement.css';

const Advertisement = () => {
  return (
    <div className="advertisement-card">
      <div className="logo-section">
        <img src="path-to-your-logo.png" alt="Logo" className="logo-image" />
        <h3 className="advertisement-heading">Stay Updated! Subscribe to Our Newsletter</h3>
      </div>
      <form className="newsletter-form">
          <input
            type="email"
            className="email-input"
            placeholder="Your Email Here"
            required
          />
          <button type="submit" className="subscribe-btn">Subscribe</button>
        </form>
    </div>
  );
};

export default Advertisement;
