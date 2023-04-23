import useAnimation, { GSAPTypes } from '@components/hooks/useAnimation'
import { colorTheme } from '@components/utils/styleConfig'
import React from 'react'

export default function PageBg({ children }: { children: React.ReactNode }) {
  const styles = {
    sectionOne: 'position-relative z-1',
    sectionTwo: '',
    sectionThre: '',
  }

  const refRef = React.useRef(null)

  const animation = (gsap: GSAPTypes, { refRef }: any) => {
    gsap
      .timeline({
        scrollTrigger: {
          target: globalThis.document,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      })
      .to(globalThis.document.querySelector('#page-wrapper'), {
        '--color': colorTheme.primary,
      })
      .to(
        refRef.current.children[0],
        {
          xPercent: 90,
          yPercent: -10,
          rotate: 360,
        },
        0
      )
      .to(
        refRef.current.children[3],
        {
          xPercent: 90,
          yPercent: -10,
          rotate: 360,
        },
        0
      )
      .to(
        refRef.current.children[1],
        {
          xPercent: 100,
          yPercent: -200,
          rotate: 360,
        },
        0
      )
      .to(
        refRef.current.children[2],
        {
          xPercent: -2000,
          yPercent: 200,
        },
        0
      )
  }

  useAnimation(animation, { refRef })

  return (
    <div>
      <div className="page-bg" ref={refRef}>
        <div className="page-bg__shape md"></div>
        <div className="page-bg__shape lg"></div>
        <div className="page-bg__shape sm"></div>
        <div className="page-bg__shape md-b"></div>
      </div>

      <div className={styles.sectionOne}>{children}</div>
    </div>
  )
}
