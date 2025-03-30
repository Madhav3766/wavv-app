"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface FloatingAnimationProps {
  children: React.ReactNode
  className?: string
  amplitude?: number
  period?: number
}

export function FloatingAnimation({ children, className, amplitude = 10, period = 5 }: FloatingAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const startTimeRef = useRef<number>(Date.now())

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    startTimeRef.current = Date.now()

    const animate = () => {
      const now = Date.now()
      const elapsed = (now - startTimeRef.current) / 1000
      const offset = amplitude * Math.sin((elapsed * 2 * Math.PI) / period)

      if (element) {
        element.style.transform = `translateY(${offset}px)`
      }

      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [amplitude, period])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}

