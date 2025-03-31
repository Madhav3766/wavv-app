"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"

export default function ContactPage() {
  const [messageSent, setMessageSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setMessageSent(true)
    }, 1000)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
      <div className="max-w-3xl w-full mx-auto flex flex-col items-center justify-center gap-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-3xl font-light tracking-wider text-white font-serif">WAVV</span>
        </Link>

        {/* Contact Form */}
        {messageSent ? (
          <div className="space-y-8 text-center animate-fade-in">
            <p className="text-lg font-light tracking-wide leading-relaxed text-white/80">
              Thank you for your message. We will get back to you shortly.
            </p>

            <Link href="/">
              <button className="px-6 py-2 border border-white/20 rounded-sm text-sm font-light tracking-wider hover:bg-white/5 transition-colors">
                Return Home
              </button>
            </Link>
          </div>
        ) : (
          <div className="w-full max-w-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-light tracking-wider text-white/80 mb-2">
                  name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-3 py-2 bg-transparent border border-white/20 rounded-sm text-white font-light tracking-wide focus:outline-none focus:border-white/50"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-light tracking-wider text-white/80 mb-2">
                  email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-3 py-2 bg-transparent border border-white/20 rounded-sm text-white font-light tracking-wide focus:outline-none focus:border-white/50"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-light tracking-wider text-white/80 mb-2">
                  message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full px-3 py-2 bg-transparent border border-white/20 rounded-sm text-white font-light tracking-wide focus:outline-none focus:border-white/50 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-2 border border-white/20 rounded-sm text-sm font-light tracking-wider hover:bg-white/5 transition-colors"
              >
                send
              </button>
            </form>

            <div className="flex justify-center mt-8">
              <Link
                href="/about"
                className="px-6 py-2 border border-white/20 rounded-sm text-sm font-light tracking-wider hover:bg-white/5 transition-colors"
              >
                about
              </Link>
            </div>
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

