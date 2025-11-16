'use client'

import { motion } from 'framer-motion'

export default function Projects() {
  const projects = [
    {
      title: 'Automated Sales & Inventory System (Thesis)',
      description: [
        'Developed an automated system for sales tracking, inventory monitoring, and AI-driven product recommendations.',
        'Built backend with Flask and Supabase PostgreSQL, designed process flows, and conducted UAT.'
      ],
      color: 'from-yellow-600 to-amber-600',
      borderColor: 'border-yellow-500',
    },
    {
      title: 'C/C++ & Automation Projects',
      description: [
        'Built structured applications, full-stack modules (Flask + React), and automation scripts.',
        'Prepared technical documentation and workflow diagrams.'
      ],
      color: 'from-amber-600 to-orange-600',
      borderColor: 'border-amber-500',
    },
    {
      title: 'Process Documentation & Workflow Mapping (Capstone)',
      description: [
        'Analyzed existing processes, designed improved TO-BE workflows, and prepared stakeholder documentation.'
      ],
      color: 'from-orange-600 to-yellow-600',
      borderColor: 'border-orange-500',
    }
  ]

  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden backdrop-blur-[0.5px]">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        {/* Organized Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="relative group"
            >
              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
              
              <div className="relative bg-gradient-to-br dark:from-gray-800/95 dark:to-gray-900/95 from-white/95 to-gray-50/95 backdrop-blur-xl p-8 rounded-2xl border-2 dark:border-yellow-500/40 border-yellow-600/60 shadow-2xl h-full flex flex-col">
                {/* Corner accent */}
                <div className={`absolute top-4 right-4 w-16 h-16 bg-gradient-to-br ${project.color} opacity-20 rounded-full blur-xl`}></div>
                
                <h3 className={`text-xl font-bold mb-6 bg-gradient-to-r ${project.color.replace('600', '400')} bg-clip-text text-transparent relative z-10`}>
                  {project.title}
                </h3>
                
                <ul className="space-y-3 flex-grow relative z-10">
                  {project.description.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="dark:text-gray-200 text-gray-800 flex items-start gap-3 text-sm leading-relaxed"
                    >
                      <span className={`text-xl ${project.borderColor.replace('border-', 'text-').replace('-500', '-400')} mt-0 flex-shrink-0`}>◆</span>
                      <span className="flex-1">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
