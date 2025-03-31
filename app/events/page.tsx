import { EventCard } from "@/components/event-card"
import { Search, Filter, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EventsPage() {
  return (
    <div className="wavv-container py-8 space-y-8">
      {/* Hero Section */}
      <section className="relative rounded-xl overflow-hidden py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-indigo-900/80 z-10"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1200')] bg-cover bg-center"></div>
        <div className="relative z-20 flex flex-col items-center text-center">
          <h1 className="wavv-heading-lg mb-2">Discover Events</h1>
          <p className="text-white/70 text-lg mb-8">Find and join exclusive experiences</p>

          <div className="relative max-w-2xl w-full">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50" />
            <input
              type="text"
              placeholder="Search events by name, location, or category..."
              className="w-full py-4 px-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
          </div>
        </div>
      </section>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <Button className="wavv-button-secondary">
          <Filter className="mr-2 h-4 w-4" />
          All Events
        </Button>
        <Button className="wavv-button-secondary">
          <MapPin className="mr-2 h-4 w-4" />
          Near Me
        </Button>
        <Button className="wavv-button-secondary">Today</Button>
        <Button className="wavv-button-secondary">This Weekend</Button>
        <Button className="wavv-button-secondary">Nightlife</Button>
        <Button className="wavv-button-secondary">Arts</Button>
        <Button className="wavv-button-secondary">Networking</Button>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <EventCard
          title="Exclusive Rooftop Soirée"
          date="Tonight, 8:00 PM"
          location="SkyLounge, Downtown"
          imageUrl="/placeholder.svg?height=300&width=400"
          category="Nightlife"
          attendees={42}
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
          title="Culinary Masterclass"
          date="Next Tuesday, 7:00 PM"
          location="Chef's Table, Midtown"
          imageUrl="/placeholder.svg?height=300&width=400"
          category="Culinary"
          attendees={16}
          premium={true}
        />
        <EventCard
          title="Wellness Retreat Day"
          date="Saturday, 10:00 AM"
          location="Serenity Spa & Gardens"
          imageUrl="/placeholder.svg?height=300&width=400"
          category="Wellness"
          attendees={22}
          premium={false}
        />
        <EventCard
          title="Fashion Week After-Party"
          date="Next Friday, 10:00 PM"
          location="The Loft, Fashion District"
          imageUrl="/placeholder.svg?height=300&width=400"
          category="Nightlife"
          attendees={50}
          premium={true}
        />
      </div>
    </div>
  )
}

