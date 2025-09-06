'use client'

import { motion } from 'framer-motion'

const footerLinks = {
  product: [
    { label: 'Templates', href: '#templates' },
    { label: 'Tarifs', href: '#pricing' },
    { label: 'API', href: '#api' },
    { label: 'Intégrations', href: '#integrations' }
  ],
  company: [
    { label: 'À propos', href: '#about' },
    { label: 'Blog', href: '#blog' },
    { label: 'Carrières', href: '#careers' },
    { label: 'Presse', href: '#press' }
  ],
  support: [
    { label: 'Centre d\'aide', href: '#help' },
    { label: 'Contact', href: '#contact' },
    { label: 'Status', href: '#status' },
    { label: 'Roadmap', href: '#roadmap' }
  ],
  legal: [
    { label: 'CGU', href: '#terms' },
    { label: 'Confidentialité', href: '#privacy' },
    { label: 'Cookies', href: '#cookies' },
    { label: 'Mentions légales', href: '#legal' }
  ]
}

const socialLinks = [
  { name: 'TikTok', href: '#tiktok', icon: '📱' },
  { name: 'Instagram', href: '#instagram', icon: '📸' },
  { name: 'LinkedIn', href: '#linkedin', icon: '💼' },
  { name: 'Twitter', href: '#twitter', icon: '🐦' }
]

export function Footer() {
  return (
    <footer className="relative bg-[#0A0A0A] border-t border-white/10">
      {/* Main footer content */}
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            {/* Logo */}
            <motion.div
              className="flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-[#FF7A00] to-[#FDBA74] rounded-xl flex items-center justify-center">
                <span className="text-black font-bold text-lg">C</span>
              </div>
              <span className="text-2xl font-bold">ClicDesign</span>
            </motion.div>

            {/* Description */}
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforme tes produits en visuels e-commerce qui vendent. 
              Pas de designer, pas de brief, juste un clic.
            </p>

            {/* Contact */}
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span>📧</span>
                <a 
                  href="mailto:hello@clicdesign.ai" 
                  className="hover:text-orange-400 transition-colors duration-300"
                >
                  hello@clicdesign.ai
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span>💬</span>
                <span>Support 24/7 disponible</span>
              </div>
            </div>
          </motion.div>

          {/* Links sections */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Product */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="font-semibold text-white mb-4">Produit</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-semibold text-white mb-4">Entreprise</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="font-semibold text-white mb-4">Légal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between pt-8 mt-12 border-t border-white/10"
        >
          <div className="flex items-center gap-6 mb-4 md:mb-0">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg">{social.icon}</span>
                <span className="text-sm font-medium hidden sm:block">{social.name}</span>
              </motion.a>
            ))}
          </div>

          {/* Newsletter signup */}
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
          >
            <input
              type="email"
              placeholder="ton@email.com"
              className="px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all duration-300"
            />
            <button className="px-4 py-2 bg-gradient-to-r from-[#FF7A00] to-[#FDBA74] text-black text-sm font-medium rounded-lg hover:from-[#FF6B00] hover:to-[#FF8F4A] transition-all duration-300">
              S'abonner
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 bg-black/50">
        <div className="container mx-auto max-w-7xl px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              © 2024 ClicDesign. Tous droits réservés. Fait avec ❤️ pour les créateurs.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-4 mt-4 md:mt-0"
            >
              <span>🇫🇷 Français</span>
              <span>•</span>
              <span>🌍 Version EU</span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}