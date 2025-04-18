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
import RenderView from "./RenderView";

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

    const goBack = () => {
        if (window.history.length > 1) {
            navigate(-1);
        }
    }

    const handleBranchChange = (branch) => {
        setSelectedBranch(branch);
        navigate(`/repo/tree/${repoName}/${branch}/blob/${path}`);
    }

    return (
        <>
            <Header />
            <div className="px-4 my-10">
                <RepoDesc repoName={data.name} repoDesc={data.desc} />
                <div className="mt-6 flex justify-between items-center">
                    <div className="flex gap-x-4">
                        <div
                            className="h-8 w-8 cursor-pointer"
                            onClick={goBack}
                        >
                            <img
                                className="h-full w-full object-center object-cover"
                                src="/icons/arrow-back.png"
                            />
                        </div>
                        <div
                            className="h-8 w-8 cursor-pointer"
                            onClick={() => setIsExplorerActive(!isExplorerActive)}
                        >
                            <img
                                className="h-full w-full object-center object-cover"
                                src="/icons/menu-filled.png"
                            />
                        </div>
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
                    <div className="mt-2 min-w-[1px] w-full">
                        <FileExplorerHeader repo={data.name} branch={selectedBranch} path={path} />
                        <div className="h-screen scrollbar-hidden overflow-y-scroll">
                            <RenderView path={path} blob={data.blob} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Tree;
