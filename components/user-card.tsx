import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users } from "lucide-react"

interface UserCardProps {
  name: string
  bio: string
  imageUrl: string
  mutualConnections: number
}

export function UserCard({ name, bio, imageUrl, mutualConnections }: UserCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-center space-x-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={imageUrl} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-medium">{name}</p>
                <p className="text-xs text-muted-foreground">{bio}</p>
                {mutualConnections > 0 && (
                  <div className="flex items-center mt-1 text-xs text-muted-foreground">
                    <Users className="mr-1 h-3 w-3" />
                    {mutualConnections} mutual connection{mutualConnections !== 1 && "s"}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <Button variant="outline" size="sm" className="w-full">
            Send Wave
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

