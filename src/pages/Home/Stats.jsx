import LoadingStatCardContainer from "./LoadingStatCardContainer";

import Error from "../../components/Error";

import useFetchStats from "../../hooks/useFetchStats";

function Stats() {
    const { stats, loading, error } = useFetchStats();
    if (loading) {
        return <LoadingStatCardContainer />
    }
    if (error) {
        return <Error message={error} />
    }

    return (
        <div className="mt-6 md:grid md:grid-cols-2 md:grid-rows-2 space-y-4 md:space-y-0 md:gap-x-16 md:gap-y-4">
            <StatCard
                label="Repositories"
                stat={stats.num_of_repos.toLocaleString(undefined)}
                deltaStat={stats.delta_repos.toLocaleString(undefined)}
                icon="/icons/repo-icon-fill.png"
                isTrendingUp={stats.delta_repos > 0}
            />
            <StatCard
                label="Commits"
                stat={stats.num_of_commits.toLocaleString(undefined)}
                deltaStat={stats.delta_commits.toLocaleString(undefined)}
                icon="/icons/commit-filled.png"
                isTrendingUp={stats.delta_commits > 0}
            />
            <StatCard
                label="Files"
                stat={stats.num_of_files.toLocaleString(undefined)}
                deltaStat={stats.delta_files.toLocaleString(undefined)}
                icon="/icons/dir-filled-white.png"
                isTrendingUp={stats.delta_files > 0}
            />
            <StatCard
                label="Lines"
                stat={stats.num_of_lines.toLocaleString(undefined)}
                deltaStat={stats.delta_lines.toLocaleString(undefined)}
                icon="/icons/file-filled-white.png"
                isTrendingUp={stats.delta_lines > 0}
            />
        </div>
    );
}

function StatCard({ label, stat, deltaStat, icon, isTrendingUp }) {
    return (
        <div className="bg-surface-container flex justify-between items-center p-4 rounded-2xl">
            <div>
                <p>Total { label }</p>
                <p className="mt-1 text-2xl font-semibold">{ stat }</p>
                <div className="mt-4 flex gap-x-2 items-center">
                    <div className="flex gap-x-1 items-center">
                        <div className="h-5 w-5">
                            <img
                                className="w-full h-full object-center object-cover"
                                src={isTrendingUp ? "/icons/trending_up.png" : "/icons/trending_down.png" }
                            />
                        </div>
                        <span className={`text-md font-bold ${isTrendingUp ? "text-success" : "text-error"}`}>{ deltaStat }</span>
                    </div>
                    <p className="text-sm">since last week</p>
                </div>
            </div>
            <div className="h-12 w-12 flex items-center justify-center bg-tertiary rounded-md">
                <img
                    className="h-7 w-7"
                    src={icon}
                    alt="num of files"
                />
            </div>
        </div>
    );
}


export default Stats;
