import { GSAPTypes } from '@components/hooks/useAnimation'

export interface TextColorAnimationRefs {
  textColorShiftRef: React.RefObject<HTMLDivElement>
}
export const textColorShiftAnimation = <T>(
  gsap: GSAPTypes,
  { textColorShiftRef }: { [key: string]: React.RefObject<T> },
  colorTheme?: { [key: string]: string | number }
) => {
  // Handle Text Color Animation
  const textSpanEls = (textColorShiftRef.current as HTMLDivElement).children
  console.log('colorTheme ==>', colorTheme)
  gsap.from(textSpanEls[0], {
    duration: 2,
    autoAlpha: 0,
    delay: 1,
  })

  gsap.from(textSpanEls[1], {
    x: -75,
    duration: 2,
    autoAlpha: 0,
    delay: 1,
  })

  gsap.from(textSpanEls[2], {
    x: 75,
    duration: 2,
    autoAlpha: 0,
    delay: 1,
  })

  Array.from(textSpanEls).map((el, index) => {
    const tl = gsap.timeline({
      defaults: { duration: 3 },
      delay: 2,
    })

    tl.to(
      el.children,
      {
        stagger: 0.1,
        '--text-color-header': colorTheme?.tertiary,
      },
      0
    )

    tl.to(
      el.children,
      {
        stagger: 0.05,
        '--text-color-header': colorTheme?.accent,
      },
      0.4
    )

    tl.to(
      el.children,
      {
        stagger: 0.075,
        '--text-color-header': colorTheme?.tertiary,
      },
      0.8
    )

    tl.to(
      el.children,
      {
        stagger: 0.1,
        '--text-color-header': colorTheme?.textColorHeader,
      },
      1
    )
  })
}
