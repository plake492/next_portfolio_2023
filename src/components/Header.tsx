import Link from 'next/link'
import useTheme from '@components/hooks/useTheme'

const links = [
  {
    href: '/',
    text: 'Home',
  },
  {
    href: '/evermore-resort',
    text: 'Evermore',
  },
  {
    href: '/#node.js',
    text: 'Tech',
  },
  {
    href: '/evermore-resort',
    text: 'Evermore',
  },
  {
    href: '/evermore-resort',
    text: 'Evermore',
  },
]

export default function Header() {
  const colorTheme = useTheme()

  return (
    <header
      className="py-md px-xl d-flex justify-content-between position-fixed z-10 w-100 top-0"
      id="header"
      style={{ '--color': colorTheme?.dark } as React.CSSProperties}
    >
      <div>
        <Link className="link--nav color-accent-40" href="/">
          <p className="h4 mb-none">P.L.</p>
        </Link>
      </div>
      <div>
        <ul className="d-flex gap-md align-items-center">
          {links.map(({ href, text }, index) => (
            <li key={text}>
              <Link
                className={`link--nav mb-none color-accent-${index + 2}0`}
                href={href}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
