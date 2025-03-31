"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Search, UserPlus, Check, X, MessageSquare } from "lucide-react"
import Link from "next/link"

interface Connection {
  id: string
  name: string
  imageUrl?: string
  bio?: string
  mutualConnections: number
  interests: string[]
  status: "connected" | "pending" | "suggested"
}

export default function ConnectionsPage() {
  // Mock connections data
  const initialConnections: Connection[] = [
    {
      id: "1",
      name: "Emma Wilson",
      imageUrl: "/placeholder.svg?height=100&width=100",
      bio: "Art curator & culinary enthusiast",
      mutualConnections: 3,
      interests: ["Arts", "Culinary", "Travel"],
      status: "connected",
    },
    {
      id: "2",
      name: "Michael Chen",
      imageUrl: "/placeholder.svg?height=100&width=100",
      bio: "Tech entrepreneur & wellness advocate",
      mutualConnections: 5,
      interests: ["Tech", "Wellness", "Networking"],
      status: "connected",
    },
    {
      id: "3",
      name: "Sophia Rodriguez",
      imageUrl: "/placeholder.svg?height=100&width=100",
      bio: "Fashion designer & nightlife connoisseur",
      mutualConnections: 2,
      interests: ["Fashion", "Nightlife", "Arts"],
      status: "connected",
    },
    {
      id: "4",
      name: "James Thompson",
      imageUrl: "/placeholder.svg?height=100&width=100",
      bio: "Venture capitalist & networking expert",
      mutualConnections: 7,
      interests: ["Finance", "Networking", "Tech"],
      status: "pending",
    },
    {
      id: "5",
      name: "Olivia Parker",
      imageUrl: "/placeholder.svg?height=100&width=100",
      bio: "Food critic & travel blogger",
      mutualConnections: 4,
      interests: ["Culinary", "Travel", "Photography"],
      status: "pending",
    },
    {
      id: "6",
      name: "David Kim",
      imageUrl: "/placeholder.svg?height=100&width=100",
      bio: "Photographer & arts enthusiast",
      mutualConnections: 1,
      interests: ["Photography", "Arts", "Travel"],
      status: "suggested",
    },
    {
      id: "7",
      name: "Sarah Johnson",
      imageUrl: "/placeholder.svg?height=100&width=100",
      bio: "Marketing executive & wine enthusiast",
      mutualConnections: 3,
      interests: ["Marketing", "Culinary", "Networking"],
      status: "suggested",
    },
  ]

  const [connections, setConnections] = useState(initialConnections)
  const [searchQuery, setSearchQuery] = useState("")

  const handleConnect = (id: string) => {
    setConnections(
      connections.map((connection) => (connection.id === id ? { ...connection, status: "pending" } : connection)),
    )
  }

  const handleAccept = (id: string) => {
    setConnections(
      connections.map((connection) => (connection.id === id ? { ...connection, status: "connected" } : connection)),
    )
  }

  const handleDecline = (id: string) => {
    setConnections(connections.filter((connection) => connection.id !== id))
  }

  const filteredConnections = connections.filter((connection) =>
    connection.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const connectedUsers = filteredConnections.filter((connection) => connection.status === "connected")
  const pendingUsers = filteredConnections.filter((connection) => connection.status === "pending")
  const suggestedUsers = filteredConnections.filter((connection) => connection.status === "suggested")

  return (
    <div className="wavv-container py-8 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Connections</h1>
          <p className="text-white/70">Manage your network and discover new connections</p>
        </div>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
        <Input
          type="search"
          placeholder="Search connections..."
          className="wavv-input pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Tabs defaultValue="connected" className="w-full">
        <TabsList className="bg-white/5 border border-white/10">
          <TabsTrigger value="connected" className="data-[state=active]:bg-white data-[state=active]:text-black">
            Connected ({connectedUsers.length})
          </TabsTrigger>
          <TabsTrigger value="pending" className="data-[state=active]:bg-white data-[state=active]:text-black">
            Pending ({pendingUsers.length})
          </TabsTrigger>
          <TabsTrigger value="suggested" className="data-[state=active]:bg-white data-[state=active]:text-black">
            Suggested ({suggestedUsers.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="connected" className="space-y-4 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {connectedUsers.map((connection) => (
              <div key={connection.id} className="wavv-card rounded-xl p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-xs font-bold">
                    {connection.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium">{connection.name}</p>
                        <p className="text-xs text-white/70">{connection.bio}</p>
                        {connection.mutualConnections > 0 && (
                          <div className="flex items-center mt-1 text-xs text-white/50">
                            <span className="mr-1">{connection.mutualConnections} mutual</span>
                            {connection.mutualConnections !== 1 ? "connections" : "connection"}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {connection.interests.map((interest) => (
                    <Badge key={interest} variant="secondary" className="bg-white/10 text-white text-xs">
                      {interest}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Link href={`/messages?user=${connection.id}`} className="flex-1">
                    <Button variant="outline" size="sm" className="wavv-button-secondary w-full">
                      <MessageSquare className="h-3.5 w-3.5 mr-1" />
                      Message
                    </Button>
                  </Link>
                  <Link href={`/profile/${connection.id}`} className="flex-1">
                    <Button variant="outline" size="sm" className="wavv-button-secondary w-full">
                      View Profile
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="pending" className="space-y-4 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pendingUsers.map((connection) => (
              <div key={connection.id} className="wavv-card rounded-xl p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-xs font-bold">
                    {connection.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium">{connection.name}</p>
                        <p className="text-xs text-white/70">{connection.bio}</p>
                        {connection.mutualConnections > 0 && (
                          <div className="flex items-center mt-1 text-xs text-white/50">
                            <span className="mr-1">{connection.mutualConnections} mutual</span>
                            {connection.mutualConnections !== 1 ? "connections" : "connection"}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1 wavv-button-primary"
                    onClick={() => handleAccept(connection.id)}
                  >
                    <Check className="h-3.5 w-3.5 mr-1" />
                    Accept
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 wavv-button-secondary"
                    onClick={() => handleDecline(connection.id)}
                  >
                    <X className="h-3.5 w-3.5 mr-1" />
                    Decline
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="suggested" className="space-y-4 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {suggestedUsers.map((connection) => (
              <div key={connection.id} className="wavv-card rounded-xl p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-xs font-bold">
                    {connection.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium">{connection.name}</p>
                        <p className="text-xs text-white/70">{connection.bio}</p>
                        {connection.mutualConnections > 0 && (
                          <div className="flex items-center mt-1 text-xs text-white/50">
                            <span className="mr-1">{connection.mutualConnections} mutual</span>
                            {connection.mutualConnections !== 1 ? "connections" : "connection"}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {connection.interests.map((interest) => (
                    <Badge key={interest} variant="secondary" className="bg-white/10 text-white text-xs">
                      {interest}
                    </Badge>
                  ))}
                </div>
                <div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full wavv-button-secondary"
                    onClick={() => handleConnect(connection.id)}
                  >
                    <UserPlus className="h-3.5 w-3.5 mr-1" />
                    Connect
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

