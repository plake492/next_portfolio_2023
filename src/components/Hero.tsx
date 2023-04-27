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

  useAnimation<HTMLDivElement>(heroTextFadeAnimations, {
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
        <FontAwesomeIcon width={45} icon={faChevronDown} />
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
