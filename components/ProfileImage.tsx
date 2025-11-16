'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function ProfileImage() {
  const [currentImage, setCurrentImage] = useState(0)
  const [imageErrors, setImageErrors] = useState<boolean[]>([])
  
  const images = [
    '/images/22ccee28-34a1-45a6-828a-0a4fdd00255b.jpg',
    '/images/37121718-8e92-44c1-876b-cc52e0d7cfff.jpg',
    '/images/725ec9cb-976f-43cc-9284-982c3b5a25c6.jpg',
  ]

  useEffect(() => {
    setImageErrors(new Array(images.length).fill(false))
  }, [images.length])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => {
        let next = (prev + 1) % images.length
        // Skip images that failed to load
        while (imageErrors[next] && next !== prev) {
          next = (next + 1) % images.length
        }
        return next
      })
    }, 5000)
    return () => clearInterval(interval)
  }, [images.length, imageErrors])

  const handleImageError = (index: number) => {
    setImageErrors((prev) => {
      const newErrors = [...prev]
      newErrors[index] = true
      return newErrors
    })
    // If current image fails, switch to next available
    if (currentImage === index) {
      const nextAvailable = images.findIndex((_, i) => i !== index && !imageErrors[i])
      if (nextAvailable !== -1) {
        setCurrentImage(nextAvailable)
      }
    }
  }

  const availableImages = images.filter((_, index) => !imageErrors[index])
  
  // Ensure currentImage is always valid
  useEffect(() => {
    if (imageErrors[currentImage] && availableImages.length > 0) {
      const nextAvailable = images.findIndex((_, index) => !imageErrors[index])
      if (nextAvailable !== -1) {
        setCurrentImage(nextAvailable)
      }
    }
  }, [imageErrors, currentImage, availableImages.length])

  if (availableImages.length === 0) {
    // Fallback if no images are available
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative mb-8 flex justify-center"
      >
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse"></div>
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-yellow-500/30 shadow-2xl bg-gradient-to-br from-yellow-900/50 to-orange-900/50 flex items-center justify-center">
            <span className="text-6xl">👤</span>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative mb-8 flex justify-center"
    >
      <div className="relative group">
        {/* Animated border glow */}
        <div className="absolute -inset-2 bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse"></div>
        
        {/* Image container */}
        <motion.div
          className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-yellow-500/30 shadow-2xl"
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ duration: 0.3 }}
        >
          {images.map((src, index) => {
            if (imageErrors[index]) return null
            return (
              <motion.div
                key={index}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{
                  opacity: currentImage === index ? 1 : 0,
                  scale: currentImage === index ? 1 : 1.1,
                }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              >
                <Image
                  src={src}
                  alt={`Profile photo ${index + 1} - Sheena Mae Arquillo`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  sizes="(max-width: 768px) 256px, 320px"
                  onError={() => handleImageError(index)}
                />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Image indicators */}
        {availableImages.length > 1 && (
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, index) => {
              if (imageErrors[index]) return null
              return (
                <motion.button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentImage === index
                      ? 'bg-yellow-400 w-8'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  onClick={() => setCurrentImage(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    scale: currentImage === index ? 1.1 : 1,
                  }}
                />
              )
            })}
          </div>
        )}
      </div>
    </motion.div>
  )
}

