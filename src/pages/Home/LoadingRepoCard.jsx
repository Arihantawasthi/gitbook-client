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
        <div className="mt-6 w-full md:max-w-md rounded-3xl bg-surface-container shadow-lg border-outline cursor-pointer">
            <div className="p-4 rounded-t-3xl">
                <div className="flex gap-x-2">
                    <div className="h-8 w-8 rounded-full bg-white"></div>
                    <div className="w-1/2 space-y-1">
                        <div className="h-8 w-full bg-white rounded-sm"></div>
                        <div className="h-8 w-full bg-white rounded-sm"></div>
                    </div>
                </div>
                <div className="mt-2 py-1 flex gap-x-2 items-center">
                    <div className="h-4 w-full bg-white rounded-sm"></div>
                    <div className="h-4 w-full bg-white rounded-sm"></div>
                </div>
                <div className="mt-2 py-1 flex gap-x-2 items-center">
                    <div className="h-4 w-full bg-white rounded-sm"></div>
                    <div className="h-4 w-full bg-white rounded-sm"></div>
                </div>
                <div className="mt-1 px-4 py-2 bg-white h-4 w-full rounded-sm"></div>
            </div>
        </div>
    )
}


export default LoadingRepoCardContainer;
