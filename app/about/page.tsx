"use client"

import Link from "next/link"
import { useState } from "react"
import { Instagram } from "lucide-react"

export default function AboutPage() {
  const [showContent, setShowContent] = useState(false)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
      <div className="max-w-3xl w-full mx-auto flex flex-col items-center justify-center gap-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-3xl font-light tracking-wider text-white font-serif">WAVV</span>
        </Link>

        {/* About Content */}
        {showContent ? (
          <div className="space-y-8 text-center animate-fade-in">
            <p className="text-lg font-light tracking-wide leading-relaxed text-white/80">
              WAVV is an exclusive, invite-only platform connecting individuals with premium in-real-life experiences
              and authentic connections.
            </p>

            <p className="text-lg font-light tracking-wide leading-relaxed text-white/80">
              Our curated community brings together like-minded individuals who value meaningful interactions, exclusive
              events, and authentic relationships.
            </p>

            <p className="text-lg font-light tracking-wide leading-relaxed text-white/80">
              Founded in 2026, WAVV has grown to become the premier destination for those seeking quality over quantity
              in their social experiences.
            </p>

            <button
              onClick={() => setShowContent(false)}
              className="px-6 py-2 border border-white/20 rounded-sm text-sm font-light tracking-wider hover:bg-white/5 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={() => setShowContent(true)}
              className="px-6 py-2 border border-white/20 rounded-sm text-sm font-light tracking-wider hover:bg-white/5 transition-colors"
            >
              about
            </button>

            <Link
              href="/contact"
              className="px-6 py-2 border border-white/20 rounded-sm text-sm font-light tracking-wider hover:bg-white/5 transition-colors"
            >
              contact
            </Link>

            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 p-2 border border-white/20 rounded-full hover:bg-white/5 transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 flex gap-6 text-xs font-light text-white/50">
        <Link href="/privacy" className="hover:text-white/80 transition-colors">
          privacy policy
        </Link>
        <Link href="/terms" className="hover:text-white/80 transition-colors">
          terms of service
        </Link>
      </div>
    </div>
  )
}

