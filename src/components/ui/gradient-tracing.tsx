"use client"

import React, { useId, useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface GradientTracingProps {
  width: number
  height: number
  baseColor?: string
  gradientColors?: [string, string, string]
  animationDuration?: number
  strokeWidth?: number
  path?: string
}

export const GradientTracing: React.FC<GradientTracingProps> = ({
  width,
  height,
  baseColor = "black",
  gradientColors = ["#2EB9DF", "#2EB9DF", "#9E00FF"],
  animationDuration = 2,
  strokeWidth = 2,
  path,
}) => {
  // Use a stable ID for the gradient
  const uniqueId = useId()
  const gradientId = `pulse-${uniqueId.replace(/:/g, "")}`
  
  // Use state to store the calculated path to avoid hydration mismatch
  const [svgPath, setSvgPath] = useState<string>("") 
  
  // Calculate path on client-side only to avoid hydration errors
  useEffect(() => {
    // If path was explicitly provided, use it; otherwise calculate default
    const calculatedPath = path || `M0,${height / 2} L${width},${height / 2}`
    setSvgPath(calculatedPath)
  }, [path, width, height])

  return (
    <div className="relative" style={{ width, height }}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
      >
        {svgPath && (
          <>
            <path
              d={svgPath}
              stroke={baseColor}
              strokeOpacity="0.2"
              strokeWidth={strokeWidth}
            />
            <path
              d={svgPath}
              stroke={`url(#${gradientId})`}
              strokeLinecap="round"
              strokeWidth={strokeWidth}
            />
          </>
        )}
        <defs>
          <motion.linearGradient
            animate={{
              x1: [0, width * 2],
              x2: [0, width],
            }}
            transition={{
              duration: animationDuration,
              repeat: Infinity,
              ease: "linear",
            }}
            id={gradientId}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={gradientColors[0]} stopOpacity="0" />
            <stop stopColor={gradientColors[1]} />
            <stop offset="1" stopColor={gradientColors[2]} stopOpacity="0" />
          </motion.linearGradient>
        </defs>
      </svg>
    </div>
  )
}
