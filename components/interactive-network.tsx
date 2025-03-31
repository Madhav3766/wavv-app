"use client"

import { useState, useEffect, useRef } from "react"

const InteractiveNetwork = () => {
  const [nodes, setNodes] = useState([
    {
      id: "you",
      x: 50,
      y: 50,
      size: 4,
      label: "YOU",
      name: "You",
      isCenter: true,
      bio: "This is your profile in the network",
      img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nXyZ3rFAlQSLZlBopX1Prvnhrgrxim.png",
    },
    {
      id: "person1",
      x: 25,
      y: 30,
      size: 2,
      label: "Emma",
      name: "Emma Wilson",
      bio: "Marketing Director | Coffee enthusiast | Dog lover",
      img: "https://randomuser.me/api/portraits/women/1.jpg?size=200",
    },
    {
      id: "person2",
      x: 75,
      y: 25,
      size: 2,
      label: "James",
      name: "James Rodriguez",
      bio: "Software Engineer | Travel addict | Photography buff",
      img: "https://randomuser.me/api/portraits/men/2.jpg?size=200",
    },
    {
      id: "person3",
      x: 30,
      y: 70,
      size: 2,
      label: "Sophia",
      name: "Sophia Chen",
      bio: "Product Designer | Yoga instructor | Foodie",
      img: "https://randomuser.me/api/portraits/women/3.jpg?size=200",
    },
    {
      id: "person4",
      x: 70,
      y: 75,
      size: 2,
      label: "Alex",
      name: "Alex Patel",
      bio: "Data Scientist | Basketball player | Chess master",
      img: "https://randomuser.me/api/portraits/men/4.jpg?size=200",
    },
    {
      id: "person5",
      x: 20,
      y: 50,
      size: 2,
      label: "Olivia",
      name: "Olivia Johnson",
      bio: "HR Manager | Marathon runner | Book club host",
      img: "https://randomuser.me/api/portraits/women/5.jpg?size=200",
    },
    {
      id: "person6",
      x: 80,
      y: 50,
      size: 2,
      label: "Ethan",
      name: "Ethan Williams",
      bio: "Financial Analyst | Guitar player | Craft beer fan",
      img: "https://randomuser.me/api/portraits/men/6.jpg?size=200",
    },
    {
      id: "person7",
      x: 40,
      y: 20,
      size: 1.5,
      label: "Mia",
      name: "Mia Garcia",
      bio: "Graphic Designer | Dance instructor | Art collector",
      img: "https://randomuser.me/api/portraits/women/7.jpg?size=200",
    },
    {
      id: "person8",
      x: 60,
      y: 20,
      size: 1.5,
      label: "Noah",
      name: "Noah Kim",
      bio: "Content Creator | Skateboarder | Podcast host",
      img: "https://randomuser.me/api/portraits/men/8.jpg?size=200",
    },
    {
      id: "person9",
      x: 40,
      y: 80,
      size: 1.5,
      label: "Isabella",
      name: "Isabella Martinez",
      bio: "Architect | Volleyball player | Plant parent",
      img: "https://randomuser.me/api/portraits/women/9.jpg?size=200",
    },
    {
      id: "person10",
      x: 60,
      y: 80,
      size: 1.5,
      label: "Lucas",
      name: "Lucas Thompson",
      bio: "Chef | Cyclist | Film buff",
      img: "https://randomuser.me/api/portraits/men/10.jpg?size=200",
    },
    {
      id: "person11",
      x: 10,
      y: 30,
      size: 1,
      label: "Ava",
      name: "Ava Brown",
      bio: "Journalist | Hiker | True crime enthusiast",
      img: "https://randomuser.me/api/portraits/women/11.jpg?size=200",
    },
    {
      id: "person12",
      x: 90,
      y: 30,
      size: 1,
      label: "Logan",
      name: "Logan Davis",
      bio: "Physical Therapist | Rock climber | Cat person",
      img: "https://randomuser.me/api/portraits/men/12.jpg?size=200",
    },
    {
      id: "person13",
      x: 15,
      y: 70,
      size: 1,
      label: "Zoe",
      name: "Zoe Wright",
      bio: "Environmental Scientist | Surfer | Volunteer",
      img: "https://randomuser.me/api/portraits/women/13.jpg?size=200",
    },
    {
      id: "person14",
      x: 85,
      y: 70,
      size: 1,
      label: "Mason",
      name: "Mason Clark",
      bio: "Music Producer | Gamer | Coffee connoisseur",
      img: "https://randomuser.me/api/portraits/men/14.jpg?size=200",
    },
    {
      id: "person15",
      x: 30,
      y: 40,
      size: 1,
      label: "Lily",
      name: "Lily Taylor",
      bio: "Teacher | Painter | Amateur chef",
      img: "https://randomuser.me/api/portraits/women/15.jpg?size=200",
    },
  ])

  const [selectedNode, setSelectedNode] = useState(null)
  const [connections] = useState([
    ["you", "person1"],
    ["you", "person2"],
    ["you", "person3"],
    ["you", "person4"],
    ["you", "person5"],
    ["you", "person6"],
    ["person1", "person7"],
    ["person2", "person8"],
    ["person3", "person9"],
    ["person4", "person10"],
    ["person5", "person11"],
    ["person6", "person12"],
    ["person1", "person13"],
    ["person4", "person14"],
    ["person3", "person15"],
  ])

  const canvasRef = useRef(null)
  const animationFrameRef = useRef(null)

  // Draw grid background
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      const container = canvas.parentElement
      canvas.width = container.clientWidth
      canvas.height = container.clientHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Draw the grid
    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Center of the grid
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const maxDimension = Math.max(canvas.width, canvas.height)

      // Create radial gradient for fade effect
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, maxDimension * 0.7)
      gradient.addColorStop(0, "rgba(255, 255, 255, 0.15)") // More visible in the center
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)") // Fade to transparent at edges

      // Draw rectangular grid
      ctx.strokeStyle = "rgba(255, 255, 255, 0.15)"
      ctx.lineWidth = 1

      // Grid cell size
      const cellSize = 40

      // Calculate grid boundaries to cover the entire canvas
      const startX = 0
      const startY = 0
      const endX = canvas.width
      const endY = canvas.height

      // Draw vertical lines
      for (let x = startX; x <= endX; x += cellSize) {
        ctx.beginPath()
        ctx.moveTo(x, startY)
        ctx.lineTo(x, endY)
        ctx.stroke()
      }

      // Draw horizontal lines
      for (let y = startY; y <= endY; y += cellSize) {
        ctx.beginPath()
        ctx.moveTo(startX, y)
        ctx.lineTo(endX, y)
        ctx.stroke()
      }

      // Apply gradient overlay to create fade effect
      ctx.fillStyle = gradient
      ctx.globalCompositeOperation = "source-atop"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.globalCompositeOperation = "source-over"

      // Add subtle animation to a few grid cells
      const time = Date.now() / 1000

      // Highlight a few cells that pulse
      for (let i = 0; i < 5; i++) {
        const pulseX = Math.floor(centerX / cellSize) * cellSize + (i * 2 + (Math.floor(time) % 5) - 2) * cellSize
        const pulseY = Math.floor(centerY / cellSize) * cellSize + (i * 2 + (Math.floor(time + 2) % 5) - 2) * cellSize

        const pulseOpacity = 0.1 + 0.15 * Math.sin(time * 2 + i)

        ctx.fillStyle = `rgba(138, 43, 226, ${pulseOpacity})`
        ctx.fillRect(pulseX, pulseY, cellSize, cellSize)
      }

      // Add a subtle glow in the center
      const centerGlow = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, maxDimension * 0.3)
      centerGlow.addColorStop(0, "rgba(138, 43, 226, 0.05)")
      centerGlow.addColorStop(1, "rgba(138, 43, 226, 0)")

      ctx.fillStyle = centerGlow
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      animationFrameRef.current = requestAnimationFrame(drawGrid)
    }

    drawGrid()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setNodes((prevNodes) =>
        prevNodes.map((node) => {
          if (selectedNode === node.id || node.isCenter) return node

          // Random slight movement
          const xShift = (Math.random() - 0.5) * 0.5
          const yShift = (Math.random() - 0.5) * 0.5

          return {
            ...node,
            x: Math.max(5, Math.min(95, node.x + xShift)),
            y: Math.max(5, Math.min(95, node.y + yShift)),
          }
        }),
      )
    }, 100)

    return () => clearInterval(interval)
  }, [selectedNode])

  const handleNodeClick = (nodeId) => {
    if (selectedNode === nodeId) {
      setSelectedNode(null)
    } else {
      setSelectedNode(nodeId)
    }
  }

  return (
    <div className="relative w-full h-[500px] bg-transparent overflow-hidden">
      {/* Grid Background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Connections */}
      <svg className="absolute top-0 left-0 w-full h-full">
        {connections.map(([from, to]) => {
          const fromNode = nodes.find((node) => node.id === from)
          const toNode = nodes.find((node) => node.id === to)

          if (!fromNode || !toNode) return null

          const isFirstLevel = from === "you" || to === "you"
          const isSecondLevel =
            !isFirstLevel &&
            (["person1", "person2", "person3", "person4", "person5", "person6"].includes(from) ||
              ["person1", "person2", "person3", "person4", "person5", "person6"].includes(to))

          // Using the same color for all connections, but varying width and opacity based on level
          const opacity = 0.8
          return (
            <line
              key={`${from}-${to}`}
              x1={`${fromNode.x}%`}
              y1={`${fromNode.y}%`}
              x2={`${toNode.x}%`}
              y2={`${toNode.y}%`}
              stroke={`rgba(138, 43, 226, ${opacity * 0.2})`} // White color for all connections
              strokeWidth={isFirstLevel ? "1.5" : isSecondLevel ? "1" : "0.7"}
              strokeOpacity={isFirstLevel ? "0.9" : isSecondLevel ? "0.7" : "0.5"}
              strokeDasharray={!isFirstLevel && !isSecondLevel ? "3,2" : ""}
            />
          )
        })}
      </svg>

      {/* Nodes */}
      {nodes.map((node) => {
        const isSelected = selectedNode === node.id
        const sizeMultiplier = isSelected ? 1.5 : 1
        const zIndex = isSelected ? "z-30" : node.isCenter ? "z-20" : "z-10"

        let baseSize
        if (node.isCenter) {
          baseSize = "w-24 h-24"
        } else if (node.size === 4) {
          baseSize = "w-20 h-20"
        } else if (node.size === 3) {
          baseSize = "w-16 h-16"
        } else if (node.size === 2) {
          baseSize = "w-14 h-14"
        } else if (node.size === 1.5) {
          baseSize = "w-12 h-12"
        } else {
          baseSize = "w-10 h-10"
        }

        return (
          <div
            key={node.id}
            className={`absolute rounded-full overflow-hidden border-3 ${node.isCenter ? "border-white shadow-lg shadow-purple-500/30" : "border-white/70"} flex items-center justify-center cursor-pointer transition-all duration-300 ${zIndex} ${baseSize} ${isSelected ? "shadow-xl shadow-purple-500/50 border-purple-400" : ""}`}
            style={{
              left: `calc(${node.x}% - ${(Number.parseInt(baseSize.split("-")[1]) * sizeMultiplier) / 2}px)`,
              top: `calc(${node.y}% - ${(Number.parseInt(baseSize.split("-")[1]) * sizeMultiplier) / 2}px)`,
              transform: `scale(${sizeMultiplier})`,
            }}
            onClick={() => handleNodeClick(node.id)}
          >
            <img src={node.img || "/placeholder.svg"} alt={node.name} className="w-full h-full object-cover" />

            {node.isCenter && (
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-indigo-600/30 flex items-center justify-center">
                <span className="text-white font-bold text-base"></span>
              </div>
            )}

            {isSelected && !node.isCenter && (
              <div className="absolute -bottom-28 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm border border-white/20 rounded-lg p-3 w-56 z-40">
                <h3 className="font-bold text-white text-base">{node.name}</h3>
                <p className="text-sm text-white/70">{node.bio}</p>
              </div>
            )}
          </div>
        )
      })}

      {/* Global profile viewer when selected */}
      {selectedNode && !nodes.find((n) => n.id === selectedNode)?.isCenter && (
        <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm border border-white/20 rounded-lg p-5 w-72 z-40 shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <img
              src={nodes.find((n) => n.id === selectedNode)?.img || "/placeholder.svg"}
              alt={nodes.find((n) => n.id === selectedNode)?.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-white/50"
            />
            <div>
              <h2 className="font-bold text-white text-lg">{nodes.find((n) => n.id === selectedNode)?.name}</h2>
              <p className="text-sm text-white/70">{nodes.find((n) => n.id === selectedNode)?.label}</p>
            </div>
          </div>
          <p className="text-sm text-white/70 mb-4">{nodes.find((n) => n.id === selectedNode)?.bio}</p>
          <div className="flex justify-between">
            <button className="text-sm bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity">
              Connect
            </button>
            <button className="text-sm bg-white/10 border border-white/20 text-white py-2 px-4 rounded-md hover:bg-white/20 transition-colors">
              View Profile
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default InteractiveNetwork
export { InteractiveNetwork }

