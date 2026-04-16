import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <h3>Soleman Kamal</h3>
        <p>Frontend Developer | Building modern web interfaces</p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <span>© 2026 Soleman Kamal. All rights reserved.</span>
      </div>
    </footer>
  );
}