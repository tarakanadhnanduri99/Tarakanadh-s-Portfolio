import { motion } from 'framer-motion'
import { FiBriefcase, FiGraduationCap } from 'react-icons/fi'

const About = () => {
  const experiences = [
    {
      type: 'internship',
      icon: FiBriefcase,
      company: 'Jeeva Tech — Empirical Life Sciences',
      role: 'AI Full Stack Intern',
      period: '2024',
      description: 'Digital Health Platform | Telehealth & AI Medical Insights',
      points: [
        'Built full-stack features using Python, FastAPI, React, and integrated LLM/RAG modules for summarizing medical reports and generating insights',
        'Developed APIs, dashboards, and automation workflows for telehealth, e-prescriptions, and patient health record analysis',
        'Improved data pipelines, vector search, and backend logic to support scalable healthcare AI applications',
      ],
    },
    {
      type: 'internship',
      icon: FiBriefcase,
      company: 'Conveyor Belt Builder — UnoTeams',
      role: 'AI Full Stack Intern',
      period: '2024',
      description: '3D Interactive Web Application | Industrial Design Tool',
      points: [
        'Developed the entire 3D UI using React + Three.js with smooth GLB model loading and scene interactions',
        'Implemented STEP → GLB conversion workflows and optimized 3D rendering performance for complex models',
        'Enhanced user experience with camera controls, lighting, and interactive design features',
      ],
    },
    {
      type: 'internship',
      icon: FiBriefcase,
      company: 'NextHub Technologies',
      role: 'AI/ML Intern',
      period: 'Dec 2024 – Apr 2025',
      description: 'Financial Services | NLP Chatbot Development',
      points: [
        'Developed an NLP-based financial chatbot with Django, TensorFlow, and GloVe embeddings',
        'Delivered 90%+ intent accuracy and integrated real-time chat with secure data handling',
      ],
    },
  ]

  const education = [
    {
      icon: FiGraduationCap,
      degree: 'Bachelor of Technology in Artificial Intelligence and Machine Learning',
      institution: 'NRI Institute of Technology, Visadala, Andhra Pradesh',
      period: '2021 – 2025',
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className="gradient-text">About</span> Me
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            I'm an AI Full-Stack Developer specializing in building end-to-end intelligent applications that bridge machine learning, modern web technologies, and scalable infrastructure.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Experience Timeline */}
          <div>
            <h3 className="text-2xl font-heading font-semibold mb-6 flex items-center gap-2">
              <FiBriefcase className="text-primary-teal" />
              Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass-card p-6 relative pl-12"
                >
                  <div className="absolute left-6 top-8 bottom-0 w-0.5 bg-gradient-primary" />
                  <div className="absolute left-4 top-6 w-4 h-4 rounded-full bg-gradient-primary" />
                  
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                    <div>
                      <h4 className="text-xl font-semibold text-white">{exp.role}</h4>
                      <p className="text-primary-teal font-medium">{exp.company}</p>
                      <p className="text-sm text-white/60 mt-1">{exp.description}</p>
                    </div>
                    <span className="text-sm text-white/60 whitespace-nowrap">{exp.period}</span>
                  </div>
                  
                  <ul className="space-y-2 mt-4">
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-white/80 flex items-start gap-2">
                        <span className="text-primary-violet mt-1.5">▸</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-heading font-semibold mb-6 flex items-center gap-2">
              <FiGraduationCap className="text-primary-violet" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass-card p-6"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                      <p className="text-primary-violet font-medium mt-1">{edu.institution}</p>
                    </div>
                    <span className="text-sm text-white/60 whitespace-nowrap">{edu.period}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

