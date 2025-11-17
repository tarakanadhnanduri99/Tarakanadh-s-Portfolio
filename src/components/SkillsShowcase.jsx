import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiCode, FiDatabase, FiCloud, FiCpu } from 'react-icons/fi'
import {
  SiPython, SiReact, SiFastapi, SiDjango, SiPostgresql, SiMongodb,
  SiTensorflow, SiOpenai, SiDocker, SiGit, SiJavascript,
  SiTypescript, SiTailwindcss, SiThreedotjs, SiLangchain, SiNodedotjs,
  SiAmazonaws
} from 'react-icons/si'
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi'

const SkillsShowcase = () => {
  const [viewMode, setViewMode] = useState('orbital') // 'orbital', 'badge', 'carousel'
  const [selectedSkill, setSelectedSkill] = useState(null)
  const [carouselIndex, setCarouselIndex] = useState(0)

  const skillCategories = {
    'AI & LLMs': {
      icon: FiCpu,
      skills: [
        { name: 'LLM Integration', icon: SiOpenai, level: 'Expert', example: 'Built RAG pipelines with OpenAI and LangChain', tools: ['OpenAI API', 'LangChain', 'LlamaIndex'], projects: ['RAG Summarizer', 'Jeeva Tech'] },
        { name: 'RAG', icon: SiLangchain, level: 'Expert', example: 'Designed vector search systems with FAISS and Chroma', tools: ['FAISS', 'Chroma', 'Pinecone'], projects: ['RAG Summarizer'] },
        { name: 'NLP', icon: SiTensorflow, level: 'Advanced', example: 'Developed financial chatbot with 90%+ intent accuracy', tools: ['TensorFlow', 'GloVe', 'NLTK'], projects: ['Financial Chatbot'] },
        { name: 'Vector Databases', icon: SiDatabase, level: 'Advanced', example: 'Implemented semantic search with embeddings', tools: ['FAISS', 'Chroma', 'Pinecone'], projects: ['RAG Summarizer'] },
      ],
    },
    'Backend & APIs': {
      icon: FiCode,
      skills: [
        { name: 'Python', icon: SiPython, level: 'Expert', example: 'Production Django and FastAPI applications', tools: ['Python 3.11+', 'FastAPI', 'Django'], projects: ['Jeeva Tech', 'Financial Chatbot'] },
        { name: 'FastAPI', icon: SiFastapi, level: 'Expert', example: 'Designed REST/GraphQL APIs with OpenAPI docs', tools: ['FastAPI', 'Pydantic', 'SQLAlchemy'], projects: ['Jeeva Tech', 'RAG Summarizer'] },
        { name: 'Django', icon: SiDjango, level: 'Advanced', example: 'Built full-stack features with Django REST', tools: ['Django', 'DRF', 'Celery'], projects: ['Financial Chatbot', 'Blogging Platform'] },
        { name: 'PostgreSQL', icon: SiPostgresql, level: 'Advanced', example: 'Optimized database queries and schemas', tools: ['PostgreSQL', 'SQLAlchemy'], projects: ['Jeeva Tech'] },
        { name: 'MongoDB', icon: SiMongodb, level: 'Proficient', example: 'NoSQL data modeling for scalable apps', tools: ['MongoDB', 'Mongoose'], projects: [] },
      ],
    },
    'Full-Stack Web': {
      icon: FiCode,
      skills: [
        { name: 'React', icon: SiReact, level: 'Expert', example: 'Built 3D interactive UIs with React + Three.js', tools: ['React', 'Hooks', 'Context API'], projects: ['Conveyor Belt Builder', 'Movie Explorer'] },
        { name: 'TypeScript', icon: SiTypescript, level: 'Advanced', example: 'Type-safe frontend development', tools: ['TypeScript', 'React'], projects: ['Conveyor Belt Builder'] },
        { name: 'JavaScript', icon: SiJavascript, level: 'Expert', example: 'Modern ES6+ web applications', tools: ['JavaScript', 'Node.js'], projects: ['Movie Explorer'] },
        { name: 'Three.js', icon: SiThreedotjs, level: 'Advanced', example: '3D model loading and scene interactions', tools: ['Three.js', 'WebGL', 'GLB'], projects: ['Conveyor Belt Builder'] },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 'Expert', example: 'Responsive, modern UI designs', tools: ['Tailwind CSS', 'PostCSS'], projects: ['This Portfolio'] },
      ],
    },
    'Data & Cloud': {
      icon: FiCloud,
      skills: [
        { name: 'Docker', icon: SiDocker, level: 'Advanced', example: 'Containerized applications for deployment', tools: ['Docker', 'Docker Compose'], projects: ['Jeeva Tech'] },
        { name: 'AWS', icon: SiAmazonaws, level: 'Proficient', example: 'Cloud infrastructure and services', tools: ['EC2', 'S3', 'Lambda'], projects: [] },
        { name: 'Git', icon: SiGit, level: 'Expert', example: 'Version control and CI/CD workflows', tools: ['Git', 'GitHub', 'GitLab'], projects: ['All Projects'] },
        { name: 'Node.js', icon: SiNodedotjs, level: 'Advanced', example: 'Server-side JavaScript applications', tools: ['Node.js', 'Express'], projects: [] },
      ],
    },
  }

  const allSkills = Object.values(skillCategories).flatMap(cat => cat.skills)

  // Orbital View
  const OrbitalView = () => {
    const centerX = 50
    const centerY = 50
    const radius = 35
    const categories = Object.entries(skillCategories)

    return (
      <div className="relative w-full h-[600px] md:h-[700px]">
        {/* Central Node */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          <div className="glass-card p-6 rounded-full text-center min-w-[200px]">
            <FiCpu className="mx-auto mb-2 text-3xl text-primary-teal" />
            <h3 className="font-heading font-semibold text-white">AI Full-Stack</h3>
            <p className="text-sm text-white/60">Expertise</p>
          </div>
        </motion.div>

        {/* Orbital Clusters */}
        {categories.map(([categoryName, category], catIndex) => {
          const angle = (catIndex * 360) / categories.length
          const radian = (angle * Math.PI) / 180
          const clusterX = centerX + radius * Math.cos(radian)
          const clusterY = centerY + radius * Math.sin(radian)

          return (
            <motion.div
              key={categoryName}
              className="absolute"
              style={{
                left: `${clusterX}%`,
                top: `${clusterY}%`,
                transform: 'translate(-50%, -50%)',
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: catIndex * 0.2, type: 'spring' }}
            >
              <div className="glass-card p-4 rounded-card min-w-[180px] text-center">
                <category.icon className="mx-auto mb-2 text-2xl text-primary-violet" />
                <h4 className="font-semibold text-white text-sm mb-3">{categoryName}</h4>
                <div className="space-y-2">
                  {category.skills.slice(0, 3).map((skill, skillIndex) => (
                    <motion.button
                      key={skillIndex}
                      onClick={() => setSelectedSkill(skill)}
                      className="w-full glass-card p-2 rounded-button text-xs hover:scale-105 transition-transform"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-white/90">{skill.name}</span>
                        <span className={`text-xs px-2 py-0.5 rounded ${
                          skill.level === 'Expert' ? 'bg-primary-teal/20 text-primary-teal' :
                          skill.level === 'Advanced' ? 'bg-primary-violet/20 text-primary-violet' :
                          'bg-accent/20 text-accent'
                        }`}>
                          {skill.level}
                        </span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    )
  }

  // Badge Grid View
  const BadgeGridView = () => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {allSkills.map((skill, index) => (
          <motion.button
            key={index}
            onClick={() => setSelectedSkill(skill)}
            className="glass-card p-4 rounded-card text-center hover:scale-102 transition-all group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(14, 165, 164, 0.3)' }}
          >
            <skill.icon className="mx-auto mb-3 text-3xl text-primary-teal group-hover:text-primary-violet transition-colors" />
            <h4 className="font-semibold text-white text-sm mb-2">{skill.name}</h4>
            <span className={`text-xs px-2 py-1 rounded ${
              skill.level === 'Expert' ? 'bg-primary-teal/20 text-primary-teal' :
              skill.level === 'Advanced' ? 'bg-primary-violet/20 text-primary-violet' :
              'bg-accent/20 text-accent'
            }`}>
              {skill.level}
            </span>
          </motion.button>
        ))}
      </div>
    )
  }

  // Carousel View
  const CarouselView = () => {
    const categories = Object.entries(skillCategories)

    const nextSlide = () => {
      setCarouselIndex((prev) => (prev + 1) % categories.length)
    }

    const prevSlide = () => {
      setCarouselIndex((prev) => (prev - 1 + categories.length) % categories.length)
    }

    return (
      <div className="relative">
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${carouselIndex * 100}%` }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {categories.map(([categoryName, category], index) => (
              <div key={index} className="min-w-full px-4">
                <div className="glass-card p-8 rounded-card">
                  <div className="flex items-center gap-3 mb-6">
                    <category.icon className="text-3xl text-primary-teal" />
                    <h3 className="text-2xl font-heading font-semibold text-white">{categoryName}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1.5 glass-card rounded-button text-sm text-white/90"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-gradient-primary/10 rounded-button border border-primary-teal/20">
                    <p className="text-white/80 text-sm">
                      <strong className="text-primary-teal">Highlight:</strong> {category.skills[0].example}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-3 glass-card rounded-full hover:bg-white/10 transition-colors"
          aria-label="Previous"
        >
          <FiChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-3 glass-card rounded-full hover:bg-white/10 transition-colors"
          aria-label="Next"
        >
          <FiChevronRight size={24} />
        </button>

        <div className="flex justify-center gap-2 mt-6">
          {categories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCarouselIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === carouselIndex ? 'bg-primary-teal w-8' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    )
  }

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className="gradient-text">Skills</span> Showcase
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
            Explore my expertise across AI, backend, frontend, and cloud technologies
          </p>

          {/* View Mode Toggle */}
          <div className="flex justify-center gap-2">
            {['orbital', 'badge', 'carousel'].map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={`px-4 py-2 rounded-button text-sm font-medium transition-all ${
                  viewMode === mode
                    ? 'bg-gradient-primary text-white'
                    : 'glass-card text-white/70 hover:text-white'
                }`}
              >
                {mode.charAt(0).toUpperCase() + mode.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="mt-12">
          <AnimatePresence mode="wait">
            {viewMode === 'orbital' && (
              <motion.div
                key="orbital"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <OrbitalView />
              </motion.div>
            )}
            {viewMode === 'badge' && (
              <motion.div
                key="badge"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <BadgeGridView />
              </motion.div>
            )}
            {viewMode === 'carousel' && (
              <motion.div
                key="carousel"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <CarouselView />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Skill Detail Panel */}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedSkill(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="glass-card p-8 rounded-card max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <selectedSkill.icon className="text-4xl text-primary-teal" />
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-white">{selectedSkill.name}</h3>
                      <span className={`inline-block mt-2 px-3 py-1 rounded ${
                        selectedSkill.level === 'Expert' ? 'bg-primary-teal/20 text-primary-teal' :
                        selectedSkill.level === 'Advanced' ? 'bg-primary-violet/20 text-primary-violet' :
                        'bg-accent/20 text-accent'
                      }`}>
                        {selectedSkill.level}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedSkill(null)}
                    className="p-2 hover:bg-white/10 rounded-button transition-colors"
                  >
                    <FiX size={24} />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-white/60 mb-2">Example</h4>
                    <p className="text-white/90">{selectedSkill.example}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-white/60 mb-2">Tools Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedSkill.tools.map((tool, i) => (
                        <span key={i} className="px-3 py-1 glass-card rounded-button text-sm text-white/80">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {selectedSkill.projects.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-white/60 mb-2">Related Projects</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedSkill.projects.map((project, i) => (
                          <span key={i} className="px-3 py-1 bg-gradient-primary/20 rounded-button text-sm text-primary-teal">
                            {project}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default SkillsShowcase

