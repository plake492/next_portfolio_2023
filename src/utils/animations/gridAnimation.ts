import { GSAPTypes } from '@components/hooks/useAnimation'

export const gridAnimation = <T>(
  gsap: GSAPTypes,
  { gridRef }: { [key: string]: React.RefObject<T> }
) => {
  const gridWrapperEl = gridRef.current as HTMLDivElement

  const tl = gsap.timeline()

  tl.from(
    gridWrapperEl.children[0].children,
    {
      duration: 2,
      ease: 'power3.in',
      width: globalThis.innerWidth / 15,
    },
    0
  )

  tl.from(
    gridWrapperEl.children[1].children,
    {
      duration: 2,
      ease: 'power3.out',
      xPercent: 100,
      stagger: 0.05,
    },
    0
  )

  tl.to(
    gridWrapperEl.children[0].children,
    {
      duration: 1.75,
      height: 0,
      stagger: {
        from: 'center',
        ease: 'power2.in',
        amount: 1.5,
      },
    },
    2
  )

  tl.to(
    gridWrapperEl.children[1].children,
    {
      duration: 1.5,
      width: 0,
      stagger: {
        from: 'center',
        ease: 'power2.in',
        amount: 1.5,
      },
    },
    2.25
  )
}
