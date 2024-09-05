import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import useFetchRepoObjects from "../../hooks/useFetchRepoObjects";
import LoadingScreen from "../../components/LoadingScreen";
import Repo from "./Repo";


function RepoContainer() {
    const { repoName } = useParams("repoName");
    const { data, loading, error } = useFetchRepoObjects(repoName);
    const [selectedValue, setSelectedValue] = useState("");

    useEffect(() => {
        if (data.branches) {
            setSelectedValue(data.branches[0]);
        }
    }, [data.branches])

    if (loading) {
        return <LoadingScreen />;
    }

    return (
        <Repo
            data={data}
            error={error}
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
        />
    );
}


export default RepoContainer;
