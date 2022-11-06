import { css } from '@emotion/react'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  checked: boolean
  onChange: () => void
}

export const CheckBox = ({ children, checked, onChange }: Props) => {
  return (
    <label css={LabelStyle}>
      <input type='checkbox' checked={checked} onChange={onChange} />
      <span>{children}</span>
    </label>
  )
}

const LabelStyle = css`
  display: inline-block;
  margin: 0 3px;
`
