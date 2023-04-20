import * as React from 'react'
import Image from 'next/image'
import HalfBoarder from './HalfBoarder'
import Patricles from './Particles'
import useAnimation from '@components/hooks/useAnimation'
import { heroParticlConfig } from '@components/utils/particals/hero'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { projectAnimation } from '@components/utils/animations/projectAnimation'

const text = [
  'Strong proficiency in JavaScript: You have extensive experience working with JavaScript, and you are well-versed in modern JavaScript frameworks and libraries, such as React, Vue.js, and Angular.',
  'Expertise in Node.js: You have a deep understanding of Node.js, including its core modules, event-driven architecture, and asynchronous I/O operations.',
  'Proficiency in server-side technologies: You are skilled in working with server-side technologies such as Express.js, Koa, Hapi, and NestJS.',
  'Database management skills: You have experience working with various database systems, including MySQL, MongoDB, and PostgreSQL. You are proficient in database design, schema creation, and query optimization.',
  'Experience with RESTful API design: You are skilled in designing and building RESTful APIs that can be used by clients to interact with your server-side applications.',
  'Familiarity with DevOps practices: You have experience with continuous integration and deployment (CI/CD), containerization, and cloud-based technologies such as AWS, Azure, or Google Cloud Platform.',
  'Familiarity with version control systems: You have experience using Git or other version control systems to manage your codebase and collaborate with other developers.',
  'Strong problem-solving skills: You are a proactive problem-solver who can identify and resolve issues quickly and efficiently.',
  'Attention to detail: You have a keen eye for detail and are committed to producing high-quality code that meets industry standards.',
  'Strong communication skills: You can communicate effectively with team members and stakeholders and are comfortable working in an Agile development environment.',
]

export default function Project(): JSX.Element {
  const imgRef = React.useRef(null)
  const textRef = React.useRef(null)
  const cardWrapperRef = React.useRef(null)

  useAnimation<HTMLDivElement>(projectAnimation, {
    imgRef,
    textRef,
    cardWrapperRef,
  })

  return (
    <>
      <section className="bg-dark py-xl position-relative">
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
              <p className="h3">NodeJS</p>
            </div>
            <p className="text-lg">
              As a Node developer, you possess a broad range of technical skills
              and expertise that are crucial to building and maintaining
              high-performance, scalable, and reliable server-side applications
              using Node.js. Here are some of the key skills and qualities that
              you should highlight in your portfolio:
            </p>
          </div>
        </div>
        <div className="px-xxxl my-xl position-relative z-1">
          <div
            className="row g-xl py-xl position-relative h-100"
            ref={cardWrapperRef}
          >
            <HalfBoarder />
            {text.map((t, index) => (
              <div
                key={t}
                className={`col-6 bg-dark-${
                  index + 1
                }0 box-shadow p-xl border-rounded`}
              >
                <p className="text-sm">
                  {index + 1}) {t}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Patricles
          options={heroParticlConfig}
          className="position-absolute top-0 left-0 w-100 h-100 z-0"
        />
      </section>
    </>
  )
}
