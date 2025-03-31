"use client"

import type React from "react"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"

interface Message {
  id: string
  senderId: string
  text: string
  timestamp: string
  isCurrentUser: boolean
}

interface ChatUser {
  id: string
  name: string
  imageUrl?: string
  status?: "online" | "offline" | "away"
  lastSeen?: string
}

interface ChatInterfaceProps {
  currentUser: ChatUser
  recipient: ChatUser
  messages: Message[]
  onSendMessage: (text: string) => void
}

export function ChatInterface({ currentUser, recipient, messages, onSendMessage }: ChatInterfaceProps) {
  const [messageText, setMessageText] = useState("")

  const handleSendMessage = () => {
    if (messageText.trim()) {
      onSendMessage(messageText)
      setMessageText("")
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="px-4 py-3 border-b">
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage src={recipient.imageUrl || "/placeholder.svg?height=40&width=40"} />
            <AvatarFallback>{recipient.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-base">{recipient.name}</CardTitle>
            <p className="text-xs text-muted-foreground">
              {recipient.status === "online" ? (
                <span className="flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 mr-1"></span> Online
                </span>
              ) : (
                `Last seen ${recipient.lastSeen || "recently"}`
              )}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 p-0 flex flex-col">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.isCurrentUser ? "justify-end" : "justify-start"}`}>
              <div className="flex items-start max-w-[80%]">
                {!message.isCurrentUser && (
                  <Avatar className="h-8 w-8 mr-2 mt-1">
                    <AvatarImage src={recipient.imageUrl || "/placeholder.svg?height=32&width=32"} />
                    <AvatarFallback>{recipient.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={`p-3 rounded-lg ${
                    message.isCurrentUser ? "bg-primary text-primary-foreground" : "bg-muted"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.isCurrentUser ? "text-primary-foreground/70" : "text-muted-foreground"
                    }`}
                  >
                    {message.timestamp}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t">
          <div className="flex items-center space-x-2">
            <Input
              placeholder="Type a message..."
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <Button size="icon" onClick={handleSendMessage} disabled={!messageText.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

