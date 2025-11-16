'use client'

import { motion } from 'framer-motion'

export default function Leadership() {
  const leadershipItems = [
    {
      title: 'Lead Project Coordinator',
      description: 'Multiple academic projects and capstone system',
      icon: '👑'
    },
    {
      title: 'High School Music Club Leader',
      description: 'Managing events and team coordination',
      icon: '🎵'
    }
  ]

  return (
    <section id="leadership" className="py-20 px-6 relative overflow-hidden backdrop-blur-[0.5px]">

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Leadership
        </motion.h2>

        {/* Horizontal Cards with Medallion Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leadershipItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8, type: "spring" }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="relative"
              style={{ perspective: '1000px' }}
            >
              {/* Medallion/Badge Design */}
              <div className="relative bg-gradient-to-br dark:from-yellow-900/80 dark:via-amber-900/70 dark:to-orange-900/80 from-yellow-100/80 via-amber-100/70 to-orange-100/80 backdrop-blur-xl p-10 rounded-full border-4 dark:border-yellow-400/50 border-yellow-500/60 shadow-2xl overflow-hidden">
                {/* Ribbon effect */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gradient-to-r from-yellow-600 to-amber-600" 
                     style={{ clipPath: 'polygon(0 0, 100% 0, 90% 100%, 50% 80%, 10% 100%)' }}></div>
                
                {/* Inner glow */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-yellow-500/20 to-amber-500/20 blur-xl"></div>
                
                <div className="relative z-10 text-center">
                  <motion.div
                    className="text-6xl mb-4"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      repeatDelay: 2
                    }}
                  >
                    {item.icon}
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold dark:text-yellow-300 text-yellow-700 mb-3">
                    {item.title}
                  </h3>
                  
                  <p className="dark:text-gray-300 text-gray-700 text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Decorative rings */}
                <div className="absolute inset-0 rounded-full border-2 border-yellow-500/30"></div>
                <div className="absolute inset-8 rounded-full border border-amber-500/20"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
