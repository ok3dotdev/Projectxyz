import Link from "next/link";
import styles from "../styles/About.module.css";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Link href="/">
                    <a>
                        <FontAwesomeIcon
                            icon={faArrowLeft}
                            style={{ fontSize: "1.5rem" }}
                        />
                    </a>
                </Link>
                <h1>About Me</h1>
            </header>
            <main className={styles.content}>
                <h2>Who am I?</h2>
                <p>
                    My Name is Henry Oke - A web application developer based in
                    Toronto, Canada. I currently work as a Front-end Web
                    Developer for an online science article publication firm. I
                    help scientific writers build websites to share their
                    articles with millions of users.
                </p>

                <h2>What I do?</h2>
                <p>
                    I work with Front-end technologies and libraries like
                    Javascript, React, and TypeScript to convert high-fidelity
                    design mockups to interactive websites or web applications
                    to meet business goals. I enjoy building responsive and
                    user-friendly interfaces while also exploring backend and
                    cloud technologies to grow my skillset and provide more
                    value in my work and to my clients.
                </p>
                <section className={styles.contact}>
                    {" "}
                    💡 Wanna get in Touch? You can contact me,{" "}
                    <Link href="mailto:henryoke158@yahoo.com">
                        <a className={styles.contactLink}>here</a>
                    </Link>
                </section>
            </main>
        </div>
    );
};

export default About;
