import type { Metadata } from 'next'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';
import './globals.css'
import UnderconstructionNotice from '../components/UnderconstructionNotice'
import ScrollToTopButton from '../components/ScrollToTopButton'
import Footer from '../components/Footer'
import { sriracha } from './fonts';


export const metadata: Metadata = {
  title: 'Wael Hasan',
  description: "Wael Hasan's personal portfolio",
  authors: [
    {
      name: "Wael Hasan",
      url: "whma87@gmail.com"
    }
  ],
  keywords: "wael hasan, web developer, frontend web developer, backend web developer, MERN stack web developer, software engineer, portfolio",
  openGraph: {
    type: "website",
    url: "https://waelhasan.vercel.app/",
    title: "Wael Hasan",
    description: "Wael Hasan's personal portfolio",
    siteName: "Wael Hasan",
    images: [{
      url: "https://waelhasan.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpic1.8dad17e8.png&w=3840&q=75",
    }],
    countryName: "Egypt",
    emails: "whma87@gmail.com"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className="
        h-full w-[100vw]
        overflow-x-hidden
        text-[11px] sm:text-[12px] md:text-[14px] lg:text-[14px] xl:text-[16px] text-[--foreground-rgb]
        bg-gradient-to-b from-[--background-start-rgb] to-[--background-end-rgb]
      ">
      <body className={`
          ${sriracha.className}
          relative
          h-full w-full
          overflow-x-hidden
          scroll-smooth
        `}>
        <div className="
          flex flex-col justify-between
          h-[100%] w-full
        ">
          <div>
            <UnderconstructionNotice />
          </div>
          {children}
          <ScrollToTopButton />
          <Footer />
        </div>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
