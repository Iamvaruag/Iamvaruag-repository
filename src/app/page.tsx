"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, ArrowRight, ArrowUpRight, BrainCircuit, Code2, Github, Linkedin, Mail, Menu, Sparkles, Terminal, X } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    number: "01", type: "AI / GENERATIVE AI", title: "AI Resume Analyzer",
    description: "An AI-powered tool that reviews a resume against job requirements, highlights skill gaps, generates an ATS-inspired score, and suggests practical improvements.",
    stack: ["Python", "Streamlit", "Gemini API", "PDF Processing"],
    href: "https://github.com/Iamvaruag/AI-Resume-Analyzer", label: "View source",
    visual: "resume",
  },
  {
    number: "02", type: "FULL STACK WEB APP", title: "Darshnika — The Temple Directory",
    description: "A directory experience designed to help people discover temples and find useful details such as timings, locations, history, and visitor information.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    href: "https://github.com/Iamvaruag/-Darshnika--The-Temple-Directory", label: "View source",
    visual: "temple",
  },
  {
    number: "03", type: "FULL STACK / GAMING", title: "Valor Arena",
    description: "An esports tournament platform concept with tournament management, player registration, admin workflows, and email OTP verification.",
    stack: ["Next.js", "TypeScript", "MongoDB", "Mongoose"],
    href: "https://github.com/iamvaruag", label: "Explore GitHub",
    visual: "arena",
  },
];

const skills = [
  { group: "AI & DATA", items: ["Python", "Generative AI", "LLM APIs", "Prompt Engineering", "Pandas", "NumPy", "Data Analysis"] },
  { group: "WEB DEVELOPMENT", items: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "Node.js", "REST APIs"] },
  { group: "DATABASE & TOOLS", items: ["MongoDB", "Mongoose", "Git", "GitHub", "Streamlit", "PDF Processing"] },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <main>
      <div className="grain" aria-hidden="true" />
      <nav className="nav wrap">
        <a className="brand" href="#home" aria-label="Gaurav home"><span className="brand-mark">G.</span><span>GAURAV<span className="brand-muted"> / DEVELOPER</span></span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X size={21}/> : <Menu size={21}/>}</button>
        <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <a href="#work" onClick={closeMenu}>Work</a><a href="#about" onClick={closeMenu}>About</a><a href="#skills" onClick={closeMenu}>Skills</a><a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-cta" href="mailto:gauravbhambale@gmail.com">Let’s talk <ArrowUpRight size={15}/></a>
        </div>
      </nav>

      <section className="hero wrap" id="home">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}>
          <div className="eyebrow"><span className="status-dot"/> AVAILABLE FOR OPPORTUNITIES <span className="eyebrow-line"/></div>
          <h1>Building at the<br/>intersection of <span className="gradient-text">AI</span> &<br/><span className="outline-text">the web.</span></h1>
          <p className="hero-desc">I’m Gaurav — an AI & Data Science graduate who builds useful products, from AI-powered tools to full-stack web experiences.</p>
          <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17}/></a><a className="button button-ghost" href="mailto:gauravbhambale@gmail.com">Get in touch <ArrowUpRight size={16}/></a></div>
          <div className="hero-socials"><a href="https://github.com/iamvaruag" target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a><a href="https://in.linkedin.com/in/gauravbhambalellmengineer" target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a><span className="social-divider"/><span>Based in India 🇮🇳</span></div>
        </motion.div>
        <motion.div className="hero-art" initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .12 }}>
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/>
          <div className="core-card"><div className="core-top"><span className="window-dots"><i/><i/><i/></span><span className="core-label">BUILD / LEARN / SHIP</span></div><div className="code-block"><p><span className="code-purple">const</span> <span className="code-blue">developer</span> = {'{'}</p><p className="indent"><span className="code-green">focus</span>: [</p><p className="indent2"><span className="code-yellow">"AI systems"</span>,</p><p className="indent2"><span className="code-yellow">"full-stack apps"</span>,</p><p className="indent2"><span className="code-yellow">"real problems"</span></p><p className="indent">],</p><p className="indent"><span className="code-green">mindset</span>: <span className="code-yellow">"always learning"</span></p><p>{'}'};</p><p className="code-comment">// turning ideas into working products ✦</p></div><div className="core-footer"><span><span className="status-dot"/> SYSTEM ONLINE</span><span>v.01.26</span></div></div>
          <div className="float-chip chip-ai"><BrainCircuit size={17}/><span>Applied AI</span></div><div className="float-chip chip-code"><Code2 size={17}/><span>Full Stack</span></div><div className="float-chip chip-spark"><Sparkles size={16}/></div>
          <span className="art-index">FIG. 01 — MY WORKSPACE</span>
        </motion.div>
        <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span className="scroll-line"/><span>01 / 04</span></div>
      </section>

      <section className="work-section section wrap" id="work">
        <div className="section-heading"><div><span className="section-kicker">SELECTED PROJECTS / 01</span><h2>Ideas, meet <span className="gradient-text">execution.</span></h2></div><p>A few projects where I’ve explored AI, product thinking, and full-stack development.</p></div>
        <div className="project-grid">{projects.map((project, i) => <motion.article className={`project-card project-${project.visual}`} key={project.number} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .5, delay: i * .08 }}>
          <div className="project-visual"><div className="visual-top"><span>{project.type}</span><span>{project.number}</span></div>{project.visual === "resume" ? <div className="resume-graphic"><div className="resume-sheet"><div className="sheet-head"><span/><span/></div><div className="sheet-line wide"/><div className="sheet-line"/><div className="sheet-line short"/><div className="sheet-rule"/><div className="sheet-line wide"/><div className="sheet-line"/><div className="score-badge"><strong>AI</strong><span>INSIGHTS</span></div></div><div className="scan-ring"/></div> : project.visual === "temple" ? <div className="temple-graphic"><div className="temple-sun"/><div className="temple-roof roof-a"/><div className="temple-roof roof-b"/><div className="temple-dome"/><div className="temple-body"><div className="temple-door"/></div><div className="temple-base"/></div> : <div className="arena-graphic"><div className="arena-ring ring-a"/><div className="arena-ring ring-b"/><div className="arena-cross">VA<span>✦</span></div><div className="arena-tag">TOURNAMENT<br/>CONTROL SYSTEM</div></div>}</div>
          <div className="project-content"><div className="project-title-row"><h3>{project.title}</h3><a className="round-link" href={project.href} target="_blank" rel="noreferrer" aria-label={project.label}><ArrowUpRight size={19}/></a></div><p>{project.description}</p><div className="tag-list">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div><a className="text-link" href={project.href} target="_blank" rel="noreferrer">{project.label} <ArrowRight size={15}/></a></div>
        </motion.article>)}</div>
        <div className="project-note"><Terminal size={16}/><span>More experiments and source code on GitHub.</span><a href="https://github.com/iamvaruag" target="_blank" rel="noreferrer">Browse repositories <ArrowUpRight size={14}/></a></div>
      </section>

      <section className="about-section section" id="about"><div className="wrap about-layout"><div className="about-left"><span className="section-kicker">A LITTLE ABOUT ME / 02</span><h2>Curious by nature.<br/><span className="gradient-text">Builder by choice.</span></h2><div className="about-stamp"><Sparkles size={19}/><span>ALWAYS IN<br/>PROGRESS</span></div></div><div className="about-right"><p className="about-lead">I like taking ideas from “what if?” to something people can actually use.</p><p>My background in Artificial Intelligence and Data Science lets me explore both sides of the stack: building web experiences and integrating AI to make them more useful. I’m focused on strengthening my engineering fundamentals, shipping projects, and learning through hands-on work.</p><p>I value clear thinking, practical solutions, and the process of improving a product one iteration at a time.</p><div className="about-facts"><div><span className="fact-number">01</span><span>AI-powered<br/>applications</span></div><div><span className="fact-number">02</span><span>Full-stack<br/>development</span></div><div><span className="fact-number">03</span><span>Continuous<br/>learning</span></div></div></div></div></section>

      <section className="skills-section section wrap" id="skills"><div className="section-heading"><div><span className="section-kicker">MY TOOLKIT / 03</span><h2>Tools I work <span className="gradient-text">with.</span></h2></div><p>A growing toolkit for turning product ideas into practical software.</p></div><div className="skills-grid">{skills.map((skill, i) => <div className="skill-card" key={skill.group}><div className="skill-card-top"><span>0{i+1}</span><span className="skill-icon">{i === 0 ? <BrainCircuit size={20}/> : i === 1 ? <Code2 size={20}/> : <Terminal size={20}/>}</span></div><h3>{skill.group}</h3><div className="skill-pills">{skill.items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div><p className="skills-footnote">Skills shown reflect tools used in projects and current learning. Always learning, always refining.</p></section>

      <section className="contact-section" id="contact"><div className="wrap contact-inner"><span className="section-kicker">HAVE A PROJECT IN MIND? / 04</span><h2>Let’s build something<br/><span className="gradient-text">that matters.</span></h2><p>Open to entry-level opportunities, internships, and collaborations in AI and software development.</p><a className="button button-primary contact-button" href="mailto:gauravbhambale@gmail.com">Start a conversation <ArrowUpRight size={17}/></a><div className="contact-orb orb-one"/><div className="contact-orb orb-two"/></div></section>
      <footer className="footer wrap"><a className="brand" href="#home"><span className="brand-mark">G.</span><span>GAURAV<span className="brand-muted"> / DEVELOPER</span></span></a><span>Designed with intent. Built to keep evolving.</span><div className="footer-links"><a href="https://github.com/iamvaruag" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17}/></a><a href="https://in.linkedin.com/in/gauravbhambalellmengineer" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17}/></a><a href="mailto:gauravbhambale@gmail.com" aria-label="Email"><Mail size={17}/></a></div><span className="copyright">© 2026 GAURAV</span></footer>
    </main>
  );
}
