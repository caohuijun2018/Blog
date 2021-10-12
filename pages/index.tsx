import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>caohuijun'page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <div className={styles.title}>
        <a className={styles.link} href='/blog'>Blog</a>
        <a className={styles.link} href='https://github.com/caohuijun2018'>Github</a>
        <a className={styles.link} href='https://github.com/caohuijun2018/Resume'>Resume</a>
        <span>Call</span>
        </div>
      </main>

    </div>
  )
}

export default Home
