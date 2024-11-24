function Error({ message }) {
    return (
        <div className="mt-6 flex items-center justify-center">
            <div className="flex flex-col items-center gap-y-4">
                <div className="h-16 w-16">
                    <img
                        className="w-full h-full object-center"
                        src="/public/icons/error.png"
                    />
                </div>
                { message ?
                    <p className="text-lg text-center first-letter:capitalize">{ message }</p>
                    :
                    <p className="text-lg text-center first-letter:capitalize">Something went wrong!</p>
                }
            </div>
        </div>
    );
}


export default Error;
