import React from "react";
import "./App.css";
import avatar from "./avatar.png";

function App() {
  return (
    <div className="container">
      <header className="hero">
        <img src={avatar} alt="Abdurrahman Shu'aibu Avatar" className="avatar" />
        <h1>Abdurrahman Shu'aibu</h1>
        <h2>Web Developer | Mobile App Developer | Ethical Hacker</h2>
        <p>
          I am a passionate developer skilled in building modern web and mobile applications, and experienced in cybersecurity and ethical hacking. I love solving problems, building secure systems, and exploring new technologies.
        </p>
      </header>

      <section className="skills">
        <h3>Skills</h3>
        <ul>
          <li>HTML5, CSS3, JavaScript (ES6+), TypeScript</li>
          <li>React, Next.js, Redux, Tailwind CSS</li>
          <li>Node.js, Express, REST API, MongoDB</li>
          <li>Flutter, Dart, React Native</li>
          <li>Python, Django, Flask</li>
          <li>Git, GitHub, CI/CD</li>
          <li>Linux, Bash, Networking</li>
          <li>Penetration Testing, Kali Linux, Metasploit, Wireshark</li>
          <li>OWASP Top 10, Vulnerability Assessment, Social Engineering</li>
        </ul>
      </section>

      <section className="projects">
        <h3>Projects</h3>
        <p>
          {/* Add your top projects here */}
          <em>Coming soon: My best web, mobile, and security projects!</em>
        </p>
      </section>

      <section className="contact">
        <h3>Contact</h3>
        <p>
          Interested in working together or have a question?<br />
          <a href="mailto:your.email@example.com">Send me an Email</a>
        </p>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} Abdurrahman Shu'aibu. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;