import Layout from "../../components/Layout";
import RepositoryCard from "./RepositoryCard";

import useFetchRepositories from "../../hooks/useFetchRepositories";
import useFetchStats from "../../hooks/useFetchStats";
import LoadingIcon from "../../components/LoadingIcon";


function Home() {
    return (
        <Layout>
            <h1 className="text-3xl font-bold">Repositories</h1>
            <RepoCardContainer />
            <h1 className="mt-6 text-3xl font-bold">Stats</h1>
            <Stats />
        </Layout>
    );
}

const RepoCardContainer = () => {
    const { repos, loading, error } = useFetchRepositories();
    if (loading) {
        return <LoadingIcon />
    }

    return (
        <div className="flex flex-col flex-wrap md:flex-row md:gap-x-6">
            { error ? `Error: ${error}` : repos.map((repo, idx) => <RepositoryCard key={idx} repo={repo} />) }
        </div>
    );
}

function Stats() {
    const { stats, loading, error } = useFetchStats();
    if (loading) {
        return <LoadingIcon />
    }
    if (error) {
        return `Error: ${error}`
    }

    return (
        <div>
            <p>{stats.num_of_files}</p>
            <p>{stats.num_of_lines}</p>
            <p>{stats.num_of_commits}</p>
            <p>{stats.num_of_repos}</p>
        </div>
    )
}

export default Home;
