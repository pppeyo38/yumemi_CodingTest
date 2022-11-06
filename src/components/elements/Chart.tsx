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
import { useChart, prefColor } from '@/hooks/useChart'
import { PopulaionResponse } from '@/types/api/Population'
import { PrefItem } from '@/types/api/Pref'

type Props = {
  prefList: PrefItem[]
  resData: PopulaionResponse
}

export const Chart = ({ prefList, resData }: Props) => {
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
        right: 50,
        left: 50,
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
              stroke={prefColor[item.prefCode - 1]}
            />
          ),
      )}
    </LineChart>
  )
}
