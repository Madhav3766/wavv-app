import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

export default function RequestInvitePage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <div className="flex-1 items-center justify-center flex p-4">
        <Card className="mx-auto max-w-md w-full bg-black/50 backdrop-blur-sm border-white/10 text-white">
          <CardHeader className="space-y-1">
            <div className="flex justify-center mb-4">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold text-white font-serif">Wavv</span>
              </Link>
            </div>
            <CardTitle className="text-2xl font-bold text-center">Request an Invite</CardTitle>
            <CardDescription className="text-center text-white/70">
              Wavv is an invite-only platform. Tell us about yourself to request access.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">
                Full Name
              </Label>
              <Input
                id="name"
                placeholder="Enter your full name"
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location" className="text-white">
                Location
              </Label>
              <Input
                id="location"
                placeholder="City, Country"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-white"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-white">Interests</Label>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="nightlife"
                    className="border-white/50 data-[state=checked]:bg-white data-[state=checked]:text-black"
                  />
                  <label htmlFor="nightlife" className="text-sm font-medium leading-none text-white">
                    Nightlife
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="culinary"
                    className="border-white/50 data-[state=checked]:bg-white data-[state=checked]:text-black"
                  />
                  <label htmlFor="culinary" className="text-sm font-medium leading-none text-white">
                    Culinary
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="arts"
                    className="border-white/50 data-[state=checked]:bg-white data-[state=checked]:text-black"
                  />
                  <label htmlFor="arts" className="text-sm font-medium leading-none text-white">
                    Arts
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="networking"
                    className="border-white/50 data-[state=checked]:bg-white data-[state=checked]:text-black"
                  />
                  <label htmlFor="networking" className="text-sm font-medium leading-none text-white">
                    Networking
                  </label>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="about" className="text-white">
                About You
              </Label>
              <Textarea
                id="about"
                placeholder="Tell us a bit about yourself, your interests, and why you'd like to join Wavv."
                className="min-h-[100px] bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="referral" className="text-white">
                Referral Code (Optional)
              </Label>
              <Input
                id="referral"
                placeholder="Enter referral code if you have one"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-white"
              />
              <p className="text-xs text-white/50">
                Having a referral code significantly increases your chances of approval.
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-white text-black hover:bg-white/90">Submit Request</Button>
          </CardFooter>
        </Card>
      </div>
      <footer className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        <p>© 2026 Wavv. All rights reserved.</p>
      </footer>
    </div>
  )
}

