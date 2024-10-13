import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import Layout from "../../components/Layout";
import { FileExplorerHeader } from "../../components/FileExplorer";
import { SelectMenu } from "../../components/SelectMenu";
import FileNav from "./FileNav";
import RepoDesc from "../../components/RepoDesc";
import useFetchRepoObjects from "../../hooks/useFetchRepoObjects";
import { getDirPath } from "../../utils";
import LoadingScreen from "../../components/LoadingScreen";


function Tree() {
    const [isExplorerActive, setIsExplorerActive] = useState(false);
    const location = useLocation().pathname;
    const { repoName } = useParams("repoName");
    const { branch }= useParams("branch");
    const path = getDirPath(location);
    const { data, loading, error } = useFetchRepoObjects(repoName, branch, "blob", path);

    if (loading) {
        return <LoadingScreen />
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
                <SelectMenu selectedValue={branch} />
            </div>
            <div className="mt-2">
                <FileExplorerHeader repo={data.name} branch={data.desc} path={path} />
                { data?.blob.map((item, idx) => <CodeLine key={idx} lineNumber={idx+1} lineContent={item} />) }
            </div>
            {isExplorerActive &&
                <FileNav
                    repoName={data.name}
                    selectedBranch={branch}
                    toggleNav={setIsExplorerActive}
                />
            }
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
