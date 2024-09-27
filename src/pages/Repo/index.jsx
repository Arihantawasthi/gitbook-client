import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import useFetchRepoObjects from "../../hooks/useFetchRepoObjects";
import LoadingScreen from "../../components/LoadingScreen";
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

    const onClick = (branch) => {
        setSelectedValue(branch);
        navigate(`/repo/${repoName}/${branch}`);
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
            error={error}
            branch={selectedValue}
            onClick={onClick}
            updateRepo={updateRepo}
        />
    );
}


export default RepoContainer;
