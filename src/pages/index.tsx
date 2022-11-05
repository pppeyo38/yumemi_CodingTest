import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import { Chart } from '@/components/Chart'
import { CheckBox } from '@/components/CheckBox'
import { usePopulation } from '@/hooks/usePopulation'
import { usePrefList } from '@/hooks/usePrefList'

const Home: NextPage = () => {
  const { resData, getPopulation } = usePopulation()
  const { loading, prefList, setPrefList, getPrefList } = usePrefList()

  const onCheckedBox = (checkPrefCode: number, checkPrefName: string) => {
    if (!prefList[checkPrefCode - 1].isChecked)
      getPopulation(checkPrefCode, checkPrefName)
    setPrefList((prevState) =>
      prevState.map((obj) =>
        obj.prefCode === checkPrefCode
          ? { ...obj, isChecked: !obj.isChecked }
          : obj,
      ),
    )
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
            {prefList.map((item, index) => (
              <CheckBox
                key={index}
                checked={item.isChecked}
                onChange={() => onCheckedBox(item.prefCode, item.prefName)}
              >
                {item.prefName}
              </CheckBox>
            ))}
            <Chart resData={resData} prefList={prefList} />
          </div>
        </>
      )}
    </>
  )
}

export default Home
