import { useState } from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import "./Navbar.css";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const closeMenu = () => setShowMenu(false);

  const handleWhatsApp = () => {
    const phone = "972592589443";
    const message = "مرحبًا، أريد الاستفسار عن خدماتك";

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };
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
          <li>
            <a onClick={closeMenu} href="#home">
              Home
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#about">
              About
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#contact">
              Contact
            </a>
          </li>
        </ul>

        <a href="#contact" className="nav-cta" onClick={handleWhatsApp} style={{display:"flex" , justifyContent:"center" , alignItems:"center"}}>
          Hire Me
          <WhatsAppIcon style={{fontSize:"20px"}}/>
        </a>

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
