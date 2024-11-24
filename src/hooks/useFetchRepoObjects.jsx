import { useState, useEffect } from "react";


const useFetchRepoObjects = (repoName, branch, type, path) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const tailPath = path ? path + "/" : "";

    const fetchRepoObjects = async (repoName, branch, type, tailPath) => {
        try {
            const response = await fetch(`http://localhost:8000/api/v1/repo/${repoName}/${type}/metadata/${branch}/${tailPath}`);
            const data = await response.json();
            if (data.request_status != 1) {
                throw new Error(data.message)
            }
            setData(data.data);
        } catch (err) {
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
