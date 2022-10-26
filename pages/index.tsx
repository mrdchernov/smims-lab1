import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import {Button} from "@material-ui/core";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dog Helper</title>
        <meta name="description" content="Dog Website" />
        <link rel="icon" href="/dog_icon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href={'expert'} >
            <Button >Expert Website</Button>
        </Link>
        <Link href={'client'} >
            <Button>Client Website</Button>
        </Link>
      </main>
    </div>
  )
}

export default Home
