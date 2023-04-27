import * as React from 'react'
import Contact from './Contact'

export default function Footer() {
  const [joke, setJoke] = React.useState(undefined)

  const getJoke = async () => {
    const res = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json',
      },
    })
    const response: { [k: string]: any } = await res.json()

    setJoke(response.joke)
  }

  React.useEffect(() => {
    getJoke()
  }, [])

  return (
    <>
      <Contact />
      <footer className="bg-dark">
        <div className="px-lg pt-xl pb-xxl">
          <div className="d-flex justify-content-between">
            <p className="h5 flex-1">PATRICK LAKE</p>
            <div className="flex-2 d-flex flex-col justify-content-start align-items-end alt-font gap-MD">
              <p className="text-sm c-pointer">{joke}</p>
              <button
                className="text-sm alt-font c-pointer py-xs px-sm border color-white px-lg py-xs text-lg border c-pointer"
                onClick={() => getJoke()}
              >
                try a different joke
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
