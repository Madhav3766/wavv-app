import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MessageSquare, Heart, UserPlus } from "lucide-react"

export default function NotificationsPage() {
  return (
    <div className="container py-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Notifications</h1>
        <Button variant="outline">Mark All as Read</Button>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full md:w-auto grid-cols-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="social">Social</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <div className="divide-y">
                <div className="flex items-start space-x-4 p-4 bg-accent/50">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Calendar className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">Event Reminder</p>
                      <span className="text-xs text-muted-foreground">2h ago</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Tech Founders Mixer</span> is happening tomorrow at 6:30 PM.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <UserPlus className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">New Connection</p>
                      <span className="text-xs text-muted-foreground">5h ago</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Michael Chen</span> accepted your Wave request.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <MessageSquare className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">New Message</p>
                      <span className="text-xs text-muted-foreground">10h ago</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Emma Wilson</span> sent you a message: "Are you going to the rooftop
                      event tonight?"
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Heart className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">Activity Liked</p>
                      <span className="text-xs text-muted-foreground">1d ago</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Sophia Rodriguez</span> liked your post from the Wine & Art
                      Exhibition.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Calendar className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">Event Invitation</p>
                      <span className="text-xs text-muted-foreground">2d ago</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-medium">Highlife Events</span> invited you to{" "}
                      <span className="font-medium">Exclusive Rooftop Soirée</span>.
                    </p>
                    <div className="flex space-x-2 mt-2">
                      <Button size="sm" variant="default">
                        Accept
                      </Button>
                      <Button size="sm" variant="outline">
                        Decline
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="events" className="space-y-4">
          {/* Similar structure as "all" tab but with event notifications only */}
        </TabsContent>
        <TabsContent value="social" className="space-y-4">
          {/* Similar structure as "all" tab but with social notifications only */}
        </TabsContent>
        <TabsContent value="messages" className="space-y-4">
          {/* Similar structure as "all" tab but with message notifications only */}
        </TabsContent>
      </Tabs>
    </div>
  )
}

