'use client'

import { motion } from 'framer-motion'
import { FeatureCard } from '@/components/custom/FeatureCard'

const features = [
  {
    icon: '🎨',
    title: 'Templates inspirés des meilleurs',
    description: 'Apple, Glossier, Ommy, Dyson… adaptés à ton produit.'
  },
  {
    icon: '⚡',
    title: 'Résultat immédiat',
    description: 'Choisis un template → image générée en 10 secondes.'
  },
  {
    icon: '🎯',
    title: 'Aucun brief, aucun logiciel, aucune friction',
    description: 'Juste toi, ton produit, et un clic.'
  },
  {
    icon: '📱',
    title: 'Optimisé pour Shopify, Amazon, TikTok',
    description: 'Format, ombre, badge, CTA, tout est calibré.'
  }
]

export function FeaturesSection() {
  return (
    <section className="relative py-20 md:py-32 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#111111] to-[#0A0A0A]" />
      
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
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
            ✨ Pourquoi ClicDesign
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Ce n'est pas une app.{' '}
            <span className="bg-gradient-to-r from-[#FF7A00] to-[#FDBA74] bg-clip-text text-transparent">
              C'est ton équipe créative.
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Fini les allers-retours avec des designers, les briefs interminables et les délais qui s'éternisent. 
            ClicDesign transforme ton produit en visuel qui vend, instantanément.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
            />
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 pt-12 border-t border-white/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Visuels générés', value: '50K+' },
              { label: 'Temps moyen', value: '8 sec' },
              { label: 'Satisfaction', value: '98%' },
              { label: 'Croissance ventes', value: '+187%' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#FF7A00] to-[#FDBA74] bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}