import * as React from 'react'
import Image from 'next/image'
import {
  faKeyboard,
  faMugHot,
  faCode,
  faGuitar,
  faCodeMerge,
  faJar
} from '@fortawesome/free-solid-svg-icons'
import {
  faNodeJs,
  faSass,
  faCss3,
  faSquareJs,
  faDev,
  faAws,
  faVuejs
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import useAnimation from '@components/hooks/useAnimation'

export const About = function () {
  const refRef = React.useRef(null)
  const imgRefOne = React.useRef(null)
  const imgRef = React.useRef(null)
  const textRef = React.useRef(null)

  useAnimation((gsap: any) => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: imgRefOne.current,
          start: 'start bottom-=200',
          end: 'start+=600 bottom-=200',
          scrub: 4
        }
      })
      .to(imgRef.current, { y: 50 }, 0)
      .to(imgRefOne.current, { y: -25 }, 0)

    const tl = gsap.timeline({
      duration: 1.25,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: textRef.current,
        markers: true,
        start: 'center bottom-=100',
        end: 'center bottom-=100',
        toggleActions: 'play none none reverse'
      }
    })

    tl.from(
      textRef.current.children,
      { y: 75, autoAlpha: 0, stagger: 0.1 },
      0.3
    )
  })

  return (
    <>
      <section className="bg-priamry" style={{ minHeight: '100vh' }}>
        <div className="row py-xxl px-xl">
          <div className="col-2 flex-center gap-xxxl px-xl">
            <FontAwesomeIcon
              icon={faMugHot}
              className="color-accent"
              width={60}
            />
            <FontAwesomeIcon
              icon={faCode}
              className="color-accent-20"
              width={60}
            />
            <FontAwesomeIcon
              icon={faGuitar}
              className="color-accent-40"
              width={60}
            />
            <FontAwesomeIcon
              icon={faCss3}
              className="color-accent-60"
              width={60}
            />
          </div>
          <div
            className="border-left border-right border-accent col-8"
            style={{ minHeight: '90vh' }}
          >
            <div className="px-xl">
              <h1 className="color-accent-light">Patrick Lake</h1>
              <p className="color-accent-light text-lg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
                ex eveniet, expedita commodi, sed beatae eius mollitia est,
                laborum voluptatibus ad iste quos aspernatur voluptatem minima.
                Adipisci, aut? A, natus!
              </p>
              <div className="pt-xl pb-xxxl my-xl border-bottom border-accent">
                <div
                  className="img-wrapper ratio-5x4 position-relative border-pill overflow-hidden border border-5 border-accent "
                  id="video-overlay"
                >
                  <div className="position-absolute top-0 left-0 z-2 w-100 h-100 p-xl">
                    <div className="top-0 left-0 z-2 w-100 h-100 bg-accent-light opacity-33 border-rounded flex-center p-xl">
                      <h5>Title</h5>
                      <p className="text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ratione adipisci nemo itaque tempore incidunt, debitis
                        nihil repudiandae ipsum autem sint quos, assumenda
                        veniam commodi fugit tempora asperiores, reiciendis ab
                        officiis. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Ratione adipisci nemo itaque tempore
                        incidunt, debitis nihil repudiandae ipsum autem sint
                        quos, assumenda veniam commodi fugit tempora asperiores,
                        reiciendis ab officiis.
                      </p>
                    </div>
                  </div>
                  <video
                    style={
                      {
                        objectFit: 'cover',
                        filter: 'hue-rotate(145deg) blur(2px)'
                      } as React.CSSProperties
                    }
                    className="object-position-center d-block"
                    width="100%"
                    height="100%"
                    muted
                    autoPlay
                    loop
                  >
                    <source src={'/assets/videos/abstract.mp4'} />
                    {/* <source src={'/assets/hide/5.mp4'} /> */}
                  </video>
                </div>
              </div>
            </div>
          </div>
          <div className="col-2 flex-center gap-xxxl px-xl">
            <FontAwesomeIcon
              icon={faNodeJs}
              className="color-accent"
              width={60}
            />
            <FontAwesomeIcon
              icon={faCodeMerge}
              className="color-accent-20"
              width={60}
            />
            <FontAwesomeIcon
              icon={faSass}
              className="color-accent-40"
              width={60}
            />
            <FontAwesomeIcon
              icon={faSquareJs}
              className="color-accent-60"
              width={60}
            />
          </div>
        </div>
      </section>
      <section className="bg-dark py-xxxl" style={{ minHeight: '100vh' }}>
        <div className="row py-xxl px-xxl g-xxxl">
          <div className="col-6 px-md">
            <div
              className="image-wrapper ratio-1x1 position-relative w-100 h-100"
              ref={imgRefOne}
              style={{ '--aspect-ratio': `1008/659` } as React.CSSProperties}
            >
              <div
                className="position-absolute top-0 left-0 mt-xxl ml-xxl z-2 w-100 h-100"
                ref={imgRef}
              >
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
              repellat ipsam optio, labore consequuntur facilis illo
              exercitationem quibusdam necessitatibus doloremque, doloribus
              provident fugit mollitia? Sunt error id iste. Quas, quos.
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-between gap-xl px-xxxl py-xxxl">
          <FontAwesomeIcon
            className="color-violet"
            icon={faDev}
            bounce
            width={120}
          />
          <FontAwesomeIcon
            className="color-violet-20"
            icon={faAws}
            bounce
            width={120}
          />
          <FontAwesomeIcon
            className="color-violet-40"
            icon={faCss3}
            bounce
            width={120}
          />
          <FontAwesomeIcon
            className="color-violet-60"
            icon={faVuejs}
            bounce
            width={120}
          />
          <FontAwesomeIcon
            className="color-violet-80"
            icon={faSass}
            bounce
            width={120}
          />
        </div>
      </section>{' '}
    </>
  )
}
