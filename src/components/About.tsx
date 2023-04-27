import * as React from 'react'
import Image from 'next/image'
import GridStripWrapper from './GridStripWrapper'
import useAnimation from '@components/hooks/useAnimation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { tools } from '@components/lib/projects'
import { aboutAnimation } from '@components/utils/animations/aboutAnimation'

export default function About() {
  const aboutRef = React.useRef<HTMLElement>(null)

  const theme = useAnimation<HTMLElement>(aboutAnimation, { aboutRef })

  return (
    <section
      className="h-vh-100 border border-top border-5 border-tertiary overflow-hidden h-min-vh-100 position-relative"
      ref={aboutRef}
      style={{ backgroundColor: '#000000' }}
      id="about"
    >
      <GridStripWrapper dir="br" className="h-min-vh-100 flex-center">
        <div className="position-absolute top-50 left-50 absolute-center z-3 about-icon pe-none">
          <FontAwesomeIcon
            icon={faCode}
            width={720}
            color={theme?.tertiary as string}
          />
        </div>
        <div className="row h-100 g-md g-md-xl g-lg-xxl px-xl py-xxl">
          <div className="col-12 col-md-5 mt-md flex-center h-100">
            <div className="about-text-wrapper">
              <ul className="d-flex gap-md mb-md">
                <li>
                  <p className="text-sm">PRO-ACTIVE</p>
                </li>
                <li>
                  <p className="text-sm">EFFICIANT</p>
                </li>
                <li>
                  <p className="text-sm">DETAILED</p>
                </li>
              </ul>
              <div className="d-flex gap-md align-items-center mb-md">
                <Image
                  src="/assets/images/profile/me-16bit.png"
                  alt="Picture of me"
                  className="border-rounded border border-accent"
                  style={{
                    background: `linear-gradient(130deg, ${theme?.textColorHeader}60, ${theme?.accent}80`,
                  }}
                  width={200}
                  height={200}
                />
                <div className="text-end">
                  <p className="h3">What</p>
                  <p className="h3">I Do</p>
                </div>
              </div>
              <p>
                I am a highly skilled full-stack developer with expertise in
                Node.js, React.js, Sass, Express.js, and JavaScript ES15. With
                years of experience under my belt, I am adept at building robust
                and scalable applications that meet the needs of businesses and
                individuals alike.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-7 h-100 d-flex flex-col align-items-stretch justify-content-center gap-md">
            {tools.map(
              (tool: { [key: string]: string | number }, index: number) => (
                <ProgressBar
                  key={tool.title}
                  tool={tool}
                  index={index}
                  theme={theme}
                />
              )
            )}
          </div>
        </div>
      </GridStripWrapper>
      <div
        className="w-vw-100 py-xs position-absolute bottom-0 left-0 scroll-progress-bar"
        style={{
          bottom: '-0.227rem',
          left: '-0.227rem',

          background: `linear-gradient(45deg, ${theme?.tertiary}, ${theme?.accent})`,
        }}
      ></div>
    </section>
  )
}

function ProgressBar({ tool, index, theme }: any) {
  return (
    <div className="progressbar-wrapper">
      <div className="d-flex align-itmes-center gap-sm">
        <small
          className="text-sm progressbar-count"
          style={{ minWidth: '45px' }}
        >
          {tool.level}
        </small>
        <div
          className={`w-100 py-sm bg-accent-${
            index + 1
          }0 position-relative overflow-hidden box-shadow shadow-tertiary shadow-1`}
        >
          <div
            data-width={tool.level}
            className={`position-absolute top-0 left-0 h-100 progressbar-bar`}
            style={{
              background: `linear-gradient(115deg, ${theme?.['accent-50']}, ${
                theme?.['tertiary-80']
              }, ${theme?.[`tertiary-${index + 1}0`]})`,
            }}
          >
            {' '}
            <p
              className="text-sm color-alt text-start px-md progressbar-title"
              style={{ textTransform: 'uppercase' }}
            >
              {tool.title}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
