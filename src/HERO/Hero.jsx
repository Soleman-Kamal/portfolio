import "./Hero.css";
import heroImage from "../assets/IMG_20260411_234546_456.webp";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <div className="hero-text">
          <p className="hero-subtitle ">Frontend Developer</p>

          <h1>
            Hi, I'm <span>Soleman Kamal</span>
          </h1>

          <p className="hero-description">
            I create clean, modern, and responsive websites using HTML, CSS,
            JavaScript, and React.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-box">
            <img src={heroImage} alt="Developer" />
          </div>
        </div>
      </div>
    </section>
  );
}