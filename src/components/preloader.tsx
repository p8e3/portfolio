"use client"

import React, { useState, useEffect } from "react"
import { GradientTracing } from "@/components/ui/gradient-tracing"
import { motion, AnimatePresence } from "framer-motion"

export const Preloader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Hide the preloader after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-black flex items-center justify-center z-[9999] w-screen h-screen"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#000000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999
          }}
        >
          <div className="relative" style={{ width: 300, height: 300 }}>
            <GradientTracing
              width={300}
              height={300}
              path="M150,0 L112.5,112.5 L187.5,112.5 L75,300 L150,150 L75,150 L150,0"
              gradientColors={["#F1C40F", "#F1C40F", "#E67E22"]}
              baseColor="#333333"
              strokeWidth={4}
              animationDuration={1.5}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
