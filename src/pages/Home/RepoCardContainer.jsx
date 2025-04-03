import LoadingRepoCardContainer from "./LoadingRepoCardContainer";
import RepositoryCard from "./RepositoryCard";
import Error from "../../components/Error";

import useFetchRepositories from "../../hooks/useFetchRepositories";


const RepoCardContainer = ({ size }) => {
    const { repos, loading, error } = useFetchRepositories(size);
    if (loading) {
        return <LoadingRepoCardContainer />
    }
    if (error) {
        return <Error message={error} />
    }

    return (
        <div className="flex flex-col gap-y-6  md:grid md:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] md:gap-6">
            { repos.map((repo, idx) => <RepositoryCard key={idx} repo={repo} />) }
        </div>
    );
}

export default RepoCardContainer;
