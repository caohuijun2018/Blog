import Head from "next/head";
import "./index.module.css";
import styles from "./index.module.css";
import React from "react";
import { Card } from "../../components/card";
import { Footer } from "antd/lib/layout/layout";
interface cardType {
  title: string;
  des?: string;
  tar?: string;
}
const Blog = () => {
  const content: Array<cardType> = [
    {
      title: "HTTP响应状态码",
      des: "HTTP响应状态码用来表明服务器端的响应状态，了解和熟悉常见的响应状态码有助于快速明确请求状态信息",
      tar: "/blog/HTTP-status-code",
    },
    {
      title: "从输入一个URL到页面展示之间发生了什么？",
      des: "超高频面试题目-掌握页面加载的整个过程",
      tar: "/blog/URL-display",
    },
    {
      title: "实现两边固定，中间自适应的三栏布局",
      des: "在开发中经常遇到的分栏布局问题，在这里总结几种好用的布局方式",
      tar: "/blog/Column-layout",
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
          {content.length > 0 &&
            content.map((item) => {
              return (
                <Card title={item.title} des={item.des} tar={item.tar}></Card>
              );
            })}
        </div>
        <Footer></Footer>
      </main>
    </>
  );
};

export default Blog;
