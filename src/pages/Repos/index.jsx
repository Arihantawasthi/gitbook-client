import Error from "../../components/Error";
import Layout from "../../components/Layout";
import LoadingRepoCardContainer from "../Home/LoadingRepoCardContainer";
import RepositoryCard from "../Home/RepositoryCard";

import useObserver from "../../hooks/useObserver";


function Repos() {
    return (
        <Layout>
            <h1 className="text-3xl font-bold">Repositories</h1>
            <RepoList size={10} />
        </Layout>
    );
}

const RepoList = ({ size }) => {
    const { repos, loading, error, observerRef } = useObserver(size);

    if (loading && repos.length === 0) {
        return <LoadingRepoCardContainer />
    }
    if (error) {
        return <Error message={error} />
    }

    return (
        <div className="flex flex-col flex-wrap md:flex-row md:gap-x-6">
            { repos.map((repo, idx) => <RepositoryCard key={idx} repo={repo} />) }
            <div ref={observerRef}>
                { loading && <LoadingRepoCardContainer /> }
            </div>
        </div>
    );
}

export default Repos;
