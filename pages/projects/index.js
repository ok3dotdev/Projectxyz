import Link from "next/link";
import { useRouter } from "next/router";

const Projects = () => {
    return (
        <div>
            <Link href="/">
                <a>Back to home</a>
            </Link>
            Projects
        </div>
    );
};

export default Projects;
