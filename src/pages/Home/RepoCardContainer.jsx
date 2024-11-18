import LoadingIcon from "../../components/LoadingIcon";

import useFetchRepositories from "../../hooks/useFetchRepositories";
import RepositoryCard from "./RepositoryCard";

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

export default RepoCardContainer;
