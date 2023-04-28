import { GSAPTypes } from '@components/hooks/useAnimation'

export const slideAnimate = <T>(
  gsap: GSAPTypes,
  { slideWrapperRef }: { [key: string]: React.RefObject<T> }
) => {
  const slideWrapperEl = slideWrapperRef.current as HTMLDivElement

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: slideWrapperEl,
      start: 'top top',
      end: `bottom+=${(slideWrapperEl.children.length - 1) * 100}%`,
      pin: true,
      scrub: true,
      markers: true,
    },
  })

  Array.from(slideWrapperEl.children).forEach((el, index) => {
    if (index) {
      tl.from(el, { xPercent: 100 }, index - 1)
    }
  })
}
