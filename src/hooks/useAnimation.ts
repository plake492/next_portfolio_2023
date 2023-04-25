import * as React from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import useTheme from './useTheme'

export type GSAPTypes = typeof gsap

export default function useAnimation<T>(
  animation: (
    g: GSAPTypes,
    refs: { [key: string]: React.RefObject<T> },
    colorTheme?: { [key: string]: string | number }
  ) => void,
  refs: { [key: string]: React.RefObject<T> }
): void {
  const colorTheme = useTheme()

  const comp = React.useRef() // create a ref for the root level element (for scoping)

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => animation(gsap, refs, colorTheme))

    return () => ctx.revert()
  }, [animation, refs, colorTheme])
}
