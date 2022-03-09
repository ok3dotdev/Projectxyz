import Link from "next/link";
import styles from "../../styles/Projects.module.css";
import Card from "../../components/Card";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imageUrlBuilder from "@sanity/image-url";
import { useEffect, useState } from "react";
import { sanityClient } from "./../client";
// import { projectsData } from "../../data/index";

export async function getStaticProps(context) {
  const sanity = `*[_type == "projects"]{name,description,image}`;
  const url = `https://xhim8nbd.api.sanity.io/v2021-06-07/data/query/production?query=${sanity}`;
  let projectsData = "";

  await fetch(url)
    .then((res) => res.json())
    .then((json) => (projectsData = json))
    .then(() => console.log(projectsData.result[0].name));

  console.log(projectsData);
  return {
    props: {
      projects: projectsData.result,
    },
  };
}

const Projects = (props) => {
  const [mappedProjects, setMappedProjects] = useState("");

  useEffect(() => {
    const imgBuilder = imageUrlBuilder({
      projectId: "xhim8nbd",
      dataset: "production",
    });

    setMappedProjects(
      props.projects.map(project=>{
        return {
          ...project,
          image: imgBuilder.image(project.image).width(500).height(250)
        }
      }
    ));
    console.log(mappedProjects)
  }, [mappedProjects, props.projects]);
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
        {mappedProjects && mappedProjects.map((prj, idx) => {
          return (
            <Card
              key={prj.name}
              title={prj.name}
              description={prj.description}
              img={prj.image}
            />
          );
        })}
      </main>
    </div>
  );
};

export default Projects;
