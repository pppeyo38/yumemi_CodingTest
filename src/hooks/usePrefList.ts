import axios from 'axios'
import { useCallback, useState } from 'react'
import { PrefResponse } from '@/types/api/Pref'

export const usePrefList = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [prefList, setPrefList] = useState<PrefResponse>({} as PrefResponse)

  const getPrefList = useCallback(() => {
    axios
      .get<PrefResponse>(
        'https://opendata.resas-portal.go.jp/api/v1/prefectures',
        {
          headers: { 'x-api-key': process.env.NEXT_PUBLIC_API_KEY },
        },
      )
      .then((res) => setPrefList(res.data))
      .catch(() => {})
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return { loading, prefList, getPrefList }
}
