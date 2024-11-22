import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import useFetchRepoObjects from "../../hooks/useFetchRepoObjects";
import LoadingScreen from "../../components/LoadingScreen";
import Error from "../../components/Error";
import Repo from "./Repo";
import { getDirPath } from "../../utils";


function RepoContainer() {
    const navigate = useNavigate();
    const location = useLocation().pathname;
    const { repoName } = useParams("repoName");
    const { branch } = useParams("branch");
    const path = getDirPath(location);
    const { data, loading, error, fetchRepoObjects } = useFetchRepoObjects(repoName, branch, "tree", path);
    const [selectedValue, setSelectedValue] = useState(branch);

    if (loading) {
        return <LoadingScreen />;
    }
    if (error) {
        return (
            <div className="h-svh w-full flex justify-center items-center">
                <Error />
            </div>
        )
    }

    const onClick = (branch) => {
        setSelectedValue(branch);
        navigate(`/repo/metadata/${repoName}/${branch}/tree`);
        fetchRepoObjects(repoName, branch, "tree", "");
    }

    const updateRepo = (type, fullPath) => {
        if (type === 'tree') {
            navigate(`/repo/metadata/${repoName}/${branch}/${type}/${fullPath}`, {relative: "path"});
            return null;
        }
        navigate(`/repo/tree/${repoName}/${branch}/${type}/${fullPath}`, {relative: "path"});
        return null;
    }

    return (
        <Repo
            data={data}
            path={path}
            branch={selectedValue}
            onClick={onClick}
            updateRepo={updateRepo}
        />
    );
}


export default RepoContainer;
