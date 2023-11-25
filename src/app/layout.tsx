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
    <html lang="ar">
      <body
        className={inter.className}
        style={{
          height: "fit-content",
          overflowX: "hidden",
          fontFamily: "sans-serif",
          color: "var(--foreground-rgb)",
          background: `linear-gradient(to bottom,
                          transparent,
                          var(--background-end-rgb)) var(--background-start-rgb)`
        }}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
