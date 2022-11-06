import { css, Global } from '@emotion/react'
import emotionReset from 'emotion-reset'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global
        styles={css`
          ${emotionReset}
        `}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
