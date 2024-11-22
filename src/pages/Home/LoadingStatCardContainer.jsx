function LoadingStatCardContainer() {
    return (
        <div className="mt-6 md:grid md:grid-cols-2 md: grid-rows-2 space-y-4 md:space-y-0 md:gap-x-16 md:gap-y-4">
            <LoadingStatCard />
            <LoadingStatCard />
            <LoadingStatCard />
            <LoadingStatCard />
        </div>
    );
}

function LoadingStatCard() {
    return (
        <div className="relative overflow-hidden bg-surface-container flex justify-between items-center p-4 rounded-2xl">
            <div>
                <div className="h-4 w-16 bg-gray-400 rounded-sm"></div>
                <div className="mt-1 h-8 w-16 bg-gray-400 rounded-sm"></div>
            </div>
            <div className="h-12 w-12 bg-gray-400 rounded-md"></div>
            <div className="shimmer"></div>
        </div>
    );
}


export default LoadingStatCardContainer;
