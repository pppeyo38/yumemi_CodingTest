import { useCallback, useState } from 'react'
import { Data } from '@/types/api/Population'

const initialData = [
  {
    year: '1960年',
  },
  {
    year: '1965年',
  },
  {
    year: '1970年',
  },
  {
    year: '1975年',
  },
  {
    year: '1980年',
  },
  {
    year: '1985年',
  },
  {
    year: '1990年',
  },
  {
    year: '1995年',
  },
  {
    year: '2000年',
  },
  {
    year: '2005年',
  },
  {
    year: '2010年',
  },
  {
    year: '2015年',
  },
  {
    year: '2020年',
  },
  {
    year: '2025年',
  },
  {
    year: '2030年',
  },
  {
    year: '2035年',
  },
  {
    year: '2040年',
  },
  {
    year: '2045年',
  },
]

export const prefColor = [
  '#C5B3D3',
  '#BC1D21',
  '#A5A1A6',
  '#80B090',
  '#CE9444',
  '#FC584E',
  '#F09199',
  '#70A5F3',
  '#BB5561',
  '#8B828D',
  '#2F7E51',
  '#D5AA7D',
  '#FF6149',
  '#01036A',
  '#F6AE3F',
  '#EC746B',
  '#E29567',
  '#265871',
  '#522F60',
  '#76844F',
  '#72635C',
  '#80B219',
  '#4F2926',
  '#525461',
  '#06899B',
  '#C1AB05',
  '#0A1DAA',
  '#008AD2',
  '#66514E',
  '#E16463',
  '#CDBCA1',
  '#46766A',
  '#38ADDB',
  '#ECDF2B',
  '#424347',
  '#BCE066',
  '#9D6C1F',
  '#F18D00',
  '#A22C2C',
  '#EA6623',
  '#6D513C',
  '#6CA9C1',
  '#020E1D',
  '#72F0FC',
  '#FDB306',
  '#186043',
  '#AF2769',
]

export const useChart = () => {
  const [populationData, setPopulationData] = useState(initialData)

  const setChartData = useCallback(
    (prefName: string | undefined, data: Data[]) => {
      if (!prefName) return
      const valueList = data.map((getData) => getData.value)
      setPopulationData((prevData) =>
        prevData.map((obj, index) => ({
          ...obj,
          [prefName]: valueList[index],
        })),
      )
    },
    [],
  )

  return { populationData, setChartData }
}
