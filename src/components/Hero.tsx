import * as React from 'react'
import HalfBoarder from './HalfBoarder'
import useAnimation from '@components/hooks/useAnimation'
import { heroTextFadeAnimations } from '@components/utils/animations/heroTextAnimation'
import { textColorShiftAnimation } from '@components/utils/animations/textColorShiftAnimation'
import { gridAnimation } from '@components/utils/animations/gridAnimation'
import { colorTheme } from '@components/utils/styleConfig'

export default function Hero(): JSX.Element {
  const containerRef = React.useRef<HTMLDivElement>(null)

  const word = 'Fullstack Web Developer'

  useAnimation<HTMLDivElement>(heroTextFadeAnimations, {
    containerRef,
  })

  return (
    <section className="flex-center position-relative" id="hero-section">
      <GridAnimation />
      <div
        className="p-xxxl d-flex flex-col gap-xl color-tertiary position-relative w-100 container"
        ref={containerRef}
      >
        <h1 className="sr-only skip">Patrick Lake</h1>
        <HalfBoarder
          color="tertiary"
          size="3"
          flip
          iterate={1}
          className="skip"
        />
        <TextColorAnimation word={word} />
        <small className="text-sm  ml-auto text-center px-xxl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita cum
          esse dolor quasi, illo dicta soluta! Modi, adipisci dolore totam
          impedit eos officia eius mollitia dolor. Recusandae ab dolorem modi.
        </small>
        {/* <div className="border border-tertiary border-3 p-md border-rounded bg-dark p-md box-shadow shadow-dark shadow-3">
          <div className="d-flex justify-content-between gap-xl">
            <FontAwesomeIcon
              className="color-tertiary"
              icon={faDev}
              bounce
              width={60}
            />
            <FontAwesomeIcon
              className="color-tertiary-20"
              icon={faAws}
              bounce
              width={60}
            />
            <FontAwesomeIcon
              className="color-tertiary-40"
              icon={faCss3}
              bounce
              width={60}
            />
            <FontAwesomeIcon
              className="color-tertiary-60"
              icon={faNodeJs}
              bounce
              width={60}
            />
            <FontAwesomeIcon
              className="color-tertiary-60"
              icon={faSass}
              bounce
              width={60}
            />
            <FontAwesomeIcon
              className="color-tertiary-40"
              icon={faCss3}
              bounce
              width={60}
            />
          </div>
        </div> */}
      </div>
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

  useAnimation<HTMLDivElement>(textColorShiftAnimation, {
    textColorShiftRef,
  })

  return (
    <div
      className="split-text skip border border-primary px-md py-md bg-dark-40"
      ref={textColorShiftRef}
      style={{ '--text-color': colorTheme.dark } as React.CSSProperties}
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
