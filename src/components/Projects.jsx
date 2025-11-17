import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const Projects = () => {
  const projects = [
    {
      title: 'Jeeva Tech',
      tagline: 'Digital Health Platform',
      description: 'Built a comprehensive digital health platform featuring real-time telehealth capabilities, patient monitoring dashboards, and AI-driven medical data analysis. Developed full-stack features using Python, FastAPI, and React, integrating LLM/RAG modules for automated medical report summarization.',
      tech: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'LangChain', 'OpenAI API'],
      impact: 'Enabled healthcare providers to process and analyze patient data 10x faster through automated AI summarization.',
      github: 'https://github.com/tarakanadhnanduri99',
      demo: '#',
      thumbnail: '/static/img/portfolio/app-1.jpg',
    },
    {
      title: 'Conveyor Belt Builder',
      tagline: '3D Interactive Web App',
      description: 'Developed a sophisticated 3D interactive web application allowing engineers to visually design and customize conveyor belt systems in real-time. Built the entire 3D UI using React and Three.js, implementing smooth GLB model loading and optimized rendering for complex industrial models.',
      tech: ['React', 'Three.js', 'WebGL', 'TypeScript', 'Tailwind CSS'],
      impact: 'Reduced design iteration time by 60% through visual 3D modeling interface.',
      github: 'https://github.com/tarakanadhnanduri99',
      demo: '#',
      thumbnail: '/static/img/portfolio/app-2.jpg',
    },
    {
      title: 'RAG Summarizer',
      tagline: 'Document Intelligence System',
      description: 'Built an AI-powered system for summarizing private company documents securely using Retrieval-Augmented Generation (RAG). Implemented LangChain pipelines with embeddings and vector databases (FAISS/Chroma) for context-aware retrieval and semantic search capabilities.',
      tech: ['Python', 'LangChain', 'OpenAI API', 'FAISS', 'Chroma', 'FastAPI'],
      impact: 'Automated document analysis workflow, processing 1000+ pages in minutes with 95% accuracy.',
      github: 'https://github.com/tarakanadhnanduri99',
      demo: '#',
      thumbnail: '/static/img/portfolio/app-3.jpg',
    },
    {
      title: 'NLP Financial Chatbot',
      tagline: 'Customer Support Automation',
      description: 'Developed a Django-based chatbot using NLP and ML to automate customer support in the finance domain. Integrated intent recognition, expense tracking, and predictive analytics, handling real-time chat securely. Achieved 90%+ classification accuracy on user intents through TensorFlow models.',
      tech: ['Python', 'Django', 'TensorFlow', 'GloVe Embeddings', 'NLP', 'SQLite'],
      impact: 'Delivered 90%+ intent accuracy and integrated real-time chat with secure data handling.',
      github: 'https://github.com/tarakanadhnanduri99/NLP-Based-Chatbots-for-Customer-Support-in-Financial-Services',
      demo: '#',
      thumbnail: '/static/img/portfolio/product-1.jpg',
    },
    {
      title: 'House Price Prediction',
      tagline: 'ML Regression App',
      description: 'Developed a Flask app to predict Bengaluru house prices using regression models (R2: 0.82). User inputs like location, area, BHK return instant predictions with an intuitive web interface.',
      tech: ['Python', 'Flask', 'Scikit-learn', 'HTML', 'CSS', 'JavaScript'],
      impact: 'Accurate price predictions helping users make informed real estate decisions.',
      github: 'https://github.com/tarakanadhnanduri99/House-Price-Prediction',
      demo: '#',
      thumbnail: '/static/img/portfolio/product-2.jpg',
    },
    {
      title: 'Movie Explorer',
      tagline: 'React SPA with TMDB API',
      description: 'Built a React + Vite SPA integrating TMDB API for popular movies and search with loading/error states. Implemented Favorites using Context API with localStorage persistence and routing for Home/Favorites.',
      tech: ['React', 'Vite', 'JavaScript', 'TMDB API', 'Context API'],
      impact: 'Smooth user experience with real-time movie data and persistent favorites.',
      github: 'https://github.com/tarakanadhnanduri99',
      demo: '#',
      thumbnail: '/static/img/portfolio/product-3.jpg',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Showcasing innovative solutions combining AI, full-stack development, and modern web technologies
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card rounded-card overflow-hidden group hover:scale-105 transition-all duration-300"
              whileHover={{ y: -8 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = '/static/img/portfolio/app-1.jpg'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 glass-card rounded-button hover:bg-white/20 transition-colors"
                      aria-label="GitHub"
                    >
                      <FiGithub size={20} />
                    </a>
                  )}
                  {project.demo && project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 glass-card rounded-button hover:bg-white/20 transition-colors"
                      aria-label="Demo"
                    >
                      <FiExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <div className="mb-2">
                  <span className="text-xs text-primary-teal font-medium">{project.tagline}</span>
                </div>
                <h3 className="text-xl font-heading font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-white/70 text-sm mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-white/5 rounded-button text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-1 text-xs bg-white/5 rounded-button text-white/60">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs text-white/60">
                    <span className="text-primary-violet font-medium">Impact:</span> {project.impact}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

