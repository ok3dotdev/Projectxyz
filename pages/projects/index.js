import Link from "next/link";
import styles from "../../styles/Projects.module.css";
import Card from "../../components/Card";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imageUrlBuilder from "@sanity/image-url";
import { useEffect, useState } from "react";
// import { sanityClient } from "../../lib/sanity-client/client";
import { getprojectsData } from "../../lib/projectsData";
import Head from "next/head";
// import { projectsData } from "../../data/index";

export async function getStaticProps(context) {
  const projectsData = await getprojectsData(); 
  return {
    props: {
      projects: projectsData,
    },
  };
}

const Projects = (props) => {
  const [mappedProjects, setMappedProjects] = useState([]);

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
    // console.log(mappedProjects)
  }, []);
  return (
        <div className="">
          <Head>
            <title>My project's page</title>
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
            <h3 className="ml-2 font-bold">Projects</h3>
          </nav>
          <main className="m-4 lg:m-8 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3">
           {mappedProjects?.map(({name, description, image}, id)=>{
            return(
              <Card
              key={id}
              title={name}
              description={description}
              img={image}
            />
            )
           })}
          </main>

          
        </div>
    // <div className={styles.container}>
        // <Head>
        //     <title>My project's page</title>
        // </Head>
    //   <header className={styles.header}>
        // <Link href="/">
        //   <a>
        //     <FontAwesomeIcon
        //       icon={faArrowLeft}
        //       style={{ fontSize: "1.5rem" }}
        //     />
        //   </a>
        // </Link>
    //     <h1>Projects</h1>
    //   </header>
    //   <main className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    //     {mappedProjects && mappedProjects.map((prj, idx) => {
    //       return (
    //         <Card
    //           key={prj.name}
    //           title={prj.name}
    //           description={prj.description}
    //           img={prj.image}
    //         />
    //       );
    //     })}
    //   </main>
    // </div>
  );
};

export default Projects;
