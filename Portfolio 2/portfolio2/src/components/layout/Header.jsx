import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`} id="header">
      {/* Desktop Nav */}
      <nav id="desktop-nav">
        <Link to="/" className="logo-name">
          Gyda Lofthus <br />
          <span className="logo-frontend">Frontend Developer</span>
        </Link>
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Hamburger Nav */}
      <nav id="hamburger-nav">
        <Link to="/" className="logo-name">
          Gyda Lofthus <br />
          <span className="logo-frontend">Frontend Developer</span>
        </Link>
        <div className="hamburger-menu">
          <div
            className={`hamburger-icon ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={`menu-links ${menuOpen ? "open" : ""}`}>
            <li className="menu-link">
              <a href="#about" onClick={closeMenu}>
                About
              </a>
            </li>
            <li className="menu-link">
              <a href="#experience" onClick={closeMenu}>
                Experience
              </a>
            </li>
            <li className="menu-link">
              <a href="#projects" onClick={closeMenu}>
                Projects
              </a>
            </li>
            <li className="menu-link">
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
