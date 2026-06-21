import "./About.css";
import { useEffect, useState } from "react";
import aboutImage from "../assets/Gemini_Generated_Image_7pp08l7pp08l7pp0 (1).png";


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
    { name: "HTML", target: 95, value: useCounter(95) },
    { name: "CSS", target: 90, value: useCounter(90) },
    { name: "JavaScript", target: 78, value: useCounter(78) },
    { name: "React", target: 74, value: useCounter(74) },
  ];

  return (
    <section className="about" id="about">
      <div className="container about-content">
        <div className="about-image">
          <div className="image-shape">
            <img src={aboutImage} alt="Soleman Kamal" />
          </div>
        </div>

        <div className="about-info">
          <p className="about-label">ABOUT ME</p>

          <h2>
            Better Code <br />
            Better Experience
          </h2>

          <p className="about-description">
            I'm a Frontend Developer focused on creating clean, responsive, and
            interactive websites. I care about details, visual balance,
            performance, and building interfaces that feel smooth and
            professional.
          </p>

          <div className="skills-list">
            {skills.map((skill) => (
              <div className="skill" key={skill.name}>
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
            ))}
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