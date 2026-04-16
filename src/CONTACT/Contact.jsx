import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-subtitle">
          Let’s work together or connect through my platforms.
        </p>

        <div className="contact-cards">
          <div className="contact-card">
            <h3>Email</h3>
            <p>raafkar935@gmail.com</p>
            <a href="mailto:raafkar935@gmail.com">Send Email</a>
          </div>

          <div className="contact-card">
            <h3>GitHub</h3>
            <p>Soleman-Kamal</p>
            <a
              href="https://github.com/Soleman-Kamal"
              target="_blank"
              rel="noreferrer"
            >
              Visit GitHub
            </a>
          </div>

          <div className="contact-card">
            <h3>LinkedIn</h3>
            <p>Your LinkedIn Profile</p>
            <a href="https://www.linkedin.com/in/soleman-kamal-752483355/" target="_blank" rel="noreferrer">
              Visit LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}