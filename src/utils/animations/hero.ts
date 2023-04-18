export interface HeroAnimationRefs {
  vidRef: React.RefObject<HTMLDivElement>
  textRef: React.RefObject<HTMLDivElement>
}
export const heroAnimations = (
  gsap: any,
  { vidRef, textRef }: HeroAnimationRefs
) => {
  console.log('globalThis==>>', globalThis)
  //   const tl = gsap.timeline({
  //     // ease: 'power4.out',
  //     // scrollTrigger: {
  //     //   trigger: vidRef.current,
  //     //   start: 'top top',
  //     //   end: 'bottom+=25% top',
  //     //   scrub: 3,
  //     //   pin: true
  //     // }
  //   })
  const tl = gsap.timeline({
    defaults: { duration: 3, ease: 'power4.in' }
  })

  tl.fromTo(
    (vidRef.current as HTMLDivElement).children[1],
    {
      filter: 'grayscale(0.5) brightness(0) hue-rotate(180deg)'
    },
    {
      duration: 1.5,
      filter: 'grayscale(0) brightness(1) hue-rotate(0deg)',
      yPercentage: -100
    },
    '0'
  )
  tl.from(textRef.current, { y: '250', autoAlpha: 0 }, '>-0.5')
  tl.to(textRef.current, { background: '#222222aa' }, '>-0.25')
  tl.to(
    (textRef.current as HTMLDivElement).children[0],
    { color: '#dddddd' },
    '>-0'
  )
  tl.to(vidRef.current as HTMLDivElement, { x: 100 }, '1')
}
