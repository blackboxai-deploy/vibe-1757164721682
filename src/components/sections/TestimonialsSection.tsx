'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const testimonials = [
  {
    quote: "Depuis ClicDesign, mes visuels ont plus l'air pro que mon site.",
    author: "Sarah M.",
    role: "Créatrice Shopify",
    avatar: "S",
    rating: 5
  },
  {
    quote: "J'ai viré mon graphiste (et je l'aimais bien pourtant).",
    author: "Thomas R.",
    role: "Dropshipper Amazon",
    avatar: "T",
    rating: 5
  },
  {
    quote: "Je vends 2x plus sur TikTok avec des visuels qui claquent.",
    author: "Emma L.",
    role: "Influence Marketing",
    avatar: "E",
    rating: 5
  },
  {
    quote: "10 secondes pour un visuel, 2 heures économisées par produit.",
    author: "Marc D.",
    role: "Founder D2C",
    avatar: "M",
    rating: 5
  },
  {
    quote: "Mes clients pensent que j'ai une équipe créative. C'est juste ClicDesign.",
    author: "Julie K.",
    role: "Agence E-commerce",
    avatar: "J",
    rating: 5
  }
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative py-20 md:py-32 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#151515] to-[#0A0A0A]" />
      
      {/* Background pattern */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/3 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500/20 to-orange-400/20 border border-orange-500/30 rounded-full text-sm font-medium text-orange-300 backdrop-blur-sm mb-6"
          >
            💬 Ils nous font confiance
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            2,500+ créateurs ont{' '}
            <span className="bg-gradient-to-r from-[#FF7A00] to-[#FDBA74] bg-clip-text text-transparent">
              transformé leurs ventes
            </span>
          </motion.h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="text-center"
          >
            {/* Quote */}
            <div className="mb-8">
              <motion.div
                className="text-6xl text-orange-500/30 mb-4"
                animate={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                "
              </motion.div>
              <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-relaxed mb-8 italic">
                {testimonials[currentIndex].quote}
              </p>
            </div>

            {/* Author info */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <motion.div
                className="w-16 h-16 bg-gradient-to-r from-[#FF7A00] to-[#FDBA74] rounded-full flex items-center justify-center text-black font-bold text-xl"
                whileHover={{ scale: 1.1 }}
              >
                {testimonials[currentIndex].avatar}
              </motion.div>
              <div className="text-left">
                <div className="font-semibold text-white text-lg">
                  {testimonials[currentIndex].author}
                </div>
                <div className="text-gray-400">
                  {testimonials[currentIndex].role}
                </div>
              </div>
            </div>

            {/* Rating */}
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <motion.span
                  key={i}
                  className="text-yellow-400 text-xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: "easeInOut" }}
                >
                  ★
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-[#FF7A00] to-[#FDBA74] scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={() => setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm"
          >
            ←
          </button>
          <button
            onClick={() => setCurrentIndex((currentIndex + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm"
          >
            →
          </button>
        </div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          {[
            { value: '4.9/5', label: 'Note moyenne' },
            { value: '2,547+', label: 'Clients satisfaits' },
            { value: '50K+', label: 'Visuels générés' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-[#FF7A00] to-[#FDBA74] bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}