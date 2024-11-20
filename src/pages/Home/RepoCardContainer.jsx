import LoadingRepoCardContainer from "./LoadingRepoCard";
import RepositoryCard from "./RepositoryCard";

import useFetchRepositories from "../../hooks/useFetchRepositories";

const RepoCardContainer = () => {
    const { repos, loading, error } = useFetchRepositories();
    if (loading) {
        return <LoadingRepoCardContainer />
    }

    return (
        <div className="flex flex-col flex-wrap md:flex-row md:gap-x-6">
            { error ? `Error: ${error}` : repos.map((repo, idx) => <RepositoryCard key={idx} repo={repo} />) }
        </div>
    );
}

export default RepoCardContainer;
