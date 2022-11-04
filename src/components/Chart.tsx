import { useEffect } from 'react'
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
import { useChart } from '@/hooks/useChart'
import { PopulaionResponse } from '@/types/api/Population'

type Props = {
  resData: PopulaionResponse
}

export const Chart = ({ resData }: Props) => {
  const { populationData, setChartData } = useChart()
  console.log(populationData)

  useEffect(() => {
    if (!resData.prefName) return
    setChartData(resData.prefName, resData.result.data[0].data)
  }, [resData])

  return (
    <LineChart
      width={700}
      height={400}
      data={populationData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='year' />
      <YAxis />
      <Tooltip />
      <Legend />
    </LineChart>
  )
}
