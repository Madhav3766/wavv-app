import type React from "react"
import { MainNav } from "@/components/main-nav"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <MainNav />
      <main className="flex-1 pt-20">{children}</main>
    </div>
  )
}

