// app/opengraph-image.tsx
export const runtime = 'edge';

export default function OpenGraphImage({
  title,
}: {
  title: string
}): Response {
  const width = 1200
  const height = 630
  const backgroundColor = '#F0E8DC' // parchment
  const foregroundColor = '#7D2535' // burgundy
  const accentColor = '#B85C2A' // sienna

  // Create a simple SVG-based OG image
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${backgroundColor}" />

      <!-- Decorative elements -->
      <circle cx="${width * 0.8}" cy="${height * 0.2}" r="80" fill="${accentColor}" opacity="0.1" />
      <circle cx="${width * 0.2}" cy="${height * 0.8}" r="60" fill="${accentColor}" opacity="0.1" />

      <!-- Text -->
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
            font-family="'Cormorant Garamond', serif" font-size="48" fill="${foregroundColor}">
        ${title}
      </text>

      <!-- Subtext -->
      <text x="50%" y="60%" dominant-baseline="middle" text-anchor="middle"
            font-family="'Jost', sans-serif" font-size="24" fill="${foregroundColor}" opacity="0.8">
        Vivek Artline - Custom Portrait Artist
      </text>
    </svg>
  `.trim()

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}