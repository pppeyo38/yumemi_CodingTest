import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import { Chart } from '@/components/Chart'
import { CheckBox } from '@/components/CheckBox'
import { usePopulation } from '@/hooks/usePopulation'
import { usePrefList } from '@/hooks/usePrefList'

const Home: NextPage = () => {
  const { resData, getPopulation } = usePopulation()
  const { loading, prefList, getPrefList } = usePrefList()

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
                onChange={() => getPopulation(item.prefCode, item.prefName)}
              >
                {item.prefName}
              </CheckBox>
            ))}
            <Chart resData={resData} />
          </div>
        </>
      )}
    </>
  )
}

export default Home
