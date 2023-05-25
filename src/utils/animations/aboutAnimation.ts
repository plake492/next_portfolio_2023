import { GSAPTypes } from '@components/hooks/useAnimation'
import { objectGenericStringNumber } from '@components/types'
import { pinProgressAnimation } from './pinProgressAnimaition'

export const aboutAnimation = (
  gsap: GSAPTypes,
  { aboutRef }: { [key: string]: React.RefObject<HTMLElement> },
  theme: objectGenericStringNumber | undefined
) => {
  const aboutEl = aboutRef.current as HTMLElement
  const toolBarWrappers = aboutEl.querySelectorAll('.progressbar-wrapper')
  const toolBars = aboutEl.querySelectorAll('.progressbar-bar')
  const toolBarTitles = aboutEl.querySelectorAll('.progressbar-title')
  const toolBarCounters = aboutEl.querySelectorAll('.progressbar-count')
  const contentWrapper = aboutEl.querySelector('.row')
  const aboutTextWrapper = (
    aboutEl.querySelector('.about-text-wrapper') as HTMLElement
  ).children

  // Include the li elements in the text wrapper array
  const allTextWrapper: Element[] = Array.from(
    aboutTextWrapper[0].children
  ).concat(Array.from(aboutTextWrapper))

  // const animateOut = [...allTextWrapper, ...Array.from(toolBarWrappers)]

  // Use pinning with progress bar aniamtion
  pinProgressAnimation(gsap, aboutRef, theme as objectGenericStringNumber)

  const tl = gsap.timeline({
    defaults: { duration: 2, ease: 'power3.out' },
    scrollTrigger: {
      trigger: aboutRef.current,
      start: 'top top',
      end: 'bottom+=50% top',
      pin: true,
      anticipatePin: 1,
      toggleActions: 'play none none none',
    },
  })

  gsap
    .timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        start: 'bottom bottom-=10%',
        end: 'bottom bottom-=10%',
        toggleActions: 'play none none reverse',
      },
    })
    .to(
      [...Array.from((contentWrapper as Element).children)],
      {
        duration: 0.75,
        ease: 'power1',
        y: -75,
        stagger: 0.2,
        autoAlpha: 0,
      },
      0
    )

  tl.to(
    aboutEl.querySelector('.about-icon'),
    {
      autoAlpha: 0,
      duration: 0.85,
    },
    0
  )

  // Text Wrapper
  tl.from(
    allTextWrapper,
    {
      y: 75,
      autoAlpha: 0,
      ease: 'power2.out',
      stagger: 0.3,
    },
    0
  )
  // Toolbar Wrapper (Animate in and up)
  tl.from(
    toolBarWrappers,
    {
      y: (i) => (i + 1) * 10,
      autoAlpha: 0,
      ease: 'power4.out',
      stagger: 0.3,
    },
    0
  )
  // Animate toolbar width
  tl.to(
    toolBars,
    {
      width: function () {
        return `${this._targets[0].dataset.width}%`
      },
      stagger: 0.4,
    },
    0
  )
  // Animte toolbar title color
  tl.to(
    toolBarTitles,
    { '--text-color': theme?.textColorHeader, stagger: 0.4 },
    0
  )
  tl.to(toolBarTitles, { '--text-color': theme?.dark, stagger: 0.25 }, 1.75)
  // Toolbar text count
  Array.from(toolBarCounters).forEach((el: any, index) =>
    tl.from(
      el,
      {
        textContent: 0,
        snap: { textContent: 1 },
        onUpdate() {
          this._targets[0].innerHTML = this.targets()[0].textContent + '%'
        },
      },
      index * 0.45
    )
  )

  const listItemsTL = gsap.timeline({
    repeat: -1,
    delay: 3,
  })

  const liEls = Array.from(aboutTextWrapper[0].children)
  const textTime = liEls.length

  liEls.forEach((el, index) => {
    const pEl = el.querySelector('p')

    listItemsTL.to(
      pEl,
      {
        '--text-color': theme?.['accent-60'],
      },
      index * textTime
    )
    listItemsTL.to(
      pEl,
      { '--text-color': theme?.textColor },
      (index + 1) * textTime
    )
  })
}
