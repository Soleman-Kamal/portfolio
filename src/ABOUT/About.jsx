import "./About.css";
import { useEffect, useState } from "react";

function useCounter(target) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const interval = setInterval(() => {
      start += 1;
      setCount(start);

      if (start >= target) {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [target]);

  return count;
}

export default function About() {
  const html = useCounter(95);
  const css = useCounter(90);
  const js = useCounter(75);
  const react = useCounter(70);

  return (
    <section className="about" id="about">
      <div className="container about-content">
        <div className="about-left">
          <h2>About Me</h2>

          <p>
            I'm a frontend developer who enjoys building modern and responsive
            user interfaces with clean code and smooth user experience.
          </p>

          <p>
            I focus on creating visually appealing designs and turning ideas
            into real web applications using React and JavaScript.
          </p>

          <div className="about-card">
            <h4>💡 What I Do</h4>
            <p>
              Build responsive websites, modern UI designs, and interactive web
              applications.
            </p>
          </div>
        </div>

        <div className="about-right">
          <div className="skill">
            <div className="skill-title">
              <span>HTML</span>
              <span>{html}%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-fill" style={{ width: `${html}%` }}></div>
            </div>
          </div>

          <div className="skill">
            <div className="skill-title">
              <span>CSS</span>
              <span>{css}%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-fill" style={{ width: `${css}%` }}></div>
            </div>
          </div>

          <div className="skill">
            <div className="skill-title">
              <span>JavaScript</span>
              <span>{js}%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-fill" style={{ width: `${js}%` }}></div>
            </div>
          </div>

          <div className="skill">
            <div className="skill-title">
              <span>React</span>
              <span>{react}%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-fill" style={{ width: `${react}%` }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}