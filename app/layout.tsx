import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
})

// Add the Playfair Display font
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
})

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
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'