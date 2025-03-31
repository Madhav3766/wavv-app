"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { VideoBackground } from "@/components/video-background"
import { ReferralCodeInput } from "@/components/referral-code-input"
import { Shield, Search, MapPin } from "lucide-react"
import { NetworkStats } from "@/components/network-stats"

export default function LandingPage() {
  const [showReferralInput, setShowReferralInput] = useState(false)
  const [referralSuccess, setReferralSuccess] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [headingText, setHeadingText] = useState("discover premium events")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const headings = [
      "discover premium events",
      "meet authentic people",
      "elevate your social life",
      "exclusive experiences",
    ]
    let currentIndex = 0

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % headings.length
      setHeadingText(headings[currentIndex])
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  const handleReferralSubmit = (code: string) => {
    console.log("Valid referral code:", code)
    setReferralSuccess(true)
  }

  return (
    <div className="relative flex flex-col min-h-screen text-white">
      {/* Video Background */}
      <VideoBackground
        videoSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3188958-hd_1920_1080_25fps-dMNFIl5cDP7VuB1q9rIEF6bGzM8KjV.mp4"
        fallbackImageSrc="/placeholder.svg?height=1080&width=1920"
        overlayOpacity={0.7}
        objectFit="cover"
      />

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"}`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center">
              <span className="text-3xl font-bold text-white font-serif">WAVV</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/about">
                <Button variant="ghost" className="text-white hover:text-white hover:bg-white/10 font-medium">
                  About
                </Button>
              </Link>
              <Link href="/login">
                <Button variant="ghost" className="text-white hover:text-white hover:bg-white/10 font-medium">
                  Log In
                </Button>
              </Link>
              <Link href="/request-invite">
                <Button className="wavv-button-primary font-medium">Request Invite</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <section className="w-full min-h-screen flex items-center">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                  <Shield className="h-4 w-4 mr-2 text-purple-400" />
                  <span className="text-sm font-medium">Invite-Only Network</span>
                </div>
              </div>

              {/* Fixed height container for the heading */}
              <div className="h-[120px] md:h-[160px] flex items-center justify-center mb-6">
                <h1 className="text-5xl md:text-7xl font-semibold italic font-serif">{headingText}</h1>
              </div>

              {/* Fixed height container for the description */}
              <div className="h-[80px] md:h-[100px] flex items-center justify-center mb-8">
                <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-medium">
                  Join the exclusive community connecting you with premium events and authentic people in your city.
                </p>
              </div>

              {/* Search Bar - Inspired by xceed.me */}
              <div className="relative max-w-2xl mx-auto mb-12">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center">
                  <MapPin className="h-5 w-5 text-white/50 mr-1" />
                  <Search className="h-5 w-5 text-white/50" />
                </div>
                <input
                  type="text"
                  placeholder="Discover events near you: art exhibitions, rooftop parties, networking..."
                  className="w-full py-4 pl-16 pr-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>

              {referralSuccess ? (
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 mt-8">
                  <p className="text-white font-medium">
                    Success! Your referral code has been applied. Continue to sign up:
                  </p>
                  <Link href="/request-invite" className="mt-2 inline-block">
                    <Button className="wavv-button-primary w-full mt-4 font-medium">Complete Registration</Button>
                  </Link>
                </div>
              ) : showReferralInput ? (
                <div className="w-full max-w-md mx-auto mt-8">
                  <ReferralCodeInput onSubmit={handleReferralSubmit} />
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="wavv-button-primary group font-medium"
                    onClick={() => setShowReferralInput(true)}
                  >
                    I Have a Referral Code
                  </Button>
                  <Link href="/request-invite">
                    <Button size="lg" className="wavv-button-secondary font-medium">
                      Request an Invite
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Network Visualization Section */}
        <section className="w-full py-10 bg-black">
          <div className="container px-4 md:px-8 lg:px-12 mx-auto relative overflow-hidden py-16 md:py-24 lg:py-32 max-w-7xl">
            {/* Background network pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="network-grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                    <circle cx="25" cy="25" r="1" fill="white" />
                  </pattern>
                  <radialGradient id="pulse-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.3">
                      <animate attributeName="stopOpacity" values="0.3;0.1;0.3" dur="4s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="100%" stopColor="white" stopOpacity="0">
                      <animate attributeName="stopOpacity" values="0;0.05;0" dur="4s" repeatCount="indefinite" />
                    </stop>
                  </radialGradient>
                </defs>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#network-grid)" />

                {/* Connection lines */}
                <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="white" strokeWidth="0.5" opacity="0.2">
                  <animate attributeName="opacity" values="0.2;0.4;0.2" dur="3s" repeatCount="indefinite" />
                </line>
                <line x1="30%" y1="40%" x2="50%" y2="30%" stroke="white" strokeWidth="0.5" opacity="0.2">
                  <animate attributeName="opacity" values="0.2;0.4;0.2" dur="4s" repeatCount="indefinite" />
                </line>
                <line x1="50%" y1="30%" x2="70%" y2="50%" stroke="white" strokeWidth="0.5" opacity="0.2">
                  <animate attributeName="opacity" values="0.2;0.4;0.2" dur="3.5s" repeatCount="indefinite" />
                </line>
                <line x1="70%" y1="50%" x2="90%" y2="30%" stroke="white" strokeWidth="0.5" opacity="0.2">
                  <animate attributeName="opacity" values="0.2;0.4;0.2" dur="4.5s" repeatCount="indefinite" />
                </line>
                <line x1="20%" y1="70%" x2="40%" y2="80%" stroke="white" strokeWidth="0.5" opacity="0.2">
                  <animate attributeName="opacity" values="0.2;0.4;0.2" dur="3.2s" repeatCount="indefinite" />
                </line>
                <line x1="40%" y1="80%" x2="60%" y2="70%" stroke="white" strokeWidth="0.5" opacity="0.2">
                  <animate attributeName="opacity" values="0.2;0.4;0.2" dur="3.8s" repeatCount="indefinite" />
                </line>
                <line x1="60%" y1="70%" x2="80%" y2="80%" stroke="white" strokeWidth="0.5" opacity="0.2">
                  <animate attributeName="opacity" values="0.2;0.4;0.2" dur="4.2s" repeatCount="indefinite" />
                </line>
                <line x1="80%" y1="80%" x2="100%" y2="60%" stroke="white" strokeWidth="0.5" opacity="0.2">
                  <animate attributeName="opacity" values="0.2;0.4;0.2" dur="4.4s" repeatCount="indefinite" />
                </line>

                {/* Larger nodes */}
                <circle cx="10%" cy="20%" r="2" fill="white" opacity="0.3">
                  <animate attributeName="r" values="2;3;2" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.3;0.5;0.3" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="30%" cy="40%" r="2" fill="white" opacity="0.3">
                  <animate attributeName="r" values="2;3;2" dur="4s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.3;0.5;0.3" dur="4s" repeatCount="indefinite" />
                </circle>
                <circle cx="50%" cy="30%" r="2" fill="white" opacity="0.3">
                  <animate attributeName="r" values="2;3;2" dur="3.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.3;0.5;0.3" dur="3.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="70%" cy="50%" r="2" fill="white" opacity="0.3">
                  <animate attributeName="r" values="2;3;2" dur="4.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.3;0.5;0.3" dur="4.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="90%" cy="30%" r="2" fill="white" opacity="0.3">
                  <animate attributeName="r" values="2;3;2" dur="3.2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.3;0.5;0.3" dur="3.2s" repeatCount="indefinite" />
                </circle>
                <circle cx="20%" cy="70%" r="2" fill="white" opacity="0.3">
                  <animate attributeName="r" values="2;3;2" dur="3.8s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.3;0.5;0.3" dur="3.8s" repeatCount="indefinite" />
                </circle>
                <circle cx="40%" cy="80%" r="2" fill="white" opacity="0.3">
                  <animate attributeName="r" values="2;3;2" dur="4.2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.3;0.5;0.3" dur="4.2s" repeatCount="indefinite" />
                </circle>
                <circle cx="60%" cy="70%" r="2" fill="white" opacity="0.3">
                  <animate attributeName="r" values="2;3;2" dur="3.6s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.3;0.5;0.3" dur="3.6s" repeatCount="indefinite" />
                </circle>
                <circle cx="80%" cy="80%" r="2" fill="white" opacity="0.3">
                  <animate attributeName="r" values="2;3;2" dur="4.4s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.3;0.5;0.3" dur="4.4s" repeatCount="indefinite" />
                </circle>

                {/* Pulsing center effect */}
                <circle cx="50%" cy="50%" r="30%" fill="url(#pulse-gradient)">
                  <animate attributeName="r" values="30%;40%;30%" dur="8s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>

            {/* Updated heading section with more consistent styling */}
            <div className="text-center mb-12 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 blur-2xl opacity-20 -z-10"></div>

              <div className="py-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  <span className="font-sans font-normal not-italic">the biggest irl</span>{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 font-serif italic">
                    social network
                  </span>
                </h2>

                <div className="w-16 h-[1px] bg-white/20 mx-auto my-4"></div>
              </div>
            </div>

            <NetworkStats />
          </div>
        </section>

        {/* Quote Section */}
        <section className="w-full py-10 bg-black">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center">
              <p className="text-xl font-medium italic text-white/80 max-w-2xl mx-auto">
                "Your network is your net worth. Meet people who matter."
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 py-8 border-t border-white/10 bg-black">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold text-white font-serif">WAVV</span>
              </Link>
              <p className="text-sm text-white/50 mt-1 font-medium">© 2026 Wavv. All rights reserved.</p>
            </div>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm text-white/70 hover:text-white font-medium">
                privacy policy
              </Link>
              <Link href="/terms" className="text-sm text-white/70 hover:text-white font-medium">
                terms of service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

