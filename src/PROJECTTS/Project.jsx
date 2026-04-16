import "./Project.css";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of the projects I have worked on.
        </p>

        <div className="projects-grid">
          <div className="project-card">
            <img src={project1} alt="Educational Platform" />
            <div className="project-info">
              <h3>Educational Platform</h3>
              <p>
                An educational platform built with HTML, CSS, and JavaScript to
                organize lessons and improve the learning experience.
              </p>
              <div className="project-links">
                <a href="https://soleman-kamal.github.io/academic-platform/" target="_blank" rel="noreferrer">
                  Live Demo
                </a>
                <a href="https://github.com/Soleman-Kamal/academic-platform" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img src={project2} alt="Shop Hub" />
            <div className="project-info">
              <h3>Shop Hub</h3>
              <p>
                A simple e-commerce website with a clean layout and responsive
                design built using HTML and CSS.
              </p>
              <div className="project-links">
                <a
                  href="https://soleman-kamal.github.io/Shop-Hup/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/Soleman-Kamal/Shop-Hup"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img src={project3} alt="Gaza Bites" />
            <div className="project-info">
              <h3>Gaza Bites</h3>
              <p>
                A restaurant landing page with a modern design, menu section,
                contact area, and polished visual style.
              </p>
              <div className="project-links">
                <a href="https://soleman-kamal.github.io/Gaza-Bites/" target="_blank" rel="noreferrer">
                  Live Demo
                </a>
                <a
                  href="https://github.com/Soleman-Kamal/Gaza-Bites"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}