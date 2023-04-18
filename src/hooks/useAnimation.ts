import * as React from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

export default function useAnimation<T>(
  animation: Function,
  refs: T
): void {
  const comp = React.useRef() // create a ref for the root level element (for scoping)

  React.useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => animation(gsap, refs), comp)

    return () => ctx.revert()
  }, [animation, refs])
}
