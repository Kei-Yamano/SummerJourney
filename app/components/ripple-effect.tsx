"use client"

import type React from "react"

import { useState, useCallback } from "react"

interface RippleProps {
  children: React.ReactNode
  className?: string
  rippleColor?: string
  duration?: number
  intensity?: "light" | "medium" | "strong"
}

interface Ripple {
  id: number
  x: number
  y: number
  size: number
}

export default function RippleEffect({
  children,
  className = "",
  rippleColor = "rgba(255, 255, 255, 0.6)",
  duration = 600,
  intensity = "medium",
}: RippleProps) {
  const [ripples, setRipples] = useState<Ripple[]>([])

  const addRipple = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const rect = event.currentTarget.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height) * (intensity === "light" ? 1.5 : intensity === "strong" ? 3 : 2)
      const x = event.clientX - rect.left - size / 2
      const y = event.clientY - rect.top - size / 2

      const newRipple: Ripple = {
        id: Date.now(),
        x,
        y,
        size,
      }

      setRipples((prev) => [...prev, newRipple])

      setTimeout(() => {
        setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id))
      }, duration)
    },
    [duration, intensity],
  )

  return (
    <div className={`relative overflow-hidden ${className}`} onMouseDown={addRipple}>
      {children}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
            background: `radial-gradient(circle, ${rippleColor} 0%, transparent 70%)`,
            animation: `oceanRipple ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) forwards`,
            boxShadow: `0 0 ${ripple.size * 0.1}px ${rippleColor}`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes oceanRipple {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
