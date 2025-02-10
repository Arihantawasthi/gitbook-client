import { useState, useEffect } from "react";
import { fetchRepoObjectsRequest } from "../api/config";


const useFetchRepoObjects = (repoName, branch, type, path) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const tailPath = path ? path + "/" : "";

    const fetchRepoObjects = async (repoName, branch, type, tailPath) => {
        try {
            const url = fetchRepoObjectsRequest(repoName, type, branch, tailPath);
            const response = await fetch(url);
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
