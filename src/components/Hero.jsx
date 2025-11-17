import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiArrowRight } from 'react-icons/fi'

const Hero = () => {
  const subtitles = [
    'Full Stack',
    'NLP',
    'LLMs',
    'RAG',
    'MLOps',
  ]

  const [currentSubtitle, setCurrentSubtitle] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubtitle((prev) => (prev + 1) % subtitles.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center section-padding pt-32">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight"
            >
              <span className="gradient-text">Taraka Nadh</span>
              <br />
              <span className="text-white">AI Full-Stack Engineer</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex items-center gap-3 text-xl md:text-2xl text-white/80"
            >
              <span>Building with</span>
              <div className="relative h-8 overflow-hidden">
                <motion.span
                  key={currentSubtitle}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 right-0 font-semibold gradient-text"
                >
                  {subtitles[currentSubtitle]}
                </motion.span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg text-white/70 max-w-xl"
            >
              Transforming complex problems into elegant, AI-driven solutions through full-stack engineering excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="/resume.pdf"
                download
                className="btn-primary inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload />
                Download CV
              </motion.a>
              <motion.button
                onClick={() => scrollToSection('projects')}
                className="btn-secondary inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Projects
                <FiArrowRight />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex justify-center items-center"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative"
            >
              {/* Gradient Halo */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-30 animate-glow" />
              
              {/* Avatar Container */}
              <div className="relative glass-card p-2 rounded-full">
                <img
                  src="/static/img/my-profile-img-v2.jpg"
                  alt="Taraka Nadh"
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-transparent bg-gradient-primary bg-clip-padding"
                />
              </div>

              {/* Floating Orbs */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 bg-gradient-primary rounded-full"
                  style={{
                    top: `${20 + i * 30}%`,
                    left: `${i % 2 === 0 ? -10 : 110}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

