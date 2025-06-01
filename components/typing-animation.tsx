"use client"

import { useState, useEffect } from "react"

interface TypingAnimationProps {
  text: string
  speed?: number
  className?: string
}

export function TypingAnimation({ text, speed = 100, className = "" }: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    } else {
      setIsComplete(true)
    }
  }, [currentIndex, text, speed])

  return (
    <h3
      className={`${className} ${isComplete ? "" : "after:inline-block after:w-0.5 after:h-5 after:bg-purple-600 after:animate-blink after:ml-0.5"}`}
    >
      {displayedText}
    </h3>
  )
}
