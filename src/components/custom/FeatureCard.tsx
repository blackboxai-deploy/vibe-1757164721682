'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface FeatureCardProps {
  title: string
  description: string
  icon: string
  index: number
  className?: string
}

export function FeatureCard({ title, description, icon, index, className }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1] 
      }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.2 }
      }}
      className={cn(
        'group relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02]',
        'border border-white/10 hover:border-orange-500/30 backdrop-blur-sm',
        'transition-all duration-300 cursor-pointer',
        className
      )}
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 122, 0, 0.1), transparent 40%)'
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          className="inline-flex items-center justify-center w-14 h-14 mb-6 rounded-xl bg-gradient-to-r from-orange-500/20 to-orange-400/20 border border-orange-500/30"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-2xl">{icon}</span>
        </motion.div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold mb-4 text-white group-hover:text-orange-300 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>

        {/* Hover arrow */}
        <motion.div
          className="flex items-center mt-6 text-orange-500 opacity-0 group-hover:opacity-100 transition-all duration-300"
          initial={{ x: -10 }}
          whileHover={{ x: 0 }}
        >
          <span className="text-sm font-medium mr-2">En savoir plus</span>
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            →
          </motion.span>
        </motion.div>
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent" />
      </div>
    </motion.div>
  )
}