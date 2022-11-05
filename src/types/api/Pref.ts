export type PrefItem = {
  prefCode: number
  prefName: string
  isChecked: boolean
}

export type PrefResponse = {
  message: null
  result: PrefItem[]
}
