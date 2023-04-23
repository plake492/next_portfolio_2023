import { GSAPTypes } from '@components/hooks/useAnimation'

export const gridStripAnimation = <T>(
  gsap: GSAPTypes,
  { containerRef }: { [key: string]: React.RefObject<T> }
) => {
  const containerEl = containerRef.current as HTMLDivElement

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: containerEl,
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
    },
  })

  Array.from(containerEl.children).forEach((el: any, index: number) => {
    tl.to(el, { '--width': 0 }, 0)
  })
}
