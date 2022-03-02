import Link from "next/link";
import styles from "../../styles/Projects.module.css";
import Card from "../../components/Card";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { projectsData } from "../../data/index";

export async function getStaticProps(context) {
    return {
        props: {
            projects: projectsData
        }
    };
}

const Projects = (props) => {
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
                <h1>Projects</h1>
            </header>
            <main className={styles.content}>
                {props.projects.map((prj, idx) => {
                    return <Card title={prj.name} summary={prj.summary} />;
                })}
            </main>
        </div>
    );
};

export default Projects;
