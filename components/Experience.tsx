'use client'

import { motion } from 'framer-motion'

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 relative overflow-hidden backdrop-blur-[0.5px]">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        {/* Organized Timeline Layout */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 via-amber-500 to-yellow-500 transform -translate-x-1/2 hidden md:block"></div>

          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative"
          >
            {/* Center dot */}
            <div className="hidden md:block absolute left-1/2 w-6 h-6 bg-orange-400 rounded-full border-4 dark:border-gray-900 border-white transform -translate-x-1/2 z-20 shadow-lg top-0"></div>

            {/* Main Card */}
            <div className="bg-gradient-to-br dark:from-gray-800/95 dark:to-gray-900/95 from-white/95 to-gray-50/95 backdrop-blur-xl p-8 rounded-3xl border-2 dark:border-orange-500/40 border-orange-400/60 shadow-2xl relative overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-transparent rounded-bl-full"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  <h3 className="text-2xl font-bold dark:text-orange-300 text-orange-700">
                    Customer Service Representative
                  </h3>
                </div>
                <p className="dark:text-amber-300 text-amber-700 font-semibold mb-2 text-lg">Amazon</p>
                <p className="dark:text-gray-400 text-gray-600 mb-8">June 2025 – Aug 2025</p>
                
                {/* Bullet Points */}
                <div className="space-y-4 mt-6">
                  {[
                    'Handled work under pressure and received commendations from customers, earning company incentives.',
                    'Developed strong communication skills, interacting effectively with stressed or upset customers.',
                    'Coordinated with teams to improve workflow processes.'
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                      className="flex items-start gap-4 p-4 bg-gradient-to-r dark:from-gray-700/60 dark:to-gray-800/60 from-gray-50/80 to-white/80 rounded-xl border-l-4 border-amber-500 hover:border-orange-400 transition-all duration-300"
                    >
                      <span className="text-2xl text-orange-400 mt-0">▸</span>
                      <p className="dark:text-gray-200 text-gray-800 flex-1 text-sm leading-relaxed">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
