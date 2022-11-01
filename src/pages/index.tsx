/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import { usePrefList } from '@/hooks/usePrefList'

const Home: NextPage = () => {
  const { getPrefList } = usePrefList()

  useEffect(() => getPrefList(), [])

  return (
    <>
      <Head>
        <title>タイトル</title>
      </Head>

      <p>prefList</p>
    </>
  )
}

export default Home
