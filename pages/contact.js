import Link from "next/link";
import styles from "../styles/Contact.module.css";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
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
                <h1>Contact Me</h1>
            </header>
            <main className={styles.content}>
                <h2 style={{ textAlign: "center" }}> 👋 Hello There!</h2>
                <div></div>

                <section className={styles.contact}>
                    💡 Wanna get in Touch? You can contact me,
                    <Link href="mailto:henryoke158@yahoo.com">
                        <a className={styles.contactLink}>here</a>
                    </Link>
                </section>
            </main>
        </div>
    );
};

export default Contact;
