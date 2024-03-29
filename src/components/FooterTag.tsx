import * as React from 'react'
import useAnimation, { GSAPTypes } from '@components/hooks/useAnimation'

export default function FooterTag() {
  const [joke, setJoke] = React.useState(undefined)
  const [lockJoke, setLockJoke] = React.useState(false)

  React.useEffect(() => joke && setLockJoke(true), [joke])

  const footerRef = React.useRef(null)

  const getJoke = async (override?: boolean) => {
    if (lockJoke && !override) return

    try {
      const res = await fetch('https://icanhazdadjoke.com/', {
        headers: { Accept: 'application/json' },
      })

      const response = await res.json()

      setJoke(response.joke)
    } catch (err) {
      console.error(err)
    } finally {
      setLockJoke(false)
    }
  }

  useAnimation(
    (gsap: GSAPTypes, { footerRef, contactRef }: any) => {
      gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          onEnter: () => getJoke(),
          onLeaveBack: () => setLockJoke(false),
          start: 'top bottom',
          end: 'top bottom',
        },
      })
    },
    { footerRef }
  )
  return (
    <div className="d-flex justify-content-between px-lg pb-xl" ref={footerRef}>
      <p className="h5 flex-1">PATRICK LAKE</p>
      <div className="flex-2 d-flex flex-col justify-content-start align-items-end alt-font gap-md">
        <p className="text-sm">Enjoy a dad joke: </p>
        <p className="text-end" style={{ minHeight: 65 }}>
          {joke ?? 'fetching...'}
        </p>
        <button
          className="text-sm alt-font c-pointer py-xs px-sm border color-white px-lg py-xs text-lg border c-pointer"
          onClick={() => getJoke(true)}
        >
          Get a different joke
        </button>
      </div>
    </div>
  )
}
