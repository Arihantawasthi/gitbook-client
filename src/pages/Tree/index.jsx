import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import Header from "../../components/Header";
import { FileExplorerHeader } from "../../components/FileExplorer";
import { SelectMenu, Option } from "../../components/SelectMenu";
import FileNav from "./FileNav";
import RepoDesc from "../../components/RepoDesc";
import useFetchRepoObjects from "../../hooks/useFetchRepoObjects";
import { getDirPath } from "../../utils";
import LoadingScreen from "../../components/LoadingScreen";
import Error from "../../components/Error";


function Tree() {
    const [isExplorerActive, setIsExplorerActive] = useState(false);
    const navigate = useNavigate();
    const location = useLocation().pathname;
    const { repoName } = useParams("repoName");
    const { branch } = useParams("branch");
    const path = getDirPath(location);
    const [selectedBranch, setSelectedBranch] = useState(branch);
    const { data, loading, error } = useFetchRepoObjects(repoName, branch, "blob", path);

    if (loading) {
        return <LoadingScreen />
    }
    if (error) {
        return (
            <div className="h-lvh w-full flex items-center justify-center">
                <Error message={error} />
            </div>
        );
    }

    const handleBranchChange = (branch) => {
        setSelectedBranch(branch);
        navigate(`/repo/tree/${repoName}/${branch}/blob/${path}`);
    }

    const getLineNumberWidth = totalLines => {
        const digits = Math.max(3, totalLines.toString().length)
        return `${digits}ch`
    }

    return (
        <>
            <Header />
            <div className="px-4 my-10">
                <RepoDesc repoName={data.name} repoDesc={data.desc} />
                <div className="mt-6 flex justify-between items-center">
                    <div
                        className="h-8 w-8 cursor-pointer"
                        onClick={() => setIsExplorerActive(!isExplorerActive)}
                    >
                        <img
                            className="h-full w-full object-center object-cover"
                            src="/icons/menu-filled.png"
                        />
                    </div>
                    <SelectMenu selectedValue={selectedBranch}>
                        {data.branches.length > 0 && data.branches.map((item, idx) => <Option key={idx} item={item} onClick={handleBranchChange} />)}
                    </SelectMenu>
                </div>
                <div className="lg:flex lg:flex-row lg:gap-x-2">
                    {isExplorerActive &&
                        <FileNav
                            repoName={data.name}
                            selectedBranch={branch}
                            toggleNav={setIsExplorerActive}
                        />
                    }
                    <div className="mt-2 min-w-[1px]">
                        <FileExplorerHeader repo={data.name} branch={data.desc} path={path} />
                        <div className="h-screen scrollbar-hidden overflow-y-scroll">
                            {
                                data?.blob.map((item, idx) =>
                                    <CodeLine
                                        key={idx}
                                        lineNumber={idx+1}
                                        lineContent={item}
                                        lineNumberWidth={getLineNumberWidth(data.blob.length)}
                                    />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


function CodeLine({ lineNumber, lineContent, lineNumberWidth }) {
    return (
        <div className="flex font-display">
            <p className={`bg-surface-container w-[${lineNumberWidth}] text-center select-none`}>{ lineNumber }</p>
            <code className="text-sm pl-2 bg-code w-full text-wrap whitespace-break-spaces">{ lineContent }</code>
        </div>
    );
}


export default Tree;
