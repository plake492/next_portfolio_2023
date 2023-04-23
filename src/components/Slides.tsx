import useAnimation from '@components/hooks/useAnimation'
import { slideAnimate } from '@components/utils/animations/slidesAnimation'
import * as React from 'react'

interface SlidesPropTypes {
  slides: any[]
  bgColor?: string
}

export default function Slides({
  slides,
  bgColor = 'primary',
}: SlidesPropTypes) {
  const slideWrapperRef = React.useRef(null)

  useAnimation<HTMLDivElement>(slideAnimate, { slideWrapperRef })

  return (
    <div className="position-relative z-0 h-vh-100" ref={slideWrapperRef}>
      {slides.map((slide: any, index, arr: any[]) => (
        <div
          key={index}
          className={`w-100 h-100 border border-dark bg-${bgColor}-${
            index + 1
          }0 flex-center z-${index + 1} ${
            index ? 'position-absolute top-0 left-0' : ''
          }`}
          style={{ borderWidth: `${arr.length - (index + 0.5)}rem` }}
        >
          <p className={slide.className}>{slide.text}</p>
        </div>
      ))}
    </div>
  )
}
