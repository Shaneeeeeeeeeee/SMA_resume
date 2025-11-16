'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useTheme } from '@/contexts/ThemeContext'
import { FiSun, FiMoon } from 'react-icons/fi'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'dark:bg-black/80 bg-white/80 backdrop-blur-lg shadow-lg shadow-yellow-500/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
          >
            <a
              href="#home"
              className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 dark:from-yellow-400 dark:via-amber-400 dark:to-orange-400 bg-clip-text text-transparent hover:from-yellow-300 hover:via-amber-300 hover:to-orange-300 transition-all duration-300"
            >
              Sheena Mae Arquillo
            </a>
          </motion.div>
          
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full bg-gradient-to-r from-yellow-600/20 to-amber-600/20 dark:from-yellow-600/20 dark:to-amber-600/20 border border-yellow-500/30 dark:border-yellow-500/30 hover:border-yellow-400 hover:from-yellow-600/40 hover:to-amber-600/40 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <FiSun className="text-yellow-400 text-xl" />
            ) : (
              <FiMoon className="text-amber-600 text-xl" />
            )}
          </motion.button>
        </div>
      </nav>
    </motion.header>
  )
}

