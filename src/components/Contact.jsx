import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiSend, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Netlify Forms integration
    const formDataToSend = new FormData()
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key])
    })

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataToSend).toString(),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/tarakanadhnanduri99', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/venkata-taraka-nadh-nanduri-39a069294/', label: 'LinkedIn' },
    { icon: FiInstagram, href: 'https://www.instagram.com/taraka_nadh_253/', label: 'Instagram' },
    { icon: FiMail, href: 'mailto:support@jeeva.tech', label: 'Email' },
  ]

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Let's collaborate on your next AI-powered project or discuss opportunities
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-heading font-semibold mb-6 text-white">
                Let's Connect
              </h3>
              <p className="text-white/70 mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:support@jeeva.tech"
                className="flex items-center gap-4 p-4 glass-card rounded-card hover:bg-white/10 transition-colors group"
              >
                <div className="p-3 rounded-button bg-gradient-primary/20 group-hover:bg-gradient-primary/30 transition-colors">
                  <FiMail className="text-xl text-primary-teal" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Email</p>
                  <p className="text-white font-medium">support@jeeva.tech</p>
                </div>
              </a>
            </div>

            <div>
              <p className="text-sm text-white/60 mb-4">Follow me on</p>
              <div className="flex gap-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 glass-card rounded-button hover:bg-white/10 transition-all hover:scale-110"
                    aria-label={label}
                  >
                    <Icon className="text-xl text-white" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="glass-card p-8 rounded-card space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-button bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-button bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white/80 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-button bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 transition-all"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-button bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-primary-teal focus:ring-2 focus:ring-primary-teal/20 transition-all resize-none"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-button bg-primary-teal/20 border border-primary-teal/30 text-primary-teal"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-button bg-red-500/20 border border-red-500/30 text-red-400"
                >
                  Something went wrong. Please try again or email me directly.
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <FiSend />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

