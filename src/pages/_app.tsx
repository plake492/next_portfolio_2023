import Header from '@components/components/Header'
import PageBg from '@components/components/PageBg'
import '@components/styles/global.scss'
import useTheme from '@components/hooks/useTheme'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const colorTheme = useTheme()

  return (
    <div
      className="bg-dark color-change-bg"
      id="page-wrapper"
      style={{ '--color': colorTheme?.dark } as React.CSSProperties}
    >
      <PageBg>
        <Header />
        <Component {...pageProps} />
      </PageBg>
    </div>
  )
}
