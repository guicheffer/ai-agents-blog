import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Agents Blog | Next.js + Vercel',
  description: 'A modern blog about AI Agents built with Next.js and advanced Vercel features',
  keywords: ['AI', 'Agents', 'Next.js', 'Vercel', 'Blog', 'GitHub Pages'],
  authors: [{ name: 'Arturo AI' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://guicheffer.github.io/ai-agents-blog',
    title: 'AI Agents Blog',
    description: 'A modern blog about AI Agents',
    siteName: 'AI Agents Blog',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800`}>
        <div className="relative min-h-screen">
          {/* Background effects */}
          <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-gray-900 dark:bg-[radial-gradient(#374151_1px,transparent_1px)]"></div>
          
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}