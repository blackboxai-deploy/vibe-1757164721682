'use client'

import { motion } from 'framer-motion'
import { MagneticButton } from '@/components/custom/MagneticButton'

export function FinalCTASection() {
  return (
    <section className="relative py-20 md:py-32 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#1A0A0A] to-[#0A0A0A]" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-600/8 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.08, 0.2, 0.08],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex mb-8"
        >
          <span className="px-6 py-3 bg-gradient-to-r from-orange-500/30 to-orange-400/30 border border-orange-500/50 rounded-full text-base font-medium text-orange-200 backdrop-blur-sm">
            🚀 Dernière chance de transformer tes ventes
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
        >
          Ton produit mérite mieux{' '}
          <span className="bg-gradient-to-r from-[#FF7A00] to-[#FDBA74] bg-clip-text text-transparent">
            qu'un visuel moche
          </span>.
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto"
        >
          Arrête de perdre des ventes à cause de visuels ternes. 
          En 10 secondes, transforme n'importe quel produit en image qui vend.
        </motion.p>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-12"
        >
          <MagneticButton 
            variant="primary" 
            size="lg"
            className="text-xl px-12 py-6 font-bold"
          >
            <span className="text-2xl mr-2">🔥</span>
            Générer une image maintenant
          </MagneticButton>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-400 text-sm"
        >
          <div className="flex items-center gap-2">
            <span>✓</span> Gratuit pour commencer
          </div>
          <div className="flex items-center gap-2">
            <span>✓</span> Aucune carte bancaire requise
          </div>
          <div className="flex items-center gap-2">
            <span>✓</span> Résultat en moins de 10 secondes
          </div>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-20 left-10 text-4xl"
          animate={{ 
            rotate: [0, 15, -15, 0],
            y: [0, -10, 10, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          📈
        </motion.div>
        
        <motion.div
          className="absolute top-32 right-16 text-3xl"
          animate={{ 
            rotate: [0, -10, 10, 0],
            scale: [1, 1.1, 0.9, 1]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1 
          }}
        >
          💰
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 left-20 text-3xl"
          animate={{ 
            y: [0, -15, 15, 0],
            x: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2 
          }}
        >
          🎯
        </motion.div>

        <motion.div
          className="absolute bottom-32 right-12 text-4xl"
          animate={{ 
            rotate: [0, 20, -20, 0],
            scale: [1, 0.8, 1.2, 1]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 0.5 
          }}
        >
          ⚡
        </motion.div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
    </section>
  )
}