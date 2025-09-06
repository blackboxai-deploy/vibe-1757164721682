import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk'
})

export const metadata: Metadata = {
  title: 'ClicDesign - Tu n\'as pas besoin d\'un designer. Juste d\'un clic.',
  description: 'Upload ton produit. L\'IA fait le reste. Tu obtiens un visuel e‑commerce qui vend.',
  keywords: 'design, ecommerce, IA, shopify, amazon, tiktok, visuel produit, générateur image',
  authors: [{ name: 'ClicDesign' }],
  creator: 'ClicDesign',
  publisher: 'ClicDesign',
  metadataBase: new URL('https://clicdesign.ai'),
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://clicdesign.ai',
    siteName: 'ClicDesign',
    title: 'ClicDesign - Tu n\'as pas besoin d\'un designer. Juste d\'un clic.',
    description: 'Upload ton produit. L\'IA fait le reste. Tu obtiens un visuel e‑commerce qui vend.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ClicDesign - Générateur de visuels e-commerce par IA'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClicDesign - Tu n\'as pas besoin d\'un designer. Juste d\'un clic.',
    description: 'Upload ton produit. L\'IA fait le reste. Tu obtiens un visuel e‑commerce qui vend.',
    images: ['/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={spaceGrotesk.variable}>
      <body className="min-h-screen bg-[#0A0A0A] text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}