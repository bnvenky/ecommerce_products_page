/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Subscribe to our newsletter</h3>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className="footer-section">
          <h3>About Us</h3>
          <ul>
            <li><Link to="/our-story">Our Story</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/press">Press</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Our Services</h3>
          <ul>
            <li><Link to="/plant-care">Plant Care</Link></li>
            <li><Link to="/landscaping">Landscaping</Link></li>
            <li><Link to="/consultations">Consultations</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Useful Links</h3>
          <ul>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/shipping">Shipping</Link></li>
            <li><Link to="/returns">Returns</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Get in Touch</h3>
          <p>123 Green Street, Plant City, 12345</p>
          <p>Email: info@chaperone.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Chaperone. All rights reserved.</p>
        <div className="social-icons">
          {/* Add social media icons here */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
