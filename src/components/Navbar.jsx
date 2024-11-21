import React from 'react';
import './Navbar.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-initials">AS</span>
      </div>
      <div className="navbar-center">
        <ul className="navbar-links">
          <li>About</li>
          <li>Projects</li>
          <li>Resume</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="navbar-right">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
