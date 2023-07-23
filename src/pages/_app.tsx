import type { AppProps } from 'next/app'
import Header from '@components/components/Header'
import useTheme from '@components/hooks/useTheme'
import Footer from '@components/components/Footer'
import '@components/styles/index.scss'
import Contact from '@components/components/Contact'

export default function App({ Component, pageProps, router }: AppProps) {
  const colorTheme = useTheme()

  return (
    <>
      <Header />
      <div
        className="bg-dark color-change-bg"
        id="page-wrapper"
        style={{ '--color': colorTheme?.dark } as React.CSSProperties}
      >
        <Component {...pageProps} key={router.asPath} />
      </div>
      <div className="position-relative z-3">
        {/* <Contact /> */}
        <Footer />
      </div>
    </>
  )
}
