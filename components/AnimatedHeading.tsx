'use client'

import { motion } from 'framer-motion'

interface AnimatedHeadingProps {
  text: string
  className?: string
}

/**
 * Masked, word-by-word reveal: each word slides up from behind a clip.
 */
export default function AnimatedHeading({ text, className = '' }: AnimatedHeadingProps) {
  const words = text.split(' ')

  return (
    <h2 className={className} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom"
          style={{ paddingBottom: '0.12em' }}
          aria-hidden
        >
          <motion.span
            className="inline-block"
            initial={{ y: '115%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </h2>
  )
}
