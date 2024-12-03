import React from "react";
import { NavLink } from "react-router-dom"; // Use NavLink for active page highlighting
import { FaHome, FaUserAlt, FaFolderOpen, FaFileAlt, FaEnvelope } from "react-icons/fa"; // Import icons
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink exact to="/" className="logo-link">
          <h1>AS</h1>
        </NavLink>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink exact to="/" activeClassName="active">
            <FaHome className="nav-icon" /> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            <FaUserAlt className="nav-icon" /> About
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" activeClassName="active">
            <FaFolderOpen className="nav-icon" /> Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/resume" activeClassName="active">
            <FaFileAlt className="nav-icon" /> Resume
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">
            <FaEnvelope className="nav-icon" /> Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
