import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Michael Corcoran LMT | Professional Massage and Bodyworks',
  description: 'Professional therapeutic massage in Schenectady, NY. Shiatsu, Ashiatsu, Thai Massage, Cupping, Myofascial Release, Deep Tissue, and Trigger Point therapy — integrated into one truly therapeutic experience.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon-192.png', sizes: '192x192' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/manifest.json',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
