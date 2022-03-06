import Link from "next/link";
import React from "react";
import styles from "./Banner.module.css";
import {
    faLinkedin,
    faGithub,
    faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Banner = () => {
    return (
        <div>
            <img className={styles.heroImg} src="/assets/banner.jpeg" />
            <h1 className={styles.title}>Hi, I'm Henry</h1>
            <p className={styles.description}>
                A web-developer based in Toronto, Canada.
            </p>
            <div className={styles.button__container}>
                <Link href="/blog">
                    <a>
                        <button className={styles.button}>📓 Blog</button>
                    </a>
                </Link>
                <Link href="/projects">
                    <a>
                        <button className={styles.button}>💼 Projetcs</button>
                    </a>
                </Link>
                <Link href="/about">
                    <a>
                        <button className={styles.button}>👋 About Me</button>
                    </a>
                </Link>
                <Link href="/contact">
                    <a>
                        <button className={styles.button}>💌 Contact</button>
                    </a>
                </Link>
            </div>
            <div className={styles.icons}>
                <Link href="/">
                    <a>
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            style={{ fontSize: "1.8rem" }}
                        />
                    </a>
                </Link>
                <Link href="/">
                    <a>
                        <FontAwesomeIcon
                            icon={faGithub}
                            style={{ fontSize: "1.8rem" }}
                        />
                    </a>
                </Link>
                <Link href="/">
                    <a>
                        <FontAwesomeIcon
                            icon={faTwitter}
                            style={{ fontSize: "1.8rem" }}
                        />
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default Banner;
