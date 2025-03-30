import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, MessageCircle, Share2 } from "lucide-react"

interface LiveFeedCardProps {
  username: string
  time: string
  content: string
  imageUrl?: string
  likes: number
  comments: number
  eventName: string
}

export function LiveFeedCard({ username, time, content, imageUrl, likes, comments, eventName }: LiveFeedCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-start space-x-4">
          <Avatar>
            <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
            <AvatarFallback>{username.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">{username}</p>
                <p className="text-xs text-muted-foreground">
                  {time} at <span className="font-medium">{eventName}</span>
                </p>
              </div>
            </div>
            <p>{content}</p>
            {imageUrl && (
              <div className="relative h-48 w-full rounded-md overflow-hidden">
                <Image src={imageUrl || "/placeholder.svg"} alt="Live feed image" fill className="object-cover" />
              </div>
            )}
            <div className="flex items-center space-x-4 pt-2">
              <button className="flex items-center text-muted-foreground hover:text-primary">
                <Heart className="mr-1 h-4 w-4" />
                <span className="text-xs">{likes}</span>
              </button>
              <button className="flex items-center text-muted-foreground hover:text-primary">
                <MessageCircle className="mr-1 h-4 w-4" />
                <span className="text-xs">{comments}</span>
              </button>
              <button className="flex items-center text-muted-foreground hover:text-primary">
                <Share2 className="mr-1 h-4 w-4" />
                <span className="text-xs">Share</span>
              </button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

