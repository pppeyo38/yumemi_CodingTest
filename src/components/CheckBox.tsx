import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const CheckBox = ({ children }: Props) => {
  return (
    <label>
      <input type='checkbox' />
      <span>{children}</span>
    </label>
  )
}
