import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Wavv - Exclusive Social Platform",
  description: "Connect with premium IRL experiences and exclusive events in an invite-only community",
  keywords: "exclusive events, social platform, networking, premium experiences, invite-only",
  openGraph: {
    title: "Wavv - Exclusive Social Platform",
    description: "Connect with premium IRL experiences and exclusive events in an invite-only community",
    type: "website",
    locale: "en_US",
    url: "https://wavv.app",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'