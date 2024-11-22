function Error() {
    return (
        <div className="mt-6 flex items-center justify-center">
            <div className="flex flex-col items-center gap-y-4">
                <div className="h-16 w-16">
                    <img
                        className="w-full h-full object-center"
                        src="/public/icons/error.png"
                    />
                </div>
                <p className="text-lg text-center">Something went wrong!</p>
            </div>
        </div>
    );
}


export default Error;
