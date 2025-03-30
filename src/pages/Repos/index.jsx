import Error from "../../components/Error";
import Layout from "../../components/Layout";
import LoadingRepoCardContainer from "../Home/LoadingRepoCardContainer";
import RepositoryCard from "../Home/RepositoryCard";
import { REPOS_PER_PAGE } from "../../utils";

import useObserver from "../../hooks/useObserver";


function Repos() {
    return (
        <Layout>
            <h1 className="text-3xl font-bold">Repositories</h1>
            <RepoList size={REPOS_PER_PAGE} />
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
        <div className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] md:gap-x-6">
            { repos.map((repo, idx) => <RepositoryCard key={idx} repo={repo} />) }
            <div ref={observerRef}>
                { loading && <LoadingRepoCardContainer /> }
            </div>
        </div>
    );
}

export default Repos;
