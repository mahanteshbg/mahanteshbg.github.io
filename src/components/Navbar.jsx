import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import logo from '../assets/mylogo.png'; // Adjust path if needed

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>
        <button className="navbar-toggle" onClick={handleToggle} aria-label={menuOpen ? "Close menu" : "Open menu"}>
          {menuOpen ? (
            // Close icon SVG
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <line x1="6" y1="6" x2="18" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <line x1="18" y1="6" x2="6" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            // Hamburger icon SVG
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <line x1="4" y1="7" x2="20" y2="7" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <line x1="4" y1="12" x2="20" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <line x1="4" y1="17" x2="20" y2="17" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
        <ul className={`navbar-menu${menuOpen ? ' active' : ''}`}>
          <li><Link to="about" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="skills" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Skills</Link></li>
          <li><Link to="experience" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Experience</Link></li>
          <li><Link to="projects" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Projects</Link></li>
          <li><Link to="education" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Education</Link></li>
          <li><Link to="contact" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;