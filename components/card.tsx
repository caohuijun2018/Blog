import React from "react";
import styles from "./card.module.css";
interface cardType  {   
    title:string,
    des ?: string,
    tar ?: string
}
export const Card = (props : cardType) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{props.title}</p>
      <p className={styles.content}>{props.des}</p>
      <a className={styles.link} href={props.tar}>
        <span>
          阅读全文{">"}
          {">"}
          {">"}
        </span>
      </a>
    </div>
  );
};

