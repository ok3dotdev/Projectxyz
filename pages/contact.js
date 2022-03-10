import Link from "next/link";
import styles from "../styles/Contact.module.css";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/">
          <a>
            <FontAwesomeIcon
              icon={faArrowLeft}
              style={{ fontSize: "1.8rem" }}
            />
          </a>
        </Link>
        <h1>Contact Me</h1>
      </header>
      <main className={styles.content}>
        <h2>💡 Hello There!</h2>
        <section className={styles.contact}>
          <div className={styles.icons}>
            <Link href="https://www.linkedin.com/in/henry-oke/">
              <a>
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ fontSize: "1.5rem" }}
                />
              </a>
            </Link>
            <Link href="https://github.com/sickerman">
              <a>
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{ fontSize: "1.5rem" }}
                />
              </a>
            </Link>
            <Link href="#">
              <a>
                <FontAwesomeIcon
                  icon={faDiscord}
                  style={{ fontSize: "1.5rem" }}
                />
              </a>
            </Link>
            <Link href="mailto:henryoke158@yahoo.com">
              <a>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ fontSize: "1.5rem" }}
                />
              </a>
            </Link>
          </div>
        </section>
        <div className={styles.text}>
          <h3>
            If you want to report an issue on this site, please shoot me an
            e-mail by clicking on the icons above.
          </h3>
        </div>
      </main>
    </div>
  );
};

export default Contact;
