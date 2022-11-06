import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import { HomeLayout } from '@/components/layouts/HomeLayout'
import { usePopulation } from '@/hooks/usePopulation'
import { usePrefList } from '@/hooks/usePrefList'

const Home: NextPage = () => {
  const { resData, getPopulation } = usePopulation()
  const { loading, prefList, setPrefList, getPrefList } = usePrefList()

  useEffect(() => getPrefList(), [])

  return (
    <>
      <Head>
        <title>都道府県別の総人口推移グラフ</title>
      </Head>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <HomeLayout
          prefList={prefList}
          resData={resData}
          getPopulation={getPopulation}
          setPrefList={setPrefList}
        />
      )}
    </>
  )
}

export default Home
