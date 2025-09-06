'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}

export function MagneticButton({ 
  children, 
  className, 
  onClick, 
  variant = 'primary',
  size = 'md',
  disabled = false 
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const springX = useSpring(x, { damping: 20, stiffness: 300 })
  const springY = useSpring(y, { damping: 20, stiffness: 300 })

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current || disabled) return
    
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY
    
    x.set(mouseX * 0.1)
    y.set(mouseY * 0.1)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const baseClasses = cn(
    'relative inline-flex items-center justify-center font-medium transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:ring-offset-2 focus:ring-offset-black',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    {
      // Variants
      'bg-gradient-to-r from-[#FF7A00] to-[#FDBA74] hover:from-[#FF6B00] hover:to-[#FF8F4A] text-black font-semibold': variant === 'primary',
      'border border-white/20 hover:border-orange-500/50 text-white hover:text-orange-400': variant === 'secondary',
      // Sizes
      'px-4 py-2 text-sm rounded-lg': size === 'sm',
      'px-6 py-3 text-base rounded-xl': size === 'md',
      'px-8 py-4 text-lg rounded-2xl': size === 'lg',
    },
    className
  )

  return (
    <motion.button
      ref={ref}
      className={baseClasses}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      disabled={disabled}
      whileTap={{ scale: 0.95 }}
      animate={{
        boxShadow: isHovered && !disabled
          ? variant === 'primary' 
            ? '0 0 30px rgba(255, 122, 0, 0.4), 0 0 60px rgba(255, 122, 0, 0.2)' 
            : '0 0 20px rgba(255, 255, 255, 0.1)'
          : 'none'
      }}
      transition={{ duration: 0.2 }}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      
      {/* Glow effect overlay */}
      {variant === 'primary' && (
        <motion.div
          className="absolute inset-0 rounded-inherit bg-gradient-to-r from-[#FF7A00] to-[#FDBA74] opacity-0"
          animate={{ opacity: isHovered && !disabled ? 0.8 : 0 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </motion.button>
  )
}