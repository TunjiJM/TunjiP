"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Send } from "lucide-react"

interface Message {
  id: string
  content: string
  user_id: string
  created_at: string
  profiles?: {
    full_name: string
    email: string
  }
}

interface ChatProps {
  roomId: string
  roomName: string
}

export function CommunityChat({ roomId, roomName }: ChatProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState("")
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Fetch user session
  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getSession()
      setUser(data.session?.user || null)
      setLoading(false)
    }
    getUser()
  }, [])

  // Fetch messages and subscribe to new ones
  useEffect(() => {
    // Fetch existing messages
    const fetchMessages = async () => {
      const { data, error } = await supabase
        .from("messages")
        .select(`
          id, 
          content, 
          user_id, 
          created_at,
          profiles:user_id(full_name, email)
        `)
        .eq("room_id", roomId)
        .order("created_at", { ascending: true })

      if (error) {
        console.error("Error fetching messages:", error)
        return
      }

      setMessages(data || [])
    }

    fetchMessages()

    // Subscribe to new messages
    const subscription = supabase
      .channel(`room:${roomId}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
          filter: `room_id=eq.${roomId}`,
        },
        (payload) => {
          // Fetch the user profile for the new message
          const fetchMessageWithProfile = async () => {
            const { data } = await supabase
              .from("profiles")
              .select("full_name, email")
              .eq("id", payload.new.user_id)
              .single()

            const newMessage = {
              ...payload.new,
              profiles: data,
            }

            setMessages((prev) => [...prev, newMessage])
          }

          fetchMessageWithProfile()
        },
      )
      .subscribe()

    return () => {
      subscription.unsubscribe()
    }
  }, [roomId])

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Send a new message
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!newMessage.trim() || !user) return

    try {
      const { error } = await supabase.from("messages").insert({
        room_id: roomId,
        user_id: user.id,
        content: newMessage,
      })

      if (error) throw error

      setNewMessage("")
    } catch (error) {
      console.error("Error sending message:", error)
    }
  }

  // Format timestamp
  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  // Get initials for avatar
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .substring(0, 2)
  }

  if (loading) {
    return <div className="flex justify-center p-4">Loading chat...</div>
  }

  return (
    <div className="flex flex-col h-[600px] border rounded-lg overflow-hidden">
      {/* Chat header */}
      <div className="bg-blue-600 text-white p-4">
        <h2 className="font-bold text-lg">{roomName}</h2>
      </div>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.length === 0 ? (
          <div className="text-center text-gray-500 py-8">No messages yet. Be the first to send a message!</div>
        ) : (
          messages.map((message) => (
            <div key={message.id} className={`flex ${message.user_id === user?.id ? "justify-end" : "justify-start"}`}>
              <div className={`flex max-w-[80%] ${message.user_id === user?.id ? "flex-row-reverse" : ""}`}>
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarFallback>
                    {message.profiles ? getInitials(message.profiles.full_name || message.profiles.email) : "??"}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div
                    className={`rounded-lg p-3 ${
                      message.user_id === user?.id ? "bg-blue-600 text-white" : "bg-white border"
                    }`}
                  >
                    <p>{message.content}</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {message.profiles?.full_name || message.profiles?.email?.split("@")[0]} •{" "}
                    {formatTime(message.created_at)}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      {user ? (
        <form onSubmit={handleSendMessage} className="border-t p-4 flex gap-2">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button type="submit" disabled={!newMessage.trim()}>
            <Send className="h-4 w-4 mr-2" />
            Send
          </Button>
        </form>
      ) : (
        <div className="border-t p-4 text-center">
          <p>Please log in to send messages</p>
        </div>
      )}
    </div>
  )
}
