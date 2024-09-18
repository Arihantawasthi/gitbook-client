function FileExplorerHeader() {
    return (
        <div className="p-4 flex justify-between items-center bg-surface-container rounded-t-xl w-full">
            <p className="font-display w-2/3 overflow-hidden whitespace-nowrap overflow-ellipsis">./go/structures/sub-structures/structures-with-tree</p>
            <div className="flex gap-x-1 items-center">
                <div className="h-5 w-5">
                    <img
                        className="h-full w-full object-center object-cover"
                        src="/icons/history-filled.png"
                    />
                </div>
                <p className="underline cursor-pointer">Commits</p>
            </div>
        </div>
    );
}


function FileExplorerObjects({ object, updateRepo }) {
    return (
        <div
            className="p-4 flex justify-between items-center border-b border-outline last:border-none last:rounded-b-xl font-display text-on-secondary"
            onClick={() => updateRepo(object.type, object.fullPath)}
        >
            <div className="flex gap-x-2 items-center">
                <div className="h-5 w-5">
                    <img
                        className="h-full w-full object-center object-cover"
                        src={object.type == "tree" ? `/icons/dir-filled.png` : `/icons/file-filled.png`}
                    />
                </div>
                <p className="underline">{ object.path }</p>
            </div>
            <p>{ object.size == "-" ? "" : `${object.size} B` } </p>
        </div>
    );
}


export { FileExplorerHeader, FileExplorerObjects };
