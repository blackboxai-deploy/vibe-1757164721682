'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const templates = [
  {
    id: 'packshot',
    title: 'Packshot Clean',
    description: 'Style Apple - fond minimal, éclairage studio',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/89340f66-4343-45a7-930f-1949aa370e27.png',
    category: '🖼️ Studio',
    popular: true
  },
  {
    id: 'lifestyle',
    title: 'Lifestyle Émotionnel',
    description: 'Mise en scène produit dans un contexte réel',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f702ebf3-b4a6-41e9-8690-f8ac02d4d71b.png',
    category: '📸 Lifestyle',
    popular: false
  },
  {
    id: 'benefits',
    title: 'Carrousel Bénéfices',
    description: 'Highlights avec icônes et points forts',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/612982dc-759d-4009-be29-ed7da0057830.png',
    category: '✅ Bénéfices',
    popular: false
  },
  {
    id: 'before-after',
    title: 'Avant / Après',
    description: 'Transformation claire pour démontrer l\'efficacité',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/91ed07db-7749-4bae-9990-7af12b4620c1.png',
    category: '🔄 Transformation',
    popular: false
  },
  {
    id: 'social-proof',
    title: 'Social Proof',
    description: 'Avis clients et testimonials intégrés',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/59be3b63-3423-4fff-b79f-b9b3ce9a83b5.png',
    category: '⭐ Social',
    popular: true
  },
  {
    id: 'bundle',
    title: 'Pack Produit',
    description: 'Mise en valeur des bundles et offres groupées',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0c826996-d6dd-43f7-b3a0-f5b05e27e9d0.png',
    category: '📦 Bundle',
    popular: false
  }
]

const categories = ['Tous', '🖼️ Studio', '📸 Lifestyle', '✅ Bénéfices', '🔄 Transformation', '⭐ Social', '📦 Bundle']

export function TemplatesSection() {
  const [activeCategory, setActiveCategory] = useState('Tous')
  const [hoveredTemplate, setHoveredTemplate] = useState<string | null>(null)

  const filteredTemplates = activeCategory === 'Tous' 
    ? templates 
    : templates.filter(template => template.category === activeCategory)

  return (
    <section className="relative py-20 md:py-32 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#121212] to-[#0A0A0A]" />
      
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/3 w-80 h-80 bg-orange-500/8 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.08, 0.15, 0.08]
          }}
          transition={{ 
            duration: 18, 
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
            🎨 Templates
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Des visuels pensés{' '}
            <span className="bg-gradient-to-r from-[#FF7A00] to-[#FDBA74] bg-clip-text text-transparent">
              pour vendre
            </span>.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Inspirés des meilleures marques (Apple, Glossier, Dyson...), 
            nos templates s'adaptent automatiquement à ton produit.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05 * index }}
              onClick={() => setActiveCategory(category)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
                activeCategory === category
                  ? 'bg-gradient-to-r from-[#FF7A00] to-[#FDBA74] text-black'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Templates Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredTemplates.map((template, index) => (
            <motion.div
              key={template.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1] 
              }}
              className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-orange-500/30 transition-all duration-300"
              onMouseEnter={() => setHoveredTemplate(template.id)}
              onMouseLeave={() => setHoveredTemplate(null)}
            >
              {/* Popular badge */}
              {template.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute top-4 right-4 z-10 bg-gradient-to-r from-[#FF7A00] to-[#FDBA74] text-black px-3 py-1 rounded-full text-xs font-bold"
                >
                  🔥 Populaire
                </motion.div>
              )}

              {/* Image */}
              <div className="relative h-64 md:h-72 overflow-hidden">
                <motion.img
                  src={template.image}
                  alt={template.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  animate={{ 
                    scale: hoveredTemplate === template.id ? 1.05 : 1 
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5ebf6e68-98c8-4e71-b7f9-69c38f94c20b.png}`;
                  }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover content */}
                <motion.div
                  className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  animate={{ 
                    y: hoveredTemplate === template.id ? 0 : 20,
                    opacity: hoveredTemplate === template.id ? 1 : 0
                  }}
                >
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-[#FF7A00] to-[#FDBA74] text-black font-medium rounded-lg hover:from-[#FF6B00] hover:to-[#FF8F4A] transition-all duration-200">
                    Utiliser ce template
                  </button>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs text-orange-400 font-medium">
                    {template.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-300 transition-colors duration-300">
                  {template.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {template.description}
                </p>
              </div>

              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                animate={{
                  boxShadow: hoveredTemplate === template.id 
                    ? '0 0 40px rgba(255, 122, 0, 0.2), 0 0 80px rgba(255, 122, 0, 0.1)' 
                    : 'none'
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-16 pt-8 border-t border-white/10"
        >
          <p className="text-gray-400 mb-6">
            Tous les templates s'adaptent automatiquement à ton produit et à ta marque.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-[#FF7A00] to-[#FDBA74] text-black font-semibold rounded-xl hover:from-[#FF6B00] hover:to-[#FF8F4A] transition-all duration-300">
            Voir tous les templates →
          </button>
        </motion.div>
      </div>
    </section>
  )
}