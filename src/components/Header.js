import React from 'react';
import '../styles/Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <span className="logo-blue">Medi</span><span className="logo-orange">Care+</span>
      </div>
      <nav className="nav">
        <a href="/" className="nav-link active">Home</a>
        <a href="/about" className="nav-link">About</a>
        <a href="/services" className="nav-link">Services</a>
        <a href="/news" className="nav-link">News</a>
        <a href="/contact" className="contact-button">Contact</a>
      </nav>
    </header>
  );
}




export default Header;
