import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, Share2, MessageSquare, ArrowLeft } from "lucide-react"

export default function EventDetailPage({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch the event data based on the slug
  const eventTitle = params.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  // Mock attendee data
  const attendees = [
    {
      id: "1",
      name: "Emma Wilson",
      imageUrl: "/placeholder.svg?height=40&width=40",
      bio: "Art curator & culinary enthusiast",
      isConnected: true,
    },
    {
      id: "2",
      name: "Michael Chen",
      imageUrl: "/placeholder.svg?height=40&width=40",
      bio: "Tech entrepreneur & wellness advocate",
      isConnected: false,
    },
    {
      id: "3",
      name: "Sophia Rodriguez",
      imageUrl: "/placeholder.svg?height=40&width=40",
      bio: "Fashion designer & nightlife connoisseur",
      isConnected: true,
    },
    {
      id: "4",
      name: "James Thompson",
      imageUrl: "/placeholder.svg?height=40&width=40",
      bio: "Venture capitalist & networking expert",
      isConnected: false,
    },
    {
      id: "5",
      name: "Olivia Parker",
      imageUrl: "/placeholder.svg?height=40&width=40",
      bio: "Food critic & travel blogger",
      isConnected: false,
    },
  ]

  return (
    <div className="wavv-container py-8 space-y-8">
      {/* Back Button */}
      <Link href="/events" className="inline-flex items-center text-white/70 hover:text-white">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Events
      </Link>

      {/* Hero Image */}
      <div className="relative aspect-[21/9] rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center"></div>

        {/* Event Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <Badge className="bg-white text-black font-medium mb-3">Premium Event</Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-white">{eventTitle}</h1>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="wavv-button-secondary">
                <Share2 className="h-4 w-4" />
              </Button>
              <Button className="wavv-button-primary">Request to Join</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Event Details */}
          <div className="wavv-card rounded-xl p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-3 text-white/50" />
                <div>
                  <p className="text-sm font-medium">Date</p>
                  <p className="text-sm text-white/70">Friday, June 10, 2026</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-3 text-white/50" />
                <div>
                  <p className="text-sm font-medium">Time</p>
                  <p className="text-sm text-white/70">8:00 PM - 1:00 AM</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-white/50" />
                <div>
                  <p className="text-sm font-medium">Location</p>
                  <p className="text-sm text-white/70">SkyLounge, 123 Main St, Downtown</p>
                </div>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-3 text-white/50" />
                <div>
                  <p className="text-sm font-medium">Capacity</p>
                  <p className="text-sm text-white/70">42 attending / 75 max</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium mb-2">Description</p>
              <p className="text-sm text-white/70">
                Join us for an exclusive rooftop soirée with breathtaking city views, premium cocktails, and networking
                with the city's elite. This premium event features a renowned DJ, gourmet canapés, and a curated guest
                list of professionals and tastemakers.
              </p>
              <p className="text-sm text-white/70 mt-4">
                <span className="font-medium">Dress code:</span> Elegant cocktail attire
              </p>
            </div>
          </div>

          {/* Live Updates */}
          <div className="wavv-card rounded-xl p-6 space-y-4">
            <h2 className="text-xl font-bold">Live Updates</h2>
            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 mr-2 flex items-center justify-center text-xs font-bold">
                    SM
                  </div>
                  <p className="font-medium">Sophie M.</p>
                </div>
                <p className="text-sm text-white/80">
                  The view from this rooftop is absolutely incredible! #SkyLoungeSoirée
                </p>
                <p className="text-xs text-white/50 mt-1">2 minutes ago</p>
              </div>
              <div className="p-4 bg-white/5 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 mr-2 flex items-center justify-center text-xs font-bold">
                    JT
                  </div>
                  <p className="font-medium">James T.</p>
                </div>
                <p className="text-sm text-white/80">
                  The signature cocktails are amazing. You have to try the 'Midnight Sky' - it's their specialty!
                </p>
                <p className="text-xs text-white/50 mt-1">15 minutes ago</p>
              </div>
            </div>
            <div className="mt-4">
              <Button className="wavv-button-secondary w-full">View All Updates</Button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Attendees */}
          <div className="wavv-card rounded-xl p-6 space-y-4">
            <h2 className="text-xl font-bold">Attendees ({attendees.length})</h2>
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
              {attendees.map((attendee) => (
                <div key={attendee.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3 cursor-pointer">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-xs font-bold">
                      {attendee.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-sm">{attendee.name}</p>
                      {attendee.bio && <p className="text-xs text-white/70">{attendee.bio}</p>}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {!attendee.isConnected && (
                      <Button variant="outline" size="sm" className="h-8 wavv-button-secondary">
                        Connect
                      </Button>
                    )}
                    {attendee.isConnected && (
                      <Button variant="outline" size="sm" className="h-8 wavv-button-secondary">
                        Message
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Event Chat */}
          <div className="wavv-card rounded-xl p-6 space-y-4">
            <h2 className="text-xl font-bold">Event Chat</h2>
            <div className="flex flex-col h-[300px] justify-between">
              <div className="space-y-4 overflow-auto">
                <div className="p-3 bg-white/5 rounded-lg">
                  <p className="font-medium text-sm">John D.</p>
                  <p className="text-sm text-white/80">Is anyone else already here? I just arrived.</p>
                  <p className="text-xs text-white/50 mt-1">5:45 PM</p>
                </div>
                <div className="p-3 bg-white/5 rounded-lg">
                  <p className="font-medium text-sm">Sarah M.</p>
                  <p className="text-sm text-white/80">I'm on my way! Should be there in about 15 minutes.</p>
                  <p className="text-xs text-white/50 mt-1">5:50 PM</p>
                </div>
                <div className="p-3 bg-gradient-to-r from-purple-900/30 to-indigo-900/30 rounded-lg">
                  <p className="font-medium text-sm">Highlife Events</p>
                  <p className="text-sm text-white/80">
                    Welcome everyone! The main bar is on the east side of the rooftop. Don't forget to try our signature
                    cocktails!
                  </p>
                  <p className="text-xs text-white/50 mt-1">6:05 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 px-3 py-2 rounded-md text-sm wavv-input"
                />
                <Button size="icon" className="wavv-button-primary">
                  <MessageSquare className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

