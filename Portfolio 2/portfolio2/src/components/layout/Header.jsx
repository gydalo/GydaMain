import React from "react";

const Header = () => {
  return (
    <header id="header">
      <nav id="desktop-nav">
        <div className="logo-name">
          Gyda Lofthus <br />
          <div className="logo-frontend">Frontend Developer</div>
        </div>
        <div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;