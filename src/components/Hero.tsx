import useAnimation from '@components/hooks/useAnimation'
import {
  HeroAnimationRefs,
  heroAnimations
} from '@components/utils/animations/hero'
import * as React from 'react'

export const Hero = () => {
  const vidRef = React.useRef<HTMLDivElement>(null)
  const textRef = React.useRef<HTMLDivElement>(null)

  useAnimation<HeroAnimationRefs>(heroAnimations, {
    vidRef,
    textRef
  })

  return (
    <div className="img-wrapper ratio-16x9 position-relative" ref={vidRef}>
      <div
        className="position-absolute z-10 bottom-75 mt-xxxl left-50 absolute-center"
        style={{ fontSize: '20rem' }}
      >
        &#x2965;
      </div>
      <video
        style={{
          filter: 'hue-rotate(305deg)',
          objectFit: 'cover'
        }}
        className="object-position-br d-block"
        width="100%"
        height="100%"
        muted
        autoPlay
        loop
      >
        <source src={'/assets/videos/vid.mp4'} />
      </video>
      <div className="position-absolute top-75 mb-xxxl left-50 absolute-center w-100 h-100 flex-center">
        <div
          className="p-md border border-rounded border-2 d-inline-block"
          ref={textRef}
        >
          <p className="h1 mb-none">Name Here</p>
        </div>
      </div>
    </div>
  )
}
