"use client"

import { useState } from "react"
import { range } from "@/lib/utils"
import Card from "@/components/Card"
import SliderControl from "@/components/SliderControl"

interface DivisionGroupsDemoProps {
  numOfItems?: number
  initialNumOfGroups?: number
  includeRemainderArea?: boolean
}

interface EquationProps {
  dividend: number
  divisor: number
  remainder: number | null
}

function Equation({ dividend, divisor, remainder }: EquationProps) {
  const quotient = Math.floor(dividend / divisor)

  return (
    <div className="mt-6 p-4 bg-muted rounded-lg">
      <div className="text-center font-mono text-lg">
        <span className="text-primary font-semibold">{dividend}</span>
        <span className="text-muted-foreground"> ÷ </span>
        <span className="text-primary font-semibold">{divisor}</span>
        <span className="text-muted-foreground"> = </span>
        <span className="text-foreground font-semibold">{quotient}</span>
        {remainder !== null && remainder > 0 && (
          <>
            <span className="text-muted-foreground"> remainder </span>
            <span className="text-destructive font-semibold">{remainder}</span>
          </>
        )}
      </div>
    </div>
  )
}

export default function DivisionGroupsDemo({
  numOfItems = 12,
  initialNumOfGroups = 1,
  includeRemainderArea = false,
}: DivisionGroupsDemoProps) {
  const [numOfGroups, setNumOfGroups] = useState(initialNumOfGroups)

  const numOfItemsPerGroup = Math.floor(numOfItems / numOfGroups)
  const remainder = includeRemainderArea ? numOfItems % numOfGroups : null

  const gridClasses = numOfGroups < 4 ? `grid-cols-${numOfGroups}` : "grid-cols-2 grid-rows-2"

  return (
    <Card className="p-6">
      <div className="space-y-6">
        <SliderControl
          label="Number of Groups"
          step={1}
          min={1}
          max={4}
          value={numOfGroups}
          onChange={(ev) => setNumOfGroups(Number(ev.target.value))}
        />

        <div className={`grid gap-4 ${gridClasses}`}>
          {range(numOfGroups).map((groupIndex) => (
            <div key={groupIndex} className="p-4 border-2 border-dashed border-primary/30 rounded-lg">
              <div className="grid grid-cols-3 gap-2">
                {range(numOfItemsPerGroup).map((index) => (
                  <div key={index} className="w-8 h-8 bg-primary rounded-md" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {includeRemainderArea && remainder && remainder > 0 && (
          <div className="border-2 border-dashed border-destructive/30 rounded-lg p-4">
            <p className="text-sm font-medium text-destructive mb-3">Remainder Area</p>
            <div className="flex gap-2">
              {range(remainder).map((index) => (
                <div key={index} className="w-8 h-8 bg-destructive rounded-md" />
              ))}
            </div>
          </div>
        )}

        <Equation dividend={numOfItems} divisor={numOfGroups} remainder={remainder} />
      </div>
    </Card>
  )
}
