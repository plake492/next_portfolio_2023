import { GSAPTypes } from '@components/hooks/useAnimation'

export const heroTextFadeAnimations = <T>(
  gsap: GSAPTypes,
  { containerRef }: { [key: string]: React.RefObject<T> }
) => {
  gsap.from(
    Array.from((containerRef.current as HTMLDivElement).children).filter(
      (el) => !el.classList.value.includes('skip')
    ),
    {
      duration: 2,
      ease: 'power3.out',
      y: 100,
      autoAlpha: 0,
      stagger: 0.3,
      delay: 1.5,
    }
  )
}
