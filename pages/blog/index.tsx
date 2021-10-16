import Head from "next/head";
import "./index.module.css";
import styles from "./index.module.css";
import { Input, Space } from "antd";
import bg from "../blog/bg.png";
import Image from "next/dist/client/image";
import React from "react";
import { Menu } from "antd";
const { SubMenu } = Menu;
const Blog = () => {
  const { Search } = Input;
  const onSearch = (value: any) => console.log(value);
  return (
    <>
      <Head>
        <title>caohuijun's blog</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.container}>
      <div className={styles.title}>
          <a className={styles.link} href="/">
            home
          </a>
          <a className={styles.link} href="https://github.com/caohuijun2018">
            Github
          </a>
        </div>
        <div className={styles.content}>
          <p>hello</p>
        </div>
      </main>
    </>
  );
};

export default Blog;
