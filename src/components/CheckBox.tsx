import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  onChange: () => void
}

export const CheckBox = ({ children, onChange }: Props) => {
  return (
    <label>
      <input type='checkbox' onChange={onChange} />
      <span>{children}</span>
    </label>
  )
}
