import React, { useState, useEffect } from 'react';

const PortfolioPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['hero', 'projects', 'experience', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const projects = [
    {
      id: 1,
      title: 'Jeeva Tech',
      tagline: 'Digital Health Platform',
      description: 'Built a comprehensive digital health platform featuring real-time telehealth capabilities, patient monitoring dashboards, and AI-driven medical data analysis. Developed full-stack features using Python, FastAPI, and React, integrating LLM/RAG modules for automated medical report summarization.',
      tech: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'LangChain', 'OpenAI API'],
      impact: 'Enabled healthcare providers to process and analyze patient data 10x faster through automated AI summarization.',
      thumbnail: '/images/jeeva-tech-thumb.jpg'
    },
    {
      id: 2,
      title: 'Conveyor Belt Builder',
      tagline: '3D Interactive Web App',
      description: 'Developed a sophisticated 3D interactive web application allowing engineers to visually design and customize conveyor belt systems in real-time. Built the entire 3D UI using React and Three.js, implementing smooth GLB model loading and optimized rendering for complex industrial models.',
      tech: ['React', 'Three.js', 'WebGL', 'TypeScript', 'Tailwind CSS'],
      impact: 'Reduced design iteration time by 60% through visual 3D modeling interface.',
      thumbnail: '/images/conveyor-builder-thumb.jpg'
    },
    {
      id: 3,
      title: 'RAG Summarizer',
      tagline: 'Document Intelligence System',
      description: 'Built an AI-powered system for summarizing private company documents securely using Retrieval-Augmented Generation (RAG). Implemented LangChain pipelines with embeddings and vector databases (FAISS/Chroma) for context-aware retrieval and semantic search capabilities.',
      tech: ['Python', 'LangChain', 'OpenAI API', 'FAISS', 'Chroma', 'FastAPI'],
      impact: 'Automated document analysis workflow, processing 1000+ pages in minutes with 95% accuracy.',
      thumbnail: '/images/rag-summarizer-thumb.jpg'
    }
  ];

  const experiences = [
    {
      company: 'Jeeva Tech — Empirical Life Sciences',
      role: 'AI Full Stack Intern',
      period: '2024',
      description: 'Digital Health Platform | Telehealth & AI Medical Insights',
      points: [
        'Built full-stack features using Python, FastAPI, React, and integrated LLM/RAG modules for summarizing medical reports and generating insights',
        'Developed APIs, dashboards, and automation workflows for telehealth, e-prescriptions, and patient health record analysis',
        'Improved data pipelines, vector search, and backend logic to support scalable healthcare AI applications'
      ]
    },
    {
      company: 'Conveyor Belt Builder — UnoTeams',
      role: 'AI Full Stack Intern',
      period: '2024',
      description: '3D Interactive Web Application | Industrial Design Tool',
      points: [
        'Developed the entire 3D UI using React + Three.js with smooth GLB model loading and scene interactions',
        'Implemented STEP → GLB conversion workflows and optimized 3D rendering performance for complex models',
        'Enhanced user experience with camera controls, lighting, and interactive design features'
      ]
    },
    {
      company: 'NextHub Technologies',
      role: 'AI/ML Intern',
      period: 'Dec 2024 – Apr 2025',
      description: 'Financial Services | NLP Chatbot Development',
      points: [
        'Developed an NLP-based financial chatbot with Django, TensorFlow, and GloVe embeddings',
        'Delivered 90%+ intent accuracy and integrated real-time chat with secure data handling'
      ]
    }
  ];

  const skills = {
    'AI/ML': ['Large Language Models (LLM)', 'RAG', 'Vector Databases', 'LangChain', 'NLP', 'Model Fine-tuning'],
    'Backend': ['Python', 'FastAPI', 'Django', 'RESTful APIs', 'PostgreSQL', 'MongoDB'],
    'Frontend': ['React', 'Next.js', 'TypeScript', 'Three.js', 'Tailwind CSS', 'State Management'],
    'DevOps/Cloud': ['Docker', 'CI/CD', 'AWS', 'Azure', 'Serverless', 'Kubernetes'],
    'Tools': ['Git', 'VS Code', 'Postman', 'Figma', 'Linux', 'Bash']
  };

  return (
    <div className="min-h-screen bg-[#070B14] text-white">
      {/* Navigation Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#070B14]/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* NTN Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00A3FF] to-[#7C3AED] flex items-center justify-center font-bold text-lg">
                NTN
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-[#00A3FF] to-[#7C3AED] bg-clip-text text-transparent">
                Taraka Nadh
              </span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {['Projects', 'Experience', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-[#00A3FF] ${
                    activeSection === item.toLowerCase() ? 'text-[#00A3FF]' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-300 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#070B14] via-[#0F1624] to-[#070B14]"></div>
        <div className="absolute inset-0 bg-[url('/images/hero-banner.jpg')] bg-cover bg-center opacity-10"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#00A3FF] via-[#7C3AED] to-[#00A3FF] bg-clip-text text-transparent animate-gradient">
              Taraka Nadh
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-2">AI Full-Stack Developer</p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Transforming complex problems into elegant, AI-driven solutions through full-stack engineering excellence.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-[#00A3FF] to-[#7C3AED] rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg shadow-[#00A3FF]/30"
            >
              View Projects
            </button>
            <button
              onClick={() => window.open('/resume.pdf', '_blank')}
              className="px-8 py-3 border-2 border-[#00A3FF] rounded-lg font-semibold hover:bg-[#00A3FF]/10 transition-colors"
            >
              Download Resume
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-[#00A3FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-[#00A3FF] to-[#7C3AED] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Building intelligent systems that combine AI capabilities with modern web technologies
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-[#0F1624]/60 backdrop-blur-sm rounded-xl p-6 border border-[#00A3FF]/20 hover:border-[#7C3AED]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#00A3FF]/20"
              >
                {/* Thumbnail */}
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-[#00A3FF]/20 to-[#7C3AED]/20">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#00A3FF] to-[#7C3AED] rounded-full text-xs font-semibold">
                      AI Full-Stack
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h4 className="text-lg font-semibold text-gray-300 mb-2">{project.tagline}</h4>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-[#00A3FF]/10 border border-[#00A3FF]/30 rounded text-xs text-[#00A3FF]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Impact */}
                <p className="text-xs text-gray-500 mb-4 italic">{project.impact}</p>

                {/* View Button */}
                <button className="w-full py-2 border border-[#00A3FF] rounded-lg text-[#00A3FF] hover:bg-[#00A3FF]/10 transition-colors text-sm font-medium">
                  View Project
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0F1624]/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-[#00A3FF] to-[#7C3AED] bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-center text-gray-400 mb-12">Building production-ready AI applications</p>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00A3FF] to-[#7C3AED] transform md:-translate-x-1/2"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:pl-0' : 'md:pl-1/2 md:pr-0'
                } pl-16 md:pl-0`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-gradient-to-br from-[#00A3FF] to-[#7C3AED] rounded-full transform -translate-x-1/2 border-4 border-[#070B14] z-10"></div>

                {/* Content Card */}
                <div className="bg-[#0F1624]/60 backdrop-blur-sm rounded-xl p-6 border border-[#00A3FF]/20 hover:border-[#7C3AED]/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <span className="text-sm text-[#00A3FF]">{exp.period}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-300 mb-1">{exp.company}</h4>
                  <p className="text-sm text-gray-400 mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-sm text-gray-400 flex items-start">
                        <span className="text-[#00A3FF] mr-2">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-[#00A3FF] to-[#7C3AED] bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-center text-gray-400 mb-12">Technologies and tools I work with</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="bg-[#0F1624]/60 backdrop-blur-sm rounded-xl p-6 border border-[#00A3FF]/20 hover:border-[#7C3AED]/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-4 text-[#00A3FF]">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-[#00A3FF]/10 border border-[#00A3FF]/30 rounded-lg text-sm text-gray-300 hover:bg-[#00A3FF]/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0F1624]/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-[#00A3FF] to-[#7C3AED] bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-center text-gray-400 mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00A3FF] to-[#7C3AED] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:tarakanadh99@gmail.com" className="text-[#00A3FF] hover:underline">
                    tarakanadh99@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#00A3FF] to-[#7C3AED] rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a href="tel:+919949193254" className="text-[#00A3FF] hover:underline">
                    +91 9949193254
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 pt-4">
                <a
                  href="https://www.linkedin.com/in/venkata-taraka-nadh-nanduri-39a069294/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#00A3FF]/10 border border-[#00A3FF]/30 rounded-lg flex items-center justify-center hover:bg-[#00A3FF]/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://github.com/tarakanadhnanduri99"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#00A3FF]/10 border border-[#00A3FF]/30 rounded-lg flex items-center justify-center hover:bg-[#00A3FF]/20 transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="contact" />
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-[#0F1624]/60 border border-[#00A3FF]/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00A3FF] focus:ring-2 focus:ring-[#00A3FF]/20"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-[#0F1624]/60 border border-[#00A3FF]/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00A3FF] focus:ring-2 focus:ring-[#00A3FF]/20"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-[#0F1624]/60 border border-[#00A3FF]/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00A3FF] focus:ring-2 focus:ring-[#00A3FF]/20 resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-gradient-to-r from-[#00A3FF] to-[#7C3AED] rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg shadow-[#00A3FF]/30"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-[#00A3FF]/20">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00A3FF] to-[#7C3AED] flex items-center justify-center font-bold text-sm">
              NTN
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-[#00A3FF] to-[#7C3AED] bg-clip-text text-transparent">
              Taraka Nadh
            </span>
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Taraka Nadh. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioPage;

