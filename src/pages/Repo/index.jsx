import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import useFetchRepoObjects from "../../hooks/useFetchRepoObjects";
import LoadingScreen from "../../components/LoadingScreen";
import Repo from "./Repo";


function RepoContainer() {
    const navigate = useNavigate();
    const location = useLocation().pathname;
    const { repoName } = useParams("repoName");
    const { branch } = useParams("branch");
    const getDirPath = (path) => {
        const pathSplits = path.split("/");
        if (pathSplits.length <= 5) {
            console.log("");
            return ""
        }
        const codePathSplit = pathSplits.slice(6, pathSplits.length);
        console.log(codePathSplit);
        const codePath = codePathSplit.join("/")
        console.log(codePath);
        return codePath;
    }
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
            navigate(`/repo/metadata/${repoName}/${branch}/${type}/${fullPath}`);
            fetchRepoObjects(repoName, branch, type, fullPath+"/");
        }
    }

    return (
        <Repo
            data={data}
            error={error}
            selectedValue={selectedValue}
            onClick={onClick}
            updateRepo={updateRepo}
        />
    );
}


export default RepoContainer;
