import { useState } from "react";


function FileNavItem({ object, fetchNewPath }) {
    const [isFolderOpen, setIsFolderOpen] = useState(false);
    const handleClick = () => {
        setIsFolderOpen(!isFolderOpen)
        fetchNewPath(object.id, object.type, object.fullPath);
    }

    return (
        <div className="ml-6">
            <section
                className="flex -ml-6 my-1 gap-x-4 py-3 px-2 hover:bg-outline rounded-xl"
                onClick={handleClick}
            >
                <div className="flex gap-x-1 items-center">
                    <div className="h-5 w-5">
                    { object.type == "tree" &&
                        <img
                            className={`h-full w-full object-center object-cover ${isFolderOpen && "rotate-90"}`}
                            src="/icons/arrow-right.png"
                        />
                    }
                    </div>
                    <div className="h-6 w-6">
                        <img
                            className="h-full w-full object-center object-cover"
                            src={object.type == "tree" ? "/icons/dir-filled.png" : "/icons/file-filled.png"}
                        />
                    </div>
                </div>
                <p>{ object.path }</p>
            </section>
            {isFolderOpen && object.objects.map((object, idx) => <FileNavItem key={idx} object={object} fetchNewPath={fetchNewPath} />)}
        </div>
    );
}

export default FileNavItem;
