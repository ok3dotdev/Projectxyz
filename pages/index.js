import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import styles from "../styles/Home.module.css";
import Space from "../components/Canvas";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Henry's Portfolio</title>
                <meta
                    name="description"
                    content="Henry oke's website."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="h-[100vh]">
                <div className="absolute z-10 w-full h-[100vh] grid place-content-center">
                    <Banner/>
                </div>
                <Space/>
            </div>
        </div>
    );
}
