import { GSAPTypes } from '@components/hooks/useAnimation'
import { colorTheme } from '../styleConfig'

export interface TextColorAnimationRefs {
  textColorShiftRef: React.RefObject<HTMLDivElement>
}
export const textColorShiftAnimation = <T>(
  gsap: GSAPTypes,
  { textColorShiftRef }: { [key: string]: React.RefObject<T> }
) => {
  // Handle Text Color Animation
  const textSpanEls = (textColorShiftRef.current as HTMLDivElement).children

  gsap.from(textSpanEls[0], {
    duration: 2,
    autoAlpha: 0,
    delay: 1,
  })

  gsap.from(textSpanEls[1], {
    x: -100,
    duration: 2,
    autoAlpha: 0,
    delay: 1,
  })

  gsap.from(textSpanEls[2], {
    x: 100,
    duration: 2,
    autoAlpha: 0,
    delay: 1.5,
  })

  Array.from(textSpanEls).map((el, index) => {
    const tl = gsap.timeline({
      defaults: { duration: 2 },
      delay: 2,
      repeat: 1,
      repeatDelay: 1,
    })

    tl.to(
      el.children,
      {
        stagger: 0.1,
        '--text-color': colorTheme.tertiary,
      },
      0
    )

    tl.to(
      el.children,
      {
        stagger: 0.05,
        '--text-color': colorTheme.accent,
      },
      0.4
    )

    tl.to(
      el.children,
      {
        stagger: 0.075,
        '--text-color': colorTheme.tertiary,
      },
      0.8
    )

    tl.to(
      el.children,
      {
        stagger: 0.1,
        '--text-color': colorTheme.dark,
      },
      1
    )
  })
}
