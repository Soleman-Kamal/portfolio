import "./About.css";
import { useEffect, useState } from "react";

function useCounter(target) {
  const [count, setCount] = useState(1);

  useEffect(() => {
    let current = 1;
    const step = Math.ceil(target / 60);

    const interval = setInterval(() => {
      current += step;

      if (current >= target) {
        current = target;
        clearInterval(interval);
      }

      setCount(current);
    }, 45);

    return () => clearInterval(interval);
  }, [target]);

  return count;
}

export default function About() {
  const skills = [
    { name: "HTML", target: 95, value: useCounter(95), icon: "H" },
    { name: "CSS", target: 90, value: useCounter(90), icon: "C" },
    { name: "JavaScript", target: 78, value: useCounter(78), icon: "JS" },
    { name: "React", target: 74, value: useCounter(74), icon: "⚛" },
  ];

  return (
  
    <section className="about" id="about">
      <div className="section-divider"></div>
      <div className="section-blend"></div>
      <div className="about-glow about-glow-one"></div>
      <div className="about-glow about-glow-two"></div>

      <div className="container about-content">
        <div className="about-skills">
          <div className="skills-panel">
            <div className="panel-header">
              <div className="panel-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="panel-code-icon">&lt;/&gt;</div>
            </div>

            <p className="panel-label">My Stack</p>
            <h3>Technical Skills</h3>

            <div className="skills-list">
              {skills.map((skill) => (
                <div className="skill" key={skill.name}>
                  <div className={`skill-icon ${skill.name.toLowerCase()}`}>
                    {skill.icon}
                  </div>

                  <div className="skill-info">
                    <div className="skill-title">
                      <span>{skill.name}</span>
                      <strong>{skill.value}%</strong>
                    </div>

                    <div className="skill-bar">
                      <div
                        className="skill-fill"
                        style={{ width: `${skill.value}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-mini-stats">
              <div>
                <strong>6+</strong>
                <span>Projects</span>
              </div>
              <div>
                <strong>1K+</strong>
                <span>Lines</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>Responsive</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about-text">
          <p className="section-badge">About Me</p>

          <h2>
            More than code, I build <span>digital experiences</span>.
          </h2>

          <p className="about-description">
            I'm a Frontend Developer focused on creating clean, responsive, and
            interactive websites. I care about details, visual balance,
            performance, and building interfaces that feel smooth and
            professional.
          </p>

          <div className="about-services">
            <div className="service-item">
              <span>&lt;/&gt;</span>
              <div>
                <h4>Clean Code</h4>
                <p>Readable, reusable, and easy to maintain.</p>
              </div>
            </div>

            <div className="service-item">
              <span>⚡</span>
              <div>
                <h4>Performance</h4>
                <p>Fast pages with smooth interactions.</p>
              </div>
            </div>

            <div className="service-item">
              <span>◱</span>
              <div>
                <h4>Modern UI</h4>
                <p>Balanced layouts and polished design details.</p>
              </div>
            </div>

            <div className="service-item">
              <span>⚛</span>
              <div>
                <h4>React Apps</h4>
                <p>Components, states, props, and real logic.</p>
              </div>
            </div>
          </div>

          <div className="about-actions">
            <a href="./Soleman-Kamal-CV.pdf" download className="cv-btn">
              Download CV
            </a>

            <a href="#contact" className="about-link">
              Let’s work together →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}