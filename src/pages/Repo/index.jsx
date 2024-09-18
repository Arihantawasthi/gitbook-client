import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import useFetchRepoObjects from "../../hooks/useFetchRepoObjects";
import LoadingScreen from "../../components/LoadingScreen";
import Repo from "./Repo";


function RepoContainer() {
    const navigate = useNavigate();
    const { repoName } = useParams("repoName");
    const { branch } = useParams("branch");
    const { data, loading, error, fetchRepoObjects } = useFetchRepoObjects(repoName, branch, "tree", "");
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
            navigate(`/repo/${repoName}/${branch}/${type}/${fullPath}`);
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
