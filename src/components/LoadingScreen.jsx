function LoadingScreen() {
    return (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="h-6 w-6 loader">
                <img
                    src="/icons/loading.png"
                    className="h-full w-full object-center object-cover"
                    alt="loading"
                />
            </div>
        </div>
    );
}


export default LoadingScreen;
