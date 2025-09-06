import type React from "react"
import { forwardRef } from "react"
import { cn } from "@/lib/utils"

interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

const Slider = forwardRef<HTMLInputElement, SliderProps>(({ className, ...props }, ref) => {
  return (
    <input
      type="range"
      className={cn(
        "w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer",
        "slider:bg-primary slider:h-2 slider:rounded-lg slider:border-0",
        "[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4",
        "[&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:cursor-pointer",
        "[&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full",
        "[&::-moz-range-thumb]:bg-primary [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-0",
        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})

Slider.displayName = "Slider"

export default Slider
