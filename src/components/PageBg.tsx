import useAnimation, { GSAPTypes } from '@components/hooks/useAnimation'
import useTheme from '@components/hooks/useTheme'
import React from 'react'

export default function PageBg({ children }: { children: React.ReactNode }) {
  const styles = {
    sectionOne: 'position-relative z-1',
    sectionTwo: '',
    sectionThre: '',
  }

  const refRef = React.useRef(null)

  const colorTheme = useTheme()

  const animation = (gsap: GSAPTypes, { refRef }: any) => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: document.querySelectorAll('#page-wrapper'),
          start: 'top top',
          end: 'bottom bottom',
          scrub: 2,
        },
      })
      .to(globalThis.document.querySelectorAll('.color-change-bg'), {
        '--color': colorTheme?.primary,
      })
      .to(
        refRef.current.children[0],
        {
          xPercent: 175,
          yPercent: -100,
          rotate: 200,
          '--a': colorTheme?.tertiary,
          '--b': colorTheme?.accent,
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
          yPercent: -100,
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
    <main>
      <aside className="page-bg pe-none" ref={refRef}>
        <div className="page-bg__shape md"></div>
        <div className="page-bg__shape lg"></div>
        <div className="page-bg__shape sm"></div>
        {/* <div className="page-bg__shape md-b"></div> */}
      </aside>

      <section className={styles.sectionOne}>{children}</section>
    </main>
  )
}
