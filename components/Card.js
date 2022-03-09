import styles from "./Card.module.css";
import { useEffect, useState } from "react";

const Card = ({ title, description, img }) => {

    
  return (
    <div className={styles.container}>
      <div className={styles.Card_image}>
        <img src={img}/>
      </div>
      <div className={styles.Card_body}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
