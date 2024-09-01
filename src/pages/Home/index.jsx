import Layout from "../../components/Layout";
import RepositoryCard from "./RepositoryCard";

import useFetchRepositories from "../../hooks/useFetchRepositories";


function Home() {
    const { repos, loading, error } = useFetchRepositories();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <Layout>
            <h1 className="text-3xl font-bold">Repositories</h1>
            {repos.map((repo, idx) => (
                <RepositoryCard key={idx} repo={repo} />
            ))}
        </Layout>
    );
}


export default Home;
