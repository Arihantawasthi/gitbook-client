import { Link } from "react-router-dom";
import Layout from "../../components/Layout";

import RepoCardContainer from "./RepoCardContainer";
import Stats from "./Stats";

function Home() {
    return (
        <Layout>
            <div className="w-full flex justify-between items-center">
                <h1 className="text-3xl font-bold">Repositories</h1>
                <Link
                    to={"repos"}
                    className="flex gap-x-2 items-center cursor-pointer"
                >
                    <p className="text-lg">View All</p>
                    <img
                        className="h-6 w-6"
                        src="/icons/arrow-right.png"
                        alt="view all repos"
                    />
                </Link>
            </div>
            <RepoCardContainer size={4} />
            <h1 className="mt-12 text-3xl font-bold">Stats</h1>
            <Stats />
        </Layout>
    );
}

export default Home;
