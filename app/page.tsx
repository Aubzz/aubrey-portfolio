"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const projects = [
	{
		title: "FurScan",
		category: "AI / COMPUTER VISION / MOBILE",
		description:
			"An AI-powered mobile application designed to analyze images of common dog skin conditions and provide helpful information for pet owners.",
			technologies: [
			"Python",
			"YOLOv8",
			"React Native",
			"Expo",
			"MySQL",
			"Gemini API",
		],
		image: "/projects/furscan.png",
		github: "https://github.com/Aubzz/FurScan",
		demo: "https://furscan-frontend.onrender.com",
	},
	{
		title: "FitCheck",
		category: "AI / COMPUTER VISION",
		description:
			"A computer vision system that detects school uniform components and evaluates uniform compliance using an AI-powered object detection model.",
			technologies: [
			"YOLOv8",
			"Python",
			"Flask",
			"React",
			"Socket.IO",
			"Roboflow",
		],
		image: "/projects/fitcheck.png",
		github: "https://github.com/Aubzz/Real-time-University-Uniform-Compliance-Detection",
		demo: "#",
	},
	{
		title: "TUP Service Marketplace",
		category: "FULL-STACK WEB APPLICATION",
		description:
			"A service marketplace platform designed to connect students within the Technological University of the Philippines.",
			technologies: [
			"Node.js",
			"JavaScript",
			"MongoDB",
			"HTML",
			"CSS",
		],
		image: "/projects/tup.png",
		github: "https://github.com/Aubzz/TUP-Web-Based-Service-Marketplace-System",
		demo: "#",
	},
];

const skills = [
	"JavaScript",
	"TypeScript",
	"Java",
	"PHP",
	"Python",
	"SQL",
	"React",
	"Next.js",
	"Node.js",
	"React Native",
	"MySQL",
	"PostgreSQL",
	"MongoDB",
	"Git",
	"GitHub",
	"YOLOv8",
	"OpenCV",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    nodes.forEach((n) => observer.observe(n));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <div className="nav-container">
          <button
            className="logo"
            onClick={() => scrollToSection("home")}
          >
            <span>&lt;</span>AUBREY<span>/&gt;</span>
          </button>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <button onClick={() => scrollToSection("home")}>
              Home
            </button>

            <button onClick={() => scrollToSection("about")}>
              About
            </button>

            <button onClick={() => scrollToSection("projects")}>
              Projects
            </button>

            <button onClick={() => scrollToSection("experience")}>
              Experience
            </button>

            <button onClick={() => scrollToSection("contact")}>
              Contact
            </button>
          </div>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* ================= HERO ================= */}

	<section id="home" className="hero">
	<div className="hero-grid" />

	<div className="hero-glow glow-one" />
	<div className="hero-glow glow-two" />

	<div className="hero-layout">

		{/* LEFT SIDE */}
		<div className="hero-content">

		<p className="terminal-line">
			<span className="green">aubrey@portfolio</span>
			<span className="muted">:</span>
			<span className="blue">~</span>
			<span className="muted">$</span> who am i
		</p>

		<p className="hello">HELLO, I&apos;M</p>

		<h1>
			Aubrey
			<br />
			<span>Ragandan.</span>
		</h1>

		<div className="typing-text">
			Computer Science Graduate
			<span className="cursor">_</span>
		</div>

		<p className="hero-description">
			I build web, mobile, and AI-powered applications
			that turn ideas into practical digital solutions.
		</p>

		<div className="hero-buttons">
			<button
			className="primary-button"
			onClick={() => scrollToSection("projects")}
			>
			View My Projects →
			</button>

			<button
			className="secondary-button"
			onClick={() => scrollToSection("contact")}
			>
			Contact Me
			</button>
		</div>

		</div>

		{/* RIGHT SIDE — PHOTO */}
		<div className="hero-photo-wrapper">
		<div className="hero-photo-frame">

			<div className="photo-corner top-left" />
			<div className="photo-corner top-right" />
			<div className="photo-corner bottom-left" />
			<div className="photo-corner bottom-right" />

      <Image
		src="/profile/aubrey.png"
		alt="Aubrey Ragandan"
		className="hero-photo"
		width={500}
		height={500}
		priority
      />

		</div>

		<div className="photo-label">
			<span className="green">01</span>
			/ DEVELOPER
		</div>
		</div>

	</div>

	<div className="scroll-indicator">
		<span>SCROLL TO EXPLORE</span>
		<div>↓</div>
	</div>
	</section>
      {/* ================= ABOUT ================= */}

      <section id="about" className="section about-section">
        <div className="section-container">
          <div className="section-heading">
            <span>01.</span>
            <h2>ABOUT ME</h2>
            <div />
          </div>

          <div className="about-grid">
            <div>
              <p className="big-text">
                I&apos;m a Computer Science graduate from the{" "}
                <strong>
                  Technological University of the Philippines
                </strong>
                .
              </p>

              <p className="about-text">
                I&apos;m passionate about software development,
                artificial intelligence, computer vision, and
                building applications that solve real-world
                problems.
              </p>

              <p className="about-text">
                Throughout my academic projects and internship
                experience, I&apos;ve worked with frontend
                development, backend systems, databases, AI
                models, and mobile applications.
              </p>

              <p className="about-text">
                I&apos;m currently looking for opportunities where
                I can contribute to a development team while
                continuing to grow as a software professional.
              </p>
            </div>

            <div className="terminal-card">
              <div className="terminal-header">
                <span className="terminal-dot red-dot" />
                <span className="terminal-dot yellow-dot" />
                <span className="terminal-dot green-dot" />
                <span className="terminal-title">
                  aubrey.json
                </span>
              </div>

              <div className="terminal-body">
                <p>
                  <span className="purple">{"{"}</span>
                </p>

                <p>
                  &nbsp;&nbsp;
                  <span className="blue">&quot;name&quot;</span>:{" "}
                  <span className="green">
                    &quot;Aubrey Ragandan&quot;
                  </span>
                  ,
                </p>

                <p>
                  &nbsp;&nbsp;
                  <span className="blue">&quot;degree&quot;</span>:{" "}
                  <span className="green">
                    &quot;BS Computer Science&quot;
                  </span>
                  ,
                </p>

                <p>
                  &nbsp;&nbsp;
                  <span className="blue">&quot;school&quot;</span>:{" "}
                  <span className="green">
                    &quot;TUP Manila&quot;
                  </span>
                  ,
                </p>

                <p>
                  &nbsp;&nbsp;
                  <span className="blue">&quot;focus&quot;</span>: [
                </p>

                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="green">
                    &quot;Software Development&quot;
                  </span>
                  ,
                </p>

                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="green">
                    &quot;Artificial Intelligence&quot;
                  </span>
                  ,
                </p>

                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="green">
                    &quot;Computer Vision&quot;
                  </span>
                </p>

                <p>
                  &nbsp;&nbsp;],
                </p>

                <p>
                  &nbsp;&nbsp;
                  <span className="blue">&quot;status&quot;</span>:{" "}
                  <span className="green">
                    &quot;Open to opportunities&quot;
                  </span>
                </p>

                <p>
                  <span className="purple">{"}"}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Skills */}

          <div className="skills-container">
            <h3>TECHNOLOGIES I WORK WITH</h3>

            <div className="skills-grid">
              {skills.map((skill) => (
                <div className="skill" key={skill}>
                  <span>▹</span>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}

      <section id="projects" className="section projects-section">
        <div className="section-container">
          <div className="section-heading">
            <span>02.</span>
            <h2>FEATURED PROJECTS</h2>
            <div />
          </div>

          <p className="section-intro">
            Here are some of the projects I&apos;ve worked on
            throughout my academic journey and development
            experience.
          </p>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-image">
                  <Image src={project.image} alt={project.title} width={800} height={600} />

                  <div className="project-number">
                    0{index + 1}
                  </div>
                </div>

                <div className="project-content">
                  <p className="project-category">
                    {project.category}
                  </p>

                  <h3>{project.title}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="technology-list">
                    {project.technologies.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a href={project.github}>GitHub ↗</a>
                    <a href={project.demo}>Live Demo ↗</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}

        <section id="experience" className="section experience-section">
        <div className="section-container">
          <div className="section-heading reveal">
            <span>03.</span>
            <h2>EXPERIENCE</h2>
            <div />
          </div>

          {/* 1EXPORT */}

          <div className="experience-card reveal reveal-left">
            <div className="experience-date">
              JAN 2026 — APR 2026
            </div>

            <div className="experience-content">
              <h3>Front-End Software Engineer Intern</h3>

              <h4>1Export / Zendease</h4>

              <p>
                Worked as a frontend software engineering
                intern, contributing to internal dashboards
                and web applications while collaborating with
                developers and product teams.
              </p>

              <ul>
                <li>
                  Developed and improved frontend components
                  and pages.
                </li>

                <li>
                  Worked with Next.js, TypeScript, Tailwind CSS,
                  and reusable UI components.
                </li>

                <li>
                  Contributed to UI/UX improvements and
                  frontend implementation based on designs.
                </li>

                <li>
                  Participated in Agile workflows, sprint
                  planning, reviews, and retrospectives.
                </li>

                <li>
                  Collaborated with developers, product
                  managers, and other team members.
                </li>
              </ul>

              <div className="technology-list">
                <span>Next.js</span>
                <span>TypeScript</span>
                <span>React</span>
                <span>Tailwind CSS</span>
                <span>Git</span>
              </div>
            </div>
          </div>

          {/* SANDMAN */}

          <div className="experience-card reveal reveal-right">
            <div className="experience-date">
              JUL 2025 — SEP 2025
            </div>

            <div className="experience-content">
              <h3>Software Developer Intern</h3>

              <h4>Sandman Software Systems Inc.</h4>

              <p>
                Worked as a software developer intern,
                assisting with application development,
                debugging, database-related tasks, and
                system maintenance.
              </p>

              <ul>
                <li>
                  Worked with PHP and CodeIgniter for web
                  application development.
                </li>

                <li>
                  Worked with MySQL and MSSQL databases.
                </li>

                <li>
                  Assisted with system migration and
                  debugging tasks.
                </li>

                <li>
                  Investigated and resolved application
                  issues during development.
                </li>

                <li>
                  Gained practical experience working within
                  a professional software development
                  environment.
                </li>
              </ul>

              <div className="technology-list">
                <span>PHP</span>
                <span>CodeIgniter</span>
                <span>MySQL</span>
                <span>MSSQL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}

      <section id="contact" className="section contact-section">
        <div className="section-container contact-container">
          <p className="contact-number">04. WHAT&apos;S NEXT?</p>

          <h2>LET&apos;S BUILD<br />SOMETHING.</h2>

          <p>
            I&apos;m currently open to opportunities in software
            development, QA, AI, and related technology roles.
          </p>

          <a
            className="primary-button contact-button"
            href="mailto:ragandanaubrey@gmail.com"
          >
            Say Hello →
          </a>

          <div className="social-links">
            <a
              href="https://github.com/Aubzz"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/aubrey-ragandan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:ragandanaubrey@gmail.com">
              Email
            </a>
          </div>

          <footer>
            <p>Designed & Built by Aubrey Ragandan</p>
            <p>© 2026 Aubrey Ragandan</p>
          </footer>
        </div>
      </section>
    </main>
  );
}