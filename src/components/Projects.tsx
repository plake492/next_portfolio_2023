import * as React from 'react'
import Image from 'next/image'
import Patricles from './Particles'
import useAnimation from '@components/hooks/useAnimation'
import { heroParticlConfig } from '@components/utils/particals/hero'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { projectAnimation } from '@components/utils/animations/projectAnimation'
import { projects } from '../lib/projects'

export default function Projects({
  project,
}: {
  project: 'node.js' | 'GSAP.js'
}): JSX.Element {
  const imgRef = React.useRef(null)
  const textRef = React.useRef(null)
  const cardWrapperRef = React.useRef(null)

  const colorTheme = useAnimation<HTMLDivElement>(projectAnimation, {
    imgRef,
    textRef,
    cardWrapperRef,
  })

  const projectObj: any = projects[project]

  return (
    <section className="py-xl position-relative" id={project}>
      <div className="row py-xxl px-xxl g-xxxl position-relative z-1">
        <div className="col-6 px-md">
          <div
            className="image-wrapper ratio-1x1 position-relative w-100 h-100"
            ref={imgRef}
            style={{ '--aspect-ratio': `1008/659` } as React.CSSProperties}
          >
            <div className="position-absolute top-0 left-0 mt-xxl ml-xxl z-2 w-100 h-100">
              <Image
                src={'/assets/images/webpack.png'}
                fill
                style={{ objectFit: 'cover' }}
                alt="image of terminal"
              />
            </div>

            <Image
              src={'/assets/images/terminal.png'}
              fill
              style={{ objectFit: 'cover' }}
              alt="image of terminal"
            />
          </div>
        </div>
        <div className="col-6 px-xl" ref={textRef}>
          <div className="d-flex align-items-center gap-md mb-xl">
            <FontAwesomeIcon
              icon={faNodeJs}
              bounce
              width={100}
              style={{ color: '#77D154' }}
            />
            <p className="h3">{project}</p>
          </div>
          <p className="text-lg">{projectObj.title}</p>
        </div>
      </div>
      {/* <div className="px-xxxl my-xl position-relative z-1">
          <div
            className="row g-xl py-xl position-relative h-100"
            ref={cardWrapperRef}
          >
            {projectObj.cards.map((content: string, index: number) => (
              <div
                key={content}
                className={`col-6 bg-dark-${
                  index + 1
                }0 box-shadow p-xl border-rounded`}
              >
                <p className="text-sm">
                  {index + 1}) {content}
                </p>
              </div>
            ))}
          </div>
        </div> */}

      <Patricles
        options={heroParticlConfig(colorTheme)}
        className="position-absolute top-0 left-0 w-100 h-100 z-0"
      />
    </section>
  )
}
