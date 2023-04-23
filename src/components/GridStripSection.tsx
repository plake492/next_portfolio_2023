import useAnimation, { GSAPTypes } from '@components/hooks/useAnimation'
import { gridStripAnimation } from '@components/utils/animations/gridStripsAnimation'
import React from 'react'

export default function GridStripSection() {
  const containerRef = React.useRef(null)
  const num = 30

  // useAnimation<HTMLDivElement>(gridStripAnimation, { containerRef })

  return (
    <div
      className="border-5 border-dark border-bottom"
      id="grid-section"
      style={{ '--number': num } as React.CSSProperties}
      ref={containerRef}
    >
      {[...Array(num)].map((_, index: number) => (
        <div
          key={index}
          className="grid-row"
          style={
            {
              '--height': `${index}%`,
              '--width': `${index * (100 / num)}%`,
              '--width-static': `${index * (100 / num)}%`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  )
}
