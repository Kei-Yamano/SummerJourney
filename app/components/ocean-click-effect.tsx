"use client"

import type React from "react"

import { useState, useCallback, useEffect } from "react"

interface Particle {
  id: number
  x: number
  y: number
  type: "bubble" | "light" | "fish" | "jellyfish" | "sparkle"
  size: number
  velocity: { x: number; y: number }
  rotation: number
  opacity: number
  color: string
  lifespan: number
  maxLifespan: number
}

interface OceanClickEffectProps {
  children: React.ReactNode
}

export default function OceanClickEffect({ children }: OceanClickEffectProps) {
  const [particles, setParticles] = useState<Particle[]>([])

  const createParticle = useCallback((x: number, y: number, type: Particle["type"]): Particle => {
    const id = Date.now() + Math.random()
    const size =
      type === "fish"
        ? 20 + Math.random() * 15
        : type === "jellyfish"
          ? 15 + Math.random() * 10
          : type === "bubble"
            ? 8 + Math.random() * 12
            : type === "light"
              ? 6 + Math.random() * 8
              : 4 + Math.random() * 6

    const velocity = {
      x: type === "fish" ? (Math.random() - 0.5) * 4 : (Math.random() - 0.5) * 2,
      y:
        type === "bubble"
          ? -1 - Math.random() * 2
          : type === "light"
            ? -0.5 - Math.random() * 1
            : type === "fish"
              ? (Math.random() - 0.5) * 2
              : type === "jellyfish"
                ? -0.3 - Math.random() * 0.7
                : -0.8 - Math.random() * 1.2,
    }

    const colors = {
      bubble: ["rgba(173, 216, 230, 0.8)", "rgba(135, 206, 235, 0.7)", "rgba(176, 224, 230, 0.9)"],
      light: ["rgba(255, 255, 255, 0.9)", "rgba(255, 248, 220, 0.8)", "rgba(173, 216, 230, 0.7)"],
      fish: ["rgba(255, 165, 0, 0.8)", "rgba(255, 69, 0, 0.7)", "rgba(255, 140, 0, 0.9)"],
      jellyfish: ["rgba(147, 112, 219, 0.6)", "rgba(138, 43, 226, 0.5)", "rgba(186, 85, 211, 0.7)"],
      sparkle: ["rgba(255, 215, 0, 0.9)", "rgba(255, 255, 255, 0.8)", "rgba(173, 216, 230, 0.7)"],
    }

    const maxLifespan =
      type === "fish" ? 4000 : type === "jellyfish" ? 3500 : type === "bubble" ? 3000 : type === "light" ? 2500 : 2000

    return {
      id,
      x,
      y,
      type,
      size,
      velocity,
      rotation: Math.random() * 360,
      opacity: 1,
      color: colors[type][Math.floor(Math.random() * colors[type].length)],
      lifespan: maxLifespan,
      maxLifespan,
    }
  }, [])

  const handleClick = useCallback(
    (event: MouseEvent) => {
      const { clientX, clientY } = event
      const newParticles: Particle[] = []

      // Create different types of particles
      const particleTypes: Particle["type"][] = ["bubble", "light", "sparkle"]

      // Create 8-15 particles per click
      const particleCount = 8 + Math.floor(Math.random() * 8)

      for (let i = 0; i < particleCount; i++) {
        const offsetX = (Math.random() - 0.5) * 100
        const offsetY = (Math.random() - 0.5) * 100
        const type = particleTypes[Math.floor(Math.random() * particleTypes.length)]

        newParticles.push(createParticle(clientX + offsetX, clientY + offsetY, type))
      }

      setParticles((prev) => [...prev, ...newParticles])
    },
    [createParticle],
  )

  useEffect(() => {
    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [handleClick])

  useEffect(() => {
    const animationFrame = requestAnimationFrame(function animate() {
      setParticles((prev) =>
        prev
          .map((particle) => ({
            ...particle,
            x: particle.x + particle.velocity.x,
            y: particle.y + particle.velocity.y,
            rotation: particle.rotation + (particle.type === "fish" ? 2 : 1),
            opacity: particle.opacity * (particle.lifespan / particle.maxLifespan),
            lifespan: particle.lifespan - 16,
            velocity: {
              ...particle.velocity,
              y: particle.velocity.y + (particle.type === "bubble" ? -0.01 : 0.01),
            },
          }))
          .filter((particle) => particle.lifespan > 0),
      )
      requestAnimationFrame(animate)
    })

    return () => cancelAnimationFrame(animationFrame)
  }, [])

  const renderParticle = (particle: Particle) => {
    const style: React.CSSProperties = {
      position: "fixed",
      left: particle.x - particle.size / 2,
      top: particle.y - particle.size / 2,
      width: particle.size,
      height: particle.size,
      opacity: particle.opacity,
      transform: `rotate(${particle.rotation}deg)`,
      pointerEvents: "none",
      zIndex: 9999,
      transition: "none",
    }

    switch (particle.type) {
      case "bubble":
        return (
          <div
            key={particle.id}
            style={{
              ...style,
              background: `radial-gradient(circle at 30% 30%, ${particle.color}, transparent 70%)`,
              borderRadius: "50%",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              boxShadow: "inset 0 0 10px rgba(255, 255, 255, 0.3)",
            }}
          />
        )

      case "light":
        return (
          <div
            key={particle.id}
            style={{
              ...style,
              background: `radial-gradient(circle, ${particle.color}, transparent 70%)`,
              borderRadius: "50%",
              filter: "blur(1px)",
              boxShadow: `0 0 ${particle.size}px ${particle.color}`,
            }}
          />
        )

      case "sparkle":
        return (
          <div
            key={particle.id}
            style={{
              ...style,
              background: particle.color,
              borderRadius: "50%",
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
              animation: "twinkle 0.5s ease-in-out infinite alternate",
            }}
          />
        )

      default:
        return null
    }
  }

  return (
    <>
      {children}
      <div className="fixed inset-0 pointer-events-none z-50">{particles.map(renderParticle)}</div>
      <style jsx>{`
        @keyframes twinkle {
          0% { transform: scale(1) rotate(0deg); }
          100% { transform: scale(1.2) rotate(180deg); }
        }
      `}</style>
    </>
  )
}
