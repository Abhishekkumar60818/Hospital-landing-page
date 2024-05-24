import React from 'react'
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
import Footer from '../styles/Footer.css'
const Footers = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">Medi<span className="highlight">Care</span>+</div>
        <nav className="nav">
          <a href="#home" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#news">News</a>
        </nav>
      </header>
      <footer className="App-footer">
        <div className="social-icons">
          <FaFacebook />
          <FaGoogle />
          <FaTwitter />
        </div>
        <p>©2023 - 011BQ</p>
      </footer>
    </div>
  )
}

export default Footers
