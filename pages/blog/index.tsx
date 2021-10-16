import Head from "next/head";
import "./index.module.css";
import styles from "./index.module.css";
import React from "react";
import { Card } from "../../components/card";
import { Footer } from "antd/lib/layout/layout";
interface cardType {
  title: string;
  des ?: string;
  tar ?: string;
}
const Blog = () => {
  const content: Array<cardType> = [
    {
      title: "HTTP响应状态码",
      des: "HTTP响应状态码用来表明服务器端的响应状态，了解和熟悉常见的响应状态码有助于快速明确请求状态信息",
      tar: "/blog/HTTP-status-code",
    },
    {
      title: "这是一个测试",
      des: "HTTP响应状态码用来表明服务器端的响应状态，了解和熟悉常见的响应状态码有助于快速明确请求状态信息",
      tar: "/blog/HTTP-status-code",
    },
    {
      title: "HTTP响应状态码",
      des: "HTTP响应状态码用来表明服务器端的响应状态，了解和熟悉常见的响应状态码有助于快速明确请求状态信息",
      tar: "/blog/HTTP-status-code",
    },
  ];

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
          <Card
            title={content[1].title}
            des={content[0].des}
            tar={content[0].tar}
          ></Card>
          {/* {
              content.length > 0 ? content.forEach(item => {
                  <Card title={item.title} des={item.des} tar={item.tar}></Card>
              }) : 
          }  */}
        </div>
        <Footer></Footer>
      </main>
    </>
  );
};

export default Blog;
