import Head from "next/head";
import { useRouter } from "next/router";

const blog = () => {
    const router = useRouter();
    const id = router.query.id;
    return (
        <div>
            <Head>
                <title>Page {id}</title>
            </Head>
            Hello this is blog {id}
        </div>
    );
};

export default blog;
