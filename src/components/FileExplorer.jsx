import { Link } from "react-router-dom";


function FileExplorerHeader({ repo, branch, path }) {
    return (
        <div className="p-4 flex justify-between items-center bg-surface-container rounded-t-xl w-full">
            <p className="font-display w-2/3 overflow-hidden whitespace-nowrap overflow-ellipsis">{ path ? "./"+path : "./" }</p>
            <div className="flex gap-x-1 items-center">
                <div className="h-5 w-5">
                    <img
                        className="h-full w-full object-center object-cover"
                        src="/icons/history-filled.png"
                    />
                </div>
                <Link
                    className="underline cursor-pointer"
                    to={`/repo/commits/${repo}/${branch}`}
                >
                    Commits
                </Link>
            </div>
        </div>
    );
}


function FileExplorerObjects({ object, updateRepo }) {
    return (
        <div
            className="p-4 flex justify-between items-center border-b border-outline last:border-none last:rounded-b-xl font-display text-on-secondary cursor-pointer"
            onClick={() => updateRepo(object.type, object.full_path)}
        >
            <div className="flex gap-x-2 items-center">
                <div className="h-5 w-5">
                    <img
                        className="h-full w-full object-center object-cover"
                        src={object.type == "tree" ? `/icons/dir-filled.png` : `/icons/file-filled.png`}
                    />
                </div>
                <p className={`${object.type == "tree" ? "" : "underline"}`}>{ object.path }</p>
            </div>
            <p>{ object.size == "-" ? "" : `${object.size} B` } </p>
        </div>
    );
}


export { FileExplorerHeader, FileExplorerObjects };
