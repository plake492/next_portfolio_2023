import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <header className="bg-dark py-md px-xl d-flex justify-content-between">
          <div>
            <p className="h4 mb-none">Patrick Lake</p>
          </div>
          <div>
            <ul className="d-flex gap-md">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/evermore-resort">Evermore</Link>
              </li>
            </ul>
          </div>
        </header>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
