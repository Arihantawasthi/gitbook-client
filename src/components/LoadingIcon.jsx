function LoadingIcon() {
    return (
        <div className="flex items-center justify-center">
            <div className="h-28 w-28 flex items-center justify-center">
                <div className="w-6 h-6">
                    <img
                        src="/icons/loading.png"
                        className="h-full w-full object-center object-cover"
                        alt="loading..."
                    />
                </div>
            </div>
        </div>
    )
}


export default LoadingIcon;
