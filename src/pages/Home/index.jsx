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
            <h1 className="mt-12 text-3xl font-bold">Stats</h1>
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
        <div className="mt-6 grid grid-cols-2 grid-rows-2 gap-4 md:gap-x-16">
            <div className="bg-surface-container flex justify-between items-center p-4 rounded-2xl">
                <div>
                    <p>Total Files</p>
                    <p className="mt-1 text-2xl font-semibold">{stats.num_of_files.toLocaleString(undefined)}</p>
                </div>
                <div className="h-12 w-12 flex items-center justify-center bg-tertiary rounded-md">
                    <img
                        className="h-7 w-7"
                        src="public/icons/dir-filled-white.png"
                        alt="num of files"
                    />
                </div>
            </div>
            <div className="bg-surface-container flex justify-between items-center p-4 rounded-2xl">
                <div>
                    <p>Total Lines</p>
                    <p className="mt-1 text-2xl font-semibold">{stats.num_of_lines.toLocaleString(undefined)}</p>
                </div>
                <div className="h-12 w-12 bg-tertiary flex justify-center items-center rounded-md">
                    <img
                        className="h-7 w-7"
                        src="public/icons/file-filled-white.png"
                        alt="num of lines"
                    />
                </div>
            </div>
            <div className="bg-surface-container flex justify-between items-center p-4 rounded-2xl">
                <div>
                    <p>Total Commits</p>
                    <p className="mt-1 text-2xl font-semibold">{stats.num_of_commits.toLocaleString(undefined)}</p>
                </div>
                <div className="h-12 w-12 bg-tertiary flex justify-center items-center rounded-md">
                    <img
                        className="h-7 w-7"
                        src="public/icons/commit-filled.png"
                        alt="num of commits"
                    />
                </div>
            </div>
            <div className="bg-surface-container flex justify-between items-center p-4 rounded-2xl">
                <div>
                    <p>Total Repositories</p>
                    <p className="mt-1 text-2xl font-semibold">{stats.num_of_repos.toLocaleString(undefined)}</p>
                </div>
                <div className="h-12 w-12 bg-tertiary flex justify-center items-center rounded-md">
                    <img
                        className="h-7 w-7"
                        src="public/icons/repo-icon-fill.png"
                        alt="num of repos"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;
