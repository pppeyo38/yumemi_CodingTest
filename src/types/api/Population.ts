export type Data = {
  year: number
  value: number
}

type DataItem = {
  label: string
  data: Data[]
}

type PopulationItem = {
  boundaryYear: number
  data: DataItem[]
}

export type PopulaionResponse = {
  message: null
  result: PopulationItem
  prefCode?: number
  prefName?: string
}
