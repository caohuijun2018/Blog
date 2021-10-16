import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import image from '../public/images/image.png'
import weChat from './weChat.png'
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>caohuijun'page</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.container}>
        <div className={styles.title}>
          <Image src={image} className={styles.img}></Image>
          <a className={styles.link} href="/blog">
            Blog
          </a>
          <a className={styles.link} href="https://github.com/caohuijun2018">
            Github
          </a>
          <a
            className={styles.link}
            href="https://caohuijun.hi-hi.cn/"
          >
            Resume
          </a>
        </div>
        <div className={styles.content}>
          <span className={styles.solgnF}>" Dont's let your</span>
          <span className={styles.solgnS}>dreams be</span>
          <span className={styles.solgnT}>dreams".</span>
        </div>
      </main>
    </div>
  );
};

export default Home;
