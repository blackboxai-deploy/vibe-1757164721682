'use client'

import { motion } from 'framer-motion'
import { MagneticButton } from '@/components/custom/MagneticButton'
import { cn } from '@/lib/utils'

const pricingPlans = [
  {
    name: 'Starter',
    price: '0€',
    period: '/mois',
    description: 'Pour tester la puissance de ClicDesign',
    features: [
      '3 visuels/mois',
      'Templates de base',
      'Watermark ClicDesign',
      'Export standard',
      'Support par email'
    ],
    cta: 'Commencer gratuitement',
    popular: false,
    gradient: 'from-gray-600 to-gray-700'
  },
  {
    name: 'Pro',
    price: '19€',
    period: '/mois',
    description: 'Pour les créateurs sérieux',
    features: [
      '30 visuels/mois',
      'Tous les templates',
      'Sans watermark',
      'Export HD',
      'Intégrations Shopify/WooCommerce',
      'Support prioritaire',
      'Statistiques avancées'
    ],
    cta: 'Choisir Pro',
    popular: true,
    gradient: 'from-[#FF7A00] to-[#FDBA74]'
  },
  {
    name: 'Infinite',
    price: '49€',
    period: '/mois',
    description: 'Pour les pros qui scaliont fort',
    features: [
      'Visuels illimités',
      'Templates exclusifs',
      'Fond transparent',
      'Export pack AI',
      'API complète',
      'Support dédié 24/7',
      'Formation personnalisée',
      'Accès beta aux nouveautés'
    ],
    cta: 'Passer à Infinite',
    popular: false,
    gradient: 'from-purple-600 to-pink-600'
  }
]

export function PricingSection() {
  return (
    <section className="relative py-20 md:py-32 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0F0F0F] to-[#0A0A0A]" />
      
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ 
            duration: 15, 
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
            💰 Tarifs simples
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Un bon outil, c'est celui que{' '}
            <span className="bg-gradient-to-r from-[#FF7A00] to-[#FDBA74] bg-clip-text text-transparent">
              tu peux utiliser sans réfléchir
            </span>.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Pas de calcul compliqué, pas de frais cachés. Tu payes pour ce que tu utilises, point.
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1] 
              }}
              className={cn(
                'relative p-8 rounded-3xl backdrop-blur-sm transition-all duration-300',
                plan.popular 
                  ? 'bg-gradient-to-br from-orange-500/20 to-orange-400/10 border-2 border-orange-500/50 shadow-2xl scale-105' 
                  : 'bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-orange-500/20'
              )}
            >
              {/* Popular badge */}
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                >
                  <span className="bg-gradient-to-r from-[#FF7A00] to-[#FDBA74] text-black px-4 py-2 rounded-full text-sm font-bold">
                    🔥 Plus populaire
                  </span>
                </motion.div>
              )}

              <div className="text-center">
                {/* Plan name */}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                
                {/* Price */}
                <div className="mb-6">
                  <span className={cn(
                    "text-4xl md:text-5xl font-bold bg-gradient-to-r bg-clip-text text-transparent",
                    plan.gradient
                  )}>
                    {plan.price}
                  </span>
                  <span className="text-gray-400 text-lg">{plan.period}</span>
                </div>
                
                {/* Description */}
                <p className="text-gray-300 mb-8">{plan.description}</p>

                {/* CTA */}
                <MagneticButton
                  variant={plan.popular ? "primary" : "secondary"}
                  className="w-full mb-8"
                >
                  {plan.cta}
                </MagneticButton>

                {/* Features */}
                <div className="space-y-4 text-left">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: (index * 0.1) + (featureIndex * 0.05), 
                        duration: 0.4 
                      }}
                      className="flex items-center gap-3"
                    >
                      <span className="text-green-400 text-lg">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Hover glow */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 pointer-events-none"
                whileHover={{ opacity: plan.popular ? 0.1 : 0.05 }}
                style={{
                  background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), ${
                    plan.popular ? 'rgba(255, 122, 0, 0.3)' : 'rgba(255, 255, 255, 0.1)'
                  }, transparent 40%)`
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-16 pt-8 border-t border-white/10"
        >
          <p className="text-gray-400 mb-4">
            💳 Aucun engagement. Annule quand tu veux. Remboursement sous 30 jours.
          </p>
          <p className="text-sm text-gray-500">
            Plus de 2,500+ créateurs nous font confiance pour leurs visuels e-commerce.
          </p>
        </motion.div>
      </div>
    </section>
  )
}