import { GSAPTypes } from '@components/hooks/useAnimation'

export const heroTextFadeAnimations = <T>(
  gsap: GSAPTypes,
  { containerRef }: { [key: string]: React.RefObject<T> }
) => {
  const currentEl = containerRef.current as HTMLDivElement

  const heroElements = Array.from(currentEl.children).filter(
    (el) => !el.classList.value.includes('skip')
  )

  const arrowEl = (currentEl.parentElement as Element).querySelector(
    '.hero-arrow-down'
  )

  heroElements.push(arrowEl as Element)

  gsap.from(heroElements, {
    duration: 2,
    ease: 'power3.out',
    y: 100,
    autoAlpha: 0,
    stagger: 0.3,
    delay: 1.5,
  })
}
