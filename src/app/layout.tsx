import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
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
      className={`
        h-full w-[100vw]
        overflow-x-hidden
        text-[8px] sm:text-[12px] md:text-[14px] lg:text-[14px] xl:text-[16px] text-[--foreground-rgb]
        bg-gradient-to-b from-[--background-start-rgb] to-[--background-end-rgb]
      `}>
      <body
        className={`
          ${sriracha.className}
          relative
          h-full w-full
          overflow-x-hidden
          scroll-smooth
        `}>
        <UnderconstructionNotice />
        <Navbar />
        <FreedomSupportNotice />
        {children}
        <ScrollToTopButton />
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
