import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Geist } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-cormorant' })

export const metadata: Metadata = {
  title: 'Boston Bar | Torino',
  description: 'Good nights begin here. Discover Boston Bar Torino — cocktails, bites, and belonging.',
  
  icons: { icon: '/boston-logo.svg', apple: '/boston-logo.svg' },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#10221b',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${geist.variable} ${cormorant.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
