import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Chart } from '@/components/Chart'
import { CheckBox } from '@/components/CheckBox'
import { usePopulation } from '@/hooks/usePopulation'
import { usePrefList } from '@/hooks/usePrefList'
import { PrefItem } from '@/types/api/Pref'

const Home: NextPage = () => {
  const { resData, getPopulation } = usePopulation()
  const { loading, prefList, getPrefList } = usePrefList()
  const [checkedPrefs, setCheckedPrefs] = useState<PrefItem[]>([])

  const onCheckedBox = (checkPrefCode: number, checkPrefName: string) => {
    getPopulation(checkPrefCode, checkPrefName)
    setCheckedPrefs((prevState) => [
      ...prevState,
      { prefCode: checkPrefCode, prefName: checkPrefName },
    ])
  }

  useEffect(() => getPrefList(), [])

  return (
    <>
      <Head>
        <title>タイトル</title>
      </Head>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div>
            {prefList.result.map((item, index) => (
              <CheckBox
                key={index}
                onChange={() => onCheckedBox(item.prefCode, item.prefName)}
              >
                {item.prefName}
              </CheckBox>
            ))}
            <Chart resData={resData} checkedPrefs={checkedPrefs} />
          </div>
        </>
      )}
    </>
  )
}

export default Home
