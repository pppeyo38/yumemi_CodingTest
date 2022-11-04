import { useCallback, useState } from 'react'
import { Data } from '@/types/api/Population'

const initialData = [
  {
    year: 1960,
  },
  {
    year: 1965,
  },
  {
    year: 1970,
  },
  {
    year: 1975,
  },
  {
    year: 1980,
  },
  {
    year: 1985,
  },
  {
    year: 1990,
  },
  {
    year: 1995,
  },
  {
    year: 2000,
  },
  {
    year: 2005,
  },
  {
    year: 2010,
  },
  {
    year: 2015,
  },
  {
    year: 2020,
  },
  {
    year: 2025,
  },
  {
    year: 2030,
  },
  {
    year: 2035,
  },
  {
    year: 2040,
  },
  {
    year: 2045,
  },
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
