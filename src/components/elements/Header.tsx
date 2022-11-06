import { css } from '@emotion/react'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const Header = ({ children }: Props) => {
  return <header css={HeaderStyle}>{children}</header>
}

const HeaderStyle = css`
  width: 100vw;
  padding: 12px 24px;
  text-align: center;
  background-color: #38b2ac;
`
