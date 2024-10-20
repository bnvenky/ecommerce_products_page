/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="Chaperone" />
        </Link>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/plants">Plants & Pots</Link></li>
            <li><Link to="/tools">Tools</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/story">Our Story</Link></li>
            <li><Link to="/faqs">FAQs</Link></li>
          </ul>
        </nav>
        <form onSubmit={handleSearch} className="search-bar">
          <input
            type="text"
            placeholder="Search Plant"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">
            <img src="/search-icon.png" alt="Search" />
          </button>
        </form>
        <div className="user-actions">
          <Link to="/profile" className="icon-button">
            <img src="/profile-icon.png" alt="Profile" />
          </Link>
          <Link to="/cart" className="icon-button">
            <img src="/cart-icon.png" alt="Cart" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
