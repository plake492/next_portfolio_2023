import { GSAPTypes } from '@components/hooks/useAnimation'

export const halfBorderAnimation = <T>(
  gsap: GSAPTypes,
  { blockOneRef, blockTwoRef }: { [key: string]: React.RefObject<T> }
): void => {
  const blockOneEl = blockOneRef.current as HTMLDivElement
  const blockTwoEL = blockTwoRef.current as HTMLDivElement
  const blockOneChildrenEl = blockOneEl.children[0]
  const blockTwoChildrenEl = blockTwoEL.children[0]

  const blockOneConfig = { x: -36, y: 36, autoAlpha: 1 }
  const blockTwoConfig = { autoAlpha: 1, x: 36, y: -36 }

  const tl = gsap.timeline({
    delay: 1,
    defaults: { duration: 2, ease: 'power4.out' },
  })

  // TOP RIGHT
  tl.to(blockOneEl, { autoAlpha: 1 }, 0)

  tl.to(blockOneChildrenEl, { ...blockOneConfig }, 0)

  tl.to(blockOneChildrenEl.children[0], { ...blockOneConfig, duration: 2.5 }, 0)

  // BOTTOM LEFT
  tl.to(blockTwoChildrenEl, { ...blockTwoConfig }, 0.5)
}
