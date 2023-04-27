import * as React from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'
import useTheme from './useTheme'
import { objectGenericStringNumber } from '@components/types'

export type GSAPTypes = typeof gsap

export default function useAnimation<T>(
  animation: (
    g: GSAPTypes,
    refs: { [key: string]: React.RefObject<T> },
    colorTheme?: objectGenericStringNumber | undefined
  ) => void,
  refs: { [key: string]: React.RefObject<T> }
): objectGenericStringNumber {
  const colorTheme = useTheme()

  const comp = React.useRef() // create a ref for the root level element (for scoping)

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

    const ctx = gsap.context(() => animation(gsap, refs, colorTheme))

    return () => ctx.revert()
  }, [animation, refs, colorTheme])

  return colorTheme
}
