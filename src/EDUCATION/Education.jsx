import "./Education.css";

export default function Education() {
  const educationItems = [
    {
      date: "2023 - 2027",
      title: "Bachelor's Degree in Computer Science",
      place: "Al-Azhar University - Gaza",
      text: "Studying programming, problem-solving, web development, databases, and software fundamentals.",
    },
    {
      date: "Frontend Track",
      title: "React Development",
      place: "Self Learning & Practical Projects",
      text: "Building interfaces using React components, props, state, routing, and responsive UI structures.",
    },
    {
      date: "Core Skills",
      title: "Web Development",
      place: "HTML, CSS, JavaScript",
      text: "Creating responsive websites, landing pages, e-commerce pages, and clean interactive layouts.",
    },
  ];

  return (
    <section className="education" id="education">
      <div className="container education-content">
        <div className="education-header">
          <p className="education-badge">Education</p>

          <h2>
            Learning path and <span>frontend practice</span>.
          </h2>

          <p>
            A simple overview of my academic background and the skills I built
            through courses, practice, and real projects.
          </p>
        </div>

        <div className="education-list">
          {educationItems.map((item, index) => (
            <article className="education-item" key={item.title}>
              <span className="education-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="education-info">
                <span className="edu-date">{item.date}</span>
                <h3>{item.title}</h3>
                <h4>{item.place}</h4>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}