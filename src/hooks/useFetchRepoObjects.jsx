import { useState, useEffect } from "react";


const useFetchRepoObjects = (repoName, branch, type, path) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const tailPath = path ? path + "/" : "";

    const fetchRepoObjects = async (repoName, branch, type, tailPath) => {
        try {
            const response = await fetch(`http://localhost:8000/api/v1/repo/${repoName}/${type}/metadata/${branch}/${tailPath}`);
            if (response.requestStatus != 1) {
                throw new Error("Failed to fetch the repository objects");
            }
            const data = await response.json();
            setData(data.data);
        } catch (err) {
            console.log(err.message);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchRepoObjects(repoName, branch, type, tailPath);
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [path]);


    return { data, loading, error, fetchRepoObjects};
}


export default useFetchRepoObjects;
