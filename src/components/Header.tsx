import * as React from 'react'
import Link from 'next/link'
import useTheme from '@components/hooks/useTheme'
// import Image from 'next/image'

const links = [
  {
    href: '#about',
    text: 'About Me',
  },
  {
    href: '#contact',
    text: 'Contact',
  },
  {
    href: '/evermore-resort',
    text: 'Evermore',
  },
]

export default function Header() {
  const scrollDirection = useScrollDirection()
  const colorTheme = useTheme()

  return (
    <header
      className="py-md px-xl justify-content-between position-fixed z-10 w-100 top-0 d-none d-md-flex bg-dark border-bottom border-accent"
      id="header"
      style={
        {
          '--color': colorTheme?.dark,
          transform: `translateY(${scrollDirection === 'up' ? 0 : -100}%)`,
          transition: `all 500ms ease-in-out`,
        } as React.CSSProperties
      }
    >
      <div>
        <Link className="link--nav color-accent-40" href="/">
          {/* <svg
            width={475.80000000000007 / 2}
            height={94.4371716161841 / 2}
            viewBox="0 0 350.00000000000006 40.46828513170331"
          >
            <defs id="SvgjsDefs2449"></defs>
            <g
              id="SvgjsG2450"
              transform="matrix(0.9562005169692493,0,0,0.9562005169692493,0,-11.436153659909005)"
              fill="#8fe4ff"
            >
              <path d="M0 11.96 l22.84 0 c4.28 0 7.76 3.48 7.76 7.8 c0 4.28 -3.48 7.8 -7.76 7.8 l-19.72 -0.04 l0 9.36 l3.12 0 l0 -6.24 l3.08 0 l0 9.36 l-9.32 0 l0 -15.6 l22.84 0.04 c2.56 0 4.64 -2.12 4.64 -4.68 c0 -2.6 -2.08 -4.68 -4.64 -4.68 l-19.72 0 l0 3.12 l19.72 0 c0.8 0.04 1.48 0.72 1.48 1.56 s-0.64 1.52 -1.56 1.56 l-0.04 0 l-22.72 0 l0 -9.36 z M52.19200000000001 30.64 l1.8 -3.12 l5.44 9.36 l3.6 0 c-0.8 -1.28 -8.4 -14.28 -9.04 -15.56 l-7.84 13.6 l-2.92 5.08 l-10.8 0 c0.6 -1 4.64 -8.04 8.52 -14.8 c2.28 -3.96 4.8 -8.4 7.64 -13.24 l3.6 0 l-7.44 12.88 l-6.92 12.04 l3.6 0 c4.92 -8.68 8 -13.8 12.56 -21.8 c0.28 0.48 14.36 24.88 14.44 24.92 l-10.8 0 z M63.944 21.32 l0 -9.36 l30.6 0 l0 9.36 l-7.52 0 l0 -3.12 l4.4 0 l0 -3.12 l-24.36 0 l0 3.12 l10.64 0 l-0.04 18.68 l3.12 0 l0 -18.68 l3.12 0 l0 21.8 l-9.36 0 l0 -18.68 l-10.6 0 z M128.736 40 l-10.8 0 l-3.64 -6.28 l-7 0 l0 6.28 l-9.32 0 l0 -15.6 l22.88 0.04 c2.6 0 4.68 -2.12 4.68 -4.68 c0 -2.6 -2.08 -4.68 -4.68 -4.68 l-19.76 0 l0 3.12 l19.76 0 c0.84 0.04 1.48 0.72 1.48 1.56 s-0.64 1.52 -1.48 1.56 l-0.04 0 l-0.04 0 l-22.8 0 l0 -9.36 l22.88 0 c4.32 0 7.8 3.48 7.8 7.8 c0 4.28 -3.48 7.8 -7.8 7.8 l-19.76 -0.04 l0 9.36 l3.12 0 l0 -6.28 l11.88 0 c1.28 2.32 3.44 5.88 3.64 6.28 l3.6 0 c-0.32 -0.44 -2.16 -3.72 -3.64 -6.28 l3.6 0 c1.32 2.28 2.64 4.64 3.72 6.4 z M141.52800000000002 40 l-9.36 0 l0 -28.04 l9.36 0 l0 21.8 l-3.12 0 l0 -18.68 l-3.12 0 l0 21.8 l6.24 0 l0 3.12 z M175.56 11.96 l0 9.4 l-17.2 0 c-2.36 0.2 -4.16 2.24 -4.16 4.64 s1.8 4.36 4.16 4.64 l10.96 0 l0 3.12 l-10.96 0 c-4.04 -0.32 -7.24 -3.64 -7.24 -7.8 c0 -4 3.08 -7.4 7.08 -7.72 l14.24 0 l0 -3.16 l-14.08 0 l0 0.04 c-5.72 0.32 -10.28 5.04 -10.28 10.88 c0 5.8 4.56 10.56 10.28 10.88 l14.08 0 l0 -6.24 l3.12 0 l0 9.36 l-17.2 0 c-7.48 -0.32 -13.4 -6.48 -13.4 -14 c0 -7.56 5.92 -13.68 13.4 -14 z M194.39200000000002 30.32 l2.28 -2.12 l12.84 11.8 l-13.8 0 l-10.48 -9.6 l16.24 -15.32 l-4.52 0 l-11.72 11.32 l0 -11.32 l-3.12 0 l0 21.8 l5.52 0 l3.44 3.12 l-12.08 0 l0 -28.04 l9.36 0 l0 6.88 l7.36 -6.88 l13.64 0 l-19.56 18.4 l7.12 6.52 l4.6 0 z M233.89600000000002 15.079999999999998 l0 15.56 l27.64 0 l0 9.36 l-30.76 0 l0 -3.12 l27.68 0 l0 -3.12 l-27.68 0 l0 -21.8 l9.36 0 l0 15.6 l-3.12 0 l0 -12.48 l-3.12 0 z M281.808 30.64 l1.8 -3.12 l5.44 9.36 l3.6 0 c-0.8 -1.28 -8.4 -14.28 -9.04 -15.56 l-7.84 13.6 l-2.92 5.08 l-10.8 0 c0.6 -1 4.64 -8.04 8.52 -14.8 c2.28 -3.96 4.8 -8.4 7.64 -13.24 l3.6 0 l-7.44 12.88 l-6.92 12.04 l3.6 0 c4.92 -8.68 8 -13.8 12.56 -21.8 c0.28 0.48 14.36 24.88 14.44 24.92 l-10.8 0 z M316.88 30.32 l2.28 -2.12 l12.84 11.8 l-13.8 0 l-10.48 -9.6 l16.24 -15.32 l-4.52 0 l-11.72 11.32 l0 -11.32 l-3.12 0 l0 21.8 l5.52 0 l3.44 3.12 l-12.08 0 l0 -28.04 l9.36 0 l0 6.88 l7.36 -6.88 l13.64 0 l-19.56 18.4 l7.12 6.52 l4.6 0 z M366.03200000000004 11.96 l0 9.36 l-21.24 0 l0 3.12 l15.76 0 l0 3.12 l-18.88 0 l0 -9.36 l21.24 0 l0 -3.12 l-24.36 0 l0 21.8 l24.36 0 l0 -3.12 l-21.24 0 l0 -3.12 l24.36 0 l0 9.36 l-30.6 0 l0 -28.04 l30.6 0 z"></path>
            </g>
          </svg> */}
          {/* <Image
            className="ml-md"
            src="/assets/images/profile/car-16bit.png"
            alt=""
            width={128 * 0.75}
            height={50 * 0.75}
            style={{ filter: 'hue-rotate(310deg)' }}
          /> */}
          <p className="h5 mb-none">PATRICK LAKE</p>
        </Link>
      </div>
      <div>
        <ul className="d-flex gap-md align-items-center no-list-style">
          {links.map(({ href, text }, index) => (
            <li key={text}>
              <Link className={`link--nav mb-none`} href={href}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = React.useState('up')
  const [prevOffset, setPrevOffset] = React.useState(0)

  const toggleScrollDirection = () => {
    const { scrollY } = window

    if (scrollY > prevOffset) setScrollDirection('down')
    else setScrollDirection('up')

    setPrevOffset(scrollY)
  }

  React.useEffect(() => {
    window.addEventListener('scroll', toggleScrollDirection, {
      passive: true,
    })
    return () => window.removeEventListener('scroll', toggleScrollDirection)
  })
  return scrollDirection
}
