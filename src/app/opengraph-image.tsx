import { ImageResponse } from "next/og"

export const runtime = "edge"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  const title = "p8e3 — Web Developer"
  const subtitle = "Full‑stack • React • Vue • Node.js • Docker"

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "radial-gradient(1000px 600px at 50% 20%, #1f293780 0%, #0b1020 45%, #000 100%)",
          color: "#e5e7eb",
          position: "relative",
          letterSpacing: "0.3px",
        }}
      >
        {/* Grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "#f3f4f6",
              textShadow: "0 8px 40px rgba(37,99,235,0.35)",
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 30,
              marginTop: 16,
              color: "#93c5fd",
            }}
          >
            {subtitle}
          </div>
        </div>

        {/* Accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 80,
            width: 640,
            height: 2,
            background:
              "linear-gradient(90deg, rgba(59,130,246,0) 0%, rgba(59,130,246,0.8) 20%, rgba(59,130,246,0.8) 80%, rgba(59,130,246,0) 100%)",
            boxShadow: "0 0 30px rgba(59,130,246,0.5)",
          }}
        />
      </div>
    ),
    { ...size }
  )
}
