"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Edit, Send } from "lucide-react"

export default function MessagesPage() {
  // Mock data for conversations
  const conversations = [
    {
      id: "1",
      user: {
        id: "user1",
        name: "Emma Wilson",
        imageUrl: "/placeholder.svg?height=40&width=40",
        status: "online" as const,
      },
      lastMessage: "Are you going to the rooftop event tonight?",
      timestamp: "2m",
      unread: true,
    },
    {
      id: "2",
      user: {
        id: "user2",
        name: "Michael Chen",
        imageUrl: "/placeholder.svg?height=40&width=40",
        status: "offline" as const,
        lastSeen: "10 minutes ago",
      },
      lastMessage: "I just sent you an invite to the tech mixer next week.",
      timestamp: "10m",
      unread: false,
    },
    {
      id: "3",
      user: {
        id: "user3",
        name: "Sophia Rodriguez",
        imageUrl: "/placeholder.svg?height=40&width=40",
        status: "away" as const,
        lastSeen: "1 hour ago",
      },
      lastMessage: "The fashion show was amazing! Check out the photos I posted.",
      timestamp: "1h",
      unread: false,
    },
  ]

  // Mock messages for the selected conversation
  const mockMessages = [
    {
      id: "msg1",
      senderId: "user2",
      text: "Hey! I just sent you an invite to the tech mixer next week. It's going to be at the Innovation Hub downtown.",
      timestamp: "10:15 AM",
      isCurrentUser: false,
    },
    {
      id: "msg2",
      senderId: "user2",
      text: "There will be some great founders and VCs there. Thought it might be interesting for you.",
      timestamp: "10:16 AM",
      isCurrentUser: false,
    },
    {
      id: "msg3",
      senderId: "currentUser",
      text: "Thanks for the invite! I've been looking for networking events like this.",
      timestamp: "10:20 AM",
      isCurrentUser: true,
    },
    {
      id: "msg4",
      senderId: "currentUser",
      text: "Is there a dress code for the event?",
      timestamp: "10:21 AM",
      isCurrentUser: true,
    },
    {
      id: "msg5",
      senderId: "user2",
      text: "It's business casual. Nothing too formal, but still professional.",
      timestamp: "10:25 AM",
      isCurrentUser: false,
    },
  ]

  const [selectedConversation, setSelectedConversation] = useState(conversations[1])
  const [messages, setMessages] = useState(mockMessages)
  const [messageText, setMessageText] = useState("")
  const [searchQuery, setSearchQuery] = useState("")

  const handleSendMessage = () => {
    if (!messageText.trim()) return

    const newMessage = {
      id: `msg${messages.length + 1}`,
      senderId: "currentUser",
      text: messageText,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      isCurrentUser: true,
    }

    setMessages([...messages, newMessage])
    setMessageText("")
  }

  const filteredConversations = conversations.filter((convo) =>
    convo.user.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="wavv-container py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[calc(100vh-10rem)]">
        <div className="md:col-span-1 wavv-card rounded-xl overflow-hidden flex flex-col">
          <div className="p-4 border-b border-white/10 flex justify-between items-center">
            <h2 className="font-semibold text-lg">Messages</h2>
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Edit className="h-4 w-4" />
            </Button>
          </div>
          <div className="p-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
              <Input
                type="search"
                placeholder="Search conversations..."
                className="wavv-input pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="overflow-auto flex-1">
            {filteredConversations.map((conversation) => (
              <div
                key={conversation.id}
                className={`p-2 hover:bg-white/5 rounded-md cursor-pointer ${
                  selectedConversation.id === conversation.id ? "bg-white/5" : ""
                }`}
                onClick={() => setSelectedConversation(conversation)}
              >
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-xs font-bold">
                      {conversation.user.name.charAt(0)}
                    </div>
                    {conversation.user.status === "online" && (
                      <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-black"></span>
                    )}
                  </div>
                  <div className="flex-1 space-y-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className={`font-medium text-sm ${conversation.unread ? "font-semibold" : ""}`}>
                        {conversation.user.name}
                      </p>
                      <span className="text-xs text-white/50">{conversation.timestamp}</span>
                    </div>
                    <p
                      className={`text-xs truncate ${conversation.unread ? "text-white font-medium" : "text-white/70"}`}
                    >
                      {conversation.lastMessage}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-2 h-full">
          {selectedConversation ? (
            <div className="wavv-card rounded-xl h-full flex flex-col">
              <div className="p-4 border-b border-white/10">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-xs font-bold">
                    {selectedConversation.user.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium">{selectedConversation.user.name}</p>
                    <p className="text-xs text-white/50">
                      {selectedConversation.user.status === "online" ? (
                        <span className="flex items-center">
                          <span className="h-1.5 w-1.5 rounded-full bg-green-500 mr-1"></span> Online
                        </span>
                      ) : (
                        `Last seen ${selectedConversation.user.lastSeen || "recently"}`
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.isCurrentUser ? "justify-end" : "justify-start"}`}>
                    <div className="flex items-start max-w-[80%]">
                      {!message.isCurrentUser && (
                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-xs font-bold mr-2 mt-1">
                          {selectedConversation.user.name.charAt(0)}
                        </div>
                      )}
                      <div
                        className={`p-3 rounded-lg ${
                          message.isCurrentUser
                            ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                            : "bg-white/10 text-white"
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        <p className={`text-xs mt-1 ${message.isCurrentUser ? "text-white/70" : "text-white/50"}`}>
                          {message.timestamp}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-white/10">
                <div className="flex items-center space-x-2">
                  <Input
                    placeholder="Type a message..."
                    className="wavv-input"
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault()
                        handleSendMessage()
                      }
                    }}
                  />
                  <Button
                    size="icon"
                    className="wavv-button-primary"
                    onClick={handleSendMessage}
                    disabled={!messageText.trim()}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full wavv-card rounded-xl flex items-center justify-center">
              <div className="text-center p-4">
                <p className="text-white/50">Select a conversation to start chatting</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

