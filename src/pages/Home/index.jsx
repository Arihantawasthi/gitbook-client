import Layout from "../../components/Layout";
import RepositoryCard from "./RepositoryCard";
import LoadingScreen from "../../components/LoadingScreen";

import useFetchRepositories from "../../hooks/useFetchRepositories";


function Home() {
    const { repos, loading, error } = useFetchRepositories();

    return (
        <Layout>
            <h1 className="text-3xl font-bold">Repositories</h1>
            <div className="flex flex-col flex-wrap md:flex-row md:gap-x-6">
                { loading && <LoadingScreen /> }
                { error ? `Error: ${error}` : repos.map((repo, idx) => <RepositoryCard key={idx} repo={repo} />) }
            </div>
        </Layout>
    );
}

export default Home;
