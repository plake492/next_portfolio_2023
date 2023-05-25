import * as React from 'react'
import { GSAPTypes } from '@components/hooks/useAnimation'
import { objectGenericStringNumber } from '@components/types'

export const pinProgressAnimation = <T>(
  gsap: GSAPTypes,
  sectionRef: React.RefObject<T>,
  theme: objectGenericStringNumber
) => {
  const sectionEl = sectionRef.current as HTMLElement

  const progressbarTl = gsap.timeline({
    defaults: { duration: 1, ease: 'power3.out' },
    scrollTrigger: {
      trigger: sectionEl,
      start: 'top top',
      end: 'bottom+=50% top',
      scrub: true,
    },
  })

  progressbarTl.to(
    sectionEl,
    {
      '--border-color': theme?.dark + '00',
      backgroundColor: '#00000000',
    },
    0
  )
  progressbarTl.from(
    sectionEl.querySelector('.scroll-progress-bar'),
    { width: 0, duration: 2 },
    0
  )

  progressbarTl.to(
    sectionEl.querySelector('.scroll-progress-bar'),
    { autoAlpha: 0, duration: 0.5 },
    '>-0.25'
  )
}
