import { useEffect } from 'react'
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
} from 'recharts'
import { useChart } from '@/hooks/useChart'
import { PopulaionResponse } from '@/types/api/Population'
import { PrefItem } from '@/types/api/Pref'

type Props = {
  resData: PopulaionResponse
  prefList: PrefItem[]
}

export const Chart = ({ resData, prefList }: Props) => {
  const { populationData, setChartData } = useChart()

  useEffect(() => {
    if (!resData.prefName || !resData.prefCode) return
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
      {prefList.map(
        (item) =>
          item.isChecked && (
            <Line
              key={item.prefCode}
              type='monotone'
              dataKey={item.prefName}
              stroke='#82ca9d'
            />
          ),
      )}
    </LineChart>
  )
}
