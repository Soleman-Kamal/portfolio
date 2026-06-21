import "./Project.css";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

export default function Projects() {
  const projects = [
    {
      image: project1,
      title: "Educational Platform",
      text: "A clean educational website for presenting lessons and content in a simple responsive layout.",
      tags: ["HTML", "CSS", "JavaScript"],
      live: "https://soleman-kamal.github.io/academic-platform/",
      github: "https://github.com/Soleman-Kamal/academic-platform",
    },
    {
      image: project2,
      title: "NovaCart Store",
      text: "A simple e-commerce layout with product cards, clear sections, and responsive design.",
      tags: ["HTML", "CSS", "JavaScript"],
      live: "https://soleman-kamal.github.io/shop-hub/",
      github: "https://github.com/Soleman-Kamal/Shop-Hup",
    },
    {
      image: project3,
      title: "Flavor House",
      text: "A restaurant landing page with a hero section, menu area, and contact section.",
      tags: ["HTML", "CSS", "JavaScript"],
      live: "https://soleman-kamal.github.io/Gaza-Bites/",
      github: "https://github.com/Soleman-Kamal/Gaza-Bites",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
          <p className="projects-badge">My Projects</p>
        <div className="projects-list">
          {projects.map((project, index) => (
            <article className="project-item" key={project.title}>
              <div className="project-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-info">
                <h3>{project.title}</h3>
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}