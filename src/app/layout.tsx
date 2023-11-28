import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar'
import FreedomSupportNotice from './components/FreedomSupportNotice'
import UnderconstructionNotice from './components/UnderconstructionNotice'
import ScrollToTopButton from './components/ScrollToTopButton'
import Footer from './components/Footer'
import { sriracha } from './fonts'

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
    <html
      lang="ar"
      style={{
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
      className={sriracha.className}
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
          overflowX: "hidden",
          scrollBehavior: "smooth"
        }}>
        <UnderconstructionNotice />
        <Navbar />
        <FreedomSupportNotice />
        {children}
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  )
}
