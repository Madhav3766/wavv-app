import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  name: string
  title: string
  avatarUrl?: string
}

export function TestimonialCard({ quote, name, title, avatarUrl }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="mb-4">
          <Quote className="h-6 w-6 text-primary/40" />
        </div>
        <p className="text-muted-foreground flex-1 italic">{quote}</p>
        <div className="flex items-center mt-6">
          <Avatar className="h-10 w-10 mr-3">
            <AvatarImage src={avatarUrl || "/placeholder.svg?height=40&width=40"} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-sm">{name}</p>
            <p className="text-xs text-muted-foreground">{title}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

