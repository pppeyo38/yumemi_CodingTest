import axios from 'axios'
import { useCallback, useState } from 'react'
import { PopulaionResponse } from '@/types/api/Population'

export const usePopulation = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [resData, setResData] = useState<PopulaionResponse>(
    {} as PopulaionResponse,
  )

  const getPopulation = useCallback((prefId: number) => {
    axios
      .get<PopulaionResponse>(
        `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefId}`,
        {
          headers: { 'x-api-key': process.env.NEXT_PUBLIC_API_KEY },
        },
      )
      .then((res) => setResData(res.data))
      .catch(() => {})
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return { loading, resData, getPopulation }
}
