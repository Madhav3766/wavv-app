"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Home, Calendar, MessageSquare, User, Users, Menu, X, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"

export function MainNav() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showSearch, setShowSearch] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const routes = [
    {
      href: "/dashboard",
      label: "Home",
      icon: Home,
      active: pathname === "/dashboard",
    },
    {
      href: "/events",
      label: "Events",
      icon: Calendar,
      active: pathname === "/events" || pathname.startsWith("/events/"),
    },
    {
      href: "/messages",
      label: "Messages",
      icon: MessageSquare,
      active: pathname === "/messages",
    },
    {
      href: "/connections",
      label: "Connections",
      icon: Users,
      active: pathname === "/connections",
    },
    {
      href: "/profile",
      label: "Profile",
      icon: User,
      active: pathname === "/profile",
    },
  ]

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/dashboard" className="flex items-center">
            <span className="text-2xl font-bold text-white font-serif">Wavv</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center text-sm font-medium transition-colors hover:text-white",
                  route.active ? "text-white" : "text-white/70",
                )}
              >
                <route.icon className="h-5 w-5 mr-2" />
                <span>{route.label}</span>
              </Link>
            ))}
          </div>

          {/* Search and Mobile Menu Button */}
          <div className="flex items-center gap-2">
            {showSearch ? (
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search..."
                  className="wavv-input pl-10 pr-4 py-2 h-10 w-[200px] md:w-[300px]"
                  autoFocus
                  onBlur={() => setShowSearch(false)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
              </div>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10"
                onClick={() => setShowSearch(true)}
              >
                <Search className="h-5 w-5" />
              </Button>
            )}

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:bg-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md animate-fade-in">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center text-lg font-medium p-2 rounded-md transition-colors",
                  route.active ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/5 hover:text-white",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                <route.icon className="h-5 w-5 mr-3" />
                <span>{route.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

