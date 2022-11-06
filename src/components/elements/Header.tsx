import { css } from '@emotion/react'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const Header = ({ children }: Props) => {
  return <header css={HeaderStyle}>{children}</header>
}

const HeaderStyle = css`
  width: calc(100% - 24px);
  padding: 12px;
  text-align: center;
  background-color: #38b2ac;
`
