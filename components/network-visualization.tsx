"use client"

import { useEffect, useRef } from "react"

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
  connections: number[]
}

interface NetworkVisualizationProps {
  className?: string
}

export function NetworkVisualization({ className }: NetworkVisualizationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions to match window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    // Initialize canvas size
    resizeCanvas()

    // Update canvas size when window is resized
    window.addEventListener("resize", resizeCanvas)

    // Create nodes
    const nodeCount = Math.min(Math.floor(window.innerWidth / 100), 30)
    const nodes: Node[] = []

    // Generate random nodes
    for (let i = 0; i < nodeCount; i++) {
      const radius = Math.random() * 2 + 1
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius,
        color: `rgba(${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(
          Math.random() * 50 + 100,
        )}, ${Math.floor(Math.random() * 100 + 150)}, ${Math.random() * 0.5 + 0.2})`,
        connections: [],
      })
    }

    // Create connections between nodes
    for (let i = 0; i < nodes.length; i++) {
      const connectionCount = Math.floor(Math.random() * 3) + 1
      for (let j = 0; j < connectionCount; j++) {
        const targetIndex = Math.floor(Math.random() * nodes.length)
        if (targetIndex !== i && !nodes[i].connections.includes(targetIndex)) {
          nodes[i].connections.push(targetIndex)
        }
      }
    }

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update node positions
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i]
        node.x += node.vx
        node.y += node.vy

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        // Draw connections
        ctx.beginPath()
        for (const connectionIndex of node.connections) {
          const connectedNode = nodes[connectionIndex]
          const dx = connectedNode.x - node.x
          const dy = connectedNode.y - node.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          // Only draw connections within a certain distance
          if (distance < canvas.width / 4) {
            const opacity = 1 - distance / (canvas.width / 4)
            ctx.strokeStyle = `rgba(150, 120, 255, ${opacity * 0.2})`
            ctx.lineWidth = 0.5
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(connectedNode.x, connectedNode.y)
          }
        }
        ctx.stroke()

        // Draw node
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = node.color
        ctx.fill()
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    // Start animation
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return <canvas ref={canvasRef} className={className} />
}

