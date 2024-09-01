function RepositoryCard({ repo }) {
    return (
        <div
            className="mt-6 pb-4 w-full text-on-backround rounded-3xl bg-surface-container shadow-lg border-outline"
        >
            <div className="p-4 bg-tertiary text-sm text-on-tertiary rounded-t-3xl">
                <div className="flex gap-x-2">
                    <div className="h-8 w-8">
                        <img className="h-full w-full object-center object-cover" src="/public/icons/repo-icon-fill.png" />
                    </div>
                    <div>
                        <p className="text-xl font-bold">{ repo.name }</p>
                        <p>By { repo.author }</p>
                    </div>
                </div>
                <div className="mt-2 py-1 flex gap-x-2">
                    <div className="h-4 w-4">
                        <img className="h-full w-full object-center object-cover" src="/public/icons/clock-outline.png" />
                    </div>
                    <p>Created at: { repo.created_at }</p>
                </div>
                <div className="flex gap-x-2 items-center">
                    <div className="h-4 w-4">
                        <img className="h-full w-full object-center object-cover" src="/public/icons/clock-outline.png" />
                    </div>
                    <p>Last Commit at: { repo.last_commit_at }</p>
                </div>
            </div>
            <p className="mt-4 px-4 text-on-surface-nv">{ repo.desc }</p>
        </div>
    );
}


export default RepositoryCard;
