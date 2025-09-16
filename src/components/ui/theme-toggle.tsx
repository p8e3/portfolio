"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const isDark = resolvedTheme === "dark"
  const toggle = () => setTheme(isDark ? "light" : "dark")

  const styles: React.CSSProperties = {
    position: "fixed",
    bottom: "calc(env(safe-area-inset-bottom, 0px) + 16px)",
    right: "calc(env(safe-area-inset-right, 0px) + 16px)",
    zIndex: 2147483647,
    height: 48,
    padding: "0 14px",
    borderRadius: 9999,
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    justifyContent: "center",
    cursor: "pointer",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    backgroundColor: isDark ? "rgba(0,0,0,0.7)" : "rgba(255,255,255,0.95)",
    border: isDark ? "1.25px solid rgba(255,255,255,0.25)" : "1.25px solid rgba(0,0,0,0.15)",
    boxShadow: isDark
      ? "0 6px 20px rgba(0,0,0,0.45), inset 0 0 0 1px rgba(255,255,255,0.06)"
      : "0 6px 20px rgba(0,0,0,0.18), inset 0 0 0 1px rgba(255,255,255,0.5)",
    color: isDark ? "#FDE047" : "#1F2937",
    fontSize: 14,
    fontWeight: 600,
    lineHeight: 1,
  }

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={toggle}
      title={isDark ? "Switch to light" : "Switch to dark"}
      style={styles}
    >
      {isDark ? (
        <i className="fas fa-sun" aria-hidden="true" />
      ) : (
        <i className="fas fa-moon" aria-hidden="true" />
      )}
      <span style={{ color: isDark ? "#E5E7EB" : "#111827" }}>Theme</span>
    </button>
  )
}
