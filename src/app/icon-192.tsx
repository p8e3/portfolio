import { ImageResponse } from "next/og"

export const runtime = "edge"
export const size = { width: 192, height: 192 }
export const contentType = "image/png"

export default function Icon192() {
  const { width, height } = size
  return new ImageResponse(
    (
      <div
        style={{
          width,
          height,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b1020",
          borderRadius: 32,
        }}
      >
        <svg width={width} height={height} viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#60A5FA"/>
              <stop offset="100%" stopColor="#FDE047"/>
            </linearGradient>
          </defs>
          <rect width="256" height="256" rx="48" fill="#0b1020" />
          <path d="M142 16L60 144h54l-6 96 88-136h-58l4-88z" fill="url(#g)" />
        </svg>
      </div>
    ),
    { ...size }
  )
}
