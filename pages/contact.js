import Link from "next/link";
import styles from "../styles/Contact.module.css";
import Head from "next/head";
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
    <div className="">
        <Head>
            <title>Contact me page</title>
        </Head>
        <nav className="flex p-3 items-stretch border-b">
            <Link href="/">
              <a  className="self-center">
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  style={{ fontSize: "1rem" }}
                />
              </a>
            </Link>
            <h3 className="ml-2 font-bold">Contact me</h3>
          </nav>
      <main className="m-4 md:m-8 ">
        <div className="rounded-xl bg-green-200 p-4 max-w-xl mx-auto">
        <h2 className="font-bold text-lg">You can reach me here!</h2>
        <section className="w-full my-5">
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
          <p className="text-slate-500">
            If you want to report an issue on this site, please shoot me an
            e-mail by clicking on the icons above.
          </p>
        </div>
        
      </main>
    </div>
  );
};

export default Contact;
