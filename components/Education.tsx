'use client'

import { motion } from 'framer-motion'

export default function Education() {
  const courses = [
    'Business Process Management',
    'Systems Analysis & Design',
    'Data Analysis',
    'Database Systems',
    'Automation & Scripting',
    'Software Engineering'
  ]

  return (
    <section id="education" className="py-20 px-6 relative backdrop-blur-[0.5px]">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>

        {/* Professional Timeline Layout */}
        <div className="relative">
          {/* Main Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative mb-12"
          >
            <div className="bg-gradient-to-br dark:from-gray-800/95 dark:to-gray-900/95 from-white/95 to-gray-50/95 backdrop-blur-xl rounded-2xl border-2 dark:border-yellow-500/40 border-yellow-600/60 shadow-2xl p-8 md:p-10 overflow-hidden">
              {/* Decorative top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400"></div>
              
              <div className="relative z-10">
                {/* University Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 pb-6 border-b dark:border-gray-700 border-gray-200">
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold dark:text-yellow-300 text-yellow-700 mb-2">
                      Batangas State University
                    </h3>
                    <p className="dark:text-gray-400 text-gray-600 text-sm md:text-base mb-1">
                      Lipa City, Batangas
                    </p>
                    <div className="inline-block mt-2 px-4 py-1.5 bg-gradient-to-r dark:from-yellow-600/40 dark:to-amber-600/40 from-yellow-500/30 to-amber-500/30 rounded-full border dark:border-yellow-500/50 border-yellow-600/60">
                      <span className="dark:text-yellow-300 text-yellow-700 font-semibold text-xs md:text-sm">Dean's Lister (1st–3rd Year)</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 md:mt-0 md:text-right">
                    <p className="text-xl md:text-2xl font-semibold dark:text-gray-200 text-gray-800 mb-1">
                      BSIT – Business Analytics Track
                    </p>
                    <p className="dark:text-amber-400 text-amber-600 font-medium text-sm md:text-base">
                      4th Year Student
                    </p>
                    <p className="dark:text-gray-400 text-gray-600 text-sm mt-2">
                      Expected Graduation: August 2026
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="dark:text-gray-300 text-gray-700 leading-relaxed text-sm md:text-base mb-8">
                  As part of my course, I study the design and management of information systems, data analysis, workflow automation, business process optimization, project integrations (SMS, email, hardware), and development of machine learning models for predictive analytics and decision-making.
                </p>

                {/* Relevant Coursework Section */}
                <div>
                  <h4 className="text-lg md:text-xl font-bold dark:text-amber-300 text-amber-700 mb-4">
                    Relevant Coursework
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {courses.map((course, index) => (
                      <motion.div
                        key={course}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-4 py-2.5 bg-gradient-to-r dark:from-yellow-900/60 dark:to-amber-900/60 from-yellow-100/80 to-amber-100/80 rounded-lg border dark:border-yellow-600/40 border-yellow-500/50 shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        <span className="dark:text-gray-200 text-gray-800 font-medium text-xs md:text-sm text-center block">{course}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom decorative accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 opacity-50"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
