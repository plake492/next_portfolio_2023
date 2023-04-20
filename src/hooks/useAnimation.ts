import * as React from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

export type GSAPTypes = typeof gsap

export default function useAnimation<T>(
  animation: (
    g: GSAPTypes,
    refs: { [key: string]: React.RefObject<T> }
  ) => void,
  refs: { [key: string]: React.RefObject<T> }
): void {
  const comp = React.useRef() // create a ref for the root level element (for scoping)

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => animation(gsap, refs))

    return () => ctx.revert()
  }, [animation, refs])
}
