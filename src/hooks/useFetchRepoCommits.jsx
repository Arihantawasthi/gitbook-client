import { useEffect, useState } from "react";
import { fetchRepoCommitsRequest } from "../api/config";


const useFetchRepoCommits = (repoName, branch) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchRepoCommits = async (repoName, branch) => {
        try {
            console.log(branch);
            const url = fetchRepoCommitsRequest(repoName, branch);
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Failed to fetch the repository commits");
            }
            const data = await response.json();
            setData(data.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchRepoCommits(repoName, branch);
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { data, loading, error };
}


export default useFetchRepoCommits;
