import { GSAPTypes } from '@components/hooks/useAnimation'
import { isEven } from '../helpers'

export const curtainAnimation = <T>(
  gsap: GSAPTypes,
  { spacerWrapperRef }: { [key: string]: React.RefObject<T> }
) => {
  const spacerWrapperEl = spacerWrapperRef.current as HTMLDivElement

  const tl = gsap.timeline({
    defaults: { duration: 2 },
    scrollTrigger: {
      trigger: spacerWrapperEl,
      start: 'top bottom-=100',
      end: 'bottom bottom-=100',
      toggleActions: 'play none none reset',
    },
  })

  Array.from(spacerWrapperEl.children).forEach((el, index) => {
    tl.to(
      el,
      { autoAlpha: 0, xPercent: isEven(index) ? 100 : -100 },
      index * 0.2
    )
  })
}
