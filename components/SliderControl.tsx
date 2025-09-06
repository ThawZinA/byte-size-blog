import type React from "react"
import { useId } from "react"
import Slider from "@/components/Slider"

interface SliderControlProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  value: number
  className?: string
}

export default function SliderControl({ label, value, className, ...props }: SliderControlProps) {
  const id = useId()

  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-2">
        <label htmlFor={id} className="text-sm font-medium text-foreground">
          {label}
        </label>
        <span className="text-sm font-semibold text-primary bg-primary/10 px-2 py-1 rounded">{value}</span>
      </div>
      <Slider {...props} value={value} id={id} />
    </div>
  )
}
