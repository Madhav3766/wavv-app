import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { EventCard } from "@/components/event-card"
import { Edit, Settings, Users, Calendar, MapPin, LinkIcon } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="wavv-container py-8 space-y-8">
      <div className="wavv-card rounded-xl p-8">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-4xl font-bold">
            AL
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
              <div>
                <h1 className="text-3xl font-bold">Alex Lee</h1>
                <p className="text-white/70">Tech enthusiast & culinary explorer</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="wavv-button-secondary">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
                <Button variant="outline" size="icon" className="wavv-button-secondary">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-white/50" />
                <span className="text-white/70">New York, NY</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-white/50" />
                <span className="text-white/70">Member since 2025</span>
              </div>
              <div className="flex items-center">
                <LinkIcon className="h-5 w-5 mr-2 text-white/50" />
                <a href="#" className="text-white/70 hover:text-white">
                  alexlee.com
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
              <Badge variant="secondary" className="bg-white/10 hover:bg-white/20 text-white">
                Nightlife
              </Badge>
              <Badge variant="secondary" className="bg-white/10 hover:bg-white/20 text-white">
                Culinary
              </Badge>
              <Badge variant="secondary" className="bg-white/10 hover:bg-white/20 text-white">
                Tech
              </Badge>
              <Badge variant="secondary" className="bg-white/10 hover:bg-white/20 text-white">
                Arts
              </Badge>
              <Badge variant="secondary" className="bg-white/10 hover:bg-white/20 text-white">
                Networking
              </Badge>
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <div className="flex items-center justify-center md:justify-start">
                <Users className="h-4 w-4 mr-2 text-white/50" />
                <span className="text-sm">
                  <span className="font-medium">42</span> Connections
                </span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <span className="text-sm">
                  <span className="font-medium">2</span> Invites Remaining
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Your Events</h2>
          <Button variant="link" className="text-white/70 hover:text-white p-0">
            View all
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <EventCard
            title="Tech Founders Mixer"
            date="Friday, 6:30 PM"
            location="Innovation Hub"
            imageUrl="/placeholder.svg?height=300&width=400"
            category="Networking"
            attendees={35}
            premium={true}
          />
          <EventCard
            title="Wine & Art Exhibition"
            date="Tomorrow, 7:00 PM"
            location="Gallery 23, Arts District"
            imageUrl="/placeholder.svg?height=300&width=400"
            category="Arts"
            attendees={28}
            premium={false}
          />
        </div>
      </div>
    </div>
  )
}

