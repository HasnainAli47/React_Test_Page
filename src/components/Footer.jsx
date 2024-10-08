import React from 'react';
import '../assets/Styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="" alt="logo" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
        </div>
        <div className="footer-links">
          <h5>QUICK LINKS</h5>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Teams</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Investors</a></li>
            <li><a href="#">Partners</a></li>
          </ul>
        </div>
        <div className="footer-products">
          <h5>PRODUCTS</h5>
          <ul>
            <li><a href="#">Used Cars</a></li>
            <li><a href="#">New Cars</a></li>
            <li><a href="#">Showroom</a></li>
            <li><a href="#">Dealers</a></li>
            <li><a href="#">App Design</a></li>
          </ul>
        </div>
        <div className="footer-resources">
          <h5>RESOURCES</h5>
          <ul>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Behance</a></li>
          </ul>
        </div>
        <div className="social-media">
          <h5>FOLLOW US</h5>
          <div className="social-icons">
            <a href="#" className="social-button facebook">Facebook</a>
            <a href="#" className="social-button linkedin">LinkedIn</a>
            <a href="#" className="social-button twitter">Twitter</a>
            <a href="#" className="social-button instagram">Instagram</a>
          </div>
        </div>
      </div>
      <hr />
      <p>&copy; 2024 - Maardhcum</p>
    </footer>
  );
};

export default Footer;
