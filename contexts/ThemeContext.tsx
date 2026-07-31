'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { MotionConfig } from 'framer-motion'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Get initial theme
    const savedTheme = localStorage.getItem('theme') as Theme
    let initialTheme: Theme = 'light'

    if (savedTheme && (savedTheme === 'dark' || savedTheme === 'light')) {
      initialTheme = savedTheme
    }
    // Otherwise default to Day (light) regardless of system preference.
    
    setTheme(initialTheme)
    
    // Apply theme immediately
    const root = document.documentElement
    if (initialTheme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('theme', theme)
      const root = document.documentElement
      if (theme === 'dark') {
        root.classList.add('dark')
      } else {
        root.classList.remove('dark')
      }
    }
  }, [theme, mounted])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  // Always provide context, even before mounted
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

