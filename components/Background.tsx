'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

export default function Background() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const backgroundPoints = [
    {
      title: 'Motivated BSIT – Business Analytics Student',
      description: 'Currently pursuing a Bachelor of Science in Information Technology with a focus on Business Analytics, demonstrating strong analytical and technical capabilities.',
      icon: '🎓',
      highlight: ['BSIT', 'Business Analytics', 'analytical', 'technical']
    },
    {
      title: 'Automation & Business Analysis Experience',
      description: 'Experienced in automation, business analysis, and data-driven projects. Skilled in process mapping, Python automation, and User Acceptance Testing (UAT).',
      icon: '⚙️',
      highlight: ['automation', 'business analysis', 'Python', 'process mapping', 'UAT']
    },
    {
      title: 'Proven Leadership & Project Management',
      description: 'Demonstrated leadership in academic projects and capstone development. Proven ability to coordinate teams and deliver successful project outcomes.',
      icon: '👥',
      highlight: ['leadership', 'capstone', 'teams', 'projects']
    },
    {
      title: 'Committed to Onsite Work',
      description: 'Fully willing and committed to work onsite, ready to contribute to team success with dedication and professionalism.',
      icon: '💼',
      highlight: ['onsite', 'committed', 'professional']
    }
  ]

  const toggleSection = (title: string) => {
    setExpandedSection(expandedSection === title ? null : title)
  }

  const highlightText = (text: string, highlights: string[]) => {
    const parts = text.split(new RegExp(`(${highlights.join('|')})`, 'gi'))
    return parts.map((part, index) => {
      const isHighlight = highlights.some(h => part.toLowerCase() === h.toLowerCase())
      return isHighlight ? (
        <motion.span
          key={index}
          className="font-semibold dark:text-yellow-300 text-yellow-700 relative inline-block"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <span className="relative z-10">{part}</span>
          <motion.span
            className="absolute inset-0 bg-yellow-400/20 rounded px-1 -z-0"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.2 }}
            style={{ originX: 0 }}
          />
        </motion.span>
      ) : (
        <span key={index}>{part}</span>
      )
    })
  }

  return (
    <section id="background" className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Background
        </motion.h2>

        {/* Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {backgroundPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group cursor-pointer"
              onClick={() => toggleSection(point.title)}
            >
              <div className="bg-gradient-to-br dark:from-gray-800/95 dark:to-gray-900/95 from-white/95 to-gray-50/95 backdrop-blur-xl rounded-2xl border-2 dark:border-yellow-500/40 border-yellow-600/60 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400"></div>
                
                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-amber-400/10 to-orange-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    backgroundPosition: ['0%', '100%', '0%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />

                <div className="relative z-10 p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <motion.div
                      className="text-4xl flex-shrink-0"
                      animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                        delay: index * 0.5
                      }}
                    >
                      {point.icon}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold dark:text-yellow-300 text-yellow-700 mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                        {point.title}
                      </h3>
                      <motion.p
                        className="dark:text-gray-300 text-gray-700 text-sm leading-relaxed"
                        initial={false}
                        animate={{
                          maxHeight: expandedSection === point.title ? '500px' : '60px',
                          opacity: expandedSection === point.title ? 1 : 0.8
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {highlightText(point.description, point.highlight)}
                      </motion.p>
                    </div>
                    <motion.div
                      animate={{
                        rotate: expandedSection === point.title ? 180 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 dark:text-yellow-400 text-yellow-600"
                    >
                      {expandedSection === point.title ? (
                        <FiChevronUp className="text-xl" />
                      ) : (
                        <FiChevronDown className="text-xl" />
                      )}
                    </motion.div>
                  </div>

                  {/* Expandable content */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedSection === point.title ? 'auto' : 0,
                      opacity: expandedSection === point.title ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    {expandedSection === point.title && (
                      <div className="pt-4 border-t dark:border-gray-700 border-gray-200 mt-4">
                        <div className="flex flex-wrap gap-2">
                          {point.highlight.map((term, termIndex) => (
                            <motion.span
                              key={termIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: termIndex * 0.1 }}
                              whileHover={{ scale: 1.1 }}
                              className="px-3 py-1 bg-gradient-to-r dark:from-yellow-900/60 dark:to-amber-900/60 from-yellow-100/80 to-amber-100/80 rounded-full border dark:border-yellow-600/40 border-yellow-500/50 text-xs dark:text-yellow-300 text-yellow-700 font-medium"
                            >
                              {term}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Bottom accent on hover */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

