import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Sun, Moon, Download, Github,
  Linkedin, Mail, HeartHandshake, Users, BookOpen, UserRound, Code2,
  Menu, X, ExternalLink, Sparkles
} from "lucide-react";

const projects = [
  {
    name: "Kinesics",
    description: "Gesture-controlled Python application using OpenCV.",
    tags: ["Python", "OpenCV", "Computer Vision"],
    kind: "kinesics",
    link: "https://github.com/jetso06/Kinesics"
  },
  {
    name: "Service Connect",
    description: "A service booking platform connecting users with service providers.",
    tags: ["React.js", "REST APIs", "Web App"],
    kind: "service",
    link: "https://github.com/jetso06/Project-service"
  },
  
{
  name: "HCMSys",
  description:
    "An ASP.NET Core MVC application for HR calendar management, leave scheduling, and attendance reporting.",
  tags: ["C#", "ASP.NET Core MVC", "Entity Framework Core"],
  kind: "projectn",
  link: "https://github.com/jetso06/HCMsys"
}

];

const skills = [
  ["Python", "py"], ["JavaScript", "js"], ["React.js", "react"],
  ["Django REST", "dj"], ["C#", "csharp"], ["ASP.NET Core", "asp"],
  ["REST APIs", "api"], ["Git/GitHub", "git"], ["AWS", "aws"], ["UI/UX Design", "figma"]
];

const experiences = [
  {
    role: "UI/UX Design Intern",
    company: "Neoxis Solutions",
    date: "Aug 2026 – Present",
    bullets: [
      "Contribute to UI/UX design tasks through milestone-based deliverables, reviews, and revisions.",
      "Work on an ASP.NET MVC application involving Jibble API integration and JSON data processing.",
      "Develop attendance-reporting functionality, including working-hours data processing and Excel report generation."
    ],
    mark: "N"
  },
  {
    role: "Junior Python Developer",
    company: "DRUV360 Entrepreneurs Hub Pvt. Ltd.",
    date: "Jul 2025 – Feb 2026",
    bullets: [
      "Worked on web application development and frontend functionality.",
      "Built and refined reusable UI components for consistency and maintainability.",
      "Contributed to debugging and improving application usability."
    ],
    mark: "D"
  }
];

function Reveal({ children, delay = 0, className = "" }) {
  const reduce = useReducedMotion();
  return <motion.div className={className}
    initial={reduce ? false : { opacity: 0, y: 22 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.14 }}
    transition={{ duration: reduce ? 0 : 0.65, delay, ease: [0.22, 1, 0.36, 1] }}>
    {children}
  </motion.div>;
}

function SectionLabel({ number, children }) {
  return <div className="section-label"><span>{number}</span><span>{children}</span></div>;
}

function App() {
  const [light, setLight] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  const [resumeOpen, setResumeOpen] = useState(false);

useEffect(() => {
  if (!resumeOpen) return;

  const handleKeyDown = (event) => {
    if (event.key === "Escape") setResumeOpen(false);
  };

  window.addEventListener("keydown", handleKeyDown);
  return () => window.removeEventListener("keydown", handleKeyDown);
}, [resumeOpen]);

  const nav = [
    ["Home", "#home"], ["About", "#about"], ["Projects", "#projects"],
    ["Experience", "#experience"], ["Skills", "#skills"], ["Contact", "#contact"]
  ];

  return (
    <main className={light ? "site light" : "site"}>
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Jerin home"><span className="brand-dot" />Jerin</a>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={18}/> : <Menu size={18}/>}
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {nav.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>
        <div className="top-actions">
          
<button
  type="button"
  className="resume-button"
  onClick={() => setResumeOpen(true)}
>
  <Download size={14} /> Resume
</button>

          <button className="theme-button" onClick={() => setLight(!light)} aria-label="Toggle light theme">
            {light ? <Moon size={16}/> : <Sun size={16}/>}
          </button>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="hero-copy">
          <div className="eyebrow">SOFTWARE DEVELOPER</div>
          <h1>Hi, I’m <span>Jerin</span></h1>
          <p className="hero-kicker">I build web applications, integrate APIs, and turn ideas into practical solutions.</p>
          <p className="hero-description">A Software Developer with a passion for building web applications, integrating APIs, and creating meaningful user experiences.</p>
          <div className="hero-buttons">
            <a className="button button-light" href="#projects">View My Work <ArrowRight size={15}/></a>
            <a className="button button-outline" href="#contact">Let’s Talk</a>
          </div>
          <div className="socials">
            <a href="https://github.com/jetso06" target="_blank" rel="noreferrer"><Github size={18}/> GitHub</a>
            <a href="https://www.linkedin.com/in/jetso/" target="_blank" rel="noreferrer"><Linkedin size={18}/> LinkedIn</a>
            <a href="mailto:pdjerin6@gmail.com"><Mail size={18}/> Email</a>
          </div>
        </div>
        <div className="hero-art" aria-label="Stylized portrait">
  <div className="orbit orbit-one"></div>
  <div className="orbit orbit-two"></div>

  <img
    className="hero-portrait"
    src="/images/back-view.png"
    alt="Cinematic three-quarter portrait"
  />

  <div className="hero-note">
    BUILD<br />
    LEARN<br />
    IMPROVE<br />
    REPEAT
  </div>

  <div className="scroll-note">
    <span></span>
    SCROLL
  </div>
</div>
      </section>

      <section id="about" className="about-section section-panel">
        <Reveal className="about-inner">
          <div className="about-copy">
            <SectionLabel number="01">ABOUT ME</SectionLabel>
            <h2>Turning Ideas Into<br/>Meaningful Solutions</h2>
            <p>I’m a Software Developer with a strong interest in building web applications, integrating APIs, and creating useful digital solutions. I enjoy learning new technologies, solving real-world problems, and working on projects that make an impact.</p>
            <a className="text-link" href="#experience">More About Me <ArrowRight size={14}/></a>
          </div>
          <div className="values-grid">
            <div className="value-card"><HeartHandshake/><span>Problem Solver</span></div>
            <div className="value-card"><Users/><span>Team Player</span></div>
            <div className="value-card"><BookOpen/><span>Always Learning</span></div>
            <div className="value-card"><UserRound/><span>User Focused</span></div>
          </div>
        </Reveal>
      </section>

      <section id="projects" className="projects-section section-panel">
        <Reveal>
          <div className="section-heading">
            <div><SectionLabel number="02">FEATURED PROJECTS</SectionLabel><h2>Projects I’m Proud Of</h2></div>
            
<div className="project-controls">
  <a
    className="text-link"
    href="https://github.com/jetso06"
    target="_blank"
    rel="noreferrer"
  >
    View All Projects <Github size={14} />
  </a>

  <button
    className="circle-button"
    aria-label="Cycle featured project"
    onClick={() =>
      setActiveProject((activeProject + 1) % projects.length)
    }
  >
    <ArrowRight size={16} />
  </button>
</div>

          </div>
          <div className="project-grid">
            {projects.map((project, i) => <motion.article key={project.name}
              className={`project-card ${project.kind} ${activeProject === i ? "project-active" : ""}`}
              whileHover={{ y: -5 }} transition={{ duration: 0.25 }}>
              <a className="project-image" href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}>
                {project.kind === "kinesics" ? <div className="gesture-art"><span className="hand">✋</span><div className="scan-box"></div><div className="scan-box second"></div></div> :
                 project.kind === "service" ? <div className="browser-art"><div className="browser-bar"><i/><i/><i/></div><div className="browser-content"><span className="mini-title">Service<br/>Connect</span><div className="mini-map"></div><div className="mini-phone"></div></div></div> :
                 <div className="document-art"><div className="doc-sheet"></div><div className="doc-sheet back"></div><div className="doc-lines"></div></div>}
              </a>
              <div className="project-title-row"><h3>{project.name}</h3><a href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} repository`}><ExternalLink size={16}/></a></div>
              <p>{project.description}</p>
              <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            </motion.article>)}
          </div>
        </Reveal>
      </section>

      <div className="bottom-grid">
        <section id="experience" className="experience-section section-panel">
          <Reveal>
            <SectionLabel number="03">EXPERIENCE</SectionLabel>
            <h2>My Journey</h2>
            <div className="timeline">
              {experiences.map((job, i) => <div className="timeline-item" key={job.company}>
                <div className="timeline-mark">{job.mark}</div>
                <div className="timeline-content">
                  <div className="job-heading"><div><h3>{job.role}</h3><p>{job.company}</p></div><span>{job.date}</span></div>
                  <ul>{job.bullets.map((bullet, index) => <li key={index}>{bullet}</li>)}</ul>
                </div>
              </div>)}
            </div>
          </Reveal>
        </section>

        <section id="skills" className="skills-section section-panel">
          <Reveal>
            <SectionLabel number="04">SKILLS</SectionLabel>
            <h2>Technologies I Work With</h2>
            <div className="skills-grid">
              {skills.map(([name, kind], i) => <motion.div className="skill-card" key={name} whileHover={{ y: -3, scale: 1.025 }} transition={{ duration: .2 }}>
                <div className={`skill-symbol ${kind}`}>{kind === "py" ? "Py" : kind === "js" ? "JS" : kind === "react" ? "✳" : kind === "dj" ? "dj" : kind === "csharp" ? "C#" : kind === "asp" ? "ASP" : kind === "api" ? "API" : kind === "git" ? "⌘" : kind === "aws" ? "aws" : "◈"}</div>
                <span>{name}</span>
              </motion.div>)}
            </div>
          </Reveal>
        </section>
      </div>

      <section id="contact" className="contact-section section-panel">
        <Reveal>
          <div className="contact-copy">
            <SectionLabel number="05">CONTACT</SectionLabel>
            <h2>Let’s Build Something<br/>Meaningful</h2>
            <p>I’m open to discussing opportunities, interesting projects, and ideas that make technology useful.</p>
            <div className="contact-links">
              <a href="mailto:pdjerin6@gmail.com"><Mail size={16}/> pdjerin6@gmail.com</a>
              <a href="https://github.com/jetso06" target="_blank" rel="noreferrer"><Github size={16}/> github.com/jetso06</a>
              <a href="https://www.linkedin.com/in/jetso/" target="_blank" rel="noreferrer"><Linkedin size={16}/> linkedin.com/in/jetso</a>
            </div>
            <a className="button button-light" href="mailto:pdjerin6@gmail.com">Send a Message <ArrowRight size={15}/></a>
          </div>
          <div className="contact-art"><div className="paper-plane">➤</div><div className="contact-orbit"></div><p>Ideas<br/>Collaborations<br/>Opportunities<br/>Let’s Talk!</p></div>
        </Reveal>
      </section>
      
{resumeOpen && (
  <div
    className="resume-modal-overlay"
    onClick={() => setResumeOpen(false)}
  >
    <div
      className="resume-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      onClick={(event) => event.stopPropagation()}
    >
      <button
        type="button"
        className="resume-modal-close"
        onClick={() => setResumeOpen(false)}
        aria-label="Close resume options"
      >
        <X size={18} />
      </button>

      <span className="resume-modal-eyebrow">
        DOWNLOAD CV
      </span>

      <h2 id="resume-modal-title">Choose your resume</h2>

      <p className="resume-modal-description">
        Select the version that best fits your target job market.
      </p>

      <a
        className="resume-option"
        href="/Jerin_Davis_GCC.pdf"
        download="Jerin_Davis_GCC.pdf"
        onClick={() => setResumeOpen(false)}
      >
        <span className="resume-option-icon">
          <Download size={19} />
        </span>
        <span className="resume-option-copy">
          <strong>GCC Resume</strong>
          <small>For Oman and Gulf opportunities</small>
        </span>
        <span className="resume-option-arrow">↗</span>
      </a>

      <a
        className="resume-option"
        href="/Jerin_Davis_IN.pdf"
        download="Jerin_Davis_IN.pdf"
        onClick={() => setResumeOpen(false)}
      >
        <span className="resume-option-icon">
          <Download size={19} />
        </span>
        <span className="resume-option-copy">
          <strong>India Resume</strong>
          <small>For opportunities in India</small>
        </span>
        <span className="resume-option-arrow">↗</span>
      </a>

      <button
        type="button"
        className="resume-modal-cancel"
        onClick={() => setResumeOpen(false)}
      >
        Your future employer says hi. 👋
      </button>
    </div>
  </div>
)}

      <footer className="footer"><a className="brand" href="#home"><span className="brand-dot"/>Jerin</a><span>© {new Date().getFullYear()} Jerin Davis. Built with care.</span><a href="#home" className="back-top">Back to top ↑</a></footer>
    </main>
  );
}

export default App;