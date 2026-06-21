import "./Hero.css";
import heroImage from "../assets/Gemini_Generated_Image_jenk5njenk5njenk (1).png";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <div className="layout">
          <aside>
            <div className="hero-text">
              <p className="hero-subtitle">Frontend Developer</p>

              <h1>
                <span className="no">React</span>{" "}
                <span className="no1">Developer</span>
              </h1>
            </div>
          </aside>
          <main>
            <div className="hero-visual">
              <div className="image-frame">
                <div className="image-box">
                  <img src={heroImage} alt="Soleman Kamal" />
                </div>
                <div className="image-bg"></div>
              </div>
            </div>
          </main>
          <aside className="about-hero">
            <p className="hero-description">
              <span className="tit"> Hi, I'm Soleman </span> build clean, fast,
              responsive, and interactive websites with React, JavaScript,
              Tailwind CSS, and modern UI animations.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
              <a href="#contact" className="btn-secondary">
                Contact Me
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
