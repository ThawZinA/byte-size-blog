import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function range(end: number): number[]
export function range(start: number, end: number, step?: number): number[]
export function range(startOrEnd: number, end?: number, step = 1): number[] {
  const output: number[] = []
  let start: number
  let actualEnd: number

  if (typeof end === "undefined") {
    start = 0
    actualEnd = startOrEnd
  } else {
    start = startOrEnd
    actualEnd = end
  }

  for (let i = start; i < actualEnd; i += step) {
    output.push(i)
  }
  return output
}

export function formatDate(date: Date | string): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date))
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "")
}
