import { GSAPTypes } from '@components/hooks/useAnimation'
import { pinProgressAnimation } from './pinProgressAnimaition'

export const allProjectsAnimtaion = <T>(
  gsap: GSAPTypes,
  { sectionRef }: { [key: string]: React.RefObject<T> },
  theme: any
) => {
  pinProgressAnimation(gsap, sectionRef, theme)

  const sectionEl = sectionRef.current as HTMLDivElement

  const tl = gsap.timeline({
    defaults: { duration: 1, ease: 'power2.out' },
    scrollTrigger: {
      trigger: sectionEl,
      start: 'top top',
      end: 'bottom top',
      pin: true,
    },
  })

  tl.from(
    sectionEl.querySelector('h4'),
    {
      autoAlpha: 0,
      y: -40,
    },
    0
  )

  tl.from(
    (sectionEl.querySelector('#project-cards') as HTMLDivElement).children,
    {
      autoAlpha: 0,
      x: -10,
      y: 40,
      stagger: 0.3,
    },
    0
  )
}
