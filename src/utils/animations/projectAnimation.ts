import { GSAPTypes } from '@components/hooks/useAnimation'
import { isEven } from '../helpers'

export const projectAnimation = <T>(
  gsap: GSAPTypes,
  { imgRef, textRef }: { [key: string]: React.RefObject<T> }
) => {
  const textWrapperEl = textRef.current as HTMLDivElement
  const imgWrapperEl = imgRef.current as HTMLDivElement

  // Text Fade in animation
  gsap
    .timeline({
      defaults: { duration: 2 },
      scrollTrigger: {
        trigger: textWrapperEl,
        start: 'top bottom-=50',
        toggleActions: 'play none none reverse',
      },
    })
    .from(
      textWrapperEl.children,
      {
        ease: 'power4.inOut',
        autoAlpha: 0,
        y: 30,
        stagger: 0.5,
      },
      0
    )

  // Image Paralax animation
  gsap
    .timeline({
      scrollTrigger: {
        trigger: imgWrapperEl,
        start: 'top bottom-=100',
        end: 'bottom+=100% bottom-=100',
        scrub: 5,
      },
    })
    .to(
      imgWrapperEl.children[0],
      {
        y: 30,
        x: 20,
      },
      0
    )
    .to(
      imgWrapperEl.children[1],
      {
        y: -30,
        x: -15,
      },
      0.02
    )
}
