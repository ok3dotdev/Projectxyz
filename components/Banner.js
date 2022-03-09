import Link from "next/link";
import React from "react";
import styles from "./Banner.module.css";
import { Head } from "next/head";
import {
    faLinkedin,
    faGithub,
    faTwitter,
    faDiscord
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const Banner = () => {
    return (
        <div>
            {/* <img className={styles.heroImg} src="/assets/banner.jpeg" alt="Hero Image"/> */}
            <Image className={styles.heroImg} src="/assets/banner.jpeg" alt="Hero Image" width="50" height="50"/>
            <h1 className={styles.title}>Hi, I'm Henry</h1>
            <p className={styles.description}>
                A web-developer based in Toronto, Canada.
            </p>
            <div className={styles.button__container}>
                {/* <Link href="/blog">
                    <a>
                        <button className={styles.button}>📓 Blog</button>
                    </a>
                </Link> */}
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
                <Link href="https://www.linkedin.com/in/henry-oke/">
                    <a>
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            style={{ fontSize: "1.8rem" }}
                        />
                    </a>
                </Link>
                <Link href="https://github.com/sickerman">
                    <a>
                        <FontAwesomeIcon
                            icon={faGithub}
                            style={{ fontSize: "1.8rem" }}
                        />
                    </a>
                </Link>
                <Link href="#">
                    <a>
                        <FontAwesomeIcon
                            icon={faDiscord}
                            style={{ fontSize: "1.8rem" }}
                        />
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default Banner;
