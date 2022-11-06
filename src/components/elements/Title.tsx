import { css } from '@emotion/react'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const Title = ({ children }: Props) => {
  return <h1 css={TitleStyle}>{children}</h1>
}

const TitleStyle = css`
  display: inline;
  color: #fff;
  font-size: 36px;
  font-weight: bold;

  @media screen and (max-width: 620px) {
    font-size: 32px;
  }
`
