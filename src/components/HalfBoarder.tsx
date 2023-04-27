import useAnimation from '@components/hooks/useAnimation'
import { halfBorderAnimation } from '@components/utils/animations/halfBorderAnimation'
import React from 'react'

export default function HalfBoarder({
  color = 'primary',
  size = '1',
  flip,
  className,
}: {
  color?: string
  size?: '1' | '2' | '3' | '4' | '5'
  flip?: boolean
  className?: string
  iterate?: number
}): JSX.Element {
  const blockOneRef = React.useRef<HTMLDivElement>(null)
  const blockTwoRef = React.useRef<HTMLDivElement>(null)

  useAnimation<HTMLDivElement>(halfBorderAnimation, {
    blockOneRef,
    blockTwoRef,
  })
  return (
    <>
      <div
        ref={blockOneRef}
        className={`opacity-0 m-md m-md-xl m-lg-xxl ${className} position-absolute top-0 w-50 h-50 border-top ${
          flip ? 'border-right right-0' : 'border-left left-0'
        } border-${size} border-${color}`.trim()}
      >
        <div
          className={`opacity-0 position-absolute top-0 w-66 h-66 border-top ${
            flip ? 'border-right right-0' : 'border-left left-0'
          } border-${size} border-${color}`.trim()}
        ></div>
      </div>
      <div
        ref={blockTwoRef}
        className={`opacity-0 m-xxl ${className} position-absolute bottom-0 w-50 h-50 border-bottom ${
          flip ? 'border-left left-0' : 'border-right right-0'
        } border-${size} border-${color}`.trim()}
      >
        <div
          className={`opacity-0 position-absolute bottom-0 w-66 h-66 border-bottom ${
            flip ? 'border-left left-0' : 'border-right right-0'
          } border-${size} border-${color}`.trim()}
        ></div>
      </div>
    </>
  )
}
