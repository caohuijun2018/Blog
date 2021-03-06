import { Footer } from "antd/lib/layout/layout";
import Head from "next/head";
import styles from "./HTTP-status-code.module.css";
import React from "react";
const Status = () => {
  return (
    <>
      <Head>
        <title>HTTP-status</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.container}>
        <div>
          <p className={styles.title}>响应状态码怎么用？</p>
          <br />
          <div className={styles.content}>
            <p>
              HTTP状态行由三部分组层成，分别是Version，Status
              Code，Reason。Version表示使用HTTP协议的版本号，Reason表示状态码的文字描述。
              中间部分的状态码可以说是三者中最重要，也是最常用的部分。与此同时，响应状态码也是面试中
              的高频题目。今天就让我们来一起总结一下常用的响应状态码吧。
            </p>
            <p>
              响应状态码由三位数字组成，有效数字为100-599。共分为五类，这五类的具体含义为：
            </p>
            <ul>
              <li>1*提示信息，目前是协议处理的中间状态，还需要后续的操作</li>
              <li>2*成功，操作被成功接收并处理</li>
              <li>
                3*重定向，请求资源的位置已经发生变化，需要客户端重新发起请求
              </li>
              <li>
                4*客户端错误，请求包含语法错误或无法完成请求，请求信息有错误，服务端无法处理
              </li>
              <li>5*服务器错误，服务器在处理请求的过程中发生了错误</li>
            </ul>
            <p>下面具体各类中的常用状态码</p>
            <p className={styles.mark}>1XX</p>
            <ol>
              <li>
                <p>101 switching Protocols</p>
                客户端使用Upgrade头字段，要求在HTTP协议的基础上改成其他的协议继续通信，比如webSocket，而如果服务器端也同意这个更改，就会返回状态码101，之后的传输就不会在使用HTTP协议。
              </li>
            </ol>
            <p className={styles.mark}>2XX</p>
            <ol>
              <li>
                <p>200 OK</p>
                表示一切正常，客户端成功接收并处理了请求信息。如果是非Head请求，通常会在响应头之后有body信息。
              </li>
              <li>
                <p>204 Not Content</p>
                和200的基本相同，但表示在响应头之后没有body信息，注意区分。
              </li>
              <li>
                <p>206 ParPartial Content</p>
                在客户端发送“范围请求”，要求获取部分资源时出现，表示服务器成功处理请求，并返回资源，但是只是返回了一部分资源。通常响应头中会有Content-Range字段，表示返回内容的具体范围.
              </li>
            </ol>
            <p className={styles.mark}>3XX</p>
            <ol>
              <li>
                <p>301 Moved Permanently</p>
                永久重定向，当前访问的资源已经不在，需要用新的URI进行访问
              </li>
              <li>
                <p>302 Moved Temporarily</p>
                临时重定向：访问的资源还在，只是做一个临时重定向。二者的响应头中的Location字段会标明重定向的目标URL，只是存在浏览器会不会缓存的区别。
              </li>
              <li>
                <p>304 Not Modified</p>
                304是一个较为特殊的状态码，表示资源未修改，用于缓存控制。并不具有通常的跳转含义，而是重定向到缓存资源。
              </li>
            </ol>
            <p className={styles.mark}>4XX</p>
            <ol>
              <li>
                <p>400: Bad Request</p>
                只是表明请求的报文存在错误，但是,表示结果为笼统的信息，没有具体指出是什么错误，不建议使用。
              </li>
              <li>
                <p>403 Forbidden</p>
                实际上不是客户端的请求出现错误，而是服务器端禁止访问，原因可能是涉及敏感信息，法律禁止的，可能会在body信息中给出原因，通常没有。
              </li>

              <li>
                <p>404 Not Found</p>
                表示请求的资源未在服务器端找到，无从得知原因，同样不够具体
              </li>
              <li>
                <p>405 Method Not Allowed</p>
                不允许使用这些方法访问资源，比如某些地方不支持post方法访问。
              </li>
              <li>
                <p>406:Not Acceptable</p>
                服务器资源无法满足客户端的需求，比如客户端请求中文资源但只有英文资源。
              </li>
              <li>
                <p>408 Request Timeout</p>
                请求超时
              </li>
              <li>
                <p>409 Conflict</p>
                多个请求发生了冲突，可以理解为多线程并发时的竞争状态
              </li>
              <li>
                <p> 413 Request Entity Too Large</p>
                请求报文里的body太大
              </li>
              <li>
                <p>414 Request-URI To Long</p>
                请求行里的URI太大
              </li>
              <li>
                <p>429 Too Many Request</p>
                客户端发送了太多的请求，通常是由于服务器的限连策略
              </li>
              <li>
                <p>431 Request Header Fields Too Large</p>
                请求的头文件或某个字段过大
              </li>
            </ol>
            <p className={styles.mark}>5XX</p>
            <ol>
              <li>
                <p>500 Iternal Server Error</p>
                通用错误码，没有标明服务器具体发生哪些错误。相比较客户端而言，笼统的错误可以防止黑客的窥探或者分析。
              </li>
              <li>
                <p>501 Not Implement</p>
                表示该服务还未支持
              </li>
              <li>
                <p>502 Bad</p>
                Gateway：服务器作为网关或者代理时的错误，表示服务器本身正常，但是访问后端时发生错误，错误原因不知道
              </li>
              <li>
                <p>503 Server</p>
                Unvavilable:表示服务器正忙，暂时无法响应。通常会带有一个Retry-After的字段，标明可以在多久之后重新访问
              </li>
            </ol>
          </div>
        </div>

        <Footer>
          <p className={styles.time}>2022-10-16</p>
        </Footer>
      </main>
    </>
  );
};

export default Status;
