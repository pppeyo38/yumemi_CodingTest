import { css } from '@emotion/react'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const Heading = ({ children }: Props) => {
  return <h2 css={HeadingStyle}>{children}</h2>
}

const HeadingStyle = css`
  font-size: 24px;
`
