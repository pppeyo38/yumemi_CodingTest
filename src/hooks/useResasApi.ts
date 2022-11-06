import axios from 'axios'
import { useCallback, useState } from 'react'
import { PopulaionResponse } from '@/types/api/Population'
import { PrefItem, PrefResponse } from '@/types/api/Pref'

const initialList = [...Array(47)].map((_, index) => ({
  prefCode: index,
  prefName: '',
  isChecked: false,
}))

export const useResasApi = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [prefList, setPrefList] = useState<PrefItem[]>(initialList)
  const [resPopulationData, setResPopulationData] = useState<PopulaionResponse>(
    {} as PopulaionResponse,
  )

  const getPrefList = useCallback(() => {
    axios
      .get<PrefResponse>(
        'https://opendata.resas-portal.go.jp/api/v1/prefectures',
        {
          headers: { 'x-api-key': process.env.NEXT_PUBLIC_API_KEY },
        },
      )
      .then((res) =>
        setPrefList((prevObj) =>
          prevObj.map((obj) => ({
            ...obj,
            prefCode: res.data.result[obj.prefCode].prefCode,
            prefName: res.data.result[obj.prefCode].prefName,
          })),
        ),
      )
      .catch(() => {})
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const getPopulation = useCallback((prefCode: number, prefName: string) => {
    axios
      .get<PopulaionResponse>(
        `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefCode}`,
        {
          headers: { 'x-api-key': process.env.NEXT_PUBLIC_API_KEY },
        },
      )
      .then((res) => {
        setResPopulationData({
          ...res.data,
          prefCode: prefCode,
          prefName: prefName,
        })
      })
      .catch(() => {})
  }, [])

  const onCheckBox = useCallback(
    (checkPrefCode: number, checkPrefName: string) => {
      if (!prefList[checkPrefCode - 1].isChecked)
        getPopulation(checkPrefCode, checkPrefName)
      setPrefList((prevState) =>
        prevState.map((obj) =>
          obj.prefCode === checkPrefCode
            ? { ...obj, isChecked: !obj.isChecked }
            : obj,
        ),
      )
    },
    [],
  )

  return { loading, prefList, resPopulationData, getPrefList, onCheckBox }
}
