import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import {MainBlock} from "../components/MainBlocks";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dog Helper</title>
        <meta name="description" content="Dog Website" />
        <link rel="icon" href="/dog_icon.ico" />
      </Head>

      <main className={styles.main}>
          <MainBlock label={'Expert Website'} linkTo={'expert'} />
          <MainBlock label={'Client Website'} linkTo={'client'} />
      </main>
    </div>
  )
}

export default Home
