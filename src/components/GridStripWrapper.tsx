import React from 'react'
import GridStripSection from './GridStripSection'

const config = {
  bl: { className: 'bottom-0 left-0', style: { opacity: 0.15 } },
  tr: {
    className: 'top-0 left-0',
    style: { transform: 'scaleY(-1) scaleX(-1)', opacity: 0.15 },
  },
  br: {
    className: 'bottom-0 left-0',
    style: { transform: 'scaleX(-1)', opacity: 0.15 },
  },
  tl: {
    className: 'top-0 left-0',
    style: { transform: 'scaleY(-1)', opacity: 0.15 },
  },
}

export default function GridStripWrapper({
  children,
  dir,
  className,
}: {
  children: React.ReactNode
  dir: 'bl' | 'br' | 'tl' | 'tr'
  className?: string
}) {
  return (
    <div className={`position-relative ${className}`}>
      <div className="position-relative z-2">{children}</div>
      <div
        className={`position-absolute w-100 z-1 ${config[dir]?.className}`}
        style={config[dir].style}
      >
        <GridStripSection />
      </div>
    </div>
  )
}
