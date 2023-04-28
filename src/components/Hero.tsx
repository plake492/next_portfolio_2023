import * as React from 'react'
import HalfBoarder from './HalfBoarder'
import useAnimation from '@components/hooks/useAnimation'
import { heroTextFadeAnimations } from '@components/utils/animations/heroTextAnimation'
import { textColorShiftAnimation } from '@components/utils/animations/textColorShiftAnimation'
import { gridAnimation } from '@components/utils/animations/gridAnimation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function Hero({
  hasGridAnimation,
}: {
  hasGridAnimation?: boolean
}): JSX.Element {
  const containerRef = React.useRef<HTMLDivElement>(null)

  const word = 'Fullstack Web Developer'

  const colorTheme = useAnimation<HTMLDivElement>(heroTextFadeAnimations, {
    containerRef,
  })

  return (
    <section className="flex-center position-relative" id="hero-section">
      {hasGridAnimation ? <GridAnimation /> : null}

      <div
        className="p-md p-md-xl p-lg-xxxl d-flex flex-col gap-xl position-relative z-2 w-100 container"
        ref={containerRef}
      >
        <h1 className="sr-only skip">Patrick Lake</h1>
        <HalfBoarder
          color="accent"
          size="3"
          flip
          iterate={1}
          className="skip"
        />
        <TextColorAnimation word={word} />
        <small className="text-sm ml-auto text-center px-md px-md-xl px-lg-xl">
          I am a highly skilled full-stack developer with expertise in Node.js,
          React.js, Sass, Express.js, and JavaScript ES15. With years of
          experience under my belt, I am adept at building robust and scalable
          applications that meet the needs of businesses and individuals alike.
        </small>
      </div>
      <a
        className="hero-arrow-down color-accent link--no-underline c-pointer"
        href="#about"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="60"
          height="60"
          zoomAndPan="magnify"
          viewBox="0 0 375 374.999991"
          preserveAspectRatio="xMidYMid meet"
          version="1.0"
        >
          <path
            fill={colorTheme?.accent as string}
            d="M 375.070312 39.128906 C 375.070312 35.472656 372.878906 32.238281 369.539062 30.84375 C 366.164062 29.488281 362.335938 30.289062 359.792969 32.898438 L 187.945312 204.847656 L 16.097656 32.898438 C 13.867188 30.566406 10.527344 29.625 7.433594 30.460938 C 4.300781 31.261719 1.863281 33.699219 1.066406 36.832031 C 0.230469 39.929688 1.167969 43.273438 3.5 45.5 L 187.945312 230.054688 L 372.390625 45.5 C 374.128906 43.828125 375.070312 41.53125 375.070312 39.128906 Z M 375.070312 154.957031 C 375.070312 151.335938 372.878906 148.101562 369.539062 146.707031 C 366.164062 145.351562 362.335938 146.148438 359.792969 148.761719 L 187.945312 320.710938 L 16.097656 148.761719 C 13.867188 146.429688 10.527344 145.488281 7.433594 146.324219 C 4.300781 147.125 1.863281 149.5625 1.066406 152.695312 C 0.230469 155.792969 1.167969 159.136719 3.5 161.363281 L 187.945312 345.917969 L 372.390625 161.363281 C 374.128906 159.691406 375.070312 157.394531 375.070312 154.957031 Z M 375.070312 154.957031 "
            fillOpacity="1"
            fillRule="nonzero"
          />
        </svg>
      </a>
    </section>
  )
}

function GridAnimation() {
  const gridRef = React.useRef<HTMLDivElement>(null)
  useAnimation<HTMLDivElement>(gridAnimation, { gridRef })
  return (
    <div className="position-absolute top-0 left-0 h-100 w-100 overflow-hidden z-10 pe-none">
      <div ref={gridRef} className="position-relative h-100 w-100" id="grid">
        <div className="d-flex justify-content-between w-100 h-100 position-absolute top-0 left-0 z-3">
          {[...Array(15)].map((_, i) => (
            <div className="line-v" key={i}></div>
          ))}
        </div>
        <div className="d-flex flex-col justify-content-between w-100 h-100 position-absolute top-0 left-0 z-3">
          {[...Array(15)].map((_, i) => (
            <div className="line-h" key={i}></div>
          ))}
        </div>
      </div>
    </div>
  )
}

function TextColorAnimation({ word }: { word: string }) {
  const textColorShiftRef = React.useRef<HTMLDivElement>(null)
  const colorTheme = useAnimation<HTMLDivElement>(textColorShiftAnimation, {
    textColorShiftRef,
  })

  return (
    <div
      className="px-md px-md-xl px-lg-xl"
      ref={textColorShiftRef}
      style={{ '--text-color': colorTheme?.dark } as React.CSSProperties}
    >
      {word.split(' ').map(
        (wordChunk: string, i: number): JSX.Element => (
          <div
            style={{
              marginLeft: i === 1 ? 48 * 2 : i === 2 ? 16 : 0,
              display: i ? 'inline-block' : 'block',
            }}
            key={wordChunk + i}
          >
            {wordChunk.split('').map((letter: string, index: number) => (
              <div
                key={letter + index}
                className="position-relative h3 d-inline-block"
              >
                {letter}
              </div>
            ))}
          </div>
        )
      )}
    </div>
  )
}
