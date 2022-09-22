import Link from "next/link";
import Image from "next/image";
import styles from "../styles/About.module.css";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";

const About = () => {
    return (
        <div>
            <Head>
                <title>About me page</title>
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
            <h3 className="ml-2 font-bold">About me</h3>
          </nav>
            <main className="flex-col items-center mt-8 mx-6 lg:max-w-2xl lg:mx-auto w-100">
                <div className="flex justify-center mb-5">
                    <Image className="rounded-xl" src="/assets/potrait.jpg" layout="intrinsic" width={150} height={150}/>
                </div>
                <h1 className="mb-5 font-bold">Who am I?</h1>
                <p className="text-gray-800">
                    My Name is Henry Oke - A web application developer based in
                    Toronto, Canada. I currently work as a Front-end Web
                    Developer for an online science article publication firm. I
                    help scientific writers build websites to share their
                    articles with millions of users.
                </p>

                <h2 className="font-bold mt-3 mb-3">What I do?</h2>
                <p className="text-gray-800">
                    I work with Front-end technologies and libraries like
                    Javascript, React, and TypeScript to convert high-fidelity
                    design mockups to interactive websites or web applications
                    to meet business goals. I enjoy building responsive and
                    user-friendly interfaces while also exploring backend and
                    cloud technologies to grow my skillset and provide more
                    value in my work and to my clients.
                </p>
                <section className={styles.contact}>
                    📞 Wannt to get in Touch? You can reach me
                    <Link href="mailto:henryoke158@yahoo.com">
                        <a className={styles.contactLink}>here</a>
                    </Link>
                </section>
            </main>
        </div>
    );
};

export default About;
