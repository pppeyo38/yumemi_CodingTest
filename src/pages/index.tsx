import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import { CheckBox } from '@/components/CheckBox'
import { usePopulation } from '@/hooks/usePopulation'
import { usePrefList } from '@/hooks/usePrefList'

const Home: NextPage = () => {
  const { loading, prefList, getPrefList } = usePrefList()
  const { resData, getPopulation } = usePopulation()

  useEffect(() => getPrefList(), [])

  return (
    <>
      <Head>
        <title>タイトル</title>
      </Head>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {prefList.result.map((item, index) => (
            <CheckBox key={index} onChange={() => getPopulation(item.prefCode)}>
              {item.prefName}
            </CheckBox>
          ))}
        </div>
      )}
    </>
  )
}

export default Home
