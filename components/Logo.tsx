'use client'

import { motion } from 'framer-motion'

interface LogoProps {
  size?: number
  className?: string
}

export default function Logo({ size = 64, className = '' }: LogoProps) {
  const fontSize = 48 * (size / 64)

  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 2 }}
      whileTap={{ scale: 0.95 }}
      className={`relative inline-block ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        <defs>
          <linearGradient id="logoYellowBgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#fb923c" />
          </linearGradient>
          <linearGradient id="logoTextGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a1a1a" />
            <stop offset="100%" stopColor="#0a0a0a" />
          </linearGradient>
          <filter id="yellowGlow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Yellow background circle */}
        <circle 
          cx="32" 
          cy="32" 
          r="30" 
          fill="url(#logoYellowBgGradient)" 
          stroke="#f59e0b" 
          strokeWidth="2"
          filter="url(#yellowGlow)"
        />
        
        {/* Decorative lines */}
        {/* Horizontal lines */}
        <motion.line 
          x1="8" y1="16" x2="24" y2="16" 
          stroke="url(#logoTextGradient)" 
          strokeWidth="1.5" 
          opacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        />
        <motion.line 
          x1="40" y1="16" x2="56" y2="16" 
          stroke="url(#logoTextGradient)" 
          strokeWidth="1.5" 
          opacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        />
        <motion.line 
          x1="8" y1="48" x2="24" y2="48" 
          stroke="url(#logoTextGradient)" 
          strokeWidth="1.5" 
          opacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        />
        <motion.line 
          x1="40" y1="48" x2="56" y2="48" 
          stroke="url(#logoTextGradient)" 
          strokeWidth="1.5" 
          opacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        />
        
        {/* Vertical lines */}
        <motion.line 
          x1="16" y1="8" x2="16" y2="24" 
          stroke="url(#logoTextGradient)" 
          strokeWidth="1.5" 
          opacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        />
        <motion.line 
          x1="48" y1="8" x2="48" y2="24" 
          stroke="url(#logoTextGradient)" 
          strokeWidth="1.5" 
          opacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        />
        <motion.line 
          x1="16" y1="40" x2="16" y2="56" 
          stroke="url(#logoTextGradient)" 
          strokeWidth="1.5" 
          opacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        />
        <motion.line 
          x1="48" y1="40" x2="48" y2="56" 
          stroke="url(#logoTextGradient)" 
          strokeWidth="1.5" 
          opacity="0.3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        />
        
        {/* Diagonal decorative lines */}
        <motion.line 
          x1="12" y1="12" x2="18" y2="18" 
          stroke="url(#logoTextGradient)" 
          strokeWidth="1" 
          opacity="0.2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.9, duration: 0.4 }}
        />
        <motion.line 
          x1="52" y1="12" x2="46" y2="18" 
          stroke="url(#logoTextGradient)" 
          strokeWidth="1" 
          opacity="0.2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1.0, duration: 0.4 }}
        />
        <motion.line 
          x1="12" y1="52" x2="18" y2="46" 
          stroke="url(#logoTextGradient)" 
          strokeWidth="1" 
          opacity="0.2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1.1, duration: 0.4 }}
        />
        <motion.line 
          x1="52" y1="52" x2="46" y2="46" 
          stroke="url(#logoTextGradient)" 
          strokeWidth="1" 
          opacity="0.2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1.2, duration: 0.4 }}
        />
        
        {/* S Text - Positioned higher */}
        <motion.text
          x="32"
          y="35"
          fontFamily="Impact, Arial Black, sans-serif"
          fontSize="48"
          fontWeight="900"
          fill="url(#logoTextGradient)"
          textAnchor="middle"
          dominantBaseline="central"
          className="dark:fill-white"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          S
        </motion.text>
      </svg>
    </motion.div>
  )
}
