import { Footer } from "antd/lib/layout/layout";
import Head from "next/head";
import React from "react";
import styles from "./HTTP-status-code.module.css";
const Layout = () => {
  return (
    <>
      <Head>
        <title>Column-layout</title>
        <link rel="icon" href="/favicon.png"></link>
      </Head>
      <main className={styles.container}>
        <div>
          <p className={styles.title}>
            如何实现两边宽度固定，中间自适应的分栏布局呢？
          </p>
          <br />
          <div className={styles.content}>
            <p>
              在开发过程中，实现元素宽度实现自适应是很基础的要求。今天我们讨论关于两边宽度固定，中间自适应的布局方式，这同样也是面试高频题。
            </p>
            <h3>1. flex 布局</h3>
            <p>使用 flex 布局可以简单实现，具体代码见下：</p>
            <p>这里给出下面例子用到的HTML代码：</p>
            <img src="/images/HTMLdemo.png" height="100px"></img>
            <p>
              将容器设置为flex布局，左右两栏固定宽度，中间一栏使用 flex : 1 或者
              width: 100% 可以实现自适应。代码见下：
            </p>
            <img src="/images/demo1.png" height="500px"></img>
            <p>中间栏会自动充满剩余空间</p>
            <br />
            <h3>2. grid 布局</h3>
            <p>同样是简单的布局方式，代码见下</p>
            <img src="/images/demo2.png" height="500px"></img>
            <h3>3. float + margin</h3>
            <p>
              两边是float，中间设置margin值。这里需要注意的是在HTML中middle要放在最后。当margin值大于总长度为会将右边元素挤到下一行。
            </p>
            <img src="/images/demo3.png" height="500px"></img>
            <p>
              仍还有其他float的方法可以使用，但是由于目前 float
              的使用并不提倡，这里就不在多介绍了。最为推荐的方式是使用 flex 或者
              grid 清晰简单的方法就可以实现目标布局。
            </p>
          </div>
        </div>
        <Footer>
          <p className={styles.time}>2022-10-22</p>
        </Footer>
      </main>
    </>
  );
};
export default Layout;
