'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

export default function TechnicalSkills() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

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

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category)
  }

  return (
    <section id="skills" className="py-20 px-6 relative backdrop-blur-[0.5px]">
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

        {/* Expandable Categories Layout */}
        <div className="space-y-4">
          {Object.entries(skillCategories).map(([category, data], index) => {
            const isExpanded = expandedCategory === category
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="w-full"
              >
                {/* Category Header Button */}
                <motion.button
                  onClick={() => toggleCategory(category)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative w-full px-6 py-5 bg-gradient-to-r dark:from-gray-800/90 dark:to-gray-900/90 from-white/90 to-gray-50/90 backdrop-blur-sm rounded-xl border-2 ${data.borderColor} shadow-xl hover:shadow-2xl transition-all duration-300 group flex items-center justify-between overflow-hidden`}
                >
                  {/* Category gradient overlay */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-r ${data.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}
                  ></div>
                  
                  <div className="relative z-10 flex items-center gap-4 flex-1">
                    <div className="text-4xl">{data.icon}</div>
                    <div className="text-left">
                      <h3 className="dark:text-yellow-300 text-yellow-700 font-bold text-lg mb-1">
                        {category}
                      </h3>
                      <p className="dark:text-gray-400 text-gray-600 text-sm">
                        {data.skills.length} skills
                      </p>
                    </div>
                  </div>

                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10"
                  >
                    {isExpanded ? (
                      <FiChevronUp className="dark:text-yellow-300 text-yellow-700 text-2xl" />
                    ) : (
                      <FiChevronDown className="dark:text-yellow-300 text-yellow-700 text-2xl" />
                    )}
                  </motion.div>

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

                {/* Expanded Skills Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 p-6 bg-gradient-to-br dark:from-gray-800/80 dark:to-gray-900/80 from-white/80 to-gray-50/80 backdrop-blur-sm rounded-xl border-2 dark:border-yellow-500/30 border-yellow-600/40">
                        <div className="grid grid-cols-1 min-[375px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                          {data.skills.map((skill, skillIndex) => (
                            <motion.div
                              key={skill}
                              initial={{ opacity: 0, scale: 0.8, y: 10 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              transition={{ delay: skillIndex * 0.05, duration: 0.3 }}
                              whileHover={{ scale: 1.05, y: -3 }}
                              className="px-4 py-3 bg-gradient-to-r dark:from-yellow-900/60 dark:to-amber-900/60 from-yellow-100/80 to-amber-100/80 rounded-lg border dark:border-yellow-600/40 border-yellow-500/60 shadow-md text-center"
                            >
                              <span className="dark:text-gray-200 text-gray-800 font-medium text-sm break-words">
                                {skill}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
