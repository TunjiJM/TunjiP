"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { ArrowLeft, Store, Phone, Send, Paperclip, Users } from "lucide-react"
import { v4 as uuidv4 } from "uuid"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Define message interface
interface Message {
  id: string
  content: string
  sender_id: string
  sender_name: string
  sender_avatar?: string
  timestamp: string
  isCurrentUser: boolean
}

// Define props interface
interface WhatsAppChatProps {
  communityName: string
  communityImage?: string
  roomId: string
  industryId: string
}

// Sample data for simulating messages
const sampleMessages = [
  {
    id: "sim-1",
    content: "Hello everyone! I'm looking for quality suppliers in this industry.",
    sender_id: "user1",
    sender_name: "Maria Chen",
    timestamp: new Date(Date.now() - 3600000).toISOString(),
    isCurrentUser: false,
  },
  {
    id: "sim-2",
    content: "Welcome Maria! We have premium products available. What quantities are you looking for?",
    sender_id: "user2",
    sender_name: "John Smith",
    timestamp: new Date(Date.now() - 3500000).toISOString(),
    isCurrentUser: false,
  },
  {
    id: "sim-3",
    content: "I can offer competitive prices for bulk orders.",
    sender_id: "user3",
    sender_name: "Ahmed Hassan",
    timestamp: new Date(Date.now() - 3400000).toISOString(),
    isCurrentUser: false,
  },
  {
    id: "sim-4",
    content: "We're looking for about 500 units per month. Can anyone meet this demand?",
    sender_id: "user1",
    sender_name: "Maria Chen",
    timestamp: new Date(Date.now() - 3300000).toISOString(),
    isCurrentUser: false,
  },
  {
    id: "sim-5",
    content: "Yes, we can handle that volume easily. Let me send you our catalog.",
    sender_id: "user2",
    sender_name: "John Smith",
    timestamp: new Date(Date.now() - 3200000).toISOString(),
    isCurrentUser: false,
  },
]

// Industry-specific sample messages
const industrySamples = {
  seafood: [
    {
      id: "seafood-1",
      content: "We have fresh salmon from Norway available. Anyone interested?",
      sender_id: "seafood-supplier1",
      sender_name: "Nordic Seafood Co.",
      timestamp: new Date(Date.now() - 2800000).toISOString(),
      isCurrentUser: false,
    },
    {
      id: "seafood-2",
      content: "What's the current market price for king crab?",
      sender_id: "seafood-buyer1",
      sender_name: "Sarah Johnson",
      timestamp: new Date(Date.now() - 2700000).toISOString(),
      isCurrentUser: false,
    },
  ],
  fashion: [
    {
      id: "fashion-1",
      content: "We're looking for sustainable cotton suppliers for our new collection.",
      sender_id: "fashion-buyer1",
      sender_name: "Eco Apparel",
      timestamp: new Date(Date.now() - 2800000).toISOString(),
      isCurrentUser: false,
    },
    {
      id: "fashion-2",
      content: "We specialize in organic cotton from India. MOQ is 1000kg.",
      sender_id: "fashion-supplier1",
      sender_name: "Green Textiles",
      timestamp: new Date(Date.now() - 2700000).toISOString(),
      isCurrentUser: false,
    },
  ],
}

export function WhatsAppChat({ communityName, communityImage, roomId, industryId }: WhatsAppChatProps) {
  // State variables
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState("")
  const [guestId] = useState(`guest-${uuidv4().slice(0, 8)}`)
  const [guestName] = useState(`Guest-${Math.floor(1000 + Math.random() * 9000)}`)
  const [localTime, setLocalTime] = useState("")
  const [memberCount] = useState(Math.floor(Math.random() * 30) + 15)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const [isLoaded, setIsLoaded] = useState(false)

  // Initialize with welcome message and sample messages
  useEffect(() => {
    if (!isLoaded) {
      // Create welcome message
      const welcomeMessage = {
        id: "welcome",
        content: `Welcome to the ${communityName}! Connect with other businesses in this industry.`,
        sender_id: "system",
        sender_name: communityName,
        sender_avatar: communityImage,
        timestamp: new Date().toISOString(),
        isCurrentUser: false,
      }

      // Get industry-specific messages if available, otherwise use generic samples
      const industryMessages = industrySamples[industryId as keyof typeof industrySamples] || []

      // Combine welcome message with sample messages
      setMessages([welcomeMessage, ...sampleMessages, ...industryMessages])
      setIsLoaded(true)
    }
  }, [communityName, communityImage, isLoaded, industryId])

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

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Send a new message
  const handleSendMessage = () => {
    if (!newMessage.trim()) return

    const currentTime = new Date().toISOString()
    const messageId = uuidv4()

    // Create new message
    const tempMessage = {
      id: messageId,
      content: newMessage,
      sender_id: guestId,
      sender_name: guestName,
      timestamp: currentTime,
      isCurrentUser: true,
    }

    setMessages((prev) => [...prev, tempMessage])
    setNewMessage("")

    // Simulate a response after a delay (30% chance)
    if (Math.random() < 0.3) {
      setTimeout(
        () => {
          const responses = [
            "Thanks for your message! We'll get back to you soon.",
            "Interesting point. Let me check with our team.",
            "We have similar products available. Would you like more information?",
            "Our MOQ is 100 units. Does that work for you?",
            "We can offer competitive pricing for that quantity.",
          ]

          const randomResponse = responses[Math.floor(Math.random() * responses.length)]
          const randomNames = [
            "Global Trade Co.",
            "Quality Suppliers Ltd.",
            "Best Products Inc.",
            "International Exports",
          ]
          const randomName = randomNames[Math.floor(Math.random() * randomNames.length)]

          const responseMessage = {
            id: uuidv4(),
            content: randomResponse,
            sender_id: `auto-${Math.floor(Math.random() * 1000)}`,
            sender_name: randomName,
            timestamp: new Date().toISOString(),
            isCurrentUser: false,
          }

          setMessages((prev) => [...prev, responseMessage])
        },
        2000 + Math.random() * 3000,
      ) // Random delay between 2-5 seconds
    }
  }

  // Format timestamp to readable time
  const formatTime = (dateString: string) => {
    try {
      const date = new Date(dateString)
      return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    } catch (error) {
      return "12:00" // Fallback time if date parsing fails
    }
  }

  // Get initials from name for avatar fallback
  const getInitials = (name: string) => {
    try {
      return name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .toUpperCase()
        .substring(0, 2)
    } catch (error) {
      return "U" // Fallback initial if parsing fails
    }
  }

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-gray-50">
      {/* Header */}
      <div className="bg-white text-gray-800 p-3 flex items-center gap-3 border-b shadow-sm">
        <button onClick={() => router.back()} className="p-1 rounded-full hover:bg-gray-100">
          <ArrowLeft className="h-6 w-6" />
        </button>

        <div className="relative h-10 w-10 rounded-full overflow-hidden bg-blue-100 flex items-center justify-center">
          {communityImage ? (
            <Image
              src={communityImage || "/placeholder.svg"}
              alt={communityName}
              width={40}
              height={40}
              className="object-cover"
            />
          ) : (
            <span className="text-blue-600 font-semibold">{communityName.charAt(0)}</span>
          )}
        </div>

        <div className="flex-1">
          <div className="font-semibold text-lg">{communityName}</div>
          <div className="text-xs text-gray-500 flex items-center gap-1">
            <Users className="h-3 w-3" /> {memberCount} members • Local time {localTime}
          </div>
        </div>

        <button className="p-2 rounded-full hover:bg-gray-100">
          <Store className="h-5 w-5 text-gray-600" />
        </button>

        <button className="p-2 rounded-full hover:bg-gray-100">
          <Phone className="h-5 w-5 text-gray-600" />
        </button>
      </div>

      {/* Chat area */}
      <div className="flex-1 overflow-y-auto p-4 bg-white">
        {/* Community profile and welcome message */}
        <div className="flex flex-col items-center mb-6 mt-4">
          <div className="w-20 h-20 rounded-full overflow-hidden bg-blue-100 mb-3">
            {communityImage ? (
              <Image
                src={communityImage || "/placeholder.svg"}
                alt={communityName}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-blue-500 text-white text-2xl font-bold">
                {communityName.charAt(0)}
              </div>
            )}
          </div>
          <h2 className="text-xl font-bold text-center">{communityName}</h2>
          <p className="text-center mt-1 text-gray-600 text-sm">You're chatting as {guestName}</p>
        </div>

        {/* Messages */}
        <div className="space-y-3">
          {messages
            .filter((msg) => msg.id !== "welcome")
            .map((message) => (
              <div key={message.id} className={`flex ${message.isCurrentUser ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.isCurrentUser ? "bg-blue-50 rounded-tr-none" : "bg-gray-100 rounded-tl-none"
                  }`}
                >
                  {!message.isCurrentUser && (
                    <div className="flex items-center gap-2 mb-1">
                      <Avatar className="h-6 w-6">
                        {message.sender_avatar ? (
                          <AvatarImage src={message.sender_avatar || "/placeholder.svg"} />
                        ) : (
                          <AvatarFallback className="bg-blue-200 text-blue-700">
                            {getInitials(message.sender_name)}
                          </AvatarFallback>
                        )}
                      </Avatar>
                      <p className="text-xs font-semibold text-blue-600">{message.sender_name}</p>
                    </div>
                  )}
                  <p className="text-gray-800">{message.content}</p>
                  <div className="flex justify-end items-center gap-1 mt-1">
                    <span className="text-xs text-gray-500">{formatTime(message.timestamp)}</span>
                    {message.isCurrentUser && (
                      <svg className="h-3 w-3 text-blue-500" viewBox="0 0 16 15" fill="currentColor">
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
      <div className="flex overflow-x-auto py-2 px-3 bg-gray-50 gap-2 text-sm border-t">
        <button className="whitespace-nowrap px-3 py-1 border border-gray-300 rounded-full text-gray-700 bg-white">
          Send order request
        </button>
        <button className="whitespace-nowrap px-3 py-1 border border-gray-300 rounded-full text-gray-700 bg-white">
          Product catalog
        </button>
        <button className="whitespace-nowrap px-3 py-1 border border-gray-300 rounded-full text-gray-700 bg-white">
          Logistics inquiry
        </button>
        <button className="whitespace-nowrap px-3 py-1 border border-gray-300 rounded-full text-gray-700 bg-white">
          Contact supplier
        </button>
      </div>

      {/* Input */}
      <div className="bg-white p-2 flex items-center gap-2 border-t">
        <div className="flex-1 bg-gray-100 rounded-full flex items-center px-3 py-1">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message"
            className="border-0 outline-none w-full h-9 text-base bg-transparent"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSendMessage()
              }
            }}
          />
        </div>

        {newMessage.trim() ? (
          <button className="p-2 bg-blue-500 text-white rounded-full" onClick={handleSendMessage}>
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
