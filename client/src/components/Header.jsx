import React from 'react';
import './Header.css';

const Header = ({ setShowForm, toggleSidebar }) => {
  return (
    <header className="header">
      <div id="menu-btn" className="fas fa-bars" onClick={toggleSidebar}></div>

      <a href="#home" className="logo">
        <span>T</span>ravel
      </a>

      <nav className="navbar">
        <a href="#home">home</a>
        <a href="#book">book</a>
        <a href="#packages">packages</a>
        <a href="#services">services</a>
        <a href="#gallery">gallery</a>
        <a href="#review">review</a>
        <a href="#contact">contact</a>
      </nav>

      <div className="icons">
        {/* Desktop ke liye professional Login Button (Search icon yahan se hata diya gaya hai) */}
        <div className="login-btn-container" onClick={() => setShowForm(true)}>
          <i className="fas fa-user" id="login-btn"></i>
          <span>Login</span>
        </div>
      </div>
    </header>
  );
};

export default Header;