import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import Layout from "../../components/Layout";
import { FileExplorerHeader } from "../../components/FileExplorer";
import { SelectMenu, Option } from "../../components/SelectMenu";
import FileNav from "./FileNav";
import RepoDesc from "../../components/RepoDesc";
import useFetchRepoObjects from "../../hooks/useFetchRepoObjects";
import { getDirPath } from "../../utils";
import LoadingScreen from "../../components/LoadingScreen";


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

    const handleBranchChange = (branch) => {
        setSelectedBranch(branch);
        navigate(`/repo/tree/${repoName}/${branch}/blob/${path}`);
    }

    return (
        <Layout>
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
            <div className="md:flex md:flex-row-reverse md:gap-x-2">
                <div className="mt-2 w-full">
                    <FileExplorerHeader repo={data.name} branch={data.desc} path={path} />
                    <div className="h-screen scrollbar-hidden overflow-y-scroll">
                        { data?.blob.map((item, idx) => <CodeLine key={idx} lineNumber={idx+1} lineContent={item} />) }
                    </div>
                </div>
                {isExplorerActive &&
                    <FileNav
                        repoName={data.name}
                        selectedBranch={branch}
                        toggleNav={setIsExplorerActive}
                    />
                }
            </div>
        </Layout>
    );
}


function CodeLine({ lineNumber, lineContent }) {
    return (
        <div className="flex font-display">
            <p className="px-2 bg-surface-container">{ lineNumber }</p>
            <p className="pl-2 bg-[#000] w-full">{ lineContent }</p>
        </div>
    );
}


export default Tree;
