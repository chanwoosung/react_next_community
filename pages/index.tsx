import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import styles from '../styles/index.module.css'
import { API } from '../pages/api/api'
import Category from '../component/category'
import BoardBlock from '../component/boardblock'

const Home: NextPage = () => {
  
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Call bus Assginment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Category />
      <BoardBlock />
    </div>
  )
}

export default Home
