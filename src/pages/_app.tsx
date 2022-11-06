import { css, Global } from '@emotion/react'
import emotionReset from 'emotion-reset'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global
        styles={css`
          ${emotionReset}
          body {
            color: #414a53;
            font-family: 'Zen Kaku Gothic New', sans-serif;
            line-height: 1.44;
            letter-spacing: 0.03em;
          }
        `}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
