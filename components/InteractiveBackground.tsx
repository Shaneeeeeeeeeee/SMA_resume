'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useTheme } from '@/contexts/ThemeContext'

export default function InteractiveBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const { theme } = useTheme()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Create animated particles
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
    x: Math.random() * 100,
  }))

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient background */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${
          theme === 'dark'
            ? 'from-yellow-900/30 via-amber-900/25 to-orange-900/30'
            : 'from-yellow-100/40 via-amber-100/35 to-orange-100/40'
        }`}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          backgroundSize: '200% 200%',
        }}
      />

      {/* Animated radial gradients */}
      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className={`absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,${
          theme === 'dark' ? 'rgba(251,191,36,0.15)' : 'rgba(251,191,36,0.25)'
        },transparent_50%)]`}></div>
        <div className={`absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,${
          theme === 'dark' ? 'rgba(245,158,11,0.15)' : 'rgba(245,158,11,0.25)'
        },transparent_50%)]`}></div>
        <div className={`absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,${
          theme === 'dark' ? 'rgba(251,146,60,0.1)' : 'rgba(251,146,60,0.2)'
        },transparent_40%)]`}></div>
      </motion.div>

      {/* Mouse-following gradient */}
      <motion.div
        className={`absolute w-[500px] h-[500px] bg-gradient-to-r rounded-full blur-3xl pointer-events-none ${
          theme === 'dark'
            ? 'from-yellow-500/20 via-amber-500/25 to-orange-500/20'
            : 'from-yellow-400/30 via-amber-400/35 to-orange-400/30'
        }`}
        animate={{
          x: mousePosition.x - 250,
          y: mousePosition.y - 250,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
      />

      {/* Scroll-based gradient shift */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-b from-transparent ${
          theme === 'dark'
            ? 'via-yellow-900/10 to-amber-900/20'
            : 'via-yellow-200/20 to-amber-200/30'
        }`}
        style={{
          opacity: Math.min(scrollY / 2000, 0.3),
        }}
      />

      {/* Animated grid pattern */}
      <motion.div
        className={`absolute inset-0 ${theme === 'dark' ? 'opacity-[0.03]' : 'opacity-[0.08]'}`}
        style={{
          backgroundImage: `
            linear-gradient(rgba(251, 191, 36, ${theme === 'dark' ? '0.5' : '0.3'}) 1px, transparent 1px),
            linear-gradient(90deg, rgba(251, 191, 36, ${theme === 'dark' ? '0.5' : '0.3'}) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          backgroundPosition: `${scrollY * 0.3}px ${scrollY * 0.3}px`,
        }}
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full blur-sm ${
            theme === 'dark' ? 'bg-yellow-400/30' : 'bg-yellow-500/40'
          }`}
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Animated wave patterns */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#fb923c" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,100 Q250,50 500,100 T1000,100 T1500,100 T2000,100"
          stroke="url(#waveGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: [0.3, 0.6, 0.3],
            d: [
              "M0,100 Q250,50 500,100 T1000,100 T1500,100 T2000,100",
              "M0,120 Q250,70 500,120 T1000,120 T1500,120 T2000,120",
              "M0,100 Q250,50 500,100 T1000,100 T1500,100 T2000,100",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.path
          d="M0,300 Q250,350 500,300 T1000,300 T1500,300 T2000,300"
          stroke="url(#waveGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: [0.2, 0.5, 0.2],
            d: [
              "M0,300 Q250,350 500,300 T1000,300 T1500,300 T2000,300",
              "M0,280 Q250,330 500,280 T1000,280 T1500,280 T2000,280",
              "M0,300 Q250,350 500,300 T1000,300 T1500,300 T2000,300",
            ],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </svg>

      {/* Interactive light beams */}
      <div className="absolute inset-0">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-full bg-gradient-to-b from-transparent to-transparent ${
              theme === 'dark' ? 'via-yellow-400/20' : 'via-yellow-500/30'
            }`}
            style={{
              left: `${25 + i * 25}%`,
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scaleY: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 1.5,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </div>
  )
}

