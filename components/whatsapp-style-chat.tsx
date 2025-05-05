"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { ArrowLeft, Store, Phone, User, Send, Smile, Paperclip } from "lucide-react"
import Image from "next/image"
import { Input } from "@/components/ui/input"

interface Message {
  id: string
  content: string
  user_id: string
  created_at: string
  sender_name?: string
  sender_avatar?: string
}

interface WhatsAppChatProps {
  communityId: string
  communityName: string
  communityImage?: string
}

export function WhatsAppStyleChat({ communityId, communityName, communityImage }: WhatsAppChatProps) {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState("")
  const [localTime, setLocalTime] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  // Update local time
  useEffect(() => {
    const updateLocalTime = () => {
      const now = new Date()
      setLocalTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }))
    }

    updateLocalTime()
    const interval = setInterval(updateLocalTime, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  // Fetch user session
  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await supabase.auth.getSession()

        if (!data.session) {
          router.push(`/login?redirect=/communities/seafood/chat`)
          return
        }

        setUser(data.session.user)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching user session:", error)
        setLoading(false)
      }
    }

    getUser()
  }, [router])

  // Fetch messages and subscribe to new ones
  useEffect(() => {
    if (!user) return

    // Fetch existing messages
    const fetchMessages = async () => {
      try {
        const { data, error } = await supabase
          .from("messages")
          .select(`
            id, 
            content, 
            user_id, 
            created_at,
            profiles:user_id (full_name, avatar_url)
          `)
          .eq("room_id", communityId)
          .order("created_at", { ascending: true })

        if (error) {
          console.error("Error fetching messages:", error)
          return
        }

        // Format messages with sender info
        const formattedMessages =
          data?.map((msg) => ({
            id: msg.id,
            content: msg.content,
            user_id: msg.user_id,
            created_at: msg.created_at,
            sender_name: msg.profiles?.full_name || "Anonymous",
            sender_avatar: msg.profiles?.avatar_url,
          })) || []

        setMessages(formattedMessages)

        // If no messages, add a welcome message
        if (formattedMessages.length === 0) {
          setMessages([
            {
              id: "welcome",
              content: "Welcome! Want to learn more about our products? Start chatting 😊",
              user_id: "system",
              created_at: new Date().toISOString(),
              sender_name: communityName,
              sender_avatar: communityImage,
            },
          ])
        }
      } catch (error) {
        console.error("Error in fetchMessages:", error)
      }
    }

    fetchMessages()

    // Subscribe to new messages
    const channel = supabase
      .channel(`room:${communityId}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
          filter: `room_id=eq.${communityId}`,
        },
        async (payload) => {
          try {
            // Fetch sender info
            const { data } = await supabase
              .from("profiles")
              .select("full_name, avatar_url")
              .eq("id", payload.new.user_id)
              .single()

            const newMessage = {
              ...payload.new,
              sender_name: data?.full_name || "Anonymous",
              sender_avatar: data?.avatar_url,
            }

            setMessages((prev) => [...prev, newMessage])
          } catch (error) {
            console.error("Error processing new message:", error)
          }
        },
      )
      .subscribe()

    return () => {
      channel.unsubscribe()
    }
  }, [user, communityId, communityName, communityImage])

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Send a new message
  const handleSendMessage = async () => {
    if (!newMessage.trim() || !user) return

    try {
      const { error } = await supabase.from("messages").insert({
        content: newMessage,
        user_id: user.id,
        room_id: communityId,
      })

      if (error) {
        console.error("Error sending message:", error)
        alert("Failed to send message. Please try again.")
      }

      setNewMessage("")
    } catch (error) {
      console.error("Error in handleSendMessage:", error)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-screen bg-gray-100 max-w-md mx-auto">
      {/* WhatsApp-style header */}
      <div className="bg-[#075E54] text-white p-3 flex items-center gap-3">
        <button onClick={() => router.back()} className="p-1">
          <ArrowLeft className="h-6 w-6" />
        </button>

        <div className="flex-1 flex items-center gap-3">
          <div className="font-semibold text-lg">{communityName}</div>
          <div className="text-sm text-gray-200">Local time {localTime}</div>
        </div>

        <button className="p-1">
          <Store className="h-5 w-5" />
        </button>

        <button className="p-1">
          <Phone className="h-5 w-5" />
        </button>

        <button className="p-1">
          <User className="h-5 w-5" />
        </button>
      </div>

      {/* Chat area with WhatsApp-style background */}
      <div
        className="flex-1 overflow-y-auto p-4 bg-[#E5DDD5] bg-opacity-80"
        style={{
          backgroundImage:
            "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII=')",
          backgroundRepeat: "repeat",
        }}
      >
        {/* Community profile and welcome message */}
        {messages.length > 0 && messages[0].id === "welcome" && (
          <div className="flex flex-col items-center mb-6 mt-4">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-300 mb-3">
              {communityImage ? (
                <Image
                  src={communityImage || "/placeholder.svg"}
                  alt={communityName}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-blue-500 text-white text-2xl font-bold">
                  {communityName.charAt(0)}
                </div>
              )}
            </div>
            <h2 className="text-xl font-bold text-center">Welcome!</h2>
            <p className="text-center mt-2 max-w-xs">Want to learn more about our products? Start chatting 😊</p>
          </div>
        )}

        {/* Messages */}
        <div className="space-y-3">
          {messages
            .filter((msg) => msg.id !== "welcome")
            .map((message) => (
              <div
                key={message.id}
                className={`flex ${message.user_id === user?.id ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.user_id === user?.id ? "bg-[#DCF8C6] rounded-tr-none" : "bg-white rounded-tl-none"
                  }`}
                >
                  {message.user_id !== user?.id && (
                    <p className="text-xs font-semibold text-[#075E54] mb-1">{message.sender_name}</p>
                  )}
                  <p className="text-gray-800">{message.content}</p>
                  <div className="flex justify-end items-center gap-1 mt-1">
                    <span className="text-xs text-gray-500">
                      {new Date(message.created_at).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </span>
                    {message.user_id === user?.id && (
                      <svg className="h-3 w-3 text-gray-500" viewBox="0 0 16 15" fill="currentColor">
                        <path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Quick action buttons */}
      <div className="flex overflow-x-auto py-2 px-3 bg-white gap-2 text-sm">
        <button className="whitespace-nowrap px-3 py-1 border border-gray-300 rounded-full text-gray-700">
          Send order request
        </button>
        <button className="whitespace-nowrap px-3 py-1 border border-gray-300 rounded-full text-gray-700">
          Mini-site
        </button>
        <button className="whitespace-nowrap px-3 py-1 border border-gray-300 rounded-full text-gray-700">
          Logistics Inquiry
        </button>
        <button className="whitespace-nowrap px-3 py-1 border border-gray-300 rounded-full text-gray-700">
          File a complaint
        </button>
      </div>

      {/* WhatsApp-style input */}
      <div className="bg-[#F0F0F0] p-2 flex items-center gap-2">
        <button className="p-2 text-gray-600 rounded-full">
          <Smile className="h-6 w-6" />
        </button>

        <div className="flex-1 bg-white rounded-full flex items-center px-3 py-1">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type here to translate"
            className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 h-9 text-base"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSendMessage()
              }
            }}
          />
        </div>

        {newMessage.trim() ? (
          <button className="p-2 bg-[#075E54] text-white rounded-full" onClick={handleSendMessage}>
            <Send className="h-6 w-6" />
          </button>
        ) : (
          <button className="p-2 text-gray-600 rounded-full">
            <Paperclip className="h-6 w-6" />
          </button>
        )}
      </div>
    </div>
  )
}
