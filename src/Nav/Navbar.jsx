import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const closeMenu = () => setShowMenu(false);

  return (
    <nav className="navbar">
      <div className="nav-glow"></div>

      <div className="container navbar-content">
        <a href="#home" className="logo" onClick={closeMenu}>
          <span className="logo-mark">S</span>
          <span>Soleman</span>
          <strong>Kamal</strong>
        </a>

        <ul className={showMenu ? "nav-links active" : "nav-links"}>
          <li><a onClick={closeMenu} href="#home">Home</a></li>
          <li><a onClick={closeMenu} href="#about">About</a></li>
          <li><a onClick={closeMenu} href="#projects">Projects</a></li>
          <li><a onClick={closeMenu} href="#contact">Contact</a></li>
        </ul>

        <a href="#contact" className="nav-cta">Hire Me</a>

        <button
          className={showMenu ? "menu-toggle active" : "menu-toggle"}
          onClick={() => setShowMenu(!showMenu)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}