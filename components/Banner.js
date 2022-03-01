import React from "react";
import styles from "../styles/Banner.module.css";

const Banner = () => {
    return (
        <div>
            <h1 className={styles.title}>Hi, I'm Henry</h1>
            <p className={styles.description}>
                A web-developer based in Toronto, Canada.
            </p>
            <div className={styles.button__container}>
                <button className={styles.button}>Blog</button>
                <button className={styles.button}>Projects</button>
                <button className={styles.button}>About Me</button>
                <button className={styles.button}>Contact</button>
            </div>
        </div>
    );
};

export default Banner;
