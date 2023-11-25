import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wael Hasan',
  description: "Wael Hasan's personal portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" style={{
      height: "100%",
      width: "100vw",
      overflowX: "hidden",
      fontFamily: "sans-serif",
      color: "var(--foreground-rgb)",
      background: `linear-gradient(
                      to bottom,
                      transparent,
                      var(--background-end-rgb)) var(--background-start-rgb)`
    }}>
      <body
        className={inter.className}
        style={{
          height: "100%",
          width: "100%",
          overflowX: "hidden"
        }}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
