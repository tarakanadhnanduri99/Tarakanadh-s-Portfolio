import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'

const Certifications = () => {
  const certifications = [
    {
      title: 'Data Science Using Python',
      issuer: 'SWAYAM (INI & AMU)',
      date: '2024',
      score: '72%',
      description: 'Comprehensive data science course covering Python, data analysis, machine learning, and statistical methods.',
      icon: FiAward,
      image: '/static/img/datascience.png',
    },
    {
      title: 'Cloud Computing',
      issuer: 'NPTEL (IIT Kharagpur)',
      date: '2024',
      score: 'Elite, 66%',
      description: 'Advanced cloud computing concepts including cloud architecture, services, and deployment strategies.',
      icon: FiAward,
      image: '/static/img/cloudcomputing.png',
    },
    {
      title: 'C, Python, Advanced Python',
      issuer: 'Motive Computer Education',
      date: '2023',
      description: 'Complete Python programming course from basics to advanced topics including OOP, data structures, and algorithms.',
      icon: FiAward,
      image: '/static/img/python.jpg',
    },
    {
      title: 'Full Stack Python',
      issuer: 'Nipuna Technologies',
      date: '2025',
      description: 'Full-stack web development with Python, Django, frontend technologies, and database integration.',
      icon: FiAward,
      image: '/static/img/python.jpg',
    },
    {
      title: 'Power BI',
      issuer: 'Tutedude',
      date: '2024',
      description: 'Business intelligence and data visualization using Power BI, DAX, and advanced analytics.',
      icon: FiAward,
      image: '/static/img/powerbi.png',
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
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <section id="certifications" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className="gradient-text">Certifications</span> & Learning
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Continuous learning and professional development in AI, cloud, and full-stack technologies
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card p-6 rounded-card hover:scale-105 transition-all duration-300 group"
              whileHover={{ y: -4 }}
            >
              <div className="relative h-48 mb-4 rounded-button overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="p-2 rounded-button bg-gradient-primary/20 backdrop-blur-sm inline-block">
                    <cert.icon className="text-xl text-primary-teal" />
                  </div>
                </div>
              </div>
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h3 className="text-lg font-heading font-semibold text-white mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-primary-violet font-medium">{cert.issuer}</p>
                </div>
                <span className="text-xs text-white/60 whitespace-nowrap ml-2">{cert.date}</span>
              </div>
              {cert.score && (
                <p className="text-xs text-primary-teal mb-2 font-medium">{cert.score}</p>
              )}
              <p className="text-white/70 text-sm">{cert.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications

