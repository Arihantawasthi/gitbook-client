import LoadingRepoCardContainer from "./LoadingRepoCardContainer";
import RepositoryCard from "./RepositoryCard";
import Error from "../../components/Error";

import useFetchRepositories from "../../hooks/useFetchRepositories";


const RepoCardContainer = () => {
    const { repos, loading, error } = useFetchRepositories();
    if (loading) {
        return <LoadingRepoCardContainer />
    }
    if (error) {
        return <Error />
    }

    return (
        <div className="flex flex-col flex-wrap md:flex-row md:gap-x-6">
            { repos.map((repo, idx) => <RepositoryCard key={idx} repo={repo} />) }
        </div>
    );
}

export default RepoCardContainer;
