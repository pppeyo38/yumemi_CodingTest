type DataItem = {
  label: string
  data: {
    year: number
    value: number
  }[]
}

type PopulationItem = {
  boundaryYear: number
  data: DataItem[]
}

export type PopulaionResponse = {
  message: null
  result: PopulationItem[]
}
