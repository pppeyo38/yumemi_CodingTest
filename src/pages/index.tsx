import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import { Title } from '@/components/elements/Title'
import { HomeLayout } from '@/components/layouts/HomeLayout'
import { useResasApi } from '@/hooks/useResasApi'

const Home: NextPage = () => {
  const { loading, prefList, resPopulationData, getPrefList, onCheckBox } =
    useResasApi()

  useEffect(() => getPrefList(), [])

  return (
    <>
      <Head>
        <title>都道府県別の総人口推移グラフ</title>
      </Head>

      <section>
        <Title>都道府県別の総人口推移グラフ</Title>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <HomeLayout
            prefList={prefList}
            resPopulationData={resPopulationData}
            onCheckBox={onCheckBox}
          />
        )}
      </section>
    </>
  )
}

export default Home
