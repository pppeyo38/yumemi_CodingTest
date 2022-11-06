import { css } from '@emotion/react'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const Title = ({ children }: Props) => {
  return <h1 css={TitleStyle}>{children}</h1>
}

const TitleStyle = css`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
`
