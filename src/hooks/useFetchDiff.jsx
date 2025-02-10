import { useEffect, useState } from "react";
import { fetchDiffRequest } from "../api/config";

const useFetchDiff = (repoName, commitHash) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchDiff = async (repoName, commitHash) => {
        try {
            const url = fetchDiffRequest(repoName, commitHash);
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Failed to fetch the commit details");
            }
            const data = await response.json();
            console.log(data);
            setData(data.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchDiff(repoName, commitHash);
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { data, loading, error };
}

export default useFetchDiff;
