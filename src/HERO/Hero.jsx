import "./Hero.css";
import heroImage from "../assets/IMG_20260411_234546_456.webp";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg-glow glow-1"></div>
      <div className="hero-bg-glow glow-2"></div>

      <div className="container hero-content">
        <div className="hero-text">
          <p className="hero-subtitle">⚛ React Frontend Developer</p>

          <h1>
            Building modern <br />
            web experiences with <span>React</span>
          </h1>

          <p className="hero-description">
            Hi, I'm <strong>Soleman Kamal</strong>. I build clean, fast,
            responsive, and interactive websites with React, JavaScript,
            Tailwind CSS, and modern UI animations.
          </p>

          <div className="hero-stack">
            <span>React</span>
            <span>JavaScript</span>
            <span>Tailwind</span>
            <span>UI Motion</span>
          </div>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>

          <div className="floating-card card-react">⚛ React</div>
          <div className="floating-card card-code">&lt;/&gt; Clean Code</div>
          <div className="floating-card card-ui">UI/UX</div>

          <div className="image-frame">
            <div className="image-box">
              <img src={heroImage} alt="Soleman Kamal" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}