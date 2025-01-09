'use client'

import { motion } from 'framer-motion'

interface BlobProps {
  className?: string
  colors?: string[]
}

export const Blob = ({ className = '', colors = ['#FF0080', '#7928CA'] }: BlobProps) => {
  return (
    <motion.div
      className={`absolute blur-[80px] opacity-50 ${className}`}
      animate={{
        scale: [1, 1.1, 1],
        rotate: [0, 90, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse"
      }}
      style={{
        background: `linear-gradient(45deg, ${colors.join(', ')})`,
      }}
    />
  )
}