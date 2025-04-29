"use client"

import { useState, useEffect } from "react"

export function AnimatedText() {
  const [text, setText] = useState("")
  const fullText = "At the heart of Moqify is MOQ"

  useEffect(() => {
    let index = 0
    let isWriting = true

    const animate = () => {
      if (isWriting) {
        setText(fullText.slice(0, index))
        index++
        if (index > fullText.length) {
          isWriting = false
          setTimeout(animate, 1000) // Pause at the end of writing
        } else {
          setTimeout(animate, 100) // Writing speed
        }
      } else {
        setText(fullText.slice(0, index))
        index--
        if (index < 0) {
          isWriting = true
          setTimeout(animate, 500) // Pause before restarting
        } else {
          setTimeout(animate, 50) // Erasing speed
        }
      }
    }

    animate()

    return () => {
      // Cleanup function
    }
  }, [])

  return (
    <div className="h-16 flex items-center justify-center">
      <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
        {text}
        <span className="animate-blink">|</span>
      </p>
    </div>
  )
}
