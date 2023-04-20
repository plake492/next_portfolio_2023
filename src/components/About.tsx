import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot, faCode } from '@fortawesome/free-solid-svg-icons'
import {
  faNodeJs,
  faSass,
  faCss3,
  faSquareJs,
} from '@fortawesome/free-brands-svg-icons'
import useAnimation from '@components/hooks/useAnimation'
import { curtainAnimation } from '@components/utils/animations/curtainAnimation'

export default function About(): JSX.Element {
  return (
    <section className="bg-primary position-relative border-bottom border-5 border-accent">
      <CurtainAnimation />

      <div className="row py-xl px-xl">
        <div className="col-2 flex-center gap-xxxl px-xl">
          <FontAwesomeIcon
            icon={faMugHot}
            className="color-tertiary-20"
            width={60}
          />
          <FontAwesomeIcon
            icon={faCode}
            className="color-tertiary-40"
            width={60}
          />

          <FontAwesomeIcon
            icon={faCss3}
            className="color-tertiary-80"
            width={60}
          />
        </div>
        <div
          className="border-left border-right border-accent col-8 position-relative"
          style={{ minHeight: '90vh' }}
        >
          <div className="px-xl flex-center h-100 position-relative z-1">
            <h1 className="color-accent-light">Patrick Lake</h1>
            <p className="color-accent-light text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt ex
              eveniet, expedita commodi, sed beatae eius mollitia est, laborum
              voluptatibus ad iste quos aspernatur voluptatem minima. Adipisci,
              aut? A, natus!
            </p>
          </div>
          <div className="position-absolute mt-xl top-50 left-50 absolute-center z-0 w-100">
            <SuperSVG />
          </div>
        </div>
        <div className="col-2 flex-center gap-xxxl px-xl">
          <FontAwesomeIcon
            icon={faNodeJs}
            className="color-tertiary-20"
            width={60}
          />
          <FontAwesomeIcon
            icon={faSass}
            className="color-tertiary-60"
            width={60}
          />
          <FontAwesomeIcon
            icon={faSquareJs}
            className="color-tertiary-80"
            width={60}
          />
        </div>
      </div>
    </section>
  )
}

function CurtainAnimation() {
  const spacerWrapperRef = React.useRef<HTMLDivElement>(null)

  useAnimation<HTMLDivElement>(curtainAnimation, { spacerWrapperRef })

  return (
    <div
      className="spacer-wrapper position-absolute top-0 left-0 w-100 h-100 z-2"
      ref={spacerWrapperRef}
    >
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className={`spacer spacer-${i + 1} bg-primary-${i + 1}0`}
          style={{ '--spacer-height': i } as React.CSSProperties}
        />
      ))}
    </div>
  )
}

function SuperSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 800 800"
    >
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a-grad">
          <stop
            stopColor="hsl(331, 90%, 56%)"
            stopOpacity="1"
            offset="0%"
          ></stop>
          <stop
            stopColor="hsl(270, 73%, 53%)"
            stopOpacity="1"
            offset="100%"
          ></stop>
        </linearGradient>
      </defs>
      <g
        strokeWidth="5.5"
        stroke="url(#a-grad)"
        fill="none"
        id="hexagon-aniamtion"
      >
        <path d="M400 247.57974243164062L532.0000084347148 323.789871700975V476.2101302396438L400 552.4202595089781L267.9999915652852 476.2101302396438V323.789871700975L400 247.57974243164062Z"></path>
        <path d="M400 247.57974243164062L532.0000084347148 323.789871700975V476.2101302396438L400 552.4202595089781L267.9999915652852 476.2101302396438V323.789871700975L400 247.57974243164062Z"></path>
        <path d="M400 247.57974243164062L532.0000084347148 323.789871700975V476.2101302396438L400 552.4202595089781L267.9999915652852 476.2101302396438V323.789871700975L400 247.57974243164062Z"></path>
        <path d="M400 247.57974243164062L532.0000084347148 323.789871700975V476.2101302396438L400 552.4202595089781L267.9999915652852 476.2101302396438V323.789871700975L400 247.57974243164062Z"></path>
        <path d="M400 247.57974243164062L532.0000084347148 323.789871700975V476.2101302396438L400 552.4202595089781L267.9999915652852 476.2101302396438V323.789871700975L400 247.57974243164062Z"></path>
      </g>
    </svg>
  )
}
