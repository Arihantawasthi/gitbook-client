import Error from "../../components/Error";
import Layout from "../../components/Layout";
import LoadingRepoCardContainer from "../Home/LoadingRepoCardContainer";
import RepositoryCard from "../Home/RepositoryCard";

import useFetchRepositories from "../../hooks/useFetchRepositories";


function Repos() {
    return (
        <Layout>
            <h1 className="text-3xl font-bold">Repositories</h1>
            <RepoList size={10} />
        </Layout>
    );
}

const RepoList = ({ size }) => {
    const { repos, loading, error } = useFetchRepositories(size);
    if (loading) {
        return <LoadingRepoCardContainer />
    }
    if (error) {
        return <Error message={error} />
    }

    return (
        <div className="flex flex-col flex-wrap md:flex-row md:gap-x-6">
            { repos.map((repo, idx) => <RepositoryCard key={idx} repo={repo} />) }
        </div>
    );
}

export default Repos;
