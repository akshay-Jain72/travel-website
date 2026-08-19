import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Background Overlay (Mobile/Tablet view ke liye) */}
      <div 
        className={`sidebar-overlay ${isOpen ? 'active' : ''}`} 
        onClick={toggleSidebar}
      ></div>

      {/* Main Sidebar Panel */}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="logo">
            <i className="fas fa-paper-plane"></i>
            <span>TravelApp</span>
          </div>
          <i className="fas fa-times close-btn" onClick={toggleSidebar}></i>
        </div>

        <ul className="sidebar-links">
          <li>
            <a href="#home">
              <i className="fas fa-home"></i>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#book">
              <i className="fas fa-book"></i>
              <span>Book</span>
            </a>
          </li>
          <li>
            <a href="#packages">
              <i className="fas fa-globe"></i>
              <span>Packages</span>
            </a>
          </li>
          <li>
            <a href="#services">
              <i className="fas fa-concierge-bell"></i>
              <span>Services</span>
            </a>
          </li>
          <li>
            <a href="#gallery">
              <i className="fas fa-images"></i>
              <span>Gallery</span>
            </a>
          </li>
          <li>
            <a href="#contact">
              <i className="fas fa-envelope"></i>
              <span>Contact</span>
            </a>
          </li>
        </ul>

        <div className="sidebar-footer">
          <button className="btn-login">Login</button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;