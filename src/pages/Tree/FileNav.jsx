function FileNav() {
    return (
        <div className="absolute py-6 px-4 bottom-0 left-0 w-full h-2/3 bg-surface-container z-10 rounded-t-3xl shadow-md">
            <FileNavItem />
            <FileNavItem />
            <FileNavItem />
        </div>
    );
}


function FileNavItem() {
    return (
        <section className="flex my-1 gap-x-4 py-3 px-2 hover:bg-outline rounded-xl">
            <div className="flex gap-x-1 items-center">
                <div className="h-5 w-5">
                    <img
                        className="h-full w-full object-center object-cover"
                        src="/icons/arrow-right.png"
                    />
                </div>
                <div className="h-6 w-6">
                    <img
                        className="h-full w-full object-center object-cover"
                        src="/icons/dir-filled.png"
                    />
                </div>
            </div>
            <p>public</p>
        </section>
    );
}



export default FileNav;
