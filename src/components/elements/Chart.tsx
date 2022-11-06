import { css } from '@emotion/react'
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
import { Heading } from '@/components/elements/Heading'
import { useChart, prefColor } from '@/hooks/useChart'
import { HeadingWrap } from '@/styles/ShareStyle'
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
    <section css={ChartCard}>
      <div css={HeadingWrap}>
        <Heading>総人口推移グラフ</Heading>
      </div>
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
        <XAxis
          dataKey='year'
          interval={0}
          angle={-30}
          dx={-10}
          dy={5}
          tick={{
            fontSize: 14,
          }}
        />
        <YAxis tickCount={8} domain={[0, 14000000]} />
        <Tooltip />
        <Legend height={20} iconSize={20} />
        {prefList.map(
          (item) =>
            item.isChecked && (
              <Line
                key={item.prefCode}
                type='monotone'
                dataKey={item.prefName}
                stroke={prefColor[item.prefCode - 1]}
                strokeWidth={1.5}
              />
            ),
        )}
      </LineChart>
    </section>
  )
}

const ChartCard = css`
  width: fit-content;
  padding: 10px 0 15px;
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1),
    0px 2px 4px -1px rgba(0, 0, 0, 0.06);
  border-radius: 4px;
`
