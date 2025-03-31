"use client"

import { useEffect, useRef, useState } from "react"

interface VideoBackgroundProps {
  videoSrc: string
  fallbackImageSrc?: string
  overlayOpacity?: number
  priority?: boolean
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down"
  className?: string
}

export function VideoBackground({
  videoSrc,
  fallbackImageSrc = "/placeholder.svg?height=1080&width=1920",
  overlayOpacity = 0.7,
  priority = true,
  objectFit = "cover",
  className = "",
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    console.log("Video source:", videoSrc)
    const video = videoRef.current
    if (!video) return

    const handleCanPlay = () => {
      console.log("Video can play now")
      setIsLoaded(true)
    }

    const handleError = (e: ErrorEvent) => {
      console.error("Error loading video:", e)
      setHasError(true)
    }

    video.addEventListener("canplay", handleCanPlay)
    video.addEventListener("error", handleError as EventListener)

    // If video is already loaded
    if (video.readyState >= 3) {
      console.log("Video already loaded")
      setIsLoaded(true)
    }

    // Force reload the video
    video.load()

    return () => {
      video.removeEventListener("canplay", handleCanPlay)
      video.removeEventListener("error", handleError as EventListener)
    }
  }, [videoSrc])

  return (
    <div className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}>
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
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ objectFit }}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }} />
    </div>
  )
}

