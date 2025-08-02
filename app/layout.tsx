import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ChatBox from '@/components/chat/ChatBox'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Smart Accident Detection - Detect Accidents Instantly. Save Lives Effortlessly',
  description: 'Revolutionary accident detection system with automatic emergency response, GPS tracking, and instant alerts to save lives.',
  keywords: 'accident detection, emergency response, GPS tracking, safety, India, 112 emergency',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ChatBox />
        <Toaster position="top-right" />
      </body>
    </html>
  )
}