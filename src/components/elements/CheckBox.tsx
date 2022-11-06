import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  checked: boolean
  onChange: () => void
}

export const CheckBox = ({ children, checked, onChange }: Props) => {
  return (
    <label>
      <input type='checkbox' checked={checked} onChange={onChange} />
      <span>{children}</span>
    </label>
  )
}
