import "./Education.css";

export default function Education() {
  return (
    <section className="education" id="education">
      <div className="education-glow"></div>

      <div className="container education-content">
        <div className="education-header">
          <p className="education-badge">Education & Certificates</p>
          <h2>
            My learning <span>journey</span>
          </h2>
          <p>
            A quick look at my academic background and the skills I built
            through practice, courses, and real projects.
          </p>
        </div>

        <div className="education-grid">
          <div className="education-card main-card">
            <div className="edu-icon">🎓</div>
            <div>
              <span className="edu-date">2023 - 2027</span>
              <h3>Bachelor's Degree in Computer Science</h3>
              <h4>Al-Azhar University - Gaza</h4>
              <p>
                Studying computer science with a focus on programming,
                problem-solving, web development, databases, and software
                fundamentals.
              </p>
            </div>
          </div>

          <div className="education-card">
            <div className="edu-icon">⚛</div>
            <div>
              <span className="edu-date">Frontend Track</span>
              <h3>React Development</h3>
              <h4>Self Learning & Practical Projects</h4>
              <p>
                Building modern interfaces using React components, props,
                state, routing, and responsive UI structures.
              </p>
            </div>
          </div>

          <div className="education-card">
            <div className="edu-icon">💻</div>
            <div>
              <span className="edu-date">Core Skills</span>
              <h3>Web Development</h3>
              <h4>HTML, CSS, JavaScript</h4>
              <p>
                Creating responsive websites, landing pages, e-commerce pages,
                and interactive layouts with clean frontend code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}