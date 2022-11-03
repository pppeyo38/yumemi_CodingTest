import { useState } from 'react'
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

const initialData = [
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

export const Chart = () => {
  const [data, setData] = useState(initialData)

  return (
    <LineChart
      width={700}
      height={400}
      data={data}
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
