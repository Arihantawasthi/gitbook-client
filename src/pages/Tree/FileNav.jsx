import { useNavigate } from "react-router-dom";

import LoadingScreen from "../../components/LoadingScreen";
import FileNavItem from "./FileNavItem";
import useFetchFileNavObjects from "../../hooks/useFetchFileNavObjects";


function FileNav({ repoName, selectedBranch, toggleNav }) {
    const navigate = useNavigate();
    const { data, loading, error, fetchFileNavObjects } = useFetchFileNavObjects(repoName, selectedBranch, "tree", "");

    if (loading) {
        return <LoadingScreen />
    }

    const fetchNewPath = async (objectId, type, fullPath) => {
        if (type === 'tree') {
            const tailPath = fullPath ? fullPath + "/" : "";
            await fetchFileNavObjects(repoName, selectedBranch, type, tailPath, objectId, data)
            return
        }
        navigate(`/repo/tree/${repoName}/${selectedBranch}/blob/${fullPath}`, {relative: "path"})
        return null;
    }

    return (
        <div className="filenav-open-anim fixed py-6 px-4 bottom-0 left-0 w-full h-2/3 bg-surface-container z-10 rounded-t-3xl shadow-md">
            <div className="w-full h-[90%] overflow-y-scroll">
                {data.map((object, idx) => <FileNavItem key={idx} object={object} fetchNewPath={fetchNewPath} />)}
            </div>
            <button
                className="w-full mt-4 py-3 rounded-xl bg-primary outline-0 border-0"
                onClick={() => toggleNav(false)}
            >
                Close
            </button>
        </div>
    );
}


export default FileNav;
