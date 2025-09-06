'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { cn } from '@/lib/utils'

interface AnimatedSliderProps {
  beforeImage: string
  afterImage: string
  beforeAlt: string
  afterAlt: string
  className?: string
}

export function AnimatedSlider({ 
  beforeImage, 
  afterImage, 
  beforeAlt, 
  afterAlt, 
  className 
}: AnimatedSliderProps) {
  const [isAfter, setIsAfter] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const toggleImage = () => {
    setIsAfter(!isAfter)
  }

  return (
    <div 
      className={cn(
        'relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden cursor-pointer group',
        'border border-white/10 hover:border-orange-500/30 transition-all duration-300',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={toggleImage}
    >
      {/* Image Container */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={isAfter ? 'after' : 'before'}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0"
          >
            <img
              src={isAfter ? afterImage : beforeImage}
              alt={isAfter ? afterAlt : beforeAlt}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4cc6b34b-4a52-4216-b9aa-b0f46d3ce747.png ? afterAlt : beforeAlt)}`;
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Before/After Labels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-4 left-4 z-10"
        >
          <motion.span
            className={cn(
              'px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm transition-all duration-300',
              isAfter 
                ? 'bg-gradient-to-r from-[#FF7A00] to-[#FDBA74] text-black'
                : 'bg-white/20 text-white'
            )}
            animate={{ scale: isAfter ? 1.05 : 1 }}
          >
            {isAfter ? '✨ Généré par ClicDesign' : '📦 Image originale'}
          </motion.span>
        </motion.div>

        {/* Toggle Instruction */}
        <motion.div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ opacity: isHovered ? 1 : 0.7, y: isHovered ? -5 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full text-sm text-white">
            <motion.div
              animate={{ rotate: isHovered ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              🔄
            </motion.div>
            Clique pour voir {isAfter ? 'l\'original' : 'le résultat'}
          </div>
        </motion.div>

        {/* Progress indicator */}
        <div className="absolute bottom-4 right-4 z-10">
          <div className="flex gap-2">
            <motion.div
              className={cn(
                'w-3 h-3 rounded-full transition-all duration-300',
                !isAfter ? 'bg-white' : 'bg-white/30'
              )}
              animate={{ scale: !isAfter ? 1.2 : 1 }}
            />
            <motion.div
              className={cn(
                'w-3 h-3 rounded-full transition-all duration-300',
                isAfter ? 'bg-gradient-to-r from-[#FF7A00] to-[#FDBA74]' : 'bg-white/30'
              )}
              animate={{ scale: isAfter ? 1.2 : 1 }}
            />
          </div>
        </div>
      </div>

      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        animate={{
          boxShadow: isHovered 
            ? '0 0 40px rgba(255, 122, 0, 0.2), 0 0 80px rgba(255, 122, 0, 0.1)' 
            : 'none'
        }}
        transition={{ duration: 0.3 }}
      />
    </div>
  )
}