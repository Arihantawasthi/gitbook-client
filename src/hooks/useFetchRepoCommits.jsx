import { useEffect, useState } from "react";


const useFetchRepoCommits = (repoName, branch) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchRepoCommits = async (repoName, branch) => {
        try {
            const response = await fetch(`http://localhost:8000/api/v1/repo/logs/${repoName}/${branch}`);
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
