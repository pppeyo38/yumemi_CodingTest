import axios from 'axios'
import { useCallback, useState } from 'react'
import { PrefItem, PrefResponse } from '@/types/api/Pref'

export const usePrefList = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [prefList, setPrefList] = useState<PrefItem[]>({} as PrefItem[])

  const getPrefList = useCallback(() => {
    axios
      .get<PrefResponse>(
        'https://opendata.resas-portal.go.jp/api/v1/prefectures',
        {
          headers: { 'x-api-key': process.env.NEXT_PUBLIC_API_KEY },
        },
      )
      .then((res) => setPrefList(res.data.result))
      .catch(() => {})
      .finally(() => {
        setPrefList((prev) => prev.map((obj) => ({ ...obj, isChecked: false })))
        setLoading(false)
      })
  }, [])

  return { loading, prefList, setPrefList, getPrefList }
}
