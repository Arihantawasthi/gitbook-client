import Layout from "../../components/Layout";

import RepoCardContainer from "./RepoCardContainer";
import Stats from "./Stats";

function Home() {
    return (
        <Layout>
            <h1 className="text-3xl font-bold">Repositories</h1>
            <RepoCardContainer />
            <h1 className="mt-12 text-3xl font-bold">Stats</h1>
            <Stats />
        </Layout>
    );
}

export default Home;
