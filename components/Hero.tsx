'use client'

import { motion } from 'framer-motion'
import { FiMail, FiLinkedin } from 'react-icons/fi'
import ProfileImage from './ProfileImage'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
}

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl w-full text-center"
      >
        <ProfileImage />
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0%', '100%', '0%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            Sheena Mae Arquillo
          </motion.h1>
          <motion.div
            className="text-xl md:text-2xl dark:text-yellow-300 text-yellow-700 font-semibold mb-4"
            variants={itemVariants}
          >
            BSIT Major in Business Analytics (Full Stack Developer)
          </motion.div>
          <motion.div
            className="text-lg dark:text-gray-300 text-gray-700 mb-8"
            variants={itemVariants}
          >
            Lipa City, Batangas
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-6 text-lg"
        >
          <motion.a
            href="mailto:arquillosheenamae@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-600/30 to-amber-600/30 backdrop-blur-sm rounded-full border border-yellow-500/30 hover:border-yellow-400 hover:from-yellow-600/50 hover:to-amber-600/50 transition-all duration-300"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiMail className="dark:text-yellow-300 text-yellow-600" />
            <span className="dark:text-gray-200 text-gray-900 font-medium">Email</span>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/sheena-mae-arquillo-05b169399"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-600/30 to-amber-600/30 backdrop-blur-sm rounded-full border border-orange-500/30 hover:border-orange-400 hover:from-orange-600/50 hover:to-amber-600/50 transition-all duration-300"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiLinkedin className="dark:text-orange-300 text-orange-600" />
            <span className="dark:text-gray-200 text-gray-900 font-medium">LinkedIn</span>
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-4xl text-yellow-400"
          >
            ↓
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

