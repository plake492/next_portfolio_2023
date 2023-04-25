import * as React from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

export type GSAPTypes = typeof gsap

export default function useAnimation<T>(
  animation: (
    g: GSAPTypes,
    refs: { [key: string]: React.RefObject<T> },
    theme?: { [key: string]: string | number }
  ) => void,
  refs: { [key: string]: React.RefObject<T> },
  theme?: { [key: string]: string | number }
): void {
  const comp = React.useRef() // create a ref for the root level element (for scoping)

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => animation(gsap, refs, theme))

    return () => ctx.revert()
  }, [animation, refs])
}
