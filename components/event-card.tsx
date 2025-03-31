import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users } from "lucide-react"

interface EventCardProps {
  title: string
  date: string
  location: string
  imageUrl: string
  category: string
  attendees: number
  premium: boolean
}

export function EventCard({ title, date, location, imageUrl, category, attendees, premium }: EventCardProps) {
  return (
    <Link href={`/events/${title.toLowerCase().replace(/\s+/g, "-")}`}>
      <div className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
        {/* Image with overlay */}
        <div className="relative aspect-[4/3] w-full">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }}></div>

          {/* Premium badge */}
          {premium && (
            <div className="absolute top-3 right-3 z-20">
              <Badge className="bg-white text-black font-medium">Premium</Badge>
            </div>
          )}

          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
            <h3 className="font-bold text-white text-xl mb-2 group-hover:text-white/90 transition-colors">{title}</h3>

            <div className="space-y-1">
              <div className="flex items-center text-sm text-white/80">
                <Calendar className="mr-2 h-4 w-4 text-white/60" />
                {date}
              </div>
              <div className="flex items-center text-sm text-white/80">
                <MapPin className="mr-2 h-4 w-4 text-white/60" />
                {location}
              </div>
              <div className="flex items-center text-sm text-white/80">
                <Users className="mr-2 h-4 w-4 text-white/60" />
                {attendees} attending
              </div>
            </div>

            <div className="flex justify-between items-center pt-3 mt-2 border-t border-white/10">
              <Badge variant="outline" className="text-white/80 border-white/20 bg-black/30">
                {category}
              </Badge>
              <span className="text-xs text-white/60">{premium ? "Approval Required" : "Open to Members"}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

