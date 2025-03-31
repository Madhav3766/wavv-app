"use client"

import { useState, useEffect } from "react"

export function NetworkStats() {
  const [visibleIndex, setVisibleIndex] = useState(0)
  const statements = [
    "a dating app.",
    "a friend-making service.",
    "networking.",
    "mindless scrolling.",
    "random.",
    "the metaverse.",
    "a distraction.",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % statements.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [statements.length])

  return (
    <div className="max-w-3xl mx-auto px-4">
      <div className="space-y-8 font-medium">
        <p className="text-xl md:text-2xl tracking-wide text-center">
          We exist to connect our members with meaningful experiences, authentic people, & exclusive events.
        </p>

        <p className="text-xl md:text-2xl tracking-wide text-center">
          We won't tolerate an existence where connections are superficial, events are mediocre, or relationships lack
          depth.
        </p>

        <div className="pt-8 h-[60px] flex items-center justify-center">
          <div className="relative text-center">
            <p className="text-2xl md:text-3xl">
              <span className="italic">this is not</span>{" "}
              <span className="inline-block min-w-[200px] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 transition-opacity duration-500">
                {statements[visibleIndex]}
              </span>
            </p>
          </div>
        </div>

        <p className="text-xl md:text-2xl tracking-wide pt-8 flex items-center justify-center">
          <span className="inline-block w-2 h-2 rounded-full bg-purple-400 mr-3"></span>
          WAVV is an opportunity to elevate your social experience
          <span className="inline-block w-2 h-2 rounded-full bg-purple-400 ml-3"></span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
          <div className="flex items-start">
            <div className="mr-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 12L11 15L16 9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-lg">100% verified members through our invitation system</p>
          </div>

          <div className="flex items-start">
            <div className="mr-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path
                  d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.59 13.51L15.42 17.49"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.41 6.51L8.59 10.49"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-lg">2x more meaningful connections that drive success</p>
          </div>

          <div className="flex items-start">
            <div className="mr-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path
                  d="M19 8.71L13.667 4.56C13.199 4.2 12.563 4.2 12.095 4.56L6.76196 8.71C6.42396 8.97 6.21496 9.36 6.21496 9.78V17.4C6.21496 18.17 6.83496 18.79 7.60496 18.79H18.19C18.96 18.79 19.58 18.17 19.58 17.4V9.78C19.58 9.36 19.371 8.97 19.033 8.71H19Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.07 14.62V11.73H15.07V14.62"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-lg">Exclusive, high-value events for growth & connection</p>
          </div>

          <div className="flex items-start">
            <div className="mr-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path
                  d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 21V19C3 17.9391 3.42143 16.9217 4.17157 16.1716C4.92172 15.4214 5.93913 15 7 15H11C12.0609 15 13.0783 15.4214 13.8284 16.1716C14.5786 16.9217 15 17.9391 15 19V21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 21V19C20.9949 18.1172 20.6979 17.2608 20.1553 16.5644C19.6126 15.868 18.8548 15.3707 18 15.15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-lg">Referral-only membership for an elite community</p>
          </div>
        </div>
      </div>
    </div>
  )
}

