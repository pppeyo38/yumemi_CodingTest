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
    <section css={ChartBlock}>
      <div css={HeadingWrap}>
        <Heading>総人口推移グラフ</Heading>
      </div>
      <div css={ChartWrap}>
        <span css={YAxisLabel}>人口数</span>
        <LineChart width={585} height={360} data={populationData}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis
            dataKey='year'
            interval={0}
            angle={-30}
            dx={-10}
            dy={5}
            tick={{
              fontSize: 12,
            }}
          />
          <YAxis
            tickCount={8}
            domain={[0, 14000000]}
            tick={{
              fontSize: 12,
            }}
          />
          <Tooltip />
          <Legend iconSize={16} />
          {prefList.map(
            (item) =>
              item.isChecked && (
                <Line
                  key={item.prefCode}
                  type='monotone'
                  dataKey={item.prefName}
                  unit='人'
                  stroke={prefColor[item.prefCode - 1]}
                  strokeWidth={1.5}
                />
              ),
          )}
        </LineChart>
      </div>
    </section>
  )
}

const ChartBlock = css`
  width: fit-content;

  @media screen and (max-width: 620px) {
    width: 100%;
  }
`

const HeadingWrap = css`
  text-align: center;
  margin: 30px 0 20px;
`

const ChartWrap = css`
  position: relative;
  width: fit-content;
  margin: 0 auto;

  @media screen and (max-width: 620px) {
    width: auto;
    padding: 0 30px;
    overflow: scroll;
  }
`

const YAxisLabel = css`
  position: absolute;
  top: -16px;
  left: 26px;
  font-size: 12px;
  line-height: 1;
`
