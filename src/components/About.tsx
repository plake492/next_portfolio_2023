import * as React from 'react'
import Image from 'next/image'
import GridStripWrapper from './GridStripWrapper'
import useAnimation from '@components/hooks/useAnimation'
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="720"
            zoomAndPan="magnify"
            viewBox="0 0 375 374.999991"
            height="720"
            preserveAspectRatio="xMidYMid meet"
            version="1.0"
          >
            <defs>
              <clipPath id="0cbf2ad60e">
                <path
                  d="M 109 9 L 265 9 L 265 367.21875 L 109 367.21875 Z M 109 9 "
                  clip-rule="nonzero"
                />
              </clipPath>
            </defs>
            <g clip-path="url(#0cbf2ad60e)">
              <path
                fill={theme?.tertiary as string}
                d="M 116.777344 367.21875 C 115.796875 367.21875 114.800781 367.03125 113.835938 366.644531 C 109.875 365.027344 107.960938 360.484375 109.59375 356.503906 L 249.488281 14.359375 C 251.121094 10.394531 255.691406 8.496094 259.625 10.113281 C 263.585938 11.730469 265.5 16.273438 263.867188 20.253906 L 123.972656 362.398438 C 122.746094 365.398438 119.835938 367.21875 116.777344 367.21875 Z M 116.777344 367.21875 "
                fill-opacity="1"
                fill-rule="nonzero"
              />
            </g>
            <path
              fill={theme?.['tertiary-40'] as string}
              d="M 272.214844 305.011719 C 270.425781 305.011719 268.625 304.390625 267.160156 303.128906 C 263.898438 300.328125 263.523438 295.429688 266.324219 292.164062 L 355.234375 188.371094 L 266.308594 84.5625 C 263.507812 81.3125 263.882812 76.398438 267.148438 73.597656 C 270.410156 70.796875 275.308594 71.171875 278.105469 74.4375 L 371.367188 183.300781 C 373.871094 186.210938 373.871094 190.503906 371.367188 193.410156 L 278.105469 302.273438 C 276.582031 304.09375 274.40625 305.011719 272.214844 305.011719 Z M 272.214844 305.011719 "
              fill-opacity="1"
              fill-rule="nonzero"
            />
            <path
              fill={theme?.tertiary as string}
              d="M 101.230469 305.011719 C 99.039062 305.011719 96.863281 304.09375 95.339844 302.289062 L 2.078125 193.425781 C -0.425781 190.515625 -0.425781 186.226562 2.078125 183.316406 L 95.339844 74.453125 C 98.136719 71.1875 103.050781 70.8125 106.300781 73.613281 C 109.546875 76.398438 109.9375 81.3125 107.121094 84.5625 L 18.210938 188.371094 L 107.136719 292.179688 C 109.9375 295.429688 109.5625 300.34375 106.300781 303.144531 C 104.824219 304.390625 103.019531 305.011719 101.230469 305.011719 Z M 101.230469 305.011719 "
              fill-opacity="1"
              fill-rule="nonzero"
            />
          </svg>
        </div>
        <div className="row h-100 g-md g-md-xl g-lg-xxl px-xl py-xxl">
          <div className="col-12 col-md-5 flex-center h-100">
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
