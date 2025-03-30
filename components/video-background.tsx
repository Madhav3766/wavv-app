"use client"

import { useEffect, useRef, useState } from "react"

interface VideoBackgroundProps {
  videoSrc: string
  fallbackImageSrc?: string
  overlayOpacity?: number
  priority?: boolean
}

export function VideoBackground({
  videoSrc,
  fallbackImageSrc = "/placeholder.svg?height=1080&width=1920",
  overlayOpacity = 0.7,
  priority = true,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleCanPlay = () => {
      setIsLoaded(true)
    }

    const handleError = () => {
      console.error("Error loading video")
      setHasError(true)
    }

    video.addEventListener("canplay", handleCanPlay)
    video.addEventListener("error", handleError)

    // If video is already loaded
    if (video.readyState >= 3) {
      setIsLoaded(true)
    }

    return () => {
      video.removeEventListener("canplay", handleCanPlay)
      video.removeEventListener("error", handleError)
    }
  }, [])

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {(!isLoaded || hasError) && (
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${fallbackImageSrc})` }} />
      )}
      {!hasError && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload={priority ? "auto" : "metadata"}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }} />
    </div>
  )
}

