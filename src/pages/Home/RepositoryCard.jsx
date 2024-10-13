import { Link } from "react-router-dom";


function RepositoryCard({ repo }) {
    return (
        <Link to={`repo/metadata/${repo.name}/${repo.defaultBranch}`}>
            <div className="mt-6 w-full md:max-w-lg text-on-backround rounded-3xl bg-surface-container shadow-lg border-outline cursor-pointer">
                <div className="p-4 bg-tertiary text-on-tertiary rounded-t-3xl">
                    <div className="flex gap-x-2">
                        <div className="h-8 w-8">
                            <img
                                className="h-full w-full object-center object-cover"
                                src="/public/icons/repo-icon-fill.png"
                            />
                        </div>
                        <div>
                            <p className="text-2xl font-bold">{ repo.name }</p>
                            <p className="text-sm">By { repo.author }</p>
                        </div>
                    </div>
                    <div className="mt-2 py-1 flex gap-x-2 items-center">
                        <div className="h-4 w-4">
                            <img
                                className="h-full w-full object-center object-cover"
                                src="/public/icons/clock-outline.png"
                            />
                        </div>
                        <div className="w-full flex justify-between">
                            <p>Created at: </p>
                            <p>{ repo.created_at }</p>
                        </div>
                    </div>
                    <div className="w-full flex gap-x-2 items-center">
                        <div className="h-4 w-4">
                            <img
                                className="h-full w-full object-center object-cover"
                                src="/public/icons/clock-outline.png"
                            />
                        </div>
                        <div className="w-full flex justify-between">
                            <p>Last Commit at: </p>
                            <p>{ repo.last_commit_at }</p>
                        </div>
                    </div>
                </div>
                <p className="px-4 py-2 text-sm text-on-surface-nv">{ repo.desc }</p>
            </div>
        </Link>
    );
}


export default RepositoryCard;
