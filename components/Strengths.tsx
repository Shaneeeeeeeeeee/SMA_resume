'use client'

import { motion } from 'framer-motion'

export default function Strengths() {
  const strengths = [
    'Analytical thinker',
    'Adaptable',
    'Detail-oriented',
    'Effective communicator',
    'Passionate about automation'
  ]

  return (
    <section id="strengths" className="py-20 px-6 relative overflow-hidden backdrop-blur-[0.5px]">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Strengths
        </motion.h2>

        {/* Organized Grid Layout */}
        <div className="flex flex-wrap justify-center gap-6">
          {strengths.map((strength, index) => (
            <motion.div
              key={strength}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
              whileHover={{ 
                scale: 1.15, 
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3 }
              }}
              className="relative px-8 py-4 bg-gradient-to-r dark:from-amber-600/80 dark:to-orange-600/80 from-amber-500/80 to-orange-500/80 backdrop-blur-sm rounded-full border-2 dark:border-amber-400/60 border-amber-500/70 shadow-xl"
            >
              <span className="relative z-10 dark:text-gray-100 text-gray-900 font-bold text-lg whitespace-nowrap block">
                {strength}
              </span>
              
              {/* Floating animation */}
              <motion.div
                className="absolute inset-0 rounded-full bg-amber-400/30 dark:bg-amber-400/20 blur-xl -z-10"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
