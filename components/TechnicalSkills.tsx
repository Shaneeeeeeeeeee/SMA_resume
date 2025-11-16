'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FiX } from 'react-icons/fi'

export default function TechnicalSkills() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const skillCategories = {
    'Programming Languages': {
      icon: '💻',
      color: 'from-yellow-500 to-amber-500',
      borderColor: 'border-yellow-400',
      skills: ['Python', 'C', 'C++', 'JavaScript (basic)', 'R (basic)', 'HTML/CSS']
    },
    'Web Development': {
      icon: '🌐',
      color: 'from-amber-500 to-orange-500',
      borderColor: 'border-amber-400',
      skills: ['React', 'Flask', 'REST APIs']
    },
    'Databases & Data': {
      icon: '🗄️',
      color: 'from-orange-500 to-yellow-500',
      borderColor: 'border-orange-400',
      skills: ['SQL (Supabase/PostgreSQL)', 'Data Visualization', 'Excel (Pivot Tables, Power Query)', 'Google Sheets']
    },
    'Automation & Tools': {
      icon: '⚙️',
      color: 'from-yellow-400 to-amber-600',
      borderColor: 'border-yellow-500',
      skills: ['Automation Anywhere', 'Trello', 'Figma']
    },
    'Business & Process': {
      icon: '📊',
      color: 'from-amber-600 to-orange-600',
      borderColor: 'border-amber-500',
      skills: ['Process Mapping', 'Workflow Documentation', 'UAT', 'Communication', 'Problem-Solving']
    }
  }

  const closeModal = () => setSelectedCategory(null)

  return (
    <section id="skills" className="py-20 px-6 relative overflow-hidden backdrop-blur-[0.5px]">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Technical Skills
        </motion.h2>

        {/* Simple Boxes Layout */}
        <div className="flex flex-wrap justify-center gap-6">
          {Object.entries(skillCategories).map(([category, data], index) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-full max-w-[250px] h-[140px] px-6 py-4 bg-gradient-to-r dark:from-gray-800/90 dark:to-gray-900/90 from-white/90 to-gray-50/90 backdrop-blur-sm rounded-xl border-2 dark:border-yellow-400/60 border-yellow-500/70 shadow-xl hover:shadow-2xl transition-all duration-300 group flex flex-col items-center justify-center"
            >
              {/* Category gradient overlay */}
              <div 
                className={`absolute inset-0 bg-gradient-to-r ${data.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}
              ></div>
              
              <div className="relative z-10 flex flex-col items-center justify-center gap-3 w-full h-full">
                <div className="text-4xl">{data.icon}</div>
                <div className="text-center">
                  <h3 className="dark:text-yellow-300 text-yellow-700 font-bold text-base mb-1">
                    {category}
                  </h3>
                  <p className="dark:text-gray-400 text-gray-600 text-sm">
                    {data.skills.length} skills
                  </p>
                </div>
              </div>

              {/* Pulse effect */}
              <motion.div
                className={`absolute inset-0 rounded-xl bg-gradient-to-r ${data.color} opacity-0 blur-xl -z-10`}
                animate={{
                  opacity: [0, 0.3, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.4
                }}
              />
            </motion.button>
          ))}
        </div>

        {/* Modal for Category Skills */}
        <AnimatePresence>
          {selectedCategory && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeModal}
                className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
              />
              
              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 50 }}
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto"
              >
                <div className="bg-gradient-to-br dark:from-gray-800/95 dark:to-gray-900/95 from-white/95 to-gray-50/95 backdrop-blur-xl rounded-3xl border-2 dark:border-yellow-500/50 border-yellow-600/70 shadow-2xl p-6 md:p-8 relative">
                  {/* Close button */}
                  <motion.button
                    onClick={closeModal}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute top-4 right-4 p-2 rounded-full bg-gradient-to-r dark:from-yellow-600/30 dark:to-amber-600/30 from-yellow-500/40 to-amber-500/40 border dark:border-yellow-500/50 border-yellow-600/60 hover:border-yellow-400 transition-all duration-300 z-10"
                  >
                    <FiX className="dark:text-yellow-300 text-yellow-700 text-xl" />
                  </motion.button>

                  {/* Modal Header */}
                  <div className="text-center mb-8">
                    <div className="text-5xl mb-4">
                      {skillCategories[selectedCategory as keyof typeof skillCategories].icon}
                    </div>
                    <h3 className="text-3xl font-bold dark:text-yellow-300 text-yellow-700 mb-2">
                      {selectedCategory}
                    </h3>
                    <p className="dark:text-gray-400 text-gray-600">
                      {skillCategories[selectedCategory as keyof typeof skillCategories].skills.length} Skills
                    </p>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {skillCategories[selectedCategory as keyof typeof skillCategories].skills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="px-4 py-3 bg-gradient-to-r dark:from-yellow-900/60 dark:to-amber-900/60 from-yellow-100/80 to-amber-100/80 rounded-lg border dark:border-yellow-600/40 border-yellow-500/60 shadow-md text-center"
                      >
                        <span className="dark:text-gray-200 text-gray-800 font-medium text-sm">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
