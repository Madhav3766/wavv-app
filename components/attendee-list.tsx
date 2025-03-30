"use client"

import { Button } from "@/components/ui/button"
import { UserPlus, MessageSquare } from "lucide-react"

interface AttendeeProps {
  id: string
  name: string
  imageUrl?: string
  bio?: string
  isConnected: boolean
}

interface AttendeeListProps {
  attendees: AttendeeProps[]
  showConnect?: boolean
  onConnect?: (attendeeId: string) => void
  onViewProfile?: (attendeeId: string) => void
  onMessage?: (attendeeId: string) => void
}

export function AttendeeList({
  attendees,
  showConnect = true,
  onConnect,
  onViewProfile,
  onMessage,
}: AttendeeListProps) {
  return (
    <div className="wavv-card rounded-xl p-6 space-y-4">
      <h2 className="text-xl font-bold">Attendees ({attendees.length})</h2>
      <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
        {attendees.map((attendee) => (
          <div key={attendee.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => onViewProfile?.(attendee.id)}>
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-xs font-bold">
                {attendee.name.charAt(0)}
              </div>
              <div>
                <p className="font-medium text-sm">{attendee.name}</p>
                {attendee.bio && <p className="text-xs text-white/70">{attendee.bio}</p>}
              </div>
            </div>
            <div className="flex gap-2">
              {showConnect && !attendee.isConnected && (
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 wavv-button-secondary"
                  onClick={() => onConnect?.(attendee.id)}
                >
                  <UserPlus className="h-3.5 w-3.5 mr-1" />
                  Connect
                </Button>
              )}
              {attendee.isConnected && (
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 wavv-button-secondary"
                  onClick={() => onMessage?.(attendee.id)}
                >
                  <MessageSquare className="h-3.5 w-3.5 mr-1" />
                  Message
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

