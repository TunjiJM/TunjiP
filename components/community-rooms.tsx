"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { CommunityChat } from "./community-chat"
import { Plus } from "lucide-react"

interface Room {
  id: string
  name: string
  description: string
}

export function CommunityRooms() {
  const [rooms, setRooms] = useState<Room[]>([])
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null)
  const [newRoomName, setNewRoomName] = useState("")
  const [newRoomDescription, setNewRoomDescription] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [user, setUser] = useState<any>(null)

  // Fetch user session
  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getSession()
      setUser(data.session?.user || null)
    }
    getUser()
  }, [])

  // Fetch rooms
  useEffect(() => {
    const fetchRooms = async () => {
      const { data, error } = await supabase.from("rooms").select("*").order("created_at", { ascending: false })

      if (error) {
        console.error("Error fetching rooms:", error)
        return
      }

      setRooms(data || [])

      // Select the first room by default if none is selected
      if (data && data.length > 0 && !selectedRoom) {
        setSelectedRoom(data[0])
      }
    }

    fetchRooms()

    // Subscribe to new rooms
    const subscription = supabase
      .channel("public:rooms")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "rooms",
        },
        (payload) => {
          setRooms((prev) => [payload.new as Room, ...prev])
        },
      )
      .subscribe()

    return () => {
      subscription.unsubscribe()
    }
  }, [selectedRoom])

  // Create a new room
  const handleCreateRoom = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!newRoomName.trim() || !user) return

    try {
      const { data, error } = await supabase
        .from("rooms")
        .insert({
          name: newRoomName,
          description: newRoomDescription,
        })
        .select()

      if (error) throw error

      setNewRoomName("")
      setNewRoomDescription("")
      setIsDialogOpen(false)

      // Select the newly created room
      if (data && data[0]) {
        setSelectedRoom(data[0])
      }
    } catch (error) {
      console.error("Error creating room:", error)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Community Chat</h1>

        {user && (
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                New Community
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Community</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleCreateRoom} className="space-y-4 pt-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Community Name
                  </label>
                  <Input
                    id="name"
                    value={newRoomName}
                    onChange={(e) => setNewRoomName(e.target.value)}
                    placeholder="e.g., Fashion Industry"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="description" className="block text-sm font-medium mb-1">
                    Description
                  </label>
                  <Input
                    id="description"
                    value={newRoomDescription}
                    onChange={(e) => setNewRoomDescription(e.target.value)}
                    placeholder="What's this community about?"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Create Community
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar with room list */}
        <div className="md:col-span-1 space-y-2">
          <h2 className="font-semibold mb-4">Communities</h2>
          {rooms.length === 0 ? (
            <p className="text-gray-500">No communities yet</p>
          ) : (
            rooms.map((room) => (
              <div
                key={room.id}
                className={`p-3 rounded-lg cursor-pointer ${
                  selectedRoom?.id === room.id ? "bg-blue-100 border-blue-300 border" : "hover:bg-gray-100 border"
                }`}
                onClick={() => setSelectedRoom(room)}
              >
                <h3 className="font-medium">{room.name}</h3>
                {room.description && <p className="text-sm text-gray-600 truncate">{room.description}</p>}
              </div>
            ))
          )}
        </div>

        {/* Chat area */}
        <div className="md:col-span-3">
          {selectedRoom ? (
            <CommunityChat roomId={selectedRoom.id} roomName={selectedRoom.name} />
          ) : (
            <div className="border rounded-lg p-8 text-center">
              <p className="text-gray-500">
                {rooms.length === 0 ? "Create a community to start chatting" : "Select a community to start chatting"}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
