'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t dark:border-gray-800/50 border-gray-300/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="dark:text-gray-400 text-gray-600 mb-4"
        >
          References available upon request.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="dark:text-gray-500 text-gray-500 text-sm"
        >
          © 2026 Sheena Mae Arquillo. All rights reserved.
        </motion.p>
      </div>
    </footer>
  )
}

