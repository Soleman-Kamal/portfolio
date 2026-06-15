import "./Project.css";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

export default function Projects() {
  const projects = [
    {
      image: project1,
      title: "Educational Platform",
      text: "An educational platform built to organize lessons, improve the learning experience, and present content in a clean responsive layout.",
      tags: ["HTML", "CSS", "JavaScript"],
      live: "https://soleman-kamal.github.io/academic-platform/",
      github: "https://github.com/Soleman-Kamal/academic-platform",
    },
    {
      image: project2,
      title: "NovaCart",
      text: "A responsive e-commerce website with product sections, clean cards, simple navigation, and a modern shopping experience.",
      tags: ["HTML", "CSS", "JavaScript"],
      live: "https://soleman-kamal.github.io/shop-hub/",
      github: "https://github.com/Soleman-Kamal/Shop-Hup",
    },
    {
      image: project3,
      title: "Flavor House",
      text: "A modern restaurant landing page with a polished hero section, menu area, contact section, and smooth responsive design.",
      tags: ["HTML", "CSS", "JavaScript"],
      live: "https://soleman-kamal.github.io/Gaza-Bites/",
      github: "https://github.com/Soleman-Kamal/Gaza-Bites",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-glow projects-glow-one"></div>
      <div className="projects-glow projects-glow-two"></div>

      <div className="container">
        <div className="projects-header">
          <p className="projects-badge">Selected Work</p>
          <h2 className="section-title">
            My <span>Projects</span>
          </h2>
          <p className="section-subtitle">
            A collection of web projects focused on responsive layouts, clean
            UI, and real frontend practice.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />

                <div className="project-overlay">
                  <a href={project.live} target="_blank" rel="noreferrer">
                    View Live
                  </a>
                </div>
              </div>

              <div className="project-info">
                <div className="project-top">
                  <h3>{project.title}</h3>
                  <span className="project-number">0{projects.indexOf(project) + 1}</span>
                </div>

                <p>{project.text}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}