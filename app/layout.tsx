import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/layout/header"
import Footer from "./components/layout/footer"
import PageTransition from "./components/page-transition"
import OceanClickEffect from "./components/ocean-click-effect"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Summer Journey - Creative Studio",
  description: "A professional portfolio website showcasing creative works and technical expertise",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <OceanClickEffect>
          <div className="flex flex-col min-h-screen w-full">
            <Header />
            <main className="flex-1 pt-16 w-full">
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
          </div>
        </OceanClickEffect>
      </body>
    </html>
  )
}
