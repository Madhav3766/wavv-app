import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <div className="flex-1 items-center justify-center flex p-4">
        <Card className="mx-auto max-w-sm w-full bg-black/50 backdrop-blur-sm border-white/10 text-white">
          <CardHeader className="space-y-1">
            <div className="flex justify-center mb-4">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold text-white font-serif">Wavv</span>
              </Link>
            </div>
            <CardTitle className="text-2xl font-bold text-center">Welcome back</CardTitle>
            <CardDescription className="text-center text-white/70">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-white"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-white">
                  Password
                </Label>
                <Link href="/forgot-password" className="text-sm text-white/70 underline-offset-4 hover:text-white">
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-white"
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button className="w-full bg-white text-black hover:bg-white/90">
              <Link href="/dashboard">Login</Link>
            </Button>
            <div className="mt-4 text-center text-sm text-white/70">
              Don&apos;t have an invite?{" "}
              <Link href="/request-invite" className="text-white underline-offset-4 hover:underline">
                Request one
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
      <footer className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        <p>© 2026 Wavv. All rights reserved.</p>
      </footer>
    </div>
  )
}

