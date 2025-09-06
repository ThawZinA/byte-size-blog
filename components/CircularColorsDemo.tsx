"use client"

import { useState, useEffect } from "react"
import { Play, Pause, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import Card from "@/components/Card"
import VisuallyHidden from "@/components/VisuallyHidden"

const COLORS = [
  { label: "red", value: "hsl(348deg 100% 60%)" },
  { label: "yellow", value: "hsl(50deg 100% 55%)" },
  { label: "blue", value: "hsl(235deg 100% 65%)" },
] as const

export default function CircularColorsDemo() {
  const [timeElapsed, setTimeElapsed] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setTimeElapsed((prev) => prev + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [isPlaying])

  const selectedColor = COLORS[timeElapsed % COLORS.length]

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleReset = () => {
    setTimeElapsed(0)
    setIsPlaying(false)
  }

  return (
    <Card className="p-6">
      <div className="flex flex-col gap-6">
        <ul className="flex justify-center gap-4">
          {COLORS.map((color, index) => {
            const isSelected = color.value === selectedColor.value

            return (
              <li key={index} className="relative">
                {isSelected && <div className="absolute -inset-2 rounded-full border-2 border-primary animate-pulse" />}
                <div
                  className={`w-16 h-16 rounded-full border-4 transition-all duration-300 ${
                    isSelected ? "border-primary scale-110" : "border-border"
                  }`}
                  style={{ backgroundColor: color.value }}
                >
                  <VisuallyHidden>{color.label}</VisuallyHidden>
                </div>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center justify-between">
          <dl className="text-center">
            <dt className="text-sm text-muted-foreground font-medium">Time Elapsed</dt>
            <dd className="text-2xl font-bold text-foreground">{timeElapsed}</dd>
          </dl>

          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={handlePlayPause}>
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              <VisuallyHidden>{isPlaying ? "Pause" : "Play"}</VisuallyHidden>
            </Button>

            <Button variant="outline" size="icon" onClick={handleReset}>
              <RotateCcw className="h-4 w-4" />
              <VisuallyHidden>Reset</VisuallyHidden>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}
