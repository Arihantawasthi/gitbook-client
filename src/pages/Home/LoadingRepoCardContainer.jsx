function LoadingRepoCardContainer() {
    return (
        <div className="flex flex-col flex-wrap md:flex-row md:gap-x-6">
            <LoadingRepoCard />
            <LoadingRepoCard />
        </div>
    )
}

function LoadingRepoCard() {
    return (
        <div className="relative overflow-hidden mt-6 md:max-w-md rounded-3xl bg-surface-container shadow-lg border-outline cursor-pointer">
            <div className="p-4 rounded-t-3xl">
                <div className="flex gap-x-2">
                    <div className="h-8 w-8 rounded-full bg-gray-400"></div>
                    <div className="w-1/2 space-y-1">
                        <div className="h-8 w-44 bg-gray-400 rounded-sm"></div>
                        <div className="h-8 w-44 bg-gray-400 rounded-sm"></div>
                    </div>
                </div>
                <div className="mt-2 py-1 flex gap-x-2 items-center">
                    <div className="h-4 w-44 bg-gray-400 rounded-sm"></div>
                    <div className="h-4 w-44 bg-gray-400 rounded-sm"></div>
                </div>
                <div className="mt-2 py-1 flex gap-x-2 items-center">
                    <div className="h-4 w-44 bg-gray-400 rounded-sm"></div>
                    <div className="h-4 w-44 bg-gray-400 rounded-sm"></div>
                </div>
                <div className="mt-1 px-4 py-2 bg-gray-400 h-4 w-44 rounded-sm"></div>
            </div>
            <div className="shimmer"></div>
        </div>
    )
}


export default LoadingRepoCardContainer;
