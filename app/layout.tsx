import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: {
    default: 'Retearn — Certified RVMs for the UK Deposit Return Scheme',
    template: '%s | Retearn',
  },
  description:
    'Retearn supplies certified reverse vending machines for the UK Deposit Return Scheme. Scheme-ready for 1 October 2027. Uptime-guaranteed, fully serviced.',
  metadataBase: new URL('https://retearn.uk'),
  openGraph: {
    siteName: 'Retearn',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
