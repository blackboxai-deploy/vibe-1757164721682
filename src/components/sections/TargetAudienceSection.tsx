'use client'

import { motion } from 'framer-motion'

const targetAudiences = [
  {
    title: 'Vendeurs Shopify',
    description: 'Optimise tes fiches produits avec des visuels qui convertissent',
    icon: '🛍️',
    stats: '2.5M+ vendeurs',
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'TikTok Sellers',
    description: 'Créé des visuels punch pour tes vidéos produits',
    icon: '📱',
    stats: '850K+ créateurs',
    color: 'from-pink-500 to-rose-500'
  },
  {
    title: 'Amazon FBA',
    description: 'Respecte les guidelines Amazon avec style',
    icon: '📦',
    stats: '1.2M+ vendeurs',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    title: 'Marques D2C',
    description: 'Développe ton identité visuelle sans designer',
    icon: '🏢',
    stats: '150K+ marques',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Dropshippers',
    description: 'Lance tes campagnes plus vite avec des visuels pro',
    icon: '🚀',
    stats: '500K+ entrepreneurs',
    color: 'from-purple-500 to-violet-500'
  },
  {
    title: 'Créateurs Produit',
    description: 'Met en valeur tes créations dès le prototype',
    icon: '🎨',
    stats: '300K+ makers',
    color: 'from-red-500 to-pink-500'
  }
]

export function TargetAudienceSection() {
  return (
    <section className="relative py-20 md:py-32 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0F0F0F] to-[#0A0A0A]" />
      
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/3 left-1/5 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.05, 0.12, 0.05],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
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
            🎯 Pour qui ?
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Tu ne veux pas faire du design.{' '}
            <span className="bg-gradient-to-r from-[#FF7A00] to-[#FDBA74] bg-clip-text text-transparent">
              Tu veux faire du chiffre.
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Que tu vendes sur Shopify, TikTok, Amazon ou ta propre boutique, 
            ClicDesign s'adapte à tes besoins et contraintes.
          </motion.p>
        </motion.div>

        {/* Audience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {targetAudiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1] 
              }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-orange-500/30 backdrop-blur-sm transition-all duration-300 cursor-pointer"
            >
              {/* Icon with gradient background */}
              <motion.div
                className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${audience.color} bg-opacity-20 border border-white/20`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-3xl">{audience.icon}</span>
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-orange-300 transition-colors duration-300">
                {audience.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                {audience.description}
              </p>

              {/* Stats */}
              <div className="flex items-center gap-2 text-sm">
                <span className="text-orange-400 font-semibold">{audience.stats}</span>
                <span className="text-gray-500">utilisent ClicDesign</span>
              </div>

              {/* Hover arrow */}
              <motion.div
                className="flex items-center mt-6 text-orange-500 opacity-0 group-hover:opacity-100 transition-all duration-300"
                initial={{ x: -10 }}
                whileHover={{ x: 0 }}
              >
                <span className="text-sm font-medium mr-2">Découvrir →</span>
              </motion.div>

              {/* Background gradient on hover */}
              <motion.div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${audience.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
              />

              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 122, 0, 0.1), transparent 40%)'
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 pt-12 border-t border-white/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '5.5M+', label: 'Créateurs actifs' },
              { value: '180+', label: 'Pays couverts' },
              { value: '€2.1B+', label: 'CA généré via ClicDesign' },
              { value: '15 sec', label: 'Temps moyen par visuel' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
                className="group"
              >
                <motion.div
                  className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#FF7A00] to-[#FDBA74] bg-clip-text text-transparent mb-2"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Peu importe ton secteur, ClicDesign s'adapte à tes contraintes et maximise tes conversions.
          </p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-[#FF7A00] to-[#FDBA74] text-black font-semibold rounded-xl hover:from-[#FF6B00] hover:to-[#FF8F4A] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Commencer maintenant - C'est gratuit
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}