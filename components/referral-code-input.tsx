"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check, X } from "lucide-react"
import Link from "next/link"

interface ReferralCodeInputProps {
  onSubmit: (code: string) => void
}

export function ReferralCodeInput({ onSubmit }: ReferralCodeInputProps) {
  const [code, setCode] = useState("")
  const [status, setStatus] = useState<"idle" | "valid" | "invalid">("idle")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!code.trim()) return

    setIsLoading(true)

    // Simulate API call to validate code
    setTimeout(() => {
      // For demo purposes, codes starting with "WAVV" are valid
      const isValid = code.toUpperCase().startsWith("WAVV")
      setStatus(isValid ? "valid" : "invalid")
      setIsLoading(false)

      if (isValid) {
        onSubmit(code)
      }
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
      <div className="relative flex-1">
        <Input
          type="text"
          placeholder="Enter referral code"
          value={code}
          onChange={(e) => {
            setCode(e.target.value)
            setStatus("idle")
          }}
          className={`wavv-input pr-10 ${status === "valid"
            ? "border-green-500 focus-visible:ring-green-500"
            : status === "invalid"
              ? "border-red-500 focus-visible:ring-red-500"
              : ""
            }`}
        />
        {status === "valid" && <Check className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-green-500" />}
        {status === "invalid" && <X className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-red-500" />}
      </div>
      <Button type="submit" disabled={isLoading || !code.trim()} className="wavv-button-primary">
        {isLoading ? "Checking..." : "Apply"}
      </Button>
      {status === "valid" && (
        <Link href="/popup">
          <Button className="wavv-button-secondary ml-2">Go to App</Button>
        </Link>
      )}
    </form>
  )
}
