"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { VideoBackground } from "@/components/video-background"
import { ReferralCodeInput } from "@/components/referral-code-input"
import { ArrowRight, Calendar, Users, Shield, ChevronDown, Search } from "lucide-react"

export default function LandingPage() {
  const [showReferralInput, setShowReferralInput] = useState(false)
  const [referralSuccess, setReferralSuccess] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
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
      />

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"}`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center">
              <span className="text-3xl font-bold text-white">Wavv</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/login">
                <Button variant="ghost" className="text-white hover:text-white hover:bg-white/10">
                  Log In
                </Button>
              </Link>
              <Link href="/request-invite">
                <Button className="wavv-button-primary">Request Invite</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <section className="w-full min-h-screen flex items-center">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="wavv-heading-xl">WE GO OUT.</h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
                Join the invite-only community connecting you with premium experiences and like-minded individuals.
              </p>

              {/* Search Bar - Inspired by xceed.me */}
              <div className="relative max-w-2xl mx-auto mt-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50" />
                <input
                  type="text"
                  placeholder="Click anywhere to search for your next memorable experience"
                  className="w-full py-4 px-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>

              {referralSuccess ? (
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 mt-8">
                  <p className="text-white font-medium">
                    Success! Your referral code has been applied. Continue to sign up:
                  </p>
                  <Link href="/request-invite" className="mt-2 inline-block">
                    <Button className="wavv-button-primary w-full mt-4">Complete Registration</Button>
                  </Link>
                </div>
              ) : showReferralInput ? (
                <div className="w-full max-w-md mx-auto mt-8">
                  <ReferralCodeInput onSubmit={handleReferralSubmit} />
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <Button size="lg" className="wavv-button-primary group" onClick={() => setShowReferralInput(true)}>
                    I Have a Referral Code
                  </Button>
                  <Link href="/request-invite">
                    <Button size="lg" className="wavv-button-secondary">
                      Request an Invite
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm text-white/70 mb-2">Discover More</span>
          <ChevronDown className="h-6 w-6 text-white/70" />
        </div>

        {/* Network Visualization Section - NEW */}
        <section className="w-full py-20 bg-gradient-to-b from-black to-black/90">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="wavv-heading-xl mb-4">THE BIGGEST IRL SOCIAL NETWORK</h2>
              <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
                An invite-only network where everyone is just 3 links away
              </p>
            </div>

            <div className="relative h-[400px] mb-16">
              {/* Network Visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full max-w-3xl h-full">
                  {/* Central Node */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-16 w-16 rounded-full bg-white overflow-hidden flex items-center justify-center text-black font-bold z-20 border-2 border-white shadow-lg">
                    <img src="/placeholder.svg?height=64&width=64" alt="You" className="h-full w-full object-cover" />
                  </div>

                  {/* First Level Connections */}
                  <div className="absolute top-1/3 left-1/4 h-10 w-10 rounded-full overflow-hidden z-10 animate-float border border-white/50 shadow-md">
                    <img
                      src="/placeholder.svg?height=40&width=40&text=A"
                      alt="Connection"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div
                    className="absolute top-1/2 left-[15%] h-8 w-8 rounded-full overflow-hidden z-10 animate-float border border-white/50 shadow-md"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <img
                      src="/placeholder.svg?height=32&width=32&text=B"
                      alt="Connection"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div
                    className="absolute top-2/3 left-1/3 h-12 w-12 rounded-full overflow-hidden z-10 animate-float border border-white/50 shadow-md"
                    style={{ animationDelay: "1s" }}
                  >
                    <img
                      src="/placeholder.svg?height=48&width=48&text=C"
                      alt="Connection"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div
                    className="absolute top-1/4 right-1/3 h-9 w-9 rounded-full overflow-hidden z-10 animate-float border border-white/50 shadow-md"
                    style={{ animationDelay: "1.5s" }}
                  >
                    <img
                      src="/placeholder.svg?height=36&width=36&text=D"
                      alt="Connection"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div
                    className="absolute top-1/2 right-1/4 h-11 w-11 rounded-full overflow-hidden z-10 animate-float border border-white/50 shadow-md"
                    style={{ animationDelay: "2s" }}
                  >
                    <img
                      src="/placeholder.svg?height=44&width=44&text=E"
                      alt="Connection"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div
                    className="absolute bottom-1/4 right-1/3 h-10 w-10 rounded-full overflow-hidden z-10 animate-float border border-white/50 shadow-md"
                    style={{ animationDelay: "2.5s" }}
                  >
                    <img
                      src="/placeholder.svg?height=40&width=40&text=F"
                      alt="Connection"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Second Level Connections */}
                  <div
                    className="absolute top-1/5 left-[30%] h-6 w-6 rounded-full overflow-hidden z-5 animate-float border border-white/30 shadow-sm"
                    style={{ animationDelay: "0.2s" }}
                  >
                    <img
                      src="/placeholder.svg?height=24&width=24&text=G"
                      alt="Connection"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div
                    className="absolute top-2/5 left-[10%] h-5 w-5 rounded-full overflow-hidden z-5 animate-float border border-white/30 shadow-sm"
                    style={{ animationDelay: "0.7s" }}
                  >
                    <img
                      src="/placeholder.svg?height=20&width=20&text=H"
                      alt="Connection"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div
                    className="absolute bottom-1/4 left-[20%] h-7 w-7 rounded-full overflow-hidden z-5 animate-float border border-white/30 shadow-sm"
                    style={{ animationDelay: "1.2s" }}
                  >
                    <img
                      src="/placeholder.svg?height=28&width=28&text=I"
                      alt="Connection"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div
                    className="absolute top-[15%] right-[25%] h-6 w-6 rounded-full overflow-hidden z-5 animate-float border border-white/30 shadow-sm"
                    style={{ animationDelay: "1.7s" }}
                  >
                    <img
                      src="/placeholder.svg?height=24&width=24&text=J"
                      alt="Connection"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div
                    className="absolute top-[60%] right-[15%] h-5 w-5 rounded-full overflow-hidden z-5 animate-float border border-white/30 shadow-sm"
                    style={{ animationDelay: "2.2s" }}
                  >
                    <img
                      src="/placeholder.svg?height=20&width=20&text=K"
                      alt="Connection"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div
                    className="absolute bottom-[15%] right-[40%] h-7 w-7 rounded-full overflow-hidden z-5 animate-float border border-white/30 shadow-sm"
                    style={{ animationDelay: "2.7s" }}
                  >
                    <img
                      src="/placeholder.svg?height=28&width=28&text=L"
                      alt="Connection"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Third Level Connections */}
                  <div
                    className="absolute top-[10%] left-[15%] h-4 w-4 rounded-full overflow-hidden z-0 animate-float border border-white/20 shadow-sm"
                    style={{ animationDelay: "0.3s" }}
                  >
                    <img
                      src="/placeholder.svg?height=16&width=16&text=M"
                      alt="Connection"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div
                    className="absolute top-[30%] left-[5%] h-3 w-3 rounded-full overflow-hidden z-0 animate-float border border-white/20 shadow-sm"
                    style={{ animationDelay: "0.8s" }}
                  >
                    <img
                      src="/placeholder.svg?height=12&width=12&text=N"
                      alt="Connection"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div
                    className="absolute bottom-[20%] left-[10%] h-4 w-4 rounded-full overflow-hidden z-0 animate-float border border-white/20 shadow-sm"
                    style={{ animationDelay: "1.3s" }}
                  >
                    <img
                      src="/placeholder.svg?height=16&width=16&text=O"
                      alt="Connection"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div
                    className="absolute top-[5%] right-[20%] h-3 w-3 rounded-full overflow-hidden z-0 animate-float border border-white/20 shadow-sm"
                    style={{ animationDelay: "1.8s" }}
                  >
                    <img
                      src="/placeholder.svg?height=12&width=12&text=P"
                      alt="Connection"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div
                    className="absolute top-[70%] right-[5%] h-4 w-4 rounded-full overflow-hidden z-0 animate-float border border-white/20 shadow-sm"
                    style={{ animationDelay: "2.3s" }}
                  >
                    <img
                      src="/placeholder.svg?height=16&width=16&text=Q"
                      alt="Connection"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div
                    className="absolute bottom-[10%] right-[25%] h-3 w-3 rounded-full overflow-hidden z-0 animate-float border border-white/20 shadow-sm"
                    style={{ animationDelay: "2.8s" }}
                  >
                    <img
                      src="/placeholder.svg?height=12&width=12&text=R"
                      alt="Connection"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                    {/* First level connections */}
                    <line x1="50%" y1="50%" x2="25%" y2="33%" stroke="rgba(168, 85, 247, 0.4)" strokeWidth="1" />
                    <line x1="50%" y1="50%" x2="15%" y2="50%" stroke="rgba(99, 102, 241, 0.4)" strokeWidth="1" />
                    <line x1="50%" y1="50%" x2="33%" y2="67%" stroke="rgba(168, 85, 247, 0.4)" strokeWidth="1" />
                    <line x1="50%" y1="50%" x2="67%" y2="25%" stroke="rgba(99, 102, 241, 0.4)" strokeWidth="1" />
                    <line x1="50%" y1="50%" x2="75%" y2="50%" stroke="rgba(168, 85, 247, 0.4)" strokeWidth="1" />
                    <line x1="50%" y1="50%" x2="67%" y2="75%" stroke="rgba(99, 102, 241, 0.4)" strokeWidth="1" />

                    {/* Second level connections */}
                    <line x1="25%" y1="33%" x2="30%" y2="20%" stroke="rgba(168, 85, 247, 0.2)" strokeWidth="0.5" />
                    <line x1="15%" y1="50%" x2="10%" y2="40%" stroke="rgba(99, 102, 241, 0.2)" strokeWidth="0.5" />
                    <line x1="33%" y1="67%" x2="20%" y2="75%" stroke="rgba(168, 85, 247, 0.2)" strokeWidth="0.5" />
                    <line x1="67%" y1="25%" x2="75%" y2="15%" stroke="rgba(99, 102, 241, 0.2)" strokeWidth="0.5" />
                    <line x1="75%" y1="50%" x2="85%" y2="60%" stroke="rgba(168, 85, 247, 0.2)" strokeWidth="0.5" />
                    <line x1="67%" y1="75%" x2="60%" y2="85%" stroke="rgba(99, 102, 241, 0.2)" strokeWidth="0.5" />

                    {/* Third level connections */}
                    <line
                      x1="30%"
                      y1="20%"
                      x2="15%"
                      y2="10%"
                      stroke="rgba(168, 85, 247, 0.1)"
                      strokeWidth="0.5"
                      strokeDasharray="2"
                    />
                    <line
                      x1="10%"
                      y1="40%"
                      x2="5%"
                      y2="30%"
                      stroke="rgba(99, 102, 241, 0.1)"
                      strokeWidth="0.5"
                      strokeDasharray="2"
                    />
                    <line
                      x1="20%"
                      y1="75%"
                      x2="10%"
                      y2="80%"
                      stroke="rgba(168, 85, 247, 0.1)"
                      strokeWidth="0.5"
                      strokeDasharray="2"
                    />
                    <line
                      x1="75%"
                      y1="15%"
                      x2="80%"
                      y2="5%"
                      stroke="rgba(99, 102, 241, 0.1)"
                      strokeWidth="0.5"
                      strokeDasharray="2"
                    />
                    <line
                      x1="85%"
                      y1="60%"
                      x2="95%"
                      y2="70%"
                      stroke="rgba(168, 85, 247, 0.1)"
                      strokeWidth="0.5"
                      strokeDasharray="2"
                    />
                    <line
                      x1="60%"
                      y1="85%"
                      x2="75%"
                      y2="90%"
                      stroke="rgba(99, 102, 241, 0.1)"
                      strokeWidth="0.5"
                      strokeDasharray="2"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-white mb-2">3</div>
                <p className="text-white/70">Degrees of separation between any two members</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <p className="text-white/70">Verified members through invitation system</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-white mb-2">2x</div>
                <p className="text-white/70">More meaningful connections than traditional networks</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-20 bg-black">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16">
              <h2 className="wavv-heading-lg mb-4">Why Wavv Is Different</h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Not just another social platform - a curated experience designed for quality connections
              </p>
            </div>

            {/* Interactive Feature Cards with Animation */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group wavv-card p-8 rounded-xl hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/15 transition-colors relative z-10">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 relative z-10">Curated Community</h3>
                <p className="text-white/70 mb-4 relative z-10">
                  Every member is carefully vetted to ensure meaningful connections with professionals who share your
                  interests and values.
                </p>
                <ul className="space-y-2 relative z-10">
                  <li className="flex items-center text-white/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                    <span>Invitation-only membership</span>
                  </li>
                  <li className="flex items-center text-white/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                    <span>Quality over quantity</span>
                  </li>
                  <li className="flex items-center text-white/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                    <span>Verified professionals</span>
                  </li>
                </ul>
              </div>

              <div className="group wavv-card p-8 rounded-xl hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/15 transition-colors relative z-10">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 relative z-10">Premium Experiences</h3>
                <p className="text-white/70 mb-4 relative z-10">
                  Access exclusive events that can't be found anywhere else, from intimate gatherings to high-profile
                  networking opportunities.
                </p>
                <ul className="space-y-2 relative z-10">
                  <li className="flex items-center text-white/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                    <span>Exclusive venue access</span>
                  </li>
                  <li className="flex items-center text-white/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                    <span>Curated guest lists</span>
                  </li>
                  <li className="flex items-center text-white/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                    <span>VIP treatment</span>
                  </li>
                </ul>
              </div>

              <div className="group wavv-card p-8 rounded-xl hover:bg-white/5 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/15 transition-colors relative z-10">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 relative z-10">Privacy & Trust</h3>
                <p className="text-white/70 mb-4 relative z-10">
                  A secure environment where your data is protected and interactions are authentic, without the noise of
                  traditional social media.
                </p>
                <ul className="space-y-2 relative z-10">
                  <li className="flex items-center text-white/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                    <span>No public profiles</span>
                  </li>
                  <li className="flex items-center text-white/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                    <span>End-to-end encryption</span>
                  </li>
                  <li className="flex items-center text-white/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mr-2"></span>
                    <span>No data selling</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Testimonial/Social Proof */}
            <div className="mt-16 p-8 wavv-card rounded-xl bg-gradient-to-r from-black to-purple-950/30">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <p className="text-xl italic text-white/90 mb-4">
                    "Wavv has completely transformed how I network and discover events in the city. The quality of
                    people and experiences is unmatched."
                  </p>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 mr-3 flex items-center justify-center text-sm font-bold">
                      JD
                    </div>
                    <div>
                      <p className="font-medium">James Davidson</p>
                      <p className="text-sm text-white/70">Tech Entrepreneur & Wavv Member</p>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex justify-center md:justify-end">
                  <div className="flex flex-col items-center">
                    <p className="text-4xl font-bold wavv-gradient-text mb-2">93%</p>
                    <p className="text-center text-white/70">
                      of members report making valuable connections within their first month
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 bg-gradient-to-b from-black to-purple-950">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="wavv-heading-lg">Ready to Join the Exclusive Community?</h2>
              <p className="text-white/70 text-lg">
                Wavv is currently invite-only. Request access today or use a referral code to join.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Link href="/request-invite">
                  <Button size="lg" className="wavv-button-primary group">
                    Request an Invite
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  className="wavv-button-secondary"
                  onClick={() => {
                    setShowReferralInput(true)
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }}
                >
                  I Have a Referral Code
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 py-8 border-t border-white/10 bg-black">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold text-white">Wavv</span>
              </Link>
              <p className="text-sm text-white/50 mt-1">© 2026 Wavv. All rights reserved.</p>
            </div>
            <div className="flex gap-6">
              <Link href="/terms" className="text-sm text-white/70 hover:text-white">
                Terms
              </Link>
              <Link href="/privacy" className="text-sm text-white/70 hover:text-white">
                Privacy
              </Link>
              <Link href="/contact" className="text-sm text-white/70 hover:text-white">
                Contact
              </Link>
              <Link href="/faq" className="text-sm text-white/70 hover:text-white">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

